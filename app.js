const pageMode = document.body?.dataset.page || "main";
const isReplacementPage = pageMode === "replacement";



const toneSelect = document.querySelector("#tone-select");
const pageBg = document.querySelector(".page-bg");
const scrollProgressBar = document.querySelector("#scroll-progress-bar");
const subtitle = document.querySelector("#subtitle");
const toneDescription = document.querySelector("#tone-description");
const introCopy = document.querySelector("#intro-copy");
const searchInput = document.querySelector("#search-input");
const searchClear = document.querySelector("#search-clear");
const glossaryInput = document.querySelector("#glossary-input");
const glossaryClear = document.querySelector("#glossary-clear");

const tabStudy = document.querySelector("#tab-study");
const tabCompare = document.querySelector("#tab-compare");
const studyView = document.querySelector("#study-view");
const compareView = document.querySelector("#compare-view");
const contextViewerSection = document.querySelector("#context-viewer");

const argumentList = document.querySelector("#argument-list");
const proofList = document.querySelector("#proof-list");
const replyList = document.querySelector("#reply-list");
const epistemicList = document.querySelector("#epistemic-list");
const propagandaList = document.querySelector("#propaganda-list");
const replacementList = document.querySelector("#replacement-list");
const glossaryList = document.querySelector("#glossary-list");
const drilldownList = document.querySelector("#drilldown-list");
const tulipSlopeList = document.querySelector("#tulip-slope-list");
const replacementDrilldownList = document.querySelector("#replacement-drilldown-list");
const contextSelect = document.querySelector("#context-select");
const contextOutput = document.querySelector("#context-output");
const comparisonGrid = document.querySelector("#comparison-grid");
const comparisonFilters = document.querySelector("#comparison-filters");

const argumentTemplate = document.querySelector("#argument-template");
const proofTemplate = document.querySelector("#proof-template");
const verseTemplate = document.querySelector("#verse-template");
const glossaryTemplate = document.querySelector("#glossary-template");
const drilldownTemplate = document.querySelector("#drilldown-template");
const comparisonTemplate = document.querySelector("#comparison-template");

const filtersContainer = document.querySelector("#filters");
const verseCards = document.querySelector("#verse-cards");
const logicList = document.querySelector("#logic-list");
const replyThemeFilters = document.querySelector("#reply-theme-filters");
const glossaryThemeFilters = document.querySelector("#glossary-theme-filters");
const replacementThemeFilters = document.querySelector("#replacement-theme-filters");
const quickJumpLinks = [...document.querySelectorAll(".quick-jump-link[data-jump-target]")];

const countCore = document.querySelector("#count-core");
const countProof = document.querySelector("#count-proof");
const countReplies = document.querySelector("#count-replies");
const countDrilldown = document.querySelector("#count-drilldown");
const countSlope = document.querySelector("#count-slope");
const countEpistemic = document.querySelector("#count-epistemic");
const countGlossary = document.querySelector("#count-glossary");
const countReplacement = document.querySelector("#count-replacement");
const countReplacementDrilldown = document.querySelector("#count-replacement-drilldown");
const countPropaganda = document.querySelector("#count-propaganda");

let currentTone = "pastoral";
let currentCategory = "All";
let currentComparisonType = "All";
let currentSearchQuery = "";
let currentGlossaryQuery = "";
let currentSearchTokens = [];
let currentGlossaryTokens = [];
let currentReplyTheme = "All";
let currentGlossaryTheme = "All";
let currentReplacementTheme = "All";
let currentContextReference = "";
let currentView = "study";
const chapterCache = new Map();
let contextRenderToken = 0;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (isReplacementPage) {
  currentCategory = "RT Covenant Continuity";
  currentComparisonType = "Replacement Theology";
  currentGlossaryTheme = "Replacement Theology";
}

if (toneSelect) {
  toneSelect.value = currentTone;
}

const scriptureAliasPatterns = [
  { pattern: /\bjn\b/g, replacement: "john" },
  { pattern: /\bjhn\b/g, replacement: "john" },
  { pattern: /\brom\b/g, replacement: "romans" },
  { pattern: /\b1\s*cor\b/g, replacement: "1 corinthians" },
  { pattern: /\b2\s*cor\b/g, replacement: "2 corinthians" }
];

function setupRevealStagger() {
  const revealNodes = [...document.querySelectorAll(".reveal")];
  revealNodes.forEach((node, index) => {
    node.style.setProperty("--reveal-delay", `${90 + index * 65}ms`);
  });
}

function applyStaggerClass(node, index) {
  node.classList.add("list-enter");
  node.style.setProperty("--stagger", `${Math.min(index * 55, 500)}ms`);
}

function animateViewIn(panel) {
  if (panel._hideHandler) {
    panel.removeEventListener("transitionend", panel._hideHandler);
    panel._hideHandler = null;
  }
  panel.hidden = false;
  requestAnimationFrame(() => {
    panel.classList.add("is-visible");
  });
}

function animateViewOut(panel) {
  if (panel.hidden) {
    return;
  }

  panel.classList.remove("is-visible");
  if (prefersReducedMotion.matches) {
    panel.hidden = true;
    return;
  }

  const hideOnEnd = () => {
    panel.hidden = true;
    panel._hideHandler = null;
    panel.removeEventListener("transitionend", hideOnEnd);
  };
  panel._hideHandler = hideOnEnd;
  panel.addEventListener("transitionend", hideOnEnd);
}

function updateScrollProgress() {
  if (!scrollProgressBar) {
    return;
  }

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll <= 0 ? 0 : Math.min(window.scrollY / maxScroll, 1);
  scrollProgressBar.style.transform = `scaleX(${ratio})`;
}

function updateBackgroundParallax() {
  if (!pageBg || prefersReducedMotion.matches) {
    return;
  }
  const yOffset = Math.min(window.scrollY * 0.05, 26);
  pageBg.style.transform = `translate3d(0, ${-yOffset}px, 0)`;
}

