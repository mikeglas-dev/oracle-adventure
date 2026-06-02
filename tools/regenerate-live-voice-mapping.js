const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const translationPath = path.join(root, "translation_languages.json");
const voicesPath = path.join(root, "tts_voices.json");

const defaultTranslationLanguages = [
  { code: "ar", name: "Arabic" },
  { code: "pt-BR", name: "Brazilian Portuguese" },
  { code: "fr-CA", name: "Canadian French" },
  { code: "hr", name: "Croatian" },
  { code: "cs", name: "Czech" },
  { code: "da", name: "Danish" },
  { code: "nl", name: "Dutch" },
  { code: "en", name: "English" },
  { code: "fi", name: "Finnish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "el", name: "Greek" },
  { code: "he", name: "Hebrew" },
  { code: "hu", name: "Hungarian" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "no", name: "Norwegian" },
  { code: "pl", name: "Polish" },
  { code: "pt", name: "Portuguese" },
  { code: "ro", name: "Romanian" },
  { code: "ru", name: "Russian" },
  { code: "zh-CN", name: "Simplified Chinese" },
  { code: "sk", name: "Slovak" },
  { code: "sl", name: "Slovenian" },
  { code: "es", name: "Spanish" },
  { code: "sv", name: "Swedish" },
  { code: "th", name: "Thai" },
  { code: "zh-TW", name: "Traditional Chinese" },
  { code: "tr", name: "Turkish" },
  { code: "vi", name: "Vietnamese" }
];

function runOciJson(args) {
  const result = spawnSync("oci", args, {
    cwd: root,
    encoding: "utf8",
    windowsHide: true,
    env: Object.assign({}, process.env, {
      PYTHONIOENCODING: "utf-8",
      PYTHONUTF8: "1"
    })
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(
      "oci " + args.join(" ") + " failed: " + cleanOutput(result.stderr || result.stdout)
    );
  }

  return JSON.parse(extractJson(result.stdout));
}

function extractJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end < start) {
    throw new Error("OCI command did not return JSON: " + cleanOutput(text));
  }
  return text.slice(start, end + 1);
}

function cleanOutput(text) {
  return String(text || "").replace(/\s+/g, " ").trim().slice(0, 600);
}

function normalizeLanguageCode(value) {
  return String(value || "").trim().toLowerCase();
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function mergeLanguages(primary, secondary) {
  const languages = [];
  const seen = new Set();
  primary.concat(secondary).forEach((language) => {
    const code = String(language.code || "").trim();
    if (!code || seen.has(normalizeLanguageCode(code))) {
      return;
    }
    seen.add(normalizeLanguageCode(code));
    languages.push({
      code,
      name: String(language.name || code).trim()
    });
  });
  return languages;
}

function voiceFromItem(item) {
  return {
    voiceId: String(item["voice-id"] || "").trim(),
    displayName: String(item["display-name"] || item["voice-id"] || "").trim(),
    languageCode: String(item["language-code"] || "").trim(),
    languageDescription: String(item["language-description"] || "").trim(),
    gender: String(item.gender || "").trim(),
    defaultVoice: Boolean(item["is-default-voice"]),
    sampleRateInHertz: Number(item["sample-rate-in-hertz"] || 0),
    wordsPerMinute: Number(item["words-per-minute"] || 0)
  };
}

function compareText(left, right) {
  return String(left).localeCompare(String(right), "en", { sensitivity: "base" });
}

function probeTranslationLanguage(language) {
  const targetCode = String(language.code || "").trim();
  const sourceCode = normalizeLanguageCode(targetCode) === "en" ? "es" : "en";
  const text = sourceCode === "es" ? "hola" : "oracle adventure";
  const documents = JSON.stringify([
    {
      key: "probe",
      text,
      languageCode: sourceCode
    }
  ]);

  try {
    const result = spawnSync("oci", [
      "ai",
      "language",
      "batch-language-translation",
      "--documents",
      documents,
      "--target-language-code",
      targetCode,
      "--query",
      "data.documents[0].key",
      "--raw-output"
    ], {
      cwd: root,
      encoding: "utf8",
      windowsHide: true,
      env: Object.assign({}, process.env, {
        PYTHONIOENCODING: "utf-8",
        PYTHONUTF8: "1"
      })
    });

    if (result.error) {
      throw result.error;
    }
    if (result.status !== 0) {
      throw new Error(cleanOutput(result.stderr || result.stdout));
    }

    const translated = result.stdout.trim() === "probe";
    return {
      ok: translated,
      language
    };
  } catch (error) {
    return {
      ok: false,
      language,
      error: error.message
    };
  }
}

function buildSpeechMap(translationLanguages, supportedSpeechCodes) {
  const supported = unique(supportedSpeechCodes);
  const byNormalizedCode = supported.reduce((lookup, code) => {
    lookup[normalizeLanguageCode(code)] = code;
    return lookup;
  }, {});
  const preferredByBaseLanguage = {
    en: "en-US",
    ar: "ar-SA",
    es: "es-ES",
    fr: "fr-FR",
    pt: "pt-BR",
    it: "it-IT",
    ja: "ja-JP",
    hi: "hi-IN",
    zh: "cmn-CN",
    cmn: "cmn-CN"
  };
  const aliases = {
    "zh-cn": "cmn-CN",
    "zh-tw": "cmn-CN",
    zh: "cmn-CN",
    cmn: "cmn-CN",
    "cmn-cn": "cmn-CN"
  };
  const map = {};

  function findSpeechCode(languageCode) {
    const normalized = normalizeLanguageCode(languageCode);
    if (byNormalizedCode[normalized]) {
      return byNormalizedCode[normalized];
    }
    if (aliases[normalized] && supported.includes(aliases[normalized])) {
      return aliases[normalized];
    }

    const baseLanguage = normalized.split("-")[0];
    if (aliases[baseLanguage] && supported.includes(aliases[baseLanguage])) {
      return aliases[baseLanguage];
    }
    if (preferredByBaseLanguage[baseLanguage] && supported.includes(preferredByBaseLanguage[baseLanguage])) {
      return preferredByBaseLanguage[baseLanguage];
    }

    return supported.find((code) => normalizeLanguageCode(code).split("-")[0] === baseLanguage) || null;
  }

  translationLanguages.forEach((language) => {
    const speechCode = findSpeechCode(language.code);
    if (speechCode) {
      map[language.code] = speechCode;
    }
  });

  ["zh", "cmn", "cmn-CN", "hi", "hi-IN"].forEach((languageCode) => {
    const speechCode = findSpeechCode(languageCode);
    if (speechCode) {
      map[languageCode] = speechCode;
    }
  });

  return map;
}

function writeJson(filePath, payload) {
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2) + "\n", "utf8");
}

