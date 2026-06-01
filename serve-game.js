"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");

const root = __dirname;
const port = Number(process.env.PORT || 8765);
const host = process.env.HOST || "127.0.0.1";
const configuredAgentEndpoint = process.env.OCI_GENAI_AGENT_ENDPOINT_ID || "ocid1.genaiagentendpoint.oc1.iad.amaaaaaaxzcdd4qasgtpcme244hx22er3rqfywvv3tdylhu5zbzkheq7dcvq";
const ociCliPath = process.env.OCI_CLI_PATH || "oci";
const ociProfile = process.env.OCI_CLI_PROFILE || process.env.OCI_PROFILE || "";
const ociRegion = process.env.OCI_REGION || "";
const ociAuth = process.env.OCI_CLI_AUTH || "";
const ociCompartmentId = process.env.OCI_COMPARTMENT_ID || "";
const ociChatTimeoutMs = Number(process.env.OCI_GENAI_AGENT_TIMEOUT_MS || 45000);
let resolvedAgentEndpointId = "";
let quizCache = null;
let quizCacheMtimeMs = 0;

const privateFiles = new Set([
  "questions.txt"
]);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".mp3": "audio/mpeg"
};

const server = http.createServer((request, response) => {
  try {
    const url = new URL(request.url, `http://${host}:${port}`);
    if (request.method === "POST" && url.pathname === "/api/npc-chat") {
      handleNpcChat(request, response);
      return;
    }
    if (request.method === "POST" && url.pathname === "/api/quiz-question") {
      handleQuizQuestion(request, response);
      return;
    }
    if (request.method === "POST" && url.pathname === "/api/quiz-answer") {
      handleQuizAnswer(request, response);
      return;
    }

    const pathname = decodeURIComponent(url.pathname);
    const requested = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    const filePath = path.resolve(root, requested);

    if (!isInsideRoot(filePath)) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("forbidden");
      return;
    }

    if (isPrivateFilePath(filePath)) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("not found");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("not found");
        return;
      }

      response.writeHead(200, {
        "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-store"
      });
      response.end(data);
    });
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("server error");
  }
});

function isInsideRoot(filePath) {
  return filePath === root || filePath.startsWith(root + path.sep);
}

function isPrivateFilePath(filePath) {
  return Array.from(privateFiles).some((fileName) => {
    return filePath === path.resolve(root, fileName);
  });
}

async function handleQuizQuestion(request, response) {
  try {
    const body = await readJsonBody(request);
    const attempted = new Set(Array.isArray(body.attempted) ? body.attempted.map(Number) : []);
    const questions = loadQuizQuestions();
    const remaining = questions
      .map((question, index) => Object.assign({ index }, question))
      .filter((question) => !attempted.has(question.index));

    if (!remaining.length) {
      sendJson(response, 404, { error: "No quiz questions remain" });
      return;
    }

    const item = remaining[Math.floor(Math.random() * remaining.length)];
    sendJson(response, 200, {
      index: item.index,
      question: item.question
    });
  } catch (error) {
    sendJson(response, 500, {
      error: "Quiz question failed",
      detail: String(error.message || error)
    });
  }
}

async function handleQuizAnswer(request, response) {
  try {
    const body = await readJsonBody(request);
    const index = Number(body.index);
    const answer = String(body.answer || "");
    const questions = loadQuizQuestions();
    const item = Number.isInteger(index) ? questions[index] : null;
    if (!item) {
      sendJson(response, 400, { error: "Unknown quiz question" });
      return;
    }

    sendJson(response, 200, {
      correct: isCorrectQuizAnswer(answer, item.answers)
    });
  } catch (error) {
    sendJson(response, 500, {
      error: "Quiz answer failed",
      detail: String(error.message || error)
    });
  }
}

function loadQuizQuestions() {
  const filePath = path.join(root, "questions.txt");
  const stat = fs.statSync(filePath);
  if (quizCache && quizCacheMtimeMs === stat.mtimeMs) {
    return quizCache;
  }

  quizCache = parseQuizQuestions(fs.readFileSync(filePath, "utf8"));
  quizCacheMtimeMs = stat.mtimeMs;
  return quizCache;
}

function parseQuizQuestions(text) {
  return String(text || "")
    .split(/\r?\n\s*\r?\n/)
    .map((block) => {
      const questionMatch = block.match(/Question:\s*([^\r\n]+)/i);
      const answerMatch = block.match(/Answer:\s*([^\r\n]+)/i);
      if (!questionMatch || !answerMatch) {
        return null;
      }
      const answers = parseAnswerOptions(answerMatch[1]);
      if (!answers.length) {
        return null;
      }
      return {
        question: questionMatch[1].trim(),
        answers
      };
    })
    .filter(Boolean);
}

function parseAnswerOptions(answerText) {
  return String(answerText || "")
    .split(/\s+or\s+/i)
    .map((answer) => answer.trim())
    .filter(Boolean);
}

function isCorrectQuizAnswer(answer, answers) {
  const normalized = normalizeQuizAnswer(answer);
  if (!normalized) {
    return false;
  }
  return answers.some((option) => answerOptionMatches(normalized, option));
}

function answerOptionMatches(normalizedAnswer, answerOption) {
  const expected = normalizeQuizAnswer(answerOption);
  return normalizedAnswer === expected ||
    normalizedAnswer.indexOf(expected) >= 0 ||
    (expected.indexOf(normalizedAnswer) >= 0 && normalizedAnswer.length >= 2);
}