function applyTiltEffects(scope = document) {
  if (prefersReducedMotion.matches) {
    return;
  }

  const cards = scope.querySelectorAll(".tilt-surface");
  cards.forEach((card) => {
    if (card.dataset.tiltWired === "1") {
      return;
    }
    card.dataset.tiltWired = "1";

    const limit = 5;
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * limit * 2;
      const rotateX = (0.5 - y) * limit * 2;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

const extraPassageByReference = {
  "1 Peter 1:2 (KJV)":
    "Elect according to the foreknowledge of God the Father, through sanctification of the Spirit, unto obedience and sprinkling of the blood of Jesus Christ: Grace unto you, and peace, be multiplied."
};

function extractReferenceObjects(collection) {
  return collection.flatMap((entry) => entry.references);
}

function getReferencePool() {
  const withPassages = [
    ...extractReferenceObjects(argumentsData),
    ...extractReferenceObjects(proofTextsData),
    ...extractReferenceObjects(commonRepliesData),
    ...extractReferenceObjects(epistemicChallengeData),
    ...extractReferenceObjects(replacementPropagandaData),
    ...extractReferenceObjects(replacementTheologyData),
    ...lensVerses
  ];

  const fromGlossary = glossaryData.map((entry) => entry.references).flat();
  const fromDrilldown = objectionDrilldownData
    .flatMap((entry) => entry.steps)
    .flatMap((step) => step.references);
  const fromTulipSlope = tulipDeterminismSlopeData
    .flatMap((entry) => entry.steps)
    .flatMap((step) => step.references);
  const fromReplacementDrilldown = replacementDrilldownData
    .flatMap((entry) => entry.steps)
    .flatMap((step) => step.references);

  const allReferenceStrings = [
    ...withPassages.map((entry) => entry.reference),
    ...fromGlossary,
    ...fromDrilldown,
    ...fromTulipSlope,
    ...fromReplacementDrilldown
  ];

  const passageMap = new Map();
  withPassages.forEach((entry) => {
    if (!passageMap.has(entry.reference)) {
      passageMap.set(entry.reference, entry.passage);
    }
  });

  Object.entries(extraPassageByReference).forEach(([reference, passage]) => {
    if (!passageMap.has(reference)) {
      passageMap.set(reference, passage);
    }
  });

  const uniqueReferences = [...new Set(allReferenceStrings)].sort((a, b) =>
    a.localeCompare(b)
  );

  return uniqueReferences.map((reference) => ({
    reference,
    passage:
      passageMap.get(reference) ||
      "Passage text is not yet loaded for this reference in the app data."
  }));
}

const contextReferencePool = getReferencePool();
const referencePassageLookup = new Map(
  contextReferencePool.map((entry) => [entry.reference, entry.passage])
);
currentContextReference = contextReferencePool[0]?.reference || "";

function getChapterKey(reference) {
  const stripped = reference.replace(" (KJV)", "");
  const match = stripped.match(/^(.+?)\s(\d+):/);
  if (!match) {
    return stripped;
  }
  return `${match[1]} ${match[2]}`;
}

function parseReference(reference) {
  const stripped = reference.replace(" (KJV)", "").trim();
  const match = stripped.match(/^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/);
  if (!match) {
    return null;
  }

  const book = match[1];
  const chapter = Number(match[2]);
  const verseStart = Number(match[3]);
  const verseEnd = match[4] ? Number(match[4]) : verseStart;

  return {
    book,
    chapter,
    verseStart,
    verseEnd,
    chapterKey: `${book} ${chapter}`
  };
}

function getSelectedVerseNumbers(reference) {
  const parsed = parseReference(reference);
  if (!parsed) {
    return new Set();
  }

  const verses = new Set();
  for (let verse = parsed.verseStart; verse <= parsed.verseEnd; verse += 1) {
    verses.add(verse);
  }
  return verses;
}

async function fetchKjvChapter(chapterKey) {
  if (chapterCache.has(chapterKey)) {
    return chapterCache.get(chapterKey);
  }

  const query = encodeURIComponent(chapterKey);
  const response = await fetch(`https://bible-api.com/${query}?translation=kjv`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  if (!Array.isArray(data.verses) || !data.verses.length) {
    throw new Error("No verses returned");
  }

  const chapterData = {
    reference: data.reference || `${chapterKey} (KJV)`,
    verses: data.verses.map((verse) => ({
      verse: Number(verse.verse),
      text: String(verse.text || "").trim()
    }))
  };

  chapterCache.set(chapterKey, chapterData);
  return chapterData;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function applyScriptureAliases(value) {
  let normalized = value;
  scriptureAliasPatterns.forEach(({ pattern, replacement }) => {
    normalized = normalized.replace(pattern, replacement);
  });
  return normalized;
}

function normalizeSearchText(value) {
  const normalized = applyScriptureAliases(
    String(value || "")
      .toLowerCase()
      .replace(/[’']/g, "")
      .replace(/[^a-z0-9]+/g, " ")
  );
  return normalized.replace(/\s+/g, " ").trim();
}

function buildSearchTokens(query) {
  const normalizedQuery = normalizeSearchText(query);
  return normalizedQuery ? normalizedQuery.split(" ").filter(Boolean) : [];
}

function setCurrentSearchQuery(value) {
  currentSearchQuery = String(value || "").trim().toLowerCase();
  currentSearchTokens = buildSearchTokens(currentSearchQuery);
}

function setCurrentGlossaryQuery(value) {
  currentGlossaryQuery = String(value || "").trim().toLowerCase();
  currentGlossaryTokens = buildSearchTokens(currentGlossaryQuery);
}

function getHighlightTerms() {
  if (!currentSearchQuery) {
    return [];
  }

  const rawTerms = currentSearchQuery
    .split(/\s+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 1);
  const normalizedTerms = currentSearchTokens.filter((term) => term.length > 1);
  const uniqueTerms = new Set([...rawTerms, ...normalizedTerms]);
  return [...uniqueTerms].sort((left, right) => right.length - left.length);
}

function debounce(handler, delayMs = 180) {
  let timerId = null;

  const debounced = (...args) => {
    if (timerId) {
      window.clearTimeout(timerId);
    }
    timerId = window.setTimeout(() => {
      timerId = null;
      handler(...args);
    }, delayMs);
  };

  debounced.cancel = () => {
    if (timerId) {
      window.clearTimeout(timerId);
      timerId = null;
    }
  };

  return debounced;
}

function getHighlightedHtml(text) {
  const rawText = String(text);
  if (!currentSearchQuery) {
    return escapeHtml(rawText);
  }

  const highlightTerms = getHighlightTerms();
  if (!highlightTerms.length) {
    return escapeHtml(rawText);
  }

  const regex = new RegExp(highlightTerms.map(escapeRegExp).join("|"), "ig");
  let cursor = 0;
  let result = "";
  let match = regex.exec(rawText);

  while (match) {
    const start = match.index;
    const end = start + match[0].length;
    result += escapeHtml(rawText.slice(cursor, start));
    result += `<mark class="search-hit">${escapeHtml(match[0])}</mark>`;
    cursor = end;
    match = regex.exec(rawText);
  }

  result += escapeHtml(rawText.slice(cursor));
  return result;
}

function setHighlightedText(element, text) {
  element.innerHTML = getHighlightedHtml(text);
}

function lookupPassage(reference) {
  return (
    referencePassageLookup.get(reference) ||
    "Passage text is not yet loaded for this reference in the app data."
  );
}

function expandPanelChainFor(element) {
  if (!element) {
    return;
  }

  const panelChain = [];
  let cursor = element.closest("section.panel");
  while (cursor) {
    panelChain.push(cursor);
    cursor = cursor.parentElement?.closest("section.panel");
  }

  panelChain.reverse().forEach((panel) => {
    if (panel._sectionToggleTrigger) {
      setSectionExpanded(panel, true);
    }
  });
}

function openContextViewer(reference) {
  currentContextReference = reference;
  renderContextViewer();
  setView("study");
  expandPanelChainFor(contextViewerSection);
  if (contextViewerSection) {
    window.setTimeout(() => {
      contextViewerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, prefersReducedMotion.matches ? 0 : 180);
  }
}

function createPassageDetail(reference, passage, showContextButton = true) {
  const detail = document.createElement("details");
  detail.className = "passage-detail";

  const summary = document.createElement("summary");
  setHighlightedText(summary, reference);

  const linkButton = document.createElement("button");
  linkButton.type = "button";
  linkButton.className = "context-link";
  linkButton.textContent = "Open Context Viewer";
  linkButton.addEventListener("click", () => {
    openContextViewer(reference);
  });

  const text = document.createElement("p");
  text.className = "passage-text";
  setHighlightedText(text, passage);

  detail.append(summary);
  if (showContextButton) {
    detail.append(linkButton);
  }
  detail.append(text);
  return detail;
}

function createExternalResourceLink(label, url) {
  const item = document.createElement("li");
  item.className = "proof-truth-link-item";

  const anchor = document.createElement("a");
  anchor.className = "proof-truth-link";
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  setHighlightedText(anchor, label);

  item.append(anchor);
  return item;
}

function createPinnedSourceItem(source) {
  const item = document.createElement("li");
  item.className = "proof-source-item";

  const anchor = document.createElement("a");
  anchor.className = "proof-source-link";
  anchor.href = source.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  setHighlightedText(anchor, source.label);

  const summary = document.createElement("p");
  summary.className = "proof-source-summary";
  setHighlightedText(summary, source.summary);

  item.append(anchor, summary);
  return item;
}

function createEvidenceAnchorItem(anchor) {
  const item = document.createElement("li");
  item.className = "proof-evidence-item";

  const claim = document.createElement("p");
  claim.className = "proof-evidence-claim";
  setHighlightedText(claim, anchor.claim);

  const sourceLink = document.createElement("a");
  sourceLink.className = "proof-evidence-link";
  sourceLink.href = anchor.sourceUrl;
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener noreferrer";
  setHighlightedText(sourceLink, anchor.sourceLabel);

  item.append(claim, sourceLink);
  return item;
}

// Sets initial collapsed styles on a card. The actual click handling is done via
// a single delegated handleAccordionClick listener attached to each list container.
function initAccordionItem(root) {
  const body = root.querySelector(".argument-body");
  const symbol = root.querySelector(".symbol");
  if (!body || !symbol) {
    return;
  }
  body.style.maxHeight = "0px";
  body.style.opacity = "0";
}

// Single delegated handler for all accordion card clicks within any list container.
// pendingTransition is stored on body._pendingTransition instead of a per-card closure.
function handleAccordionClick(event) {
  const toggle = event.target.closest(".argument-toggle");
  if (!toggle) {
    return;
  }
  const root = toggle.closest(".argument-item");
  if (!root) {
    return;
  }
  const body = root.querySelector(".argument-body");
  const symbol = root.querySelector(".symbol");
  if (!body || !symbol) {
    return;
  }

  const expanded = toggle.getAttribute("aria-expanded") === "true";

  // Cancel any in-flight transitionend listener before starting a new one
  if (body._pendingTransition) {
    body.removeEventListener("transitionend", body._pendingTransition);
    body._pendingTransition = null;
  }

  if (prefersReducedMotion.matches) {
    toggle.setAttribute("aria-expanded", String(!expanded));
    body.hidden = expanded;
    root.classList.toggle("is-open", !expanded);
    body.style.maxHeight = !expanded ? "" : "0px";
    body.style.opacity = !expanded ? "1" : "0";
    symbol.textContent = "";
    return;
  }

  if (expanded) {
    const currentHeight = body.scrollHeight;
    body.style.maxHeight = `${currentHeight}px`;
    requestAnimationFrame(() => {
      body.style.maxHeight = "0px";
      body.style.opacity = "0";
    });

    const collapseDone = (ev) => {
      if (ev.propertyName !== "max-height") {
        return;
      }
      body.hidden = true;
      body.removeEventListener("transitionend", collapseDone);
      body._pendingTransition = null;
    };
    body._pendingTransition = collapseDone;
    body.addEventListener("transitionend", collapseDone);
  } else {
    body.hidden = false;
    body.style.maxHeight = "0px";
    body.style.opacity = "0";
    requestAnimationFrame(() => {
      body.style.maxHeight = `${body.scrollHeight}px`;
      body.style.opacity = "1";
    });

    const expandDone = (ev) => {
      if (ev.propertyName !== "max-height") {
        return;
      }
      if (toggle.getAttribute("aria-expanded") === "true") {
        body.style.maxHeight = "none";
      }
      body.removeEventListener("transitionend", expandDone);
      body._pendingTransition = null;
    };
    body._pendingTransition = expandDone;
    body.addEventListener("transitionend", expandDone);
  }

  toggle.setAttribute("aria-expanded", String(!expanded));
  root.classList.toggle("is-open", !expanded);
  symbol.textContent = "";
  window.setTimeout(updateScrollProgress, 60);
}

function expandAllArgumentItems(container, instant = false) {
  if (!container) {
    return;
  }

  const items = [...container.querySelectorAll(".argument-item")];
  items.forEach((item) => {
    const toggle = item.querySelector(".argument-toggle");
    const body = item.querySelector(".argument-body");
    const symbol = item.querySelector(".symbol");
    if (!toggle || !body || !symbol) {
      return;
    }

    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      return;
    }

    toggle.setAttribute("aria-expanded", "true");
    item.classList.add("is-open");
    body.hidden = false;
    body.style.opacity = "1";
    body.style.maxHeight = instant || prefersReducedMotion.matches ? "none" : `${body.scrollHeight}px`;
    symbol.textContent = "";
  });

  window.setTimeout(updateScrollProgress, instant ? 0 : 60);
}

// Returns true when the nearest section.panel ancestor is initialized but collapsed.
// Used by render functions to skip DOM work for off-screen content.
function isSectionCollapsed(containerEl) {
  const section = containerEl?.closest("section.panel");
  if (!section?._sectionToggleTrigger) {
    return false; // No accordion section wrapping it → always render
  }
  return section._sectionToggleTrigger.getAttribute("aria-expanded") !== "true";
}

// Flushes any deferred renders queued on .argument-list elements inside a section.
// Called when a section is expanded so stale content renders just before becoming visible.
function flushStaleLists(section) {
  section._sectionBody?.querySelectorAll(".argument-list").forEach((list) => {
    if (list._stale && typeof list._pendingRender === "function") {
      list._stale = false;
      const fn = list._pendingRender;
      list._pendingRender = null;
      fn();
    }
  });
}

function setSectionExpanded(section, shouldExpand, instant = false) {
  if (!section) {
    return;
  }

  const trigger = section._sectionToggleTrigger;
  const body = section._sectionBody;
  const symbol = section._sectionSymbol;
  if (!trigger || !body || !symbol) {
    return;
  }

  const expandedAttr = trigger.getAttribute("aria-expanded");
  const isInitialized = expandedAttr === "true" || expandedAttr === "false";
  const expanded = expandedAttr === "true";
  if (isInitialized && expanded === shouldExpand) {
    return;
  }

  if (body._collapseHandler) {
    body.removeEventListener("transitionend", body._collapseHandler);
    body._collapseHandler = null;
  }

  if (prefersReducedMotion.matches || instant) {
    trigger.setAttribute("aria-expanded", String(shouldExpand));
    section.classList.toggle("is-open", shouldExpand);
    body.hidden = !shouldExpand;
    body.style.maxHeight = shouldExpand ? "none" : "0px";
    body.style.opacity = shouldExpand ? "1" : "0";
    symbol.textContent = shouldExpand ? "-" : "+";
    if (shouldExpand) {
      flushStaleLists(section);
    }
    return;
  }

  if (shouldExpand) {
    body.hidden = false;
    body.style.maxHeight = "0px"; // keep hidden while stale lists render
    body.style.opacity = "0";
    flushStaleLists(section); // render deferred content before measuring scrollHeight
    requestAnimationFrame(() => {
      body.style.maxHeight = `${body.scrollHeight}px`;
      body.style.opacity = "1";
    });

    const expandDone = (event) => {
      if (event.propertyName !== "max-height") {
        return;
      }
      if (trigger.getAttribute("aria-expanded") === "true") {
        body.style.maxHeight = "none";
      }
      body.removeEventListener("transitionend", expandDone);
      body._collapseHandler = null;
    };
    body._collapseHandler = expandDone;
    body.addEventListener("transitionend", expandDone);
  } else {
    const currentHeight = body.scrollHeight;
    body.style.maxHeight = `${currentHeight}px`;
    requestAnimationFrame(() => {
      body.style.maxHeight = "0px";
      body.style.opacity = "0";
    });

    const collapseDone = (event) => {
      if (event.propertyName !== "max-height") {
        return;
      }
      body.hidden = true;
      body.removeEventListener("transitionend", collapseDone);
      body._collapseHandler = null;
    };
    body._collapseHandler = collapseDone;
    body.addEventListener("transitionend", collapseDone);
  }

  trigger.setAttribute("aria-expanded", String(shouldExpand));
  section.classList.toggle("is-open", shouldExpand);
  symbol.textContent = "";
  window.setTimeout(updateScrollProgress, 60);
}

function ensureReplacementMythsOpen() {
  if (!isReplacementPage) {
    return;
  }

  const mythsSection = document.querySelector("#israel-myths");
  if (mythsSection?._sectionToggleTrigger) {
    setSectionExpanded(mythsSection, true, true);
  }
}

function initSectionAccordions() {
  const sections = [...document.querySelectorAll("section.panel")];

  sections.forEach((section, index) => {
    if (section.dataset.sectionAccordionReady === "1") {
      return;
    }

    let trigger = section.querySelector(":scope > .section-head") ||
      section.querySelector(":scope > h2, :scope > h3");
    let generatedTrigger = false;

    if (!trigger) {
      generatedTrigger = true;
      trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "section-toggle section-toggle-generated";
      trigger.textContent = section.id === "view-tabs" ? "Search and View Controls" : "Section";
      section.prepend(trigger);
    }

    const siblings = [...section.children];
    const triggerIndex = siblings.indexOf(trigger);
    if (triggerIndex < 0 || triggerIndex === siblings.length - 1) {
      return;
    }

    const body = document.createElement("div");
    body.className = "section-collapse-body";
    const nodesToWrap = siblings.slice(triggerIndex + 1);
    nodesToWrap.forEach((node) => {
      body.appendChild(node);
    });
    section.appendChild(body);

    section.classList.add("section-accordion");
    trigger.classList.add("section-toggle");
    if (!generatedTrigger) {
      trigger.setAttribute("role", "button");
      trigger.setAttribute("tabindex", "0");
    }

    const baseBodyId = section.id || `panel-${index + 1}`;
    let bodyId = `${baseBodyId}-body`;
    let suffix = 1;
    while (document.getElementById(bodyId)) {
      bodyId = `${baseBodyId}-body-${suffix}`;
      suffix += 1;
    }
    body.id = bodyId;
    trigger.setAttribute("aria-controls", body.id);

    const symbol = document.createElement("span");
    symbol.className = "section-symbol";
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = "";
    trigger.appendChild(symbol);

    const toggle = () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      setSectionExpanded(section, !expanded);
    };

    trigger.addEventListener("click", toggle);
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });

    section._sectionToggleTrigger = trigger;
    section._sectionBody = body;
    section._sectionSymbol = symbol;
    section.dataset.sectionAccordionReady = "1";
    setSectionExpanded(section, false, true);
  });
}

function setView(viewName) {
  if (!studyView || !compareView || !tabStudy || !tabCompare) {
    return;
  }
  currentView = viewName;
  const showStudy = viewName === "study";
  const incoming = showStudy ? studyView : compareView;
  const outgoing = showStudy ? compareView : studyView;

  animateViewOut(outgoing);
  animateViewIn(incoming);

  tabStudy.classList.toggle("active", showStudy);
  tabCompare.classList.toggle("active", !showStudy);

  tabStudy.setAttribute("aria-selected", String(showStudy));
  tabCompare.setAttribute("aria-selected", String(!showStudy));
}

function renderEmptyState(container, message) {
  const item = document.createElement("p");
  item.className = "empty-state";
  item.textContent = message;
  container.appendChild(item);
}

function hasSearchMatch(fields) {
  if (!currentSearchTokens.length) {
    return true;
  }

  const haystack = normalizeSearchText(fields.filter(Boolean).join(" "));

  return currentSearchTokens.every((token) => haystack.includes(token));
}

function getReplyTheme(entry) {
  const title = entry.title.toLowerCase();
  if (title.includes("romans 9") || title.includes("jacob") || title.includes("esau")) {
    return "Romans 9 / Election";
  }
  if (
    title.includes("atonement") ||
    title.includes("world") ||
    title.includes("all means") ||
    title.includes("ransom")
  ) {
    return "Atonement Scope";
  }
  if (
    title.includes("determin") ||
    title.includes("compatibil") ||
    title.includes("maverick") ||
    title.includes("ordain") ||
    title.includes("foreknowledge") ||
    title.includes("dead")
  ) {
    return "Determinism / Agency";
  }
  if (
    title.includes("deception") ||
    title.includes("trust") ||
    title.includes("reliability") ||
    title.includes("epistem")
  ) {
    return "Epistemic";
  }
  return "Method / Hermeneutics";
}

function getGlossaryTheme(entry) {
  const blob = `${entry.term} ${entry.definition}`.toLowerCase();
  if (
    blob.includes("supersession") ||
    blob.includes("preter") ||
    blob.includes("amillennial") ||
    blob.includes("recapitulation") ||
    blob.includes("israel") ||
    blob.includes("covenant")
  ) {
    return "Replacement Theology";
  }
  if (
    blob.includes("determin") ||
    blob.includes("providence") ||
    blob.includes("compatibil") ||
    blob.includes("concurrence") ||
    blob.includes("culpability") ||
    blob.includes("maverick")
  ) {
    return "Determinism / Providence";
  }
  if (
    blob.includes("hermeneutic") ||
    blob.includes("definition drift") ||
    blob.includes("certainty") ||
    blob.includes("contingency") ||
    blob.includes("totality claim")
  ) {
    return "Method / Epistemology";
  }
  return "Soteriology";
}

function getReplacementTheme(entry) {
  const title = entry.title.toLowerCase();
  if (title.includes("covenant") || title.includes("obsolete")) {
    return "Covenant Continuity";
  }
  if (title.includes("israel") || title.includes("grafted") || title.includes("hardening")) {
    return "Israel Identity";
  }
  if (title.includes("land") || title.includes("kingdom") || title.includes("acts")) {
    return "Kingdom / Land";
  }
  return "Prophecy / Symbolism";
}

function matchesReplyTheme(entry) {
  return currentReplyTheme === "All" || getReplyTheme(entry) === currentReplyTheme;
}

function matchesGlossaryTheme(entry) {
  return currentGlossaryTheme === "All" || getGlossaryTheme(entry) === currentGlossaryTheme;
}

function matchesReplacementTheme(entry) {
  return currentReplacementTheme === "All" || getReplacementTheme(entry) === currentReplacementTheme;
}

function matchesArgument(entry, toneKey) {
  return hasSearchMatch([
    entry.title,
    entry.tones[toneKey].claim,
    entry.tones[toneKey].logic,
    ...entry.references.flatMap((verse) => [verse.reference, verse.passage])
  ]);
}

function matchesClaimResponseEntry(entry, toneKey) {
  const truthText = typeof entry.truth === "object"
    ? Object.values(entry.truth).join(" ")
    : entry.truth;
  const truthLinks = (entry.truthLinks || []).flatMap((link) => [link.label, link.url]);
  const sourceText = (entry.pinnedSources || []).flatMap((source) => [
    source.label,
    source.url,
    source.summary
  ]);
  const evidenceText = (entry.evidenceAnchors || []).flatMap((anchor) => [
    anchor.claim,
    anchor.sourceLabel,
    anchor.sourceUrl
  ]);
  return hasSearchMatch([
    entry.title,
    entry.claimLabel,
    entry.responseLabel,
    entry.claim,
    truthText,
    entry.skepticObjection,
    entry.whyItFails,
    entry.falsificationTest,
    ...truthLinks,
    ...sourceText,
    ...evidenceText,
    entry.tones[toneKey],
    ...entry.references.flatMap((verse) => [verse.reference, verse.passage])
  ]);
}

function matchesLensVerse(entry) {
  return hasSearchMatch([entry.category, entry.reference, entry.passage]);
}

function matchesGlossaryEntry(entry) {
  const glossaryMatch = hasSearchMatchLocal(
    [entry.term, entry.definition, ...entry.references],
    currentGlossaryTokens
  );

  return (
    glossaryMatch &&
    matchesGlossaryTheme(entry) &&
    hasSearchMatch([entry.term, entry.definition, ...entry.references])
  );
}

function matchesDrilldownEntry(entry) {
  return hasSearchMatch([
    entry.title,
    ...entry.steps.flatMap((step) => [
      step.layer,
      step.objection,
      step.reply,
      step.calvinistReply,
      step.replacementReply,
      step.counterResponse,
      ...step.references.map((reference) => lookupPassage(reference)),
      ...step.references
    ])
  ]);
}

function hasSearchMatchLocal(fields, tokens) {
  if (!tokens.length) {
    return true;
  }

  const haystack = normalizeSearchText(fields.filter(Boolean).join(" "));
  return tokens.every((token) => haystack.includes(token));
}

function renderToneHeader(toneKey) {
  const profile = toneProfiles[toneKey];
  if (subtitle) {
    setHighlightedText(subtitle, profile.subtitle);
  }
  if (toneDescription) {
    setHighlightedText(toneDescription, profile.description);
  }
  if (introCopy) {
    setHighlightedText(introCopy, profile.intro);
  }
}

function renderArguments(toneKey) {
  if (!argumentList || !argumentTemplate) {
    return;
  }
  if (isSectionCollapsed(argumentList)) {
    argumentList._stale = true;
    argumentList._pendingRender = () => renderArguments(currentTone);
    return;
  }
  argumentList._stale = false;
  argumentList.innerHTML = "";

  const entries = argumentsData.filter((entry) => matchesArgument(entry, toneKey));

  if (!entries.length) {
    renderEmptyState(argumentList, "No core challenges matched your search.");
    return;
  }

  entries.forEach((entry, index) => {
    const node = argumentTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");
    article.classList.add("tilt-surface");
    applyStaggerClass(article, index);

    setHighlightedText(article.querySelector(".argument-title"), entry.title);
    setHighlightedText(article.querySelector(".argument-claim"), entry.tones[toneKey].claim);
    setHighlightedText(article.querySelector(".argument-logic"), entry.tones[toneKey].logic);

    const referenceList = article.querySelector(".reference-list");
    entry.references.forEach((verse) => {
      referenceList.appendChild(createPassageDetail(verse.reference, verse.passage));
    });

    initAccordionItem(article);
    argumentList.appendChild(node);
  });

  applyTiltEffects(argumentList);
}

function renderClaimResponseList(container, entries, toneKey, emptyMessage) {
  if (!container || !proofTemplate) {
    return;
  }
  if (isSectionCollapsed(container)) {
    container._stale = true;
    container._pendingRender = () => renderClaimResponseList(container, entries, currentTone, emptyMessage);
    return;
  }
  container._stale = false;
  container.innerHTML = "";

  const filteredEntries = entries.filter((entry) => matchesClaimResponseEntry(entry, toneKey));

  if (!filteredEntries.length) {
    renderEmptyState(container, emptyMessage);
    return;
  }

  filteredEntries.forEach((entry, index) => {
    const node = proofTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");
    article.classList.add("tilt-surface");
    applyStaggerClass(article, index);

    const mythBadge = article.querySelector(".myth-badge");
    if (entry.title.startsWith("Myth: ")) {
      setHighlightedText(article.querySelector(".argument-title"), entry.title.replace(/^Myth:\s*/, ""));
      if (mythBadge) mythBadge.hidden = false;
    } else {
      setHighlightedText(article.querySelector(".argument-title"), entry.title);
      if (mythBadge) mythBadge.hidden = true;
    }
    setHighlightedText(article.querySelector(".proof-claim-label"), entry.claimLabel);
    setHighlightedText(article.querySelector(".proof-response-label"), entry.responseLabel);
    setHighlightedText(article.querySelector(".proof-claim"), entry.claim);
    setHighlightedText(article.querySelector(".proof-response"), entry.tones[toneKey]);

    const truthLabel = article.querySelector(".proof-truth-label");
    const truthText = article.querySelector(".proof-truth");
    const entryTruth = typeof entry.truth === "object"
      ? (entry.truth[toneKey] || entry.truth.pastoral || "")
      : (entry.truth || "");
    if (truthLabel && truthText) {
      if (entryTruth) {
        setHighlightedText(truthLabel, entry.truthLabel || "Truth");
        setHighlightedText(truthText, entryTruth);
        truthText.innerHTML = truthText.innerHTML.replace(
          /\b(Steelman concern:|Truth:)(\s*)/g,
          '<strong class="truth-inline-label">$1</strong>$2'
        );
        truthLabel.hidden = false;
        truthText.hidden = false;
      } else {
        truthLabel.hidden = true;
        truthText.hidden = true;
      }
    }

    const truthLinksWrap = article.querySelector(".proof-truth-links-wrap");
    const truthLinksLabel = article.querySelector(".proof-truth-links-label");
    const truthLinksList = article.querySelector(".proof-truth-links");
    const truthLinks = Array.isArray(entry.truthLinks) ? entry.truthLinks : [];
    if (truthLinksWrap && truthLinksList) {
      truthLinksList.innerHTML = "";
      if (truthLinks.length) {
        if (truthLinksLabel) {
          setHighlightedText(truthLinksLabel, entry.truthLinksLabel || "Further Debunking");
        }
        truthLinks.forEach((link) => {
          if (link?.label && link?.url) {
            truthLinksList.appendChild(createExternalResourceLink(link.label, link.url));
          }
        });
        truthLinksWrap.hidden = truthLinksList.childElementCount === 0;
      } else {
        truthLinksWrap.hidden = true;
      }
    }

    const evidenceWrap = article.querySelector(".proof-evidence-wrap");
    const evidenceLabel = article.querySelector(".proof-evidence-label");
    const evidenceList = article.querySelector(".proof-evidence-list");
    const evidenceAnchors = Array.isArray(entry.evidenceAnchors) ? entry.evidenceAnchors : [];
    if (evidenceWrap && evidenceList) {
      evidenceList.innerHTML = "";
      if (evidenceAnchors.length) {
        if (evidenceLabel) {
          setHighlightedText(evidenceLabel, entry.evidenceAnchorsLabel || "Evidence Anchors");
        }
        evidenceAnchors.forEach((anchor) => {
          if (anchor?.claim && anchor?.sourceLabel && anchor?.sourceUrl) {
            evidenceList.appendChild(createEvidenceAnchorItem(anchor));
          }
        });
        evidenceWrap.hidden = evidenceList.childElementCount === 0;
      } else {
        evidenceWrap.hidden = true;
      }
    }

    const skepticLabel = article.querySelector(".proof-skeptic-label");
    const skepticText = article.querySelector(".proof-skeptic");
    if (skepticLabel && skepticText) {
      if (entry.skepticObjection) {
        setHighlightedText(skepticLabel, entry.skepticObjectionLabel || "Best Skeptic Objection");
        setHighlightedText(skepticText, entry.skepticObjection);
        skepticLabel.hidden = false;
        skepticText.hidden = false;
      } else {
        skepticLabel.hidden = true;
        skepticText.hidden = true;
      }
    }

    const whyFailsLabel = article.querySelector(".proof-why-fails-label");
    const whyFailsText = article.querySelector(".proof-why-fails");
    if (whyFailsLabel && whyFailsText) {
      if (entry.whyItFails) {
        setHighlightedText(whyFailsLabel, entry.whyItFailsLabel || "Why It Fails");
        setHighlightedText(whyFailsText, entry.whyItFails);
        whyFailsLabel.hidden = false;
        whyFailsText.hidden = false;
      } else {
        whyFailsLabel.hidden = true;
        whyFailsText.hidden = true;
      }
    }

    const falsifyLabel = article.querySelector(".proof-falsify-label");
    const falsifyText = article.querySelector(".proof-falsify");
    if (falsifyLabel && falsifyText) {
      if (entry.falsificationTest) {
        setHighlightedText(
          falsifyLabel,
          entry.falsificationLabel || "What Would Falsify This Rebuttal?"
        );
        setHighlightedText(falsifyText, entry.falsificationTest);
        falsifyLabel.hidden = false;
        falsifyText.hidden = false;
      } else {
        falsifyLabel.hidden = true;
        falsifyText.hidden = true;
      }
    }

    const sourcesWrap = article.querySelector(".proof-sources-wrap");
    const sourcesLabel = article.querySelector(".proof-sources-label");
    const sourcesList = article.querySelector(".proof-sources-list");
    const pinnedSources = Array.isArray(entry.pinnedSources) ? entry.pinnedSources : [];
    if (sourcesWrap && sourcesList) {
      sourcesList.innerHTML = "";
      if (pinnedSources.length) {
        if (sourcesLabel) {
          setHighlightedText(sourcesLabel, entry.pinnedSourcesLabel || "Pinned Sources");
        }
        pinnedSources.forEach((source) => {
          if (source?.label && source?.url && source?.summary) {
            sourcesList.appendChild(createPinnedSourceItem(source));
          }
        });
        sourcesWrap.hidden = sourcesList.childElementCount === 0;
      } else {
        sourcesWrap.hidden = true;
      }
    }

    const referenceList = article.querySelector(".reference-list");
    if (referenceList && Array.isArray(entry.references)) {
      entry.references.forEach((verse) => {
        referenceList.appendChild(createPassageDetail(verse.reference, verse.passage));
      });
    }

    initAccordionItem(article);
    container.appendChild(node);
  });

  applyTiltEffects(container);
}

function renderReplyThemeFilters() {
  if (!replyThemeFilters || isReplacementPage) {
    return;
  }

  replyThemeFilters.innerHTML = "";
  const themes = ["All", ...new Set(commonRepliesData.map((entry) => getReplyTheme(entry)))];
  themes.forEach((theme) => {
    const count = theme === "All"
      ? commonRepliesData.length
      : commonRepliesData.filter((entry) => getReplyTheme(entry) === theme).length;
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.type = "button";
    button.textContent = `${theme} (${count})`;
    button.classList.toggle("active", theme === currentReplyTheme);
    button.addEventListener("click", () => {
      currentReplyTheme = theme;
      renderAllForTone(currentTone);
    });
    replyThemeFilters.appendChild(button);
  });
}

function renderGlossaryThemeFilters() {
  if (!glossaryThemeFilters) {
    return;
  }

  glossaryThemeFilters.innerHTML = "";
  const themes = ["All", ...new Set(glossaryData.map((entry) => getGlossaryTheme(entry)))];
  themes.forEach((theme) => {
    const count = theme === "All"
      ? glossaryData.length
      : glossaryData.filter((entry) => getGlossaryTheme(entry) === theme).length;
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.type = "button";
    button.textContent = `${theme} (${count})`;
    button.classList.toggle("active", theme === currentGlossaryTheme);
    button.addEventListener("click", () => {
      currentGlossaryTheme = theme;
      renderAllForTone(currentTone);
    });
    glossaryThemeFilters.appendChild(button);
  });
}

function renderReplacementThemeFilters() {
  if (!replacementThemeFilters || !isReplacementPage) {
    return;
  }

  replacementThemeFilters.innerHTML = "";
  const themes = ["All", ...new Set(replacementTheologyData.map((entry) => getReplacementTheme(entry)))];
  themes.forEach((theme) => {
    const count = theme === "All"
      ? replacementTheologyData.length
      : replacementTheologyData.filter((entry) => getReplacementTheme(entry) === theme).length;
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.type = "button";
    button.textContent = `${theme} (${count})`;
    button.classList.toggle("active", theme === currentReplacementTheme);
    button.addEventListener("click", () => {
      currentReplacementTheme = theme;
      renderAllForTone(currentTone);
    });
    replacementThemeFilters.appendChild(button);
  });
}

function renderGlossary() {
  if (!glossaryList || !glossaryTemplate) {
    return;
  }
  if (isSectionCollapsed(glossaryList)) {
    glossaryList._stale = true;
    glossaryList._pendingRender = () => renderGlossary();
    return;
  }
  glossaryList._stale = false;
  glossaryList.innerHTML = "";
  const entries = glossaryData.filter((entry) => matchesGlossaryEntry(entry));

  if (!entries.length) {
    renderEmptyState(glossaryList, "No glossary terms matched your search.");
    return;
  }

  entries.forEach((entry, index) => {
    const node = glossaryTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");
    article.classList.add("tilt-surface");
    applyStaggerClass(article, index);

    setHighlightedText(article.querySelector(".argument-title"), entry.term);
    setHighlightedText(article.querySelector(".glossary-definition"), entry.definition);

    const referenceList = article.querySelector(".reference-list");
    entry.references.forEach((reference) => {
      referenceList.appendChild(createPassageDetail(reference, lookupPassage(reference)));
    });

    initAccordionItem(article);
    glossaryList.appendChild(node);
  });

  applyTiltEffects(glossaryList);
}

function updateQuickJumpCounts(toneKey) {
  if (countCore) {
    countCore.textContent = String(
      argumentsData.filter((entry) => matchesArgument(entry, toneKey)).length
    );
  }
  if (countProof) {
    countProof.textContent = String(
      proofTextsData.filter((entry) => matchesClaimResponseEntry(entry, toneKey)).length
    );
  }
  if (countReplies) {
    countReplies.textContent = String(
      commonRepliesData
        .filter((entry) => matchesReplyTheme(entry))
        .filter((entry) => matchesClaimResponseEntry(entry, toneKey)).length
    );
  }
  if (countDrilldown) {
    countDrilldown.textContent = String(
      objectionDrilldownData.filter((entry) => matchesDrilldownEntry(entry)).length
    );
  }
  if (countSlope) {
    countSlope.textContent = String(
      tulipDeterminismSlopeData.filter((entry) => matchesDrilldownEntry(entry)).length
    );
  }
  if (countEpistemic) {
    countEpistemic.textContent = String(
      epistemicChallengeData.filter((entry) => matchesClaimResponseEntry(entry, toneKey)).length
    );
  }
  if (countGlossary) {
    countGlossary.textContent = String(
      glossaryData.filter((entry) => matchesGlossaryEntry(entry)).length
    );
  }
  if (countReplacement) {
    countReplacement.textContent = String(
      replacementTheologyData
        .filter((entry) => matchesReplacementTheme(entry))
        .filter((entry) => matchesClaimResponseEntry(entry, toneKey)).length
    );
  }
  if (countReplacementDrilldown) {
    countReplacementDrilldown.textContent = String(
      replacementDrilldownData.filter((entry) => matchesDrilldownEntry(entry)).length
    );
  }
  if (countPropaganda) {
    countPropaganda.textContent = String(
      replacementPropagandaData.filter((entry) => matchesClaimResponseEntry(entry, toneKey)).length
    );
  }
}

function renderDrilldownList(container, entries, emptyMessage, replyLabelText) {
  if (!container || !drilldownTemplate) {
    return;
  }
  if (isSectionCollapsed(container)) {
    container._stale = true;
    container._pendingRender = () => renderDrilldownList(container, entries, emptyMessage, replyLabelText);
    return;
  }
  container._stale = false;
  container.innerHTML = "";
  const filteredEntries = entries.filter((entry) => matchesDrilldownEntry(entry));

  if (!filteredEntries.length) {
    renderEmptyState(container, emptyMessage);
    return;
  }

  filteredEntries.forEach((entry, index) => {
    const node = drilldownTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");
    article.classList.add("tilt-surface");
    applyStaggerClass(article, index);
    setHighlightedText(article.querySelector(".argument-title"), entry.title);

    const stepsContainer = article.querySelector(".drilldown-steps");
    entry.steps.forEach((step) => {
      const stepNode = document.createElement("div");
      stepNode.className = "drill-step";

      const layer = document.createElement("h3");
      setHighlightedText(layer, step.layer);

      const objectionLabel = document.createElement("h4");
      objectionLabel.textContent = "Objection";
      const objectionText = document.createElement("p");
      setHighlightedText(objectionText, step.objection);

      const replyLabel = document.createElement("h4");
      replyLabel.textContent = replyLabelText;
      const replyText = document.createElement("p");
      setHighlightedText(replyText, step.reply || step.calvinistReply || step.replacementReply || "");

      const counterLabel = document.createElement("h4");
      counterLabel.textContent = "Counter-Response";
      const counterText = document.createElement("p");
      setHighlightedText(counterText, step.counterResponse);

      const refsLabel = document.createElement("h4");
      refsLabel.textContent = "KJV References";
      const refs = document.createElement("div");
      refs.className = "reference-list";

      step.references.forEach((reference) => {
        refs.appendChild(createPassageDetail(reference, lookupPassage(reference)));
      });

      stepNode.append(
        layer,
        objectionLabel,
        objectionText,
        replyLabel,
        replyText,
        counterLabel,
        counterText,
        refsLabel,
        refs
      );
      stepsContainer.appendChild(stepNode);
    });

    initAccordionItem(article);
    container.appendChild(node);
  });

  applyTiltEffects(container);
}

function renderDrilldown() {
  renderDrilldownList(
    drilldownList,
    objectionDrilldownData,
    "No Calvinism objection drilldown entries matched your search.",
    "Calvinist Reply"
  );
}

function renderTulipSlope() {
  renderDrilldownList(
    tulipSlopeList,
    tulipDeterminismSlopeData,
    "No TULIP determinism slope entries matched your search.",
    "Determinist Inference"
  );
}

function renderReplacementDrilldown() {
  renderDrilldownList(
    replacementDrilldownList,
    replacementDrilldownData,
    "No replacement theology drilldown entries matched your search.",
    "Replacement Reply"
  );
}

function renderEpistemicChallenges(toneKey) {
  renderClaimResponseList(
    epistemicList,
    epistemicChallengeData,
    toneKey,
    "No epistemic challenge entries matched your search."
  );
}

function createChapterSkeleton(lineCount = 10) {
  const skeleton = document.createElement("div");
  skeleton.className = "chapter-skeleton";
  for (let i = 0; i < lineCount; i += 1) {
    const line = document.createElement("div");
    line.className = "skeleton-line";
    skeleton.appendChild(line);
  }
  return skeleton;
}

async function renderContextViewer() {
  if (!contextOutput || !contextSelect) {
    return;
  }
  const renderToken = ++contextRenderToken;
  contextOutput.innerHTML = "";

  const candidates = contextReferencePool.filter((entry) =>
    hasSearchMatch([
      entry.reference,
      entry.passage,
      getChapterKey(entry.reference),
      chapterContextNotes[getChapterKey(entry.reference)] || ""
    ])
  );

  contextSelect.innerHTML = "";
  if (!candidates.length) {
    contextSelect.disabled = true;
    renderEmptyState(contextOutput, "No context references matched your search.");
    return;
  }

  contextSelect.disabled = false;
  candidates.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.reference;
    option.textContent = entry.reference;
    contextSelect.appendChild(option);
  });

  if (!candidates.some((entry) => entry.reference === currentContextReference)) {
    currentContextReference = candidates[0].reference;
  }

  contextSelect.value = currentContextReference;

  const selected = candidates.find((entry) => entry.reference === currentContextReference);
  if (!selected) {
    renderEmptyState(contextOutput, "Select a reference to view context.");
    return;
  }

  const chapterKey = getChapterKey(selected.reference);
  const contextNote = chapterContextNotes[chapterKey] || "No chapter context note is available yet for this reference.";
  const selectedVerses = getSelectedVerseNumbers(selected.reference);
  const relatedRefs = contextReferencePool.filter(
    (entry) => getChapterKey(entry.reference) === chapterKey && entry.reference !== selected.reference
  );

  const selectedWrap = document.createElement("div");
  selectedWrap.className = "context-note tilt-surface";
  const selectedTitle = document.createElement("h3");
  setHighlightedText(selectedTitle, `Selected Reference: ${selected.reference}`);
  selectedWrap.append(selectedTitle, createPassageDetail(selected.reference, selected.passage, false));

  const noteWrap = document.createElement("div");
  noteWrap.className = "context-note tilt-surface";
  const noteTitle = document.createElement("h3");
  setHighlightedText(noteTitle, `Chapter Context: ${chapterKey}`);
  const noteText = document.createElement("p");
  setHighlightedText(noteText, contextNote);
  noteWrap.append(noteTitle, noteText);

  const relatedWrap = document.createElement("div");
  relatedWrap.className = "related-refs tilt-surface";
  const relatedTitle = document.createElement("h3");
  setHighlightedText(relatedTitle, "Related References In This Chapter");
  relatedWrap.appendChild(relatedTitle);

  if (!relatedRefs.length) {
    const empty = document.createElement("p");
    empty.textContent = "No additional references from this chapter are currently loaded.";
    relatedWrap.appendChild(empty);
  } else {
    const relatedList = document.createElement("ul");
    relatedList.className = "related-list";
    relatedRefs.forEach((entry) => {
      const li = document.createElement("li");
      setHighlightedText(li, entry.reference);
      relatedList.appendChild(li);
    });
    relatedWrap.appendChild(relatedList);
  }

  const chapterWrap = document.createElement("div");
  chapterWrap.className = "chapter-view tilt-surface";
  const chapterTitle = document.createElement("h3");
  setHighlightedText(chapterTitle, `Full KJV Chapter Text: ${chapterKey}`);
  const chapterContent = document.createElement("div");
  chapterContent.className = "chapter-content";
  chapterContent.appendChild(createChapterSkeleton());
  chapterWrap.append(chapterTitle, chapterContent);

  contextOutput.append(selectedWrap, noteWrap, relatedWrap, chapterWrap);
  applyStaggerClass(selectedWrap, 0);
  applyStaggerClass(noteWrap, 1);
  applyStaggerClass(relatedWrap, 2);
  applyStaggerClass(chapterWrap, 3);
  applyTiltEffects(contextOutput);

  try {
    const chapterData = await fetchKjvChapter(chapterKey);
    if (renderToken !== contextRenderToken) {
      return;
    }

    chapterContent.innerHTML = "";
    const versesContainer = document.createElement("div");
    versesContainer.className = "chapter-verses";

    chapterData.verses.forEach((verse) => {
      const verseLine = document.createElement("p");
      verseLine.className = "chapter-verse";
      if (selectedVerses.has(verse.verse)) {
        verseLine.classList.add("selected-verse");
      }

      const verseNum = document.createElement("span");
      verseNum.className = "chapter-verse-num";
      verseNum.textContent = String(verse.verse);

      const verseText = document.createElement("span");
      verseText.className = "chapter-verse-text";
      setHighlightedText(verseText, verse.text);

      verseLine.append(verseNum, verseText);
      versesContainer.appendChild(verseLine);
    });

    chapterContent.appendChild(versesContainer);
    updateScrollProgress();
  } catch (error) {
    if (renderToken !== contextRenderToken) {
      return;
    }

    chapterContent.innerHTML = "";
    const errorText = document.createElement("p");
    errorText.className = "empty-state";
    errorText.textContent =
      "Could not load full chapter text from the KJV API. You can still use the selected passage above.";
    chapterContent.appendChild(errorText);
    updateScrollProgress();
  }
}

function renderLogicSummary(toneKey) {
  if (!logicList) {
    return;
  }
  logicList.innerHTML = "";
  toneProfiles[toneKey].logicSummary.forEach((line) => {
    const item = document.createElement("li");
    setHighlightedText(item, line);
    logicList.appendChild(item);
  });
}

function renderFilters() {
  if (!filtersContainer) {
    return;
  }
  filtersContainer.innerHTML = "";

  const lensSource = isReplacementPage
    ? lensVerses.filter((item) => item.category.startsWith("RT "))
    : lensVerses.filter((item) => !item.category.startsWith("RT "));
  const categories = ["All", ...new Set(lensSource.map((item) => item.category))];

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("active", category === currentCategory);

    button.addEventListener("click", () => {
      currentCategory = category;
      filtersContainer
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.toggle("active", btn.textContent === category));
      renderVerseCards(category);
    });

    filtersContainer.appendChild(button);
  });
}