function main() {
  const generatedAt = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
  const seed = JSON.parse(fs.readFileSync(translationPath, "utf8"));
  const seedLanguages = mergeLanguages(defaultTranslationLanguages, Array.isArray(seed.languages) ? seed.languages : []);

  const speechPayload = runOciJson([
    "speech",
    "voice",
    "list",
    "--model-name",
    "TTS_2_NATURAL",
    "--all",
    "--output",
    "json"
  ]);
  const voices = ((speechPayload.data && speechPayload.data.items) || [])
    .map(voiceFromItem)
    .filter((voice) => voice.voiceId && voice.languageCode)
    .sort((left, right) => {
      return compareText(left.languageCode, right.languageCode) || compareText(left.displayName, right.displayName);
    });
  const supportedLanguageCodes = unique(voices.map((voice) => voice.languageCode));

  const translationResults = seedLanguages.map(probeTranslationLanguage);
  const availableLanguages = translationResults
    .filter((result) => result.ok)
    .map((result) => ({
      code: String(result.language.code || "").trim(),
      name: String(result.language.name || result.language.code || "").trim()
    }))
    .filter((language) => language.code);
  const failedLanguages = translationResults
    .filter((result) => !result.ok)
    .map((result) => result.language.code);

  if (!availableLanguages.length) {
    throw new Error("No OCI translation languages passed the live probe; leaving files unchanged.");
  }

  writeJson(translationPath, {
    source: "OCI Language batch-language-translation live probe",
    generatedAt,
    languages: availableLanguages
  });

  writeJson(voicesPath, {
    modelName: "TTS_2_NATURAL",
    generatedAt,
    sourceCommand: "oci speech voice list --model-name TTS_2_NATURAL --all --output json",
    translationProbe: "oci ai language batch-language-translation",
    supportedLanguageCodes,
    translationLanguageToSpeechLanguage: buildSpeechMap(availableLanguages, supportedLanguageCodes),
    voices
  });

  console.log(
    JSON.stringify(
      {
        generatedAt,
        voices: voices.length,
        speechLanguages: supportedLanguageCodes,
        translationLanguages: availableLanguages.length,
        failedTranslationLanguages: failedLanguages
      },
      null,
      2
    )
  );
}

main();