function normalizeQuizAnswer(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

async function handleNpcChat(request, response) {
  try {
    const body = await readJsonBody(request);
    const userMessage = String(body.userMessage || "").trim();
    if (!userMessage) {
      sendJson(response, 400, { error: "userMessage is required" });
      return;
    }

    const endpointId = await getAgentEndpointId();
    const result = await callAgent(endpointId, userMessage, body.sessionId, body);
    sendJson(response, 200, result);
  } catch (error) {
    sendJson(response, 502, {
      error: "OCI Generative AI Agent chat failed",
      detail: String(error.message || error)
    });
  }
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 64 * 1024) {
        reject(new Error("request body is too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error("invalid JSON request body"));
      }
    });
    request.on("error", reject);
  });
}

async function getAgentEndpointId() {
  if (configuredAgentEndpoint.startsWith("ocid1.")) {
    return configuredAgentEndpoint;
  }
  if (resolvedAgentEndpointId) {
    return resolvedAgentEndpointId;
  }

  if (ociCompartmentId) {
    resolvedAgentEndpointId = await resolveEndpointFromCompartment();
    if (resolvedAgentEndpointId) {
      return resolvedAgentEndpointId;
    }
  }

  resolvedAgentEndpointId = await resolveEndpointFromSearch() || configuredAgentEndpoint;
  return resolvedAgentEndpointId;
}

async function resolveEndpointFromCompartment() {
  try {
    const output = await runOci([
      "generative-ai-agent",
      "agent-endpoint",
      "list",
      "--compartment-id",
      ociCompartmentId,
      "--display-name",
      configuredAgentEndpoint,
      "--lifecycle-state",
      "ACTIVE",
      "--limit",
      "1"
    ]);
    const payload = JSON.parse(output || "{}");
    const item = payload.data && payload.data.items && payload.data.items[0];
    return item && item.id ? item.id : "";
  } catch (error) {
    return "";
  }
}

async function resolveEndpointFromSearch() {
  try {
    const queryText = "query all resources where displayName = '" + configuredAgentEndpoint.replace(/'/g, "\\'") + "'";
    const output = await runOci([
      "search",
      "resource",
      "structured-search",
      "--query-text",
      queryText,
      "--limit",
      "10"
    ]);
    const payload = JSON.parse(output || "{}");
    const items = payload.data && payload.data.items ? payload.data.items : [];
    const item = items.find((entry) => {
      const displayName = entry.displayName || entry["display-name"] || "";
      const resourceType = String(entry.resourceType || entry["resource-type"] || "").toLowerCase();
      return displayName === configuredAgentEndpoint && resourceType.indexOf("agent") >= 0 && resourceType.indexOf("endpoint") >= 0;
    });
    return item ? item.identifier || item.id || "" : "";
  } catch (error) {
    return "";
  }
}

async function createAgentSession(endpointId, details) {
  const phase = details && details.phase ? String(details.phase) : "C3E";
  const keeper = details && details.keeper ? String(details.keeper) : "Keeper";
  const output = await runOci([
    "generative-ai-agent-runtime",
    "session",
    "create",
    "--agent-endpoint-id",
    endpointId,
    "--display-name",
    "Oracle Adventure - " + phase,
    "--description",
    "Oracle Adventure NPC chat session for " + keeper,
    "--output",
    "json"
  ]);
  const payload = JSON.parse(output || "{}");
  const session = payload.data || payload;
  if (!session || !session.id) {
    throw new Error("OCI Agent session was not created");
  }
  return session.id;
}

async function callAgent(endpointId, userMessage, sessionId, details) {
  const activeSessionId = sessionId || await createAgentSession(endpointId, details);
  const args = [
    "generative-ai-agent-runtime",
    "agent-endpoint",
    "chat",
    "--agent-endpoint-id",
    endpointId,
    "--user-message",
    userMessage,
    "--output",
    "json"
  ];

  args.push("--session-id", String(activeSessionId));

  const output = await runOci(args);
  const payload = JSON.parse(output || "{}");
  const answer = extractAgentText(payload);
  if (!answer) {
    throw new Error("OCI Agent returned no text");
  }
  return {
    answer: answer,
    sessionId: activeSessionId,
    raw: payload.data || payload
  };
}

function runOci(args) {
  const fullArgs = withOciGlobals(args);
  return new Promise((resolve, reject) => {
    execFile(ociCliPath, fullArgs, {
      timeout: ociChatTimeoutMs,
      windowsHide: true,
      env: Object.assign({}, process.env, {
        OCI_CLI_SUPPRESS_FILE_PERMISSIONS_WARNING: "True"
      }),
      maxBuffer: 1024 * 1024
    }, (error, stdout, stderr) => {
      if (error) {
        const detail = stderr || stdout || error.message;
        reject(new Error(detail.trim()));
        return;
      }
      resolve(stdout);
    });
  });
}

function withOciGlobals(args) {
  const fullArgs = args.slice();
  if (ociProfile) {
    fullArgs.push("--profile", ociProfile);
  }
  if (ociRegion) {
    fullArgs.push("--region", ociRegion);
  }
  if (ociAuth) {
    fullArgs.push("--auth", ociAuth);
  }
  return fullArgs;
}

function extractAgentText(payload) {
  const data = payload && payload.data ? payload.data : payload;
  const content = data && data.message && data.message.content;
  if (typeof content === "string") {
    return content.trim();
  }
  if (content && typeof content.text === "string") {
    return content.text.trim();
  }
  if (Array.isArray(content)) {
    const text = content.map((item) => {
      if (typeof item === "string") {
        return item;
      }
      return item && typeof item.text === "string" ? item.text : "";
    }).filter(Boolean).join("\n");
    if (text.trim()) {
      return text.trim();
    }
  }
  return "";
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

server.listen(port, host, () => {
  console.log(`Oracle Adventure running at http://${host}:${port}/`);
});