function renderComparisonFilters() {
  if (!comparisonFilters) {
    return;
  }
  comparisonFilters.innerHTML = "";
  const categories = isReplacementPage
    ? ["All", "Myth / Propaganda", "Replacement Theology", "Objection Drilldown"]
    : [
        "All",
        "Core Challenge",
        "Proof-Text",
        "Common Reply",
        "Epistemic Challenge",
        "Myth / Propaganda",
        "Determinism Slope",
        "Objection Drilldown"
      ];

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("active", category === currentComparisonType);

    button.addEventListener("click", () => {
      currentComparisonType = category;
      comparisonFilters
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.toggle("active", btn.textContent === category));
      renderComparison(currentTone);
    });

    comparisonFilters.appendChild(button);
  });
}

function renderVerseCards(category = "All") {
  if (!verseCards || !verseTemplate) {
    return;
  }
  verseCards.innerHTML = "";

  const lensSource = isReplacementPage
    ? lensVerses.filter((item) => item.category.startsWith("RT "))
    : lensVerses.filter((item) => !item.category.startsWith("RT "));

  const subset = (category === "All"
    ? lensSource
    : lensSource.filter((verse) => verse.category === category))
    .filter((verse) => matchesLensVerse(verse));

  if (!subset.length) {
    renderEmptyState(verseCards, "No verse references matched your search and filter.");
    return;
  }

  subset.forEach((verse, index) => {
    const node = verseTemplate.content.cloneNode(true);
    const card = node.querySelector(".verse-card");
    card.classList.add("tilt-surface");
    applyStaggerClass(card, index);

    setHighlightedText(card.querySelector(".verse-tag"), verse.category);
    card
      .querySelector(".reference-list")
      .appendChild(createPassageDetail(verse.reference, verse.passage));

    verseCards.appendChild(node);
  });

  applyTiltEffects(verseCards);
}

