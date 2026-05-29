(function () {
  "use strict";

  const PHASES = [
    {
      key: "qualify",
      name: "Qualify",
      color: "#f0c64a",
      checks: ["account", "technical", "customer", "strategy", "influence", "stakeholder", "plan", "champion"],
      hint: "Mention the technical account plan, customer context, account strategy, or influence map."
    },
    {
      key: "develop",
      name: "Develop",
      color: "#69c7e6",
      checks: ["pov", "vision", "problem", "solution", "why oci", "press", "customer", "value"],
      hint: "Mention the POV, mock press release, customer vision, problem, solution, or Why OCI."
    },
    {
      key: "discover",
      name: "Discover",
      color: "#8fd45d",
      checks: ["current state", "risk", "architecture", "inventory", "cost", "resource", "gap", "workload"],
      hint: "Mention current state, architecture, inventory, risk, gaps, resources, or workload evaluation."
    },
    {
      key: "design",
      name: "Design",
      color: "#d65f4c",
      checks: ["future state", "architecture", "proposal", "bom", "economic", "transition", "governance", "plan"],
      hint: "Mention future-state architecture, the technical proposal, BOM, economics, transition, or governance."
    },
    {
      key: "prove",
      name: "Prove",
      color: "#bb74d9",
      checks: ["poc", "pilot", "migration", "risk", "jep", "success", "criteria", "validate", "ramp"],
      hint: "Mention POC, pilot-to-production, migration risk, success criteria, JEP, validation, or ramp."
    },
    {
      key: "win",
      name: "Win",
      color: "#f28a37",
      checks: ["retrospective", "consumption", "outcome", "lesson", "competitive", "feedback", "ramp", "win"],
      hint: "Mention the retrospective, consumption ramp, outcome, customer feedback, or lessons learned."
    },
    {
      key: "deploy",
      name: "Deploy",
      color: "#75a9ff",
      checks: ["roadmap", "go-live", "consumption", "project", "milestone", "footprint", "future", "deploy"],
      hint: "Mention the technical roadmap, go-live plan, consumption forecast, projects, milestones, or future vision."
    },
    {
      key: "support",
      name: "Support",
      color: "#e5dd73",
      checks: ["support", "qbr", "health", "enablement", "finops", "optimization", "capacity", "cadence"],
      hint: "Mention support cadence, QBRs, health checks, enablement, optimization, FinOps, or capacity."
    },
    {
      key: "grow",
      name: "Grow",
      color: "#f08fb0",
      checks: ["grow", "innovation", "long-range", "expand", "reference", "training", "forecast", "opportunity"],
      hint: "Mention growth, long-range architecture, innovation, references, training, forecasting, or new opportunities."
    }
  ];

  const TRAP_PHASES = [
    { key: "gcp", name: "GCP", color: "#b7b7b7", hint: "This is not part of the C3E path." },
    { key: "azure", name: "Azure", color: "#5aa2ff", hint: "This is not part of the C3E path." },
    { key: "aws", name: "AWS", color: "#ffb13b", hint: "This is not part of the C3E path." }
  ];

  const NPC_COUNT = PHASES.length + TRAP_PHASES.length;

  const REQUIRED_FILES = [
    "help.txt",
    "winner.txt",
    "NPCs.txt",
    "zork_locations.md",
    "c3e_sharepoint_spider.md"
  ];
  const KNOWLEDGE_SCROLL = "the scroll of all C3E knowledge";
  const WINNER_HELP_URL = "https://orasenatdoracledigital05.objectstorage.us-ashburn-1.oci.customer-oci.com/p/PGtiXo400T1qwQp9LeGRpYFRfIKAHndxp2qc26xrCgw4X76O5FRF6NfOXi1l8FPF/n/orasenatdoracledigital05/b/bucket-winner/o/oracle-adventure-winner/winner-help.html";
  const WINNER_REDIRECT_DELAY_MS = 6000;
  const LOSER_HELP_URL = "https://orasenatdoracledigital05.objectstorage.us-ashburn-1.oci.customer-oci.com/p/rkrab0IwKFCUUUDkA_gL9beKcB6wvljCmDHaIA5TJNGzM6J1nq29k8mCQ1s2_iqL/n/orasenatdoracledigital05/b/bucket-winner/o/oracle-adventure-loser/loser-help.html";
  const LOSER_REDIRECT_DELAY_MS = 6000;

  const STOPWORDS = new Set([
    "about", "above", "after", "again", "against", "also", "because", "been", "before", "being", "between",
    "both", "build", "could", "customer", "customers", "define", "done", "each", "from", "have", "help",
    "include", "into", "more", "need", "needs", "only", "oracle", "phase", "should", "some", "state",
    "that", "their", "them", "then", "there", "these", "they", "this", "through", "with", "will", "work"
  ]);

  const PHASE_NOTE_HEADINGS = {
    Qualify: "### 1 - Qualify",
    Develop: "### 2 - Develop",
    Discover: "### 3 - Discover",
    Design: "### 4 - Design",
    Prove: "### 5 - Prove",
    Win: "### 6 - Win",
    Deploy: "### 7 - Deploy",
    Support: "### 8+9 - Support & Grow",
    Grow: "### 8+9 - Support & Grow"
  };

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const boardWrap = document.getElementById("boardWrap");
  const playerBubble = document.getElementById("playerBubble");
  const npcBubble = document.getElementById("npcBubble");
  const phaseMeter = document.getElementById("phaseMeter");
  const locationMeter = document.getElementById("locationMeter");
  const currentPhase = document.getElementById("currentPhase");
  const currentKeeper = document.getElementById("currentKeeper");
  const phaseProgress = document.getElementById("phaseProgress");
  const questLog = document.getElementById("questLog");
  const speechForm = document.getElementById("speechForm");
  const speechInput = document.getElementById("speechInput");
  const speakButton = document.getElementById("speakButton");
  const helpButton = document.getElementById("helpButton");
  const winnerModal = document.getElementById("winnerModal");
  const winnerText = document.getElementById("winnerText");
  const restartButton = document.getElementById("restartButton");
  const winSound = document.getElementById("winSound");
  const lostModal = document.getElementById("lostModal");
  const lostText = document.getElementById("lostText");
  const lostRestartButton = document.getElementById("lostRestartButton");
  const lostSound = document.getElementById("lostSound");

  const map = {
    width: 1000,
    height: 600,
    center: { id: "center", x: 500, y: 300 },
    radius: 220
  };

  const state = {
    helpText: "",
    winnerText: "",
    lostText: "",
    c3eSource: "",
    npcNames: [],
    zorkLocations: [],
    npcs: [],
    completed: new Set(),
    currentPhaseIndex: 0,
    activeNpc: null,
    hoverNpc: null,
    conversationMode: "question",
    waitingForNpc: false,
    agentUnavailable: false,
    agentSessionIds: {},
    moveQueue: [],
    won: false,
    lost: false,
    winnerRedirectTimer: null,
    loserRedirectTimer: null,
    player: {
      x: map.center.x,
      y: map.center.y,
      nodeId: "center",
      moving: false,
      from: null,
      to: null,
      startTime: 0,
      duration: 850,
      step: 0,
      lastStepSound: 0
    },
    lastFrame: 0,
    booted: false
  };

  function fetchText(path) {
    return fetch(path, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error(path + " failed");
        }
        return response.text();
      })
      .catch(function () {
        return null;
      });
  }

  function boot() {
    Promise.all([
      fetchText("help.txt"),
      fetchText("winner.txt"),
      fetchText("NPCs.txt"),
      fetchText("zork_locations.md"),
      fetchText("c3e_sharepoint_spider.md"),
      fetchText("lost.txt")
    ]).then(function (values) {
      const missing = REQUIRED_FILES.filter(function (_file, index) {
        return !values[index] || !values[index].trim();
      });

      state.helpText = values[0] ? values[0].trim() : "";
      state.winnerText = values[1] ? values[1].trim() : "";
      state.npcNames = values[2] ? parseLineList(values[2]) : [];
      state.zorkLocations = values[3] ? parseLocations(values[3]) : [];
      state.c3eSource = values[4] ? values[4].trim() : "";
      state.lostText = values[5] ? values[5].trim() : "";

      if (state.npcNames.length < NPC_COUNT) {
        missing.push("NPCs.txt needs at least " + NPC_COUNT + " names");
      }
      if (state.zorkLocations.length < NPC_COUNT) {
        missing.push("zork_locations.md needs at least " + NPC_COUNT + " locations");
      }

      if (missing.length) {
        showBootError(missing);
        return;
      }

      resetGame();
      bindEvents();
      state.booted = true;
      requestAnimationFrame(loop);
    });
  }

  function bindEvents() {
    canvas.addEventListener("click", function (event) {
      const point = canvasPoint(event);
      const npc = nearestNpc(point.x, point.y, 42);
      if (npc) {
        queueMoveTo(npc.id);
      }
      canvas.focus();
    });

    canvas.addEventListener("mousemove", function (event) {
      const point = canvasPoint(event);
      state.hoverNpc = nearestNpc(point.x, point.y, 42);
      canvas.style.cursor = state.hoverNpc ? "pointer" : "default";
    });

    canvas.addEventListener("mouseleave", function () {
      state.hoverNpc = null;
      canvas.style.cursor = "default";
    });

    speechForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submitSpeech();
    });

    helpButton.addEventListener("click", function () {
      respondWithHelp();
    });

    restartButton.addEventListener("click", function () {
      resetGame();
      winnerModal.classList.add("hidden");
      canvas.focus();
    });

    lostRestartButton.addEventListener("click", function () {
      resetGame();
      lostModal.classList.add("hidden");
      canvas.focus();
    });

    window.addEventListener("resize", function () {
      positionBubbles();
    });
  }

  function canvasPoint(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  function parseLocations(text) {
    const sectionStart = text.indexOf("## Alphabetical location list");
    const sectionText = sectionStart >= 0 ? text.slice(sectionStart) : text;
    const sectionEnd = sectionText.indexOf("\n## Notes");
    const listText = sectionEnd >= 0 ? sectionText.slice(0, sectionEnd) : sectionText;
    return parseLineList(listText);
  }

  function parseLineList(text) {
    const parsed = text.split(/\r?\n/)
      .map(function (line) { return line.trim(); })
      .filter(function (line) {
        return line && line.charAt(0) !== "#";
      })
      .map(function (line) {
        return line.replace(/^- /, "").trim();
      })
      .filter(Boolean);
    return parsed;
  }

  function showBootError(missing) {
    drawBackground(0);
    drawText("QUEST CANNOT BEGIN", map.center.x, map.center.y - 24, "#f1c74a", 24, "center");
    drawText("Serve the folder locally and provide:", map.center.x, map.center.y + 10, "#fff3bc", 14, "center");
    missing.slice(0, 5).forEach(function (item, index) {
      drawText(item, map.center.x, map.center.y + 38 + index * 20, "#d14d3d", 14, "center");
    });
    currentPhase.textContent = "Missing files";
    currentKeeper.textContent = missing.join(", ");
    phaseMeter.textContent = "No quest";
    locationMeter.textContent = "Resource gate";
    addLog("System", "Cannot begin. Missing required file data: " + missing.join(", "));
  }

  function resetGame() {
    clearEndRedirects();
    state.completed = new Set();
    state.currentPhaseIndex = 0;
    state.activeNpc = null;
    state.hoverNpc = null;
    state.conversationMode = "question";
    state.agentUnavailable = false;
    state.agentSessionIds = {};
    state.moveQueue = [];
    state.won = false;
    state.lost = false;
    state.player.x = map.center.x;
    state.player.y = map.center.y;
    state.player.nodeId = "center";
    state.player.moving = false;
    state.player.lastStepSound = 0;
    state.npcs = createNpcs();
    questLog.innerHTML = "";
    winnerModal.classList.add("hidden");
    lostModal.classList.add("hidden");
    const target = currentTarget();
    addLog("System", "The wheel path reforms. Seek " + target.label + " at " + target.location + ".");
    hideBubble(playerBubble);
    showNpcBubble("The quest begins at the hub. " + target.keeper + " waits at " + target.location + ".", map.center.x, map.center.y - 20);
    updateHud();
    draw();
  }

  function createNpcs() {
    const specs = PHASES.map(function (phase, index) {
      return { phase: phase, phaseIndex: index, isTrap: false };
    }).concat(TRAP_PHASES.map(function (phase) {
      return { phase: phase, phaseIndex: null, isTrap: true };
    }));
    const wheelSpecs = shuffle(specs.slice());
    const locations = shuffle(state.zorkLocations.slice()).slice(0, wheelSpecs.length);
    const names = shuffle(state.npcNames.slice()).slice(0, wheelSpecs.length);
    return wheelSpecs.map(function (spec, index) {
      const angle = -Math.PI / 2 + index * (Math.PI * 2 / wheelSpecs.length);
      const x = map.center.x + Math.cos(angle) * map.radius;
      const y = map.center.y + Math.sin(angle) * map.radius;
      const keeper = names[index];
      return {
        id: "npc-" + index,
        ringIndex: index,
        phaseIndex: spec.phaseIndex,
        isTrap: spec.isTrap,
        phase: spec.phase,
        keeper: keeper,
        label: keeper + " (Keeper of the " + spec.phase.name + " knowledge)",
        location: locations[index],
        x: x,
        y: y,
        angle: angle
      };
    });
  }

  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = randomInt(i + 1);
      const tmp = items[i];
      items[i] = items[j];
      items[j] = tmp;
    }
    return items;
  }

  function randomInt(max) {
    if (window.crypto && window.crypto.getRandomValues) {
      const arr = new Uint32Array(1);
      window.crypto.getRandomValues(arr);
      return arr[0] % max;
    }
    return Math.floor(Math.random() * max);
  }

  function currentTarget() {
    return state.npcs.find(function (npc) {
      return !npc.isTrap && npc.phaseIndex === state.currentPhaseIndex;
    });
  }

  function updateHud() {
    const target = currentTarget();
    const currentNode = getNode(state.player.nodeId);
    phaseMeter.textContent = "Phase " + Math.min(state.currentPhaseIndex + 1, PHASES.length) + " / " + PHASES.length;
    locationMeter.textContent = currentNode && currentNode.location ? currentNode.location : "Hub";
    currentPhase.textContent = target ? target.phase.name : "Complete";
    currentKeeper.textContent = target ? target.label + " at " + target.location : "All keepers have yielded.";
    phaseProgress.innerHTML = "";
    PHASES.forEach(function (phase, index) {
      const dot = document.createElement("div");
      dot.className = "progress-dot";
      dot.title = phase.name;
      if (state.completed.has(index)) {
        dot.classList.add("done");
      } else if (index === state.currentPhaseIndex) {
        dot.classList.add("current");
      }
      phaseProgress.appendChild(dot);
    });
  }

  function loop(time) {
    const delta = time - (state.lastFrame || time);
    state.lastFrame = time;
    updatePlayer(time, delta);
    draw(time);
    requestAnimationFrame(loop);
  }

  function updatePlayer(time) {
    if (!state.player.moving) {
      return;
    }
    const elapsed = time - state.player.startTime;
    const t = Math.min(1, elapsed / state.player.duration);
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    state.player.x = lerp(state.player.from.x, state.player.to.x, eased);
    state.player.y = lerp(state.player.from.y, state.player.to.y, eased);
    state.player.step = Math.floor(time / 120) % 2;
    if (time - state.player.lastStepSound > 180) {
      state.player.lastStepSound = time;
      playTone("move");
    }
    positionBubbles();
    if (t >= 1) {
      state.player.moving = false;
      state.player.nodeId = state.player.to.id;
      state.player.x = state.player.to.x;
      state.player.y = state.player.to.y;
      if (state.moveQueue.length && !state.lost) {
        startMoveSegment(state.moveQueue.shift());
      } else {
        onArrive(state.player.nodeId);
        updateHud();
      }
    }
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function queueMoveTo(nodeId) {
    if (!state.booted || state.player.moving || state.won || state.lost || nodeId === state.player.nodeId) {
      return;
    }
    const route = pathToNode(state.player.nodeId, nodeId);
    if (route.length < 2) {
      playTone("deny");
      return;
    }
    state.moveQueue = route.slice(1);
    state.activeNpc = null;
    state.conversationMode = "question";
    hideBubble(playerBubble);
    hideBubble(npcBubble);
    startMoveSegment(state.moveQueue.shift());
  }

  function pathToNode(fromId, toId) {
    if (fromId === toId) {
      return [fromId];
    }
    if (areConnected(fromId, toId)) {
      return [fromId, toId];
    }
    if (fromId === "center" || toId === "center") {
      return [fromId, toId];
    }
    return [fromId, "center", toId];
  }

  function areConnected(fromId, toId) {
    return connectedNodes(fromId).some(function (node) {
      return node.id === toId;
    });
  }

  function startMoveSegment(nodeId) {
    if (nodeId === state.player.nodeId) {
      return;
    }
    const from = getNode(state.player.nodeId);
    const to = getNode(nodeId);
    if (!from || !to) {
      return;
    }
    if (!areConnected(state.player.nodeId, nodeId)) {
      playTone("deny");
      state.moveQueue = [];
      return;
    }
    state.player.from = { id: from.id, x: from.x, y: from.y };
    state.player.to = { id: to.id, x: to.x, y: to.y };
    state.player.startTime = performance.now();
    state.player.duration = Math.max(550, distance(from, to) * 3.1);
    state.player.moving = true;
    playTone("move");
  }

  function onArrive(nodeId) {
    if (nodeId === "center") {
      state.activeNpc = null;
      addLog("System", "You stand at the hub of the wheel path.");
      const target = currentTarget();
      showNpcBubble("The wheel waits. The next keeper is at " + target.location + ".", map.center.x, map.center.y - 18);
      return;
    }
    const npc = state.npcs.find(function (item) { return item.id === nodeId; });
    state.activeNpc = npc;
    if (!npc) {
      return;
    }
    state.conversationMode = "question";
    if (npc.isTrap) {
      loseGame(npc);
      return;
    }
    if (npc.phaseIndex === state.currentPhaseIndex) {
      const text = npc.label + " watches from " + npc.location + ". Ask of " + npc.phase.name + ".";
      addLog(npc.keeper, text);
      showNpcBubble(text, npc.x, npc.y);
    } else if (npc.phaseIndex < state.currentPhaseIndex) {
      const target = currentTarget();
      const text = "You have already passed " + npc.phase.name + ". Continue to " + target.label + " at " + target.location + ".";
      addLog(npc.keeper, text);
      showNpcBubble(text, npc.x, npc.y);
    } else {
      const needed = currentTarget();
      const text = "Not yet. First speak with " + needed.label + " at " + needed.location + ".";
      addLog(npc.keeper, text);
      showNpcBubble(text, npc.x, npc.y);
      playTone("deny");
    }
  }

  function connectedNodes(nodeId) {
    if (nodeId === "center") {
      return state.npcs;
    }
    const index = Number(nodeId.replace("npc-", ""));
    const prev = state.npcs[(index - 1 + state.npcs.length) % state.npcs.length];
    const next = state.npcs[(index + 1) % state.npcs.length];
    return [map.center, prev, next];
  }

  function getNode(nodeId) {
    if (nodeId === "center") {
      return map.center;
    }
    return state.npcs.find(function (npc) { return npc.id === nodeId; });
  }

  function distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function nearestNpc(x, y, maxDistance) {
    let best = null;
    let bestDistance = maxDistance;
    state.npcs.forEach(function (npc) {
      const d = distance({ x: x, y: y }, npc);
      if (d < bestDistance) {
        best = npc;
        bestDistance = d;
      }
    });
    return best;
  }

  async function submitSpeech() {
    if (state.waitingForNpc) {
      return;
    }
    const text = speechInput.value.trim();
    if (!text) {
      return;
    }
    speechInput.value = "";
    showPlayerBubble(text);
    addLog("Player", text);

    if (isGotoWinCommand(text)) {
      enterGotoWinFlow();
      return;
    }

    if (isGogoLostCommand(text)) {
      enterGogoLostFlow();
      return;
    }

    if (/^help\b/i.test(text) || text.trim() === "?") {
      respondWithHelp();
      return;
    }

    if (state.won || state.lost) {
      const response = "This quest has ended. Start a new quest to speak again.";
      showNpcBubble(response, state.player.x, state.player.y - 18);
      addLog("System", response);
      playTone("deny");
      return;
    }

    const npc = state.activeNpc;
    if (!npc || state.player.nodeId === "center") {
      const response = "No keeper is close enough to hear. Walk the wheel path to a keeper.";
      showNpcBubble(response, map.center.x, map.center.y - 18);
      addLog("System", response);
      playTone("deny");
      return;
    }

    if (npc.isTrap) {
      loseGame(npc);
      return;
    }

    if (npc.phaseIndex !== state.currentPhaseIndex) {
      const needed = currentTarget();
      const response = "The order is the order. Seek " + needed.label + " at " + needed.location + ".";
      showNpcBubble(response, npc.x, npc.y);
      addLog(npc.keeper, response);
      playTone("deny");
      return;
    }

    if (state.conversationMode === "test") {
      if (wantsMoreInfo(text)) {
        await provideMoreInfo(npc, text);
        return;
      }
      evaluateReflection(npc, text);
      return;
    }

    if (state.conversationMode === "ready") {
      await handleReadiness(npc, text);
      return;
    }

    setNpcBusy(true);
    showNpcBubble(npc.keeper + " consults the OCI Generative AI Agent...", npc.x, npc.y);
    const answer = await answerQuestion(npc, text);
    const response = answer + readinessPrompt();
    state.conversationMode = "ready";
    showNpcBubble(response, npc.x, npc.y);
    addLog(npc.keeper, response);
    playTone("speak");
    setNpcBusy(false);
  }

  async function handleReadiness(npc, text) {
    if (isReadyForTest(text)) {
      const response = "Then take the test. What did you learn about " + npc.phase.name + ", and what task will you do with your customer?";
      state.conversationMode = "test";
      showNpcBubble(response, npc.x, npc.y);
      addLog(npc.keeper, response);
      playTone("speak");
      return;
    }

    if (!looksLikeQuestion(text) && looksLikePhaseAnswer(npc, text)) {
      evaluateReflection(npc, text);
      return;
    }

    if (wantsMoreInfo(text)) {
      await provideMoreInfo(npc, text);
      return;
    }

    setNpcBusy(true);
    showNpcBubble(npc.keeper + " consults the OCI Generative AI Agent...", npc.x, npc.y);
    const answer = await answerQuestion(npc, text);
    const response = answer + readinessPrompt();
    state.conversationMode = "ready";
    showNpcBubble(response, npc.x, npc.y);
    addLog(npc.keeper, response);
    playTone("speak");
    setNpcBusy(false);
  }

  async function provideMoreInfo(npc, text) {
    setNpcBusy(true);
    showNpcBubble(npc.keeper + " consults the OCI Generative AI Agent...", npc.x, npc.y);
    const answer = await answerQuestion(npc, moreInfoQuery(npc, text));
    const response = answer + readinessPrompt();
    state.conversationMode = "ready";
    showNpcBubble(response, npc.x, npc.y);
    addLog(npc.keeper, response);
    playTone("speak");
    setNpcBusy(false);
  }

  function setNpcBusy(isBusy) {
    state.waitingForNpc = isBusy;
    speechInput.disabled = isBusy;
    speakButton.disabled = isBusy;
    speechInput.placeholder = isBusy ? "The keeper is consulting OCI..." : "Ask or answer the keeper";
    if (!isBusy) {
      speechInput.focus();
    }
  }

  function readinessPrompt() {
    return "\n\nDo you need more information, or are you ready to take the test?";
  }

  function isReadyForTest(text) {
    return /^(y|yes|ready|test|take test|take the test|i am ready|i'm ready)\b/i.test(text.trim());
  }

  function wantsMoreInfo(text) {
    return /\b(no|not yet|more|info|information|ask|question|explain|detail|details)\b/i.test(text);
  }

  function moreInfoQuery(npc, text) {
    if (isGenericMoreInfo(text)) {
      return "more information about " + npc.phase.name + " activities tasks required outputs customer actions";
    }
    return text;
  }

  function isGenericMoreInfo(text) {
    const normalized = normalizeText(text);
    return /^(no|not yet|more|more info|more information|more detail|more details|info|information|details|detail|explain|ask away|i need more|need more|i need more detail|i need more details|need more detail|need more details|can you provide more detail|can you provide more details)$/.test(normalized);
  }

  function looksLikeQuestion(text) {
    return /\?/.test(text) || /^(what|why|how|when|where|who|which|can|could|should|tell|explain|show|give|describe)\b/i.test(text.trim());
  }

  function isGotoWinCommand(text) {
    return /^goto:\s*win$/i.test(text.trim());
  }

  function isGogoLostCommand(text) {
    return /^goto:\s*lost$/i.test(text.trim());
  }

  function looksLikePhaseAnswer(npc, text) {
    const normalized = normalizeText(text);
    return matchesPhaseTask(normalized, phaseTasks(npc.phase.name));
  }

  function respondWithHelp() {
    const x = state.activeNpc ? state.activeNpc.x : map.center.x;
    const y = state.activeNpc ? state.activeNpc.y : map.center.y - 18;
    showNpcBubble(state.helpText, x, y);
    addLog("Help", state.helpText);
    playTone("speak");
  }

  async function answerQuestion(npc, question) {
    const agentAnswer = await answerQuestionWithAgent(npc, question);
    if (agentAnswer) {
      return agentAnswer;
    }
    return answerQuestionLocally(npc, question);
  }

  async function answerQuestionWithAgent(npc, question) {
    if (state.agentUnavailable) {
      return "";
    }
    try {
      const response = await fetch("/api/npc-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phase: npc.phase.name,
          keeper: npc.keeper,
          sessionId: state.agentSessionIds[npc.phase.key] || "",
          userMessage: buildAgentPrompt(npc, question)
        })
      });

      if (!response.ok) {
        state.agentUnavailable = true;
        throw new Error("agent endpoint returned " + response.status);
      }

      const payload = await response.json();
      if (payload && payload.sessionId) {
        state.agentSessionIds[npc.phase.key] = payload.sessionId;
      }
      const answer = payload && payload.answer ? cleanAgentAnswer(payload.answer) : "";
      return answer ? npc.keeper + " consults the C3E scrolls: " + answer : "";
    } catch (error) {
      state.agentUnavailable = true;
      console.warn("OCI Generative AI Agent unavailable; using local C3E source.", error);
      return "";
    }
  }

  function buildAgentPrompt(npc, question) {
    const phaseName = npc.phase.name;
    const context = agentContextForQuestion(phaseName, question);
    return [
      "You are " + npc.label + " in the 8-bit game Oracle Adventure.",
      "Answer the player's question for the " + phaseName + " phase.",
      "Use only the C3E source excerpt below. If the excerpt does not contain the answer, say the scroll does not contain that detail.",
      "Keep the answer concise, practical, and in character. Do not ask whether the player is ready for the test; the game will ask that after your answer.",
      "C3E source excerpt:",
      context,
      "Player question:",
      question
    ].join("\n\n").slice(0, 12000);
  }

  function agentContextForQuestion(phaseName, question) {
    const queryTokens = tokenize(question + " " + phaseName);
    const detailMode = wantsArtifactDetail(question) || mentionsSpecificTaskOrArtifact(question, phaseName);
    const chunks = detailMode ? getArtifactDetailChunks(phaseName, question) : getSourceChunks(phaseName);
    if (!chunks.length) {
      return "No matching excerpt was found in c3e_sharepoint_spider.md for " + phaseName + ".";
    }
    const ranked = rankChunks(chunks, queryTokens);
    const selected = ranked.filter(function (item) { return item.score > 0; }).slice(0, 5);
    const useful = selected.length ? selected : ranked.slice(0, 5);
    return useful.map(function (item) {
      return "- " + cleanChunk(item.chunk);
    }).join("\n").slice(0, 9000);
  }

  function cleanAgentAnswer(answer) {
    return String(answer)
      .replace(/\s+/g, " ")
      .replace(/^assistant:\s*/i, "")
      .trim();
  }

  function answerQuestionLocally(npc, question) {
    const phaseName = npc.phase.name;
    const queryTokens = tokenize(question + " " + phaseName);
    if (wantsArtifactDetail(question) || mentionsSpecificTaskOrArtifact(question, phaseName)) {
      const artifactChunks = getArtifactDetailChunks(phaseName, question);
      if (artifactChunks.length) {
        const rankedArtifacts = rankChunks(artifactChunks, queryTokens);
        const selectedArtifacts = rankedArtifacts.filter(function (item) { return item.score > 0; }).slice(0, 3);
        const body = (selectedArtifacts.length ? selectedArtifacts : rankedArtifacts.slice(0, 3)).map(function (item) {
          return cleanChunk(item.chunk);
        }).join(" ");
        return npc.keeper + " consults " + KNOWLEDGE_SCROLL + ": " + body;
      }
    }

    const chunks = getSourceChunks(phaseName);
    if (!chunks.length) {
      return "The keeper opens " + KNOWLEDGE_SCROLL + ", but finds no usable " + phaseName + " passage. Serve the game locally with c3e_sharepoint_spider.md beside index.html.";
    }
    const ranked = rankChunks(chunks, queryTokens);
    const selected = ranked.filter(function (item) { return item.score > 0; }).slice(0, 2);
    const body = (selected.length ? selected : ranked.slice(0, 2)).map(function (item) {
      return cleanChunk(item.chunk);
    }).join(" ");
    return npc.keeper + " consults " + KNOWLEDGE_SCROLL + ": " + body;
  }

  function wantsArtifactDetail(question) {
    return /\b(more|detail|details|artifact|artifacts|task|tasks|template|guide|output|outputs|deliverable|deliverables)\b/i.test(question);
  }

  function mentionsSpecificTaskOrArtifact(question, phaseName) {
    const normalized = normalizeText(question);
    return phaseDetailItems(phaseName).some(function (item) {
      return taskMatchesAnswer(normalized, item);
    });
  }

  function phaseDetailItems(phaseName) {
    const items = phaseTasks(phaseName).slice();
    getPhaseArtifactRows(phaseName).forEach(function (cells) {
      items.push(cells[0]);
      items.push(cells[0].replace(/\.[^.]+$/, "").replace(/[-_]/g, " "));
    });
    const outputLine = requiredOutputLine(phaseName);
    if (outputLine) {
      const cells = parseMarkdownRow(outputLine);
      const outputs = cells && cells[1] ? cells[1] : "";
      outputs.split(/,|\band\b/i).forEach(function (output) {
        if (output.trim()) {
          items.push(output.trim());
        }
      });
    }
    return Array.from(new Set(items));
  }

  function rankChunks(chunks, queryTokens) {
    return chunks
      .map(function (chunk) {
        return {
          chunk: chunk,
          score: scoreChunk(chunk, queryTokens)
        };
      })
      .sort(function (a, b) { return b.score - a.score; });
  }

  function getSourceChunks(phaseName) {
    const source = state.c3eSource;
    if (!source) {
      return [];
    }
    const sections = [];
    const noteSection = extractSection(source, PHASE_NOTE_HEADINGS[phaseName]);
    if (noteSection) {
      sections.push(noteSection);
    }
    const exactSection = extractSection(source, "### " + phaseName);
    if (exactSection) {
      sections.push(exactSection);
    }
    if (phaseName === "Support" || phaseName === "Grow") {
      const sg = extractSection(source, "### 8+9 - Support & Grow");
      const sgActivities = extractSection(source, "### Support & Grow");
      if (sg) {
        sections.push(sg);
      }
      if (sgActivities) {
        sections.push(sgActivities);
      }
    }
    const tableLine = source.split(/\r?\n/).filter(function (line) {
      return line.indexOf("| " + phaseName + " |") === 0;
    }).join("\n");
    if (tableLine) {
      sections.push(tableLine);
    }
    const combined = sections.join("\n").trim();
    return combined ? splitChunks(combined) : [];
  }

  function getArtifactDetailChunks(phaseName, question) {
    const source = state.c3eSource;
    if (!source) {
      return [];
    }
    const chunks = [];
    getPhaseArtifactRows(phaseName).forEach(function (cells) {
      chunks.push("Artifact detail: " + cells[0] + " (" + cells[2] + ", " + cells[1] + ") - " + cells[3]);
    });

    const outputLine = requiredOutputLine(phaseName);
    if (outputLine) {
      const outputCells = parseMarkdownRow(outputLine);
      if (outputCells && outputCells[1]) {
        chunks.push("Required output detail: " + outputCells[0] + " requires " + outputCells[1]);
      }
    }

    phaseTasks(phaseName).forEach(function (task) {
      chunks.push("Task detail: " + task);
    });

    getPrimaryArtifactNotes(phaseName).forEach(function (note) {
      chunks.push("Artifact note: " + note);
    });

    if (phaseName === "Support" || phaseName === "Grow") {
      const supportExamples = extractSection(source, "### Support & Grow Examples");
      splitChunks(supportExamples).forEach(function (chunk) {
        chunks.push("Artifact example: " + chunk);
      });
    }

    const uniqueChunks = Array.from(new Set(chunks));
    if (question && mentionsSpecificTaskOrArtifact(question, phaseName)) {
      const normalizedQuestion = normalizeText(question);
      const matchedItems = phaseDetailItems(phaseName)
        .filter(function (item) {
          return taskMatchesAnswer(normalizedQuestion, item);
        })
        .map(normalizeTaskName);
      const directChunks = uniqueChunks.filter(function (chunk) {
        const normalizedChunk = normalizeText(chunk);
        return matchedItems.some(function (item) {
          return item && normalizedChunk.indexOf(item) >= 0;
        });
      });
      if (directChunks.length) {
        return directChunks;
      }
    }
    return uniqueChunks;
  }

  function getPhaseArtifactRows(phaseName) {
    const source = state.c3eSource;
    const normalizedPhase = normalizeText(phaseName);
    return source.split(/\r?\n/)
      .map(parseMarkdownRow)
      .filter(function (cells) {
        if (!cells || cells.length < 4 || cells[0] === "Artifact") {
          return false;
        }
        const artifact = normalizeText(cells[0]);
        const phase = normalizeText(cells[1]);
        if ((phaseName === "Support" || phaseName === "Grow") && artifact.indexOf("c3e_activities-definitions") >= 0) {
          return true;
        }
        return phase.indexOf(normalizedPhase) >= 0;
      });
  }

  function getPrimaryArtifactNotes(phaseName) {
    const noteSection = extractSection(state.c3eSource, PHASE_NOTE_HEADINGS[phaseName]);
    if (!noteSection) {
      return [];
    }
    return noteSection
      .split(/\r?\n/)
      .map(function (line) { return line.replace(/^- /, "").trim(); })
      .filter(function (line) {
        return line && !/^primary artifacts?:/i.test(line) && line.length > 18;
      })
      .slice(0, 10);
  }

  function parseMarkdownRow(line) {
    const trimmed = line.trim();
    if (trimmed.indexOf("|") !== 0 || trimmed.indexOf("---") >= 0) {
      return null;
    }
    const cells = trimmed.split("|").slice(1, -1).map(function (cell) {
      return cell.trim();
    });
    return cells.length ? cells : null;
  }

  function extractSection(source, heading) {
    const start = source.indexOf(heading);
    if (start < 0) {
      return "";
    }
    const rest = source.slice(start + heading.length);
    const next = rest.search(/\n#{2,3} /);
    return (next >= 0 ? rest.slice(0, next) : rest).trim();
  }

  function splitChunks(text) {
    return text
      .replace(/\r/g, "")
      .split(/\n\n+|\n- |\n\|/)
      .map(function (chunk) { return chunk.replace(/\s+/g, " ").trim(); })
      .filter(function (chunk) { return chunk.length > 30; })
      .slice(0, 24);
  }

  function cleanChunk(chunk) {
    return chunk
      .replace(/^[-| ]+/, "")
      .replace(/\|/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(text) {
    return normalizeText(text)
      .split(/\s+/)
      .filter(function (token) { return token.length > 2; });
  }

  function normalizeText(text) {
    return text.toLowerCase().replace(/[^a-z0-9+&/ -]/g, " ").replace(/\s+/g, " ").trim();
  }

  function scoreChunk(chunk, tokens) {
    const normalized = normalizeText(chunk);
    return tokens.reduce(function (score, token) {
      return score + (normalized.indexOf(token) >= 0 ? 1 : 0);
    }, 0);
  }

  function evaluateReflection(npc, text) {
    const normalized = normalizeText(text);
    const tasks = phaseTasks(npc.phase.name);
    if (!tasks.length) {
      const response = "I cannot judge this phase without " + KNOWLEDGE_SCROLL + ". The quest requires that tome.";
      showNpcBubble(response, npc.x, npc.y);
      addLog(npc.keeper, response);
      playTone("deny");
      return;
    }
    const matchedTask = matchingPhaseTask(normalized, tasks);
    const enough = Boolean(matchedTask);
    if (!enough) {
      const response = "Not yet. From " + KNOWLEDGE_SCROLL + ", " + npc.phase.name + " needs a clear customer task. Try one of these: " + tasks.slice(0, 5).join("; ") + ". Ask for more detail, say yes, or answer with a specific phase task.";
      state.conversationMode = "ready";
      showNpcBubble(response, npc.x, npc.y);
      addLog(npc.keeper, response);
      playTone("deny");
      return;
    }

    state.completed.add(npc.phaseIndex);
    state.conversationMode = "question";
    const nextIndex = npc.phaseIndex + 1;
    state.currentPhaseIndex = nextIndex;
    playTone("advance");
    if (nextIndex >= PHASES.length) {
      const response = "You have carried the C3E knowledge through every gate.";
      showNpcBubble(response, npc.x, npc.y);
      addLog(npc.keeper, response);
      updateHud();
      winGame();
      return;
    }
    const next = currentTarget();
    const response = "You may proceed. Seek " + next.label + " at " + next.location + ".";
    showNpcBubble(response, npc.x, npc.y);
    addLog(npc.keeper, response);
    updateHud();
  }

  function winGame() {
    clearEndRedirects();
    state.lost = false;
    lostModal.classList.add("hidden");
    state.won = true;
    winnerText.textContent = state.winnerText;
    winnerModal.classList.remove("hidden");
    showNpcBubble(state.winnerText, state.player.x, state.player.y);
    playWinSound();
    state.winnerRedirectTimer = window.setTimeout(function () {
      if (state.won && !state.lost) {
        window.location.href = WINNER_HELP_URL;
      }
    }, WINNER_REDIRECT_DELAY_MS);
  }

  function enterGotoWinFlow() {
    clearEndRedirects();
    state.moveQueue = [];
    state.player.moving = false;
    state.conversationMode = "question";
    PHASES.forEach(function (_phase, index) {
      state.completed.add(index);
    });
    state.currentPhaseIndex = PHASES.length;
    updateHud();
    addLog("System", "The winner gate opens.");
    winGame();
  }

  function enterGogoLostFlow() {
    const npc = {
      label: "The forbidden gate",
      keeper: "System",
      x: state.player.x,
      y: state.player.y
    };
    addLog("System", "The loser gate opens.");
    loseGame(npc);
  }

  function clearEndRedirects() {
    clearWinnerRedirect();
    clearLoserRedirect();
  }

  function clearWinnerRedirect() {
    if (state.winnerRedirectTimer) {
      window.clearTimeout(state.winnerRedirectTimer);
      state.winnerRedirectTimer = null;
    }
  }

  function clearLoserRedirect() {
    if (state.loserRedirectTimer) {
      window.clearTimeout(state.loserRedirectTimer);
      state.loserRedirectTimer = null;
    }
  }

  function loseGame(npc) {
    clearEndRedirects();
    state.won = false;
    state.lost = true;
    state.moveQueue = [];
    state.player.moving = false;
    state.conversationMode = "question";
    winnerModal.classList.add("hidden");
    const body = state.lostText || "You chose poorly.";
    const response = npc.label + " is outside the C3E path. " + body;
    lostText.textContent = body;
    lostModal.classList.remove("hidden");
    showNpcBubble(response, npc.x, npc.y);
    addLog(npc.keeper, response);
    playLostSound();
    state.loserRedirectTimer = window.setTimeout(function () {
      if (state.lost && !state.won) {
        window.location.href = LOSER_HELP_URL;
      }
    }, LOSER_REDIRECT_DELAY_MS);
  }

  function phaseKeywords(phaseName) {
    const chunks = getSourceChunks(phaseName);
    const counts = new Map();
    tokenize(chunks.join(" ")).forEach(function (token) {
      if (token.length < 4 || STOPWORDS.has(token)) {
        return;
      }
      counts.set(token, (counts.get(token) || 0) + 1);
    });
    return Array.from(counts.entries())
      .sort(function (a, b) { return b[1] - a[1]; })
      .map(function (entry) { return entry[0]; })
      .slice(0, 28);
  }

  function phaseTasks(phaseName) {
    const activityHeading = phaseName === "Support" || phaseName === "Grow" ? "Support & Grow" : phaseName;
    const tasks = [];
    const activitySection = extractSection(state.c3eSource, "### " + activityHeading);
    activitySection.split(/\r?\n/).forEach(function (line) {
      const cleaned = line.replace(/^- /, "").replace(/\.$/, "").trim();
      if (line.trim().indexOf("- ") === 0 && cleaned) {
        tasks.push(cleaned);
      }
    });

    const outputLine = requiredOutputLine(phaseName);
    if (outputLine) {
      const cells = outputLine.split("|").map(function (cell) { return cell.trim(); });
      const outputs = cells[2] || "";
      outputs.split(/,|\band\b/i).forEach(function (output) {
        const cleaned = output.replace(/\.$/, "").trim();
        if (cleaned) {
          tasks.push(cleaned);
        }
      });
    }

    return Array.from(new Set(tasks)).slice(0, 18);
  }

  function requiredOutputLine(phaseName) {
    const rowName = phaseName === "Support" || phaseName === "Grow" ? "Support & Grow" : phaseName;
    return state.c3eSource.split(/\r?\n/).find(function (line) {
      return line.indexOf("| " + rowName + " |") === 0;
    }) || "";
  }

  function matchesPhaseTask(normalizedAnswer, tasks) {
    return Boolean(matchingPhaseTask(normalizedAnswer, tasks));
  }

  function matchingPhaseTask(normalizedAnswer, tasks) {
    return tasks.find(function (task) {
      return taskMatchesAnswer(normalizedAnswer, task);
    }) || "";
  }

  function taskMatchesAnswer(normalizedAnswer, task) {
    const taskName = normalizeTaskName(task);
    if (!normalizedAnswer || !taskName) {
      return false;
    }
    if (normalizedAnswer.indexOf(taskName) >= 0) {
      return true;
    }
    if (taskName.indexOf(normalizedAnswer) >= 0 && isMeaningfulShortAnswer(normalizedAnswer)) {
      return true;
    }

    const answerTokens = tokenize(normalizedAnswer).filter(isTaskToken);
    const taskTokens = tokenize(taskName).filter(isTaskToken);
    if (!answerTokens.length || !taskTokens.length) {
      return false;
    }
    const hits = taskTokens.filter(function (token) {
      return answerTokens.indexOf(token) >= 0 || normalizedAnswer.indexOf(token) >= 0;
    }).length;
    if (answerTokens.length === 1) {
      return hits >= 1 && isDistinctiveTaskToken(answerTokens[0]);
    }
    return hits >= Math.min(2, taskTokens.length);
  }

  function normalizeTaskName(task) {
    return normalizeText(task)
      .replace(/\baccount activity\b/g, "")
      .replace(/\bengagement activity\b/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isTaskToken(token) {
    return token.length >= 3 && !STOPWORDS.has(token);
  }

  function isMeaningfulShortAnswer(answer) {
    const tokens = tokenize(answer).filter(isTaskToken);
    return tokens.length >= 1 && tokens.some(isDistinctiveTaskToken);
  }

  function isDistinctiveTaskToken(token) {
    const generic = [
      "account", "activity", "analysis", "assessment", "customer", "define", "deliver",
      "develop", "final", "finalize", "guide", "model", "oracle", "plan", "scoped",
      "state", "strategy", "technical", "template"
    ];
    return generic.indexOf(token) < 0;
  }

  function addLog(speaker, text) {
    const line = document.createElement("div");
    line.className = "log-line";
    line.innerHTML = "<strong></strong> <span></span>";
    line.querySelector("strong").textContent = speaker + ":";
    line.querySelector("span").textContent = " " + text;
    questLog.appendChild(line);
    questLog.scrollTop = questLog.scrollHeight;
  }

  function showPlayerBubble(text) {
    showBubble(playerBubble, text, state.player.x, state.player.y - 26);
  }

  function showNpcBubble(text, x, y) {
    showBubble(npcBubble, text, x, y - 34);
  }

  function showBubble(element, text, x, y) {
    element.textContent = text;
    element.dataset.x = String(x);
    element.dataset.y = String(y);
    element.classList.remove("hidden");
    positionBubble(element);
  }

  function hideBubble(element) {
    element.classList.add("hidden");
  }

  function positionBubbles() {
    positionBubble(playerBubble);
    positionBubble(npcBubble);
  }

  function positionBubble(element) {
    if (element.classList.contains("hidden")) {
      return;
    }
    const x = Number(element.dataset.x || 0);
    const y = Number(element.dataset.y || 0);
    const left = Math.max(9, Math.min(91, (x / map.width) * 100));
    const top = Math.max(12, Math.min(88, (y / map.height) * 100));
    element.style.left = left + "%";
    element.style.top = top + "%";
  }

  function draw(time) {
    ctx.imageSmoothingEnabled = false;
    drawBackground(time || 0);
    drawPaths();
    drawHub();
    drawNpcs(time || 0);
    drawPlayer(time || 0);
    drawLocations();
    drawHoverName();
  }

  function drawBackground(time) {
    ctx.fillStyle = "#14260d";
    ctx.fillRect(0, 0, map.width, map.height);

    ctx.fillStyle = "#193010";
    for (let y = 0; y < map.height; y += 24) {
      for (let x = (y / 24) % 2 ? 10 : 0; x < map.width; x += 40) {
        ctx.fillRect(x, y, 18, 10);
      }
    }

    ctx.fillStyle = "rgba(255,255,255,0.025)";
    for (let y = 0; y < map.height; y += 4) {
      ctx.fillRect(0, y, map.width, 2);
    }

    ctx.fillStyle = "#314221";
    for (let i = 0; i < 24; i += 1) {
      const x = (i * 113 + 37) % map.width;
      const y = (i * 71 + 55) % map.height;
      if (distance({ x: x, y: y }, map.center) > 115) {
        drawPixelRock(x, y);
      }
    }
  }

  function drawPaths() {
    ctx.strokeStyle = "#8c7d51";
    ctx.lineWidth = 24;
    ctx.lineCap = "butt";
    state.npcs.forEach(function (npc) {
      ctx.beginPath();
      ctx.moveTo(map.center.x, map.center.y);
      ctx.lineTo(npc.x, npc.y);
      ctx.stroke();
    });

    ctx.strokeStyle = "#6d643f";
    ctx.lineWidth = 18;
    ctx.beginPath();
    state.npcs.forEach(function (npc, index) {
      if (index === 0) {
        ctx.moveTo(npc.x, npc.y);
      } else {
        ctx.lineTo(npc.x, npc.y);
      }
    });
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "#c1a75a";
    ctx.lineWidth = 4;
    state.npcs.forEach(function (npc) {
      ctx.beginPath();
      ctx.moveTo(map.center.x, map.center.y);
      ctx.lineTo(npc.x, npc.y);
      ctx.stroke();
    });
  }

  function drawHub() {
    ctx.fillStyle = "#282316";
    ctx.fillRect(map.center.x - 42, map.center.y - 34, 84, 68);
    ctx.fillStyle = "#c1a75a";
    ctx.fillRect(map.center.x - 34, map.center.y - 26, 68, 52);
    ctx.fillStyle = "#312b1e";
    ctx.fillRect(map.center.x - 20, map.center.y - 14, 40, 28);
    ctx.fillStyle = "#f1c74a";
    ctx.fillRect(map.center.x - 4, map.center.y - 4, 8, 8);
    drawText("HUB", map.center.x, map.center.y + 50, "#fff3bc", 14, "center");
  }

  function drawLocations() {
    state.npcs.forEach(function (npc) {
      const width = Math.min(166, Math.max(128, npc.location.length * 7 + 24, npc.phase.name.length * 8 + 24));
      const height = 38;
      const label = npcLabelPosition(npc, width, height, 118);
      ctx.fillStyle = "#11110c";
      ctx.fillRect(label.x - width / 2 + 4, label.y - height / 2 + 4, width, height);
      ctx.fillStyle = "#eadb91";
      ctx.fillRect(label.x - width / 2, label.y - height / 2, width, height);
      ctx.fillStyle = "#3a2b17";
      ctx.fillRect(label.x - width / 2 + 4, label.y - height / 2 + 4, width - 8, height - 8);
      drawText(fitLabel(npc.location, Math.floor((width - 20) / 7)), label.x, label.y - 4, "#fff3bc", 10, "center");
      drawText(npc.phase.name, label.x, label.y + 10, npc.phase.color, 10, "center");
    });
  }

  function npcLabelPosition(npc, width, height, offset) {
    const x = npc.x + Math.cos(npc.angle) * offset;
    const y = npc.y + Math.sin(npc.angle) * offset;
    return {
      x: clamp(x, width / 2 + 8, map.width - width / 2 - 8),
      y: clamp(y, height / 2 + 8, map.height - height / 2 - 8)
    };
  }

  function drawNpcs(time) {
    state.npcs.forEach(function (npc) {
      const bob = Math.sin(time / 280 + npc.ringIndex) * 2;
      const done = !npc.isTrap && state.completed.has(npc.phaseIndex);
      const current = !npc.isTrap && npc.phaseIndex === state.currentPhaseIndex;
      drawSpark(npc.x, npc.y - 34, current || npc.isTrap, done, npc.isTrap ? "#d14d3d" : npc.phase.color, time);
      drawNpcSprite(npc.x, npc.y + bob, npc.phase.color, done, npc.isTrap);
    });
  }

  function drawNpcSprite(x, y, color, done, isTrap) {
    ctx.fillStyle = "#0a0a08";
    ctx.fillRect(x - 17, y + 19, 34, 8);
    ctx.fillStyle = done ? "#d9f5a7" : "#f0d0a0";
    ctx.fillRect(x - 10, y - 28, 20, 18);
    ctx.fillStyle = "#24150d";
    ctx.fillRect(x - 8, y - 31, 16, 6);
    ctx.fillStyle = color;
    ctx.fillRect(x - 14, y - 10, 28, 27);
    ctx.fillStyle = "#f4f0c9";
    ctx.fillRect(x - 18, y - 6, 8, 20);
    ctx.fillRect(x + 10, y - 6, 8, 20);
    ctx.fillStyle = "#1b1b15";
    ctx.fillRect(x - 11, y + 17, 8, 15);
    ctx.fillRect(x + 3, y + 17, 8, 15);
    ctx.fillStyle = "#15110c";
    ctx.fillRect(x - 6, y - 23, 4, 4);
    ctx.fillRect(x + 4, y - 23, 4, 4);
    ctx.fillStyle = isTrap ? "#d14d3d" : "#6a321d";
    ctx.fillRect(x - 4, y - 15, 8, isTrap ? 6 : 3);
  }

  function drawHoverName() {
    const npc = state.hoverNpc;
    if (!npc) {
      return;
    }
    const text = npc.keeper;
    const width = Math.min(220, Math.max(72, text.length * 10 + 24));
    const height = 30;
    const x = clamp(npc.x - Math.cos(npc.angle) * 70, width / 2 + 8, map.width - width / 2 - 8);
    const y = clamp(npc.y - Math.sin(npc.angle) * 70, height / 2 + 8, map.height - height / 2 - 8);

    ctx.fillStyle = "#070707";
    ctx.fillRect(x - width / 2 + 4, y - height / 2 + 4, width, height);
    ctx.fillStyle = npc.isTrap ? "#d14d3d" : "#f1c74a";
    ctx.fillRect(x - width / 2, y - height / 2, width, height);
    ctx.fillStyle = "#15130f";
    ctx.fillRect(x - width / 2 + 4, y - height / 2 + 4, width - 8, height - 8);
    drawText(fitLabel(text, 20), x, y, "#fff3bc", 13, "center");
  }

  function drawPlayer(time) {
    const x = state.player.x;
    const y = state.player.y;
    const step = state.player.moving ? state.player.step : 0;
    ctx.fillStyle = "#050605";
    ctx.fillRect(x - 18, y + 22, 38, 8);
    ctx.fillStyle = "#e9e3c2";
    ctx.fillRect(x - 10, y - 30, 20, 18);
    ctx.fillStyle = "#6f7782";
    ctx.fillRect(x - 14, y - 34, 28, 8);
    ctx.fillRect(x - 8, y - 42, 16, 8);
    ctx.fillStyle = "#375fbc";
    ctx.fillRect(x - 15, y - 12, 30, 30);
    ctx.fillStyle = "#f0c64a";
    ctx.fillRect(x - 5, y - 4, 10, 14);
    ctx.fillStyle = "#e9e3c2";
    ctx.fillRect(x - 22, y - 8, 8, 20);
    ctx.fillRect(x + 14, y - 8, 8, 20);
    ctx.fillStyle = "#202025";
    ctx.fillRect(x - 12, y + 18, 8, 16 + step * 2);
    ctx.fillRect(x + 4, y + 18, 8, 16 - step * 2);
    ctx.fillStyle = "#111111";
    ctx.fillRect(x - 5, y - 24, 4, 4);
    ctx.fillRect(x + 5, y - 24, 4, 4);
  }

  function drawSpark(x, y, current, done, color, time) {
    if (!current && !done) {
      return;
    }
    ctx.fillStyle = done ? "#d8ff75" : color;
    const pulse = current ? Math.floor(time / 180) % 2 : 0;
    ctx.fillRect(x - 3, y - 11 - pulse, 6, 6);
    ctx.fillRect(x - 11, y - 3 - pulse, 6, 6);
    ctx.fillRect(x + 5, y - 3 - pulse, 6, 6);
    ctx.fillRect(x - 3, y + 5 - pulse, 6, 6);
  }

  function drawPixelRock(x, y) {
    ctx.fillStyle = "#26351d";
    ctx.fillRect(x, y, 20, 12);
    ctx.fillStyle = "#486038";
    ctx.fillRect(x + 4, y - 4, 10, 8);
  }

  function drawText(text, x, y, color, size, align) {
    ctx.font = size + "px Courier New, monospace";
    ctx.textAlign = align || "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#070707";
    ctx.fillText(text, x + 2, y + 2);
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

  function fitLabel(text, max) {
    return text.length > max ? text.slice(0, Math.max(0, max - 1)) + "." : text;
  }

  function playTone(kind) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      return;
    }
    if (!state.audioContext) {
      state.audioContext = new AudioContext();
    }
    const audio = state.audioContext;
    const now = audio.currentTime;
    const sequence = {
      move: [[220, 0.04], [330, 0.05]],
      speak: [[420, 0.04], [280, 0.04], [520, 0.05]],
      deny: [[120, 0.08], [90, 0.08]],
      advance: [[392, 0.06], [494, 0.06], [659, 0.08]]
    }[kind] || [[220, 0.05]];
    let offset = 0;
    sequence.forEach(function (note) {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(note[0], now + offset);
      gain.gain.setValueAtTime(0.001, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.06, now + offset + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + note[1]);
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start(now + offset);
      osc.stop(now + offset + note[1] + 0.02);
      offset += note[1] + 0.025;
    });
  }

  function playWinSound() {
    playTone("advance");
    try {
      winSound.currentTime = 0;
      winSound.play().catch(function () {
        playTone("advance");
      });
    } catch (error) {
      playTone("advance");
    }
  }

  function playLostSound() {
    playTone("deny");
    try {
      lostSound.currentTime = 0;
      lostSound.play().catch(function () {
        playTone("deny");
      });
    } catch (error) {
      playTone("deny");
    }
  }

  boot();
}());