function buildComparisonItems(toneKey) {
  const coreItems = argumentsData.map((entry) => ({
    type: "Core Challenge",
    title: entry.title,
    claimLabel: "Challenge Claim",
    claim: entry.tones[toneKey].claim,
    response: entry.tones[toneKey].logic,
    references: entry.references
  }));

  const proofItems = proofTextsData.map((entry) => ({
    type: "Proof-Text",
    title: entry.title,
    claimLabel: entry.claimLabel,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const replyItems = commonRepliesData.map((entry) => ({
    type: "Common Reply",
    title: entry.title,
    claimLabel: entry.claimLabel,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const epistemicItems = epistemicChallengeData.map((entry) => ({
    type: "Epistemic Challenge",
    title: entry.title,
    claimLabel: entry.claimLabel,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const replacementItems = replacementTheologyData.map((entry) => ({
    type: "Replacement Theology",
    title: entry.title,
    claimLabel: entry.claimLabel,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const propagandaItems = replacementPropagandaData.map((entry) => ({
    type: "Myth / Propaganda",
    title: entry.title,
    claimLabel: entry.claimLabel,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const drilldownItems = objectionDrilldownData.flatMap((entry) =>
    entry.steps.map((step) => ({
      type: "Objection Drilldown",
      title: `${entry.title} - ${step.layer}`,
      claimLabel: "Calvinist Reply",
      claim: step.reply || step.calvinistReply || step.replacementReply || "",
      response: step.counterResponse,
      references: step.references.map((reference) => ({
        reference,
        passage: lookupPassage(reference)
      }))
      }))
  );

  const tulipSlopeItems = tulipDeterminismSlopeData.flatMap((entry) =>
    entry.steps.map((step) => ({
      type: "Determinism Slope",
      title: `${entry.title} - ${step.layer}`,
      claimLabel: "Determinist Inference",
      claim: step.reply || "",
      response: step.counterResponse,
      references: step.references.map((reference) => ({
        reference,
        passage: lookupPassage(reference)
      }))
      }))
  );

  const replacementDrilldownItems = replacementDrilldownData.flatMap((entry) =>
    entry.steps.map((step) => ({
      type: "Objection Drilldown",
      title: `${entry.title} - ${step.layer}`,
      claimLabel: "Replacement Reply",
      claim: step.reply || step.calvinistReply || step.replacementReply || "",
      response: step.counterResponse,
      references: step.references.map((reference) => ({
        reference,
        passage: lookupPassage(reference)
      }))
      }))
  );

  if (isReplacementPage) {
    return [...propagandaItems, ...replacementItems, ...replacementDrilldownItems];
  }

  return [
    ...coreItems,
    ...proofItems,
    ...replyItems,
    ...epistemicItems,
    ...propagandaItems,
    ...tulipSlopeItems,
    ...drilldownItems
  ];
}

function syncInlineSearchState(inputElement) {
  if (!inputElement) {
    return;
  }
  const inner = inputElement.closest(".search-input-inner");
  if (!inner) {
    return;
  }
  inner.classList.toggle("has-value", inputElement.value.length > 0);
}

function renderComparison(toneKey) {
  if (!comparisonGrid || !comparisonTemplate) {
    return;
  }
  comparisonGrid.innerHTML = "";

  const items = buildComparisonItems(toneKey)
    .filter((entry) => (currentComparisonType === "All" ? true : entry.type === currentComparisonType))
    .filter((entry) =>
      hasSearchMatch([
        entry.type,
        entry.title,
        entry.claim,
        entry.response,
        ...entry.references.flatMap((verse) => [verse.reference, verse.passage])
      ])
    );

  if (!items.length) {
    renderEmptyState(comparisonGrid, "No side-by-side entries matched your search and filter.");
    return;
  }

  items.forEach((entry, index) => {
    const node = comparisonTemplate.content.cloneNode(true);
    const card = node.querySelector(".compare-card");
    card.classList.add("tilt-surface");
    applyStaggerClass(card, index);

    setHighlightedText(card.querySelector(".compare-type"), entry.type);
    setHighlightedText(card.querySelector(".compare-title"), entry.title);
    setHighlightedText(card.querySelector(".compare-claim-heading"), entry.claimLabel || "Claim");
    setHighlightedText(card.querySelector(".compare-claim"), entry.claim);
    setHighlightedText(card.querySelector(".compare-response"), entry.response);

    const referenceList = card.querySelector(".reference-list");
    entry.references.forEach((verse) => {
      referenceList.appendChild(createPassageDetail(verse.reference, verse.passage));
    });

    comparisonGrid.appendChild(node);
  });

  applyTiltEffects(comparisonGrid);
}

function renderAllForTone(toneKey) {
  renderToneHeader(toneKey);
  renderGlossaryThemeFilters();
  updateQuickJumpCounts(toneKey);
  if (isReplacementPage) {
    renderReplacementThemeFilters();
    renderClaimResponseList(
      propagandaList,
      replacementPropagandaData,
      toneKey,
      "No myth-check entries matched your search."
    );
    ensureReplacementMythsOpen();
    renderClaimResponseList(
      replacementList,
      replacementTheologyData.filter((entry) => matchesReplacementTheme(entry)),
      toneKey,
      "No replacement theology entries matched your search."
    );
    renderGlossary();
    renderReplacementDrilldown();
  } else {
    renderReplyThemeFilters();
    renderGlossary();
    renderArguments(toneKey);
    renderClaimResponseList(
      proofList,
      proofTextsData,
      toneKey,
      "No proof-text rebuttals matched your search."
    );
    renderClaimResponseList(
      replyList,
      commonRepliesData.filter((entry) => matchesReplyTheme(entry)),
      toneKey,
      "No common replies matched your search."
    );
    renderClaimResponseList(
      propagandaList,
      replacementPropagandaData,
      toneKey,
      "No myth-check entries matched your search."
    );
    if (currentSearchQuery && propagandaList) {
      const propagandaSection = document.querySelector("#propaganda-checks");
      if (propagandaSection) {
        // Expand the section first — flushStaleLists runs inside setSectionExpanded,
        // rendering any deferred content before we try to expand individual items.
        setSectionExpanded(propagandaSection, true);
      }
      if (propagandaList.querySelector(".argument-item")) {
        expandAllArgumentItems(propagandaList);
      }
    }
    renderEpistemicChallenges(toneKey);
    renderDrilldown();
    renderTulipSlope();
  }
  renderContextViewer();
  renderLogicSummary(toneKey);
  renderComparison(toneKey);
}

if (toneSelect) {
  toneSelect.addEventListener("change", (event) => {
    currentTone = event.target.value;
    renderAllForTone(currentTone);
  });
}

const debouncedSearchRender = debounce((query) => {
  setCurrentSearchQuery(query);
  renderVerseCards(currentCategory);
  renderAllForTone(currentTone);
});

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    syncInlineSearchState(event.target);
    debouncedSearchRender(event.target.value);
  });
}

if (searchClear) {
  searchClear.addEventListener("click", () => {
    debouncedSearchRender.cancel();
    setCurrentSearchQuery("");
    if (searchInput) {
      searchInput.value = "";
      syncInlineSearchState(searchInput);
      searchInput.focus();
    }
    renderVerseCards(currentCategory);
    renderAllForTone(currentTone);
  });
}

const debouncedGlossaryRender = debounce((query) => {
  setCurrentGlossaryQuery(query);
  renderGlossary();
  updateQuickJumpCounts(currentTone);
});

if (glossaryInput) {
  glossaryInput.addEventListener("input", (event) => {
    syncInlineSearchState(event.target);
    debouncedGlossaryRender(event.target.value);
  });
}

if (glossaryClear) {
  glossaryClear.addEventListener("click", () => {
    debouncedGlossaryRender.cancel();
    setCurrentGlossaryQuery("");
    if (glossaryInput) {
      glossaryInput.value = "";
      syncInlineSearchState(glossaryInput);
      glossaryInput.focus();
    }
    renderGlossary();
    updateQuickJumpCounts(currentTone);
  });
}

if (contextSelect) {
  contextSelect.addEventListener("change", (event) => {
    currentContextReference = event.target.value;
    renderContextViewer();
  });
}

if (tabStudy) {
  tabStudy.addEventListener("click", () => {
    setView("study");
  });
}

if (tabCompare) {
  tabCompare.addEventListener("click", () => {
    setView("compare");
  });
}

quickJumpLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.dataset.jumpTarget;
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) {
      return;
    }
    event.preventDefault();
    setView("study");
    expandPanelChainFor(target);
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, prefersReducedMotion.matches ? 0 : 180);
  });
});

window.addEventListener(
  "scroll",
  () => {
    updateScrollProgress();
    updateBackgroundParallax();
  },
  { passive: true }
);

window.addEventListener("resize", () => {
  updateScrollProgress();
  updateBackgroundParallax();
});

if (typeof prefersReducedMotion.addEventListener === "function") {
  prefersReducedMotion.addEventListener("change", () => {
    updateBackgroundParallax();
  });
}

setupRevealStagger();
initSectionAccordions();

// Attach one delegated accordion click listener per list container (covers all
// current and future .argument-item children without per-card listeners).
[
  argumentList, proofList, replyList, epistemicList, propagandaList,
  replacementList, glossaryList, drilldownList, tulipSlopeList, replacementDrilldownList,
].filter(Boolean).forEach((container) => {
  container.addEventListener("click", handleAccordionClick);
});

setCurrentSearchQuery(searchInput ? searchInput.value : "");
setCurrentGlossaryQuery(glossaryInput ? glossaryInput.value : "");
syncInlineSearchState(searchInput);
syncInlineSearchState(glossaryInput);
renderFilters();
renderComparisonFilters();
renderVerseCards(currentCategory);
renderAllForTone(currentTone);
ensureReplacementMythsOpen();
setView(currentView);
applyTiltEffects(document);
updateScrollProgress();
updateBackgroundParallax();
