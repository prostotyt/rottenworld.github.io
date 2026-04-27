/* ═══════════════════════════════════════════════════════════════════════
   ROTTEN WORLD: POINT OF NO RETURN
   Interactive Manga Reader — Core Engine v1.0

   ╔═══════════════════════════════════════════════════════════╗
   ║                    ★ EDITOR AREA ★                       ║
   ║  Everything between the START and END markers is yours.  ║
   ║  Add seasons, episodes, images, choices, and audio here. ║
   ╚═══════════════════════════════════════════════════════════╝
   ═══════════════════════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────────────────────────────────
   ★ EDITOR AREA — START
   ─────────────────────────────────────────────────────────────────────

   HOW TO ADD CONTENT:
   ─────────────────────────────────────────────────────────────────────

   SEASONS:  Add a new object to the top-level MANGA_DATA array.
             Each season has: id, title, episodes[].

   EPISODES: Each episode has:
             - id:       string, e.g. "01"
             - title:    string, display name
             - pages:    array of PAGE objects (see below)

   PAGE TYPES (add to the pages[] array of any episode):
   ─────────────────────────────────────────────────────

   1. IMAGE PAGE
      { type: "image", src: "url/to/image.jpg", alt: "description" }

   2. PLACEHOLDER (built-in story card — use when you have no image yet)
      {
        type: "placeholder",
        sceneTag: "SCENE 01 — THE RUIN",    // small label at top
        character: "🧍",                     // emoji or icon
        speaker: "REN",                       // character name
        dialogue: "The text spoken or narrated here.",
        mood: true                            // shows mood bar below text
      }

   3. SCENE SEPARATOR (thin yellow glowing line between scenes)
      { type: "separator" }

   4. AUDIO TRIGGER
      {
        type:      "audio",
        src:       "audio/ambient.mp3",      // path to your audio file
        trackName: "Ambient — Dead City",    // display name in audio bar
        autoPrompt: true                     // show audio bar automatically
      }

   5. CHOICE TRIGGER (locks scroll, shows choice overlay)
      {
        type:    "choice",
        context: "He sees a shape through the smoke...",  // optional sub-text
        options: [
          {
            label: "Hey, kid. You okay?",
            goTo:  { season: 0, episode: 1 }   // 0-indexed season & episode
            // OR:
            // goTo: { season: 0, episode: 0, page: 5 }  — jump to a page index
          },
          {
            label: "What happened here?",
            goTo:  { season: 0, episode: 1 }
          }
        ]
      }

   ─────────────────────────────────────────────────────────────────────
   ★ NOTE ON IMAGE URLs:
     Replace the placeholder strings below with real image paths, e.g.:
     "images/ep01/page_01.jpg"
     "https://your-cdn.com/manga/s1/ep01/001.webp"
   ─────────────────────────────────────────────────────────────────────tml */

const MANGA_DATA = [

  /* ════════════════════════════════════════════════
     SEASON 1 — BEFORE THE FALL
     ════════════════════════════════════════════════ */
  {
    id: "S1",
    title: "Before the Fall",
    episodes: [

      /* ── EPISODE 01 ───────────────────────────── */
      {
        id: "01",
        title: "Point of No Return",
        pages: [

          /* ── SCENE 1: REN ARRIVES ── */
          {
            type: "placeholder",
            sceneTag: "SCENE 01 — THE GREY DISTRICT",
            character: "🧍",
            speaker: "NARRATION",
            dialogue: "Three weeks after the Collapse. The city doesn't smell like death anymore. It smells like nothing. That's worse.",
            mood: true
          },

          /*
           * REPLACE BELOW WITH REAL IMAGE:
           * { type: "image", src: "images/ep01/001.jpg", alt: "Ren walks through debris" }
           */
          {
            type: "placeholder",
            sceneTag: "SCENE 01 — PANEL 02",
            character: "🚶",
            speaker: "REN",
            dialogue: "...",
            mood: false
          },

          { type: "separator" },

          /* ── AUDIO CUE: AMBIENCE ── */
          {
            type: "audio",
            src: "",  /* ← Replace with: "audio/ambient_dead_city.mp3" */
            trackName: "Ambient — Dead City Rain",
            autoPrompt: true
          },

          /* ── SCENE 2: REN FINDS MIRA ── */
          {
            type: "placeholder",
            sceneTag: "SCENE 02 — COLLAPSED OVERPASS",
            character: "🧍",
            speaker: "NARRATION",
            dialogue: "He almost missed her. She was sitting perfectly still in the rubble, like she'd grown out of it. Like she belonged there.",
            mood: true
          },

          {
            type: "placeholder",
            sceneTag: "SCENE 02 — PANEL 02",
            character: "🧎",
            speaker: "NARRATION",
            dialogue: "She wasn't crying. She wasn't shaking. She was just... watching him. Dark eyes. No fear. That bothered him more than anything.",
            mood: true
          },

          /* ── CHOICE TRIGGER ── */
          {
            type: "choice",
            context: "Ren stops. She stares back at him from the debris. Neither of them moves.",
            options: [
              {
                label: "Hey, kid. You okay?",
                goTo: { season: 0, episode: 1 }
              },
              {
                label: "What happened here?",
                goTo: { season: 0, episode: 1 }
              }
            ]
          }

        ] /* end pages */
      }, /* end episode 01 */

      /* ── EPISODE 02 ───────────────────────────── */
      {
        id: "02",
        title: "She Doesn't Answer",
        pages: [

          {
            type: "placeholder",
            sceneTag: "SCENE 01 — OVERPASS (CONTINUED)",
            character: "🧎",
            speaker: "MIRA",
            dialogue: "...",
            mood: false
          },

          {
            type: "placeholder",
            sceneTag: "SCENE 01 — PANEL 02",
            speaker: "REN",
            character: "🧍",
            dialogue: "I asked you something.",
            mood: false
          },

          { type: "separator" },

          {
            type: "placeholder",
            sceneTag: "SCENE 01 — PANEL 03",
            speaker: "MIRA",
            character: "🧎",
            dialogue: "I heard you.",
            mood: true
          },

          {
            type: "placeholder",
            sceneTag: "SCENE 02 — CLOSE",
            speaker: "NARRATION",
            character: "👁",
            dialogue: "Her voice was flat. Not the flat of someone in shock. The flat of someone who had already decided what this world was worth.",
            mood: true
          },

          /* ── AUDIO CUE: MIRA'S THEME ── */
          {
            type: "audio",
            src: "",  /* ← Replace with: "audio/mira_theme.mp3" */
            trackName: "Mira's Theme — Hollow",
            autoPrompt: true
          },

          {
            type: "placeholder",
            sceneTag: "SCENE 03 — WIDE",
            speaker: "REN",
            character: "🧍",
            dialogue: "Are you alone out here?",
            mood: false
          },

          {
            type: "placeholder",
            sceneTag: "SCENE 03 — PANEL 02",
            speaker: "MIRA",
            character: "🧎",
            dialogue: "Aren't we all?",
            mood: true
          }

        ] /* end pages */
      } /* end episode 02 */

    ] /* end episodes */
  }, /* end season 1 */

  /* ════════════════════════════════════════════════
     SEASON 2 — (Add your season here)
     ════════════════════════════════════════════════
  {
    id: "S2",
    title: "After the Silence",
    episodes: [
      {
        id: "01",
        title: "New Episode Title",
        pages: [
          { type: "image", src: "images/s2ep01/001.jpg", alt: "..." },
        ]
      }
    ]
  }
  */

]; /* ═══ END OF MANGA_DATA ═══ */

/* ───────────────────────────────────────────────────────────────────────
   ★ EDITOR AREA — END
   ─────────────────────────────────────────────────────────────────────
   DO NOT MODIFY ANYTHING BELOW THIS LINE UNLESS YOU KNOW WHAT YOU'RE
   DOING. THE CORE ENGINE LIVES HERE.
   ─────────────────────────────────────────────────────────────────────── */


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — STATE
   ═══════════════════════════════════════════════════════════════════════ */
const STATE = {
  currentSeason:  0,
  currentEpisode: 0,
  scrollLocked:   false,
  choiceActive:   false,
  audio: {
    element:    null,
    playing:    false,
    fadeTimer:  null,
    currentSrc: null
  }
};

/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — DOM REFERENCES
   ═══════════════════════════════════════════════════════════════════════ */
const DOM = {
  seasonOverlay:   document.getElementById('season-overlay'),
  seasonList:      document.getElementById('season-list'),
  seasonToggleBtn: document.getElementById('season-toggle-btn'),
  seasonCloseBtn:  document.getElementById('season-close-btn'),

  header:          document.getElementById('main-header'),
  headerEpNum:     document.getElementById('header-episode-num'),
  headerEpTitle:   document.getElementById('header-ep-title'),

  audioBar:        document.getElementById('audio-bar'),
  audioTrackName:  document.getElementById('audio-track-name'),
  audioPlayBtn:    document.getElementById('audio-play-btn'),
  audioProgress:   document.getElementById('audio-progress-fill'),
  audioDismissBtn: document.getElementById('audio-dismiss-btn'),

  scrollContainer: document.getElementById('scroll-container'),
  pagesContainer:  document.getElementById('pages-container'),

  choiceOverlay:   document.getElementById('choice-overlay'),
  choiceContext:   document.getElementById('choice-context'),
  choiceButtons:   document.getElementById('choice-buttons'),
  scrollLockHint:  document.getElementById('scroll-lock-hint'),

  episodeEndScreen: document.getElementById('episode-end-screen'),
  endEpisodeNum:    document.getElementById('end-episode-num'),
  endEpisodeTitle:  document.getElementById('end-episode-title'),
  nextEpisodeBtn:   document.getElementById('next-episode-btn'),
  endSeasonBtn:     document.getElementById('end-season-btn')
};


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — SEASON OVERLAY
   ═══════════════════════════════════════════════════════════════════════ */
function buildSeasonOverlay() {
  DOM.seasonList.innerHTML = '';
  MANGA_DATA.forEach((season, si) => {
    const btn = document.createElement('button');
    btn.className = 'season-item' + (si === STATE.currentSeason ? ' active' : '');
    const epCount = season.episodes.length;
    btn.innerHTML = `
      <div class="season-item-num">${season.id}</div>
      <div class="season-item-info">
        <div class="season-item-label">SEASON</div>
        <div class="season-item-title">${season.title}</div>
        <div class="season-item-eps">${epCount} Episode${epCount !== 1 ? 's' : ''}</div>
      </div>
    `;
    btn.addEventListener('click', () => {
      STATE.currentSeason = si;
      STATE.currentEpisode = 0;
      closeSeasonOverlay();
      loadEpisode(si, 0);
    });
    DOM.seasonList.appendChild(btn);
  });
}

function openSeasonOverlay() {
  buildSeasonOverlay();
  DOM.seasonOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeSeasonOverlay() {
  DOM.seasonOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

DOM.seasonToggleBtn.addEventListener('click', openSeasonOverlay);
DOM.seasonCloseBtn.addEventListener('click', closeSeasonOverlay);
DOM.seasonOverlay.addEventListener('click', (e) => {
  if (e.target === DOM.seasonOverlay) closeSeasonOverlay();
});


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — HEADER
   ═══════════════════════════════════════════════════════════════════════ */
function updateHeader(seasonIndex, episodeIndex) {
  const ep = MANGA_DATA[seasonIndex]?.episodes[episodeIndex];
  if (!ep) return;
  DOM.headerEpNum.textContent = ep.id;
  DOM.headerEpTitle.textContent = ep.title;
}


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — AUDIO SYSTEM
   ═══════════════════════════════════════════════════════════════════════ */
function initAudio() {
  if (!STATE.audio.element) {
    STATE.audio.element = new Audio();
    STATE.audio.element.volume = 0;

    STATE.audio.element.addEventListener('timeupdate', () => {
      const a = STATE.audio.element;
      if (a.duration) {
        const pct = (a.currentTime / a.duration) * 100;
        DOM.audioProgress.style.width = pct + '%';
      }
    });

    STATE.audio.element.addEventListener('ended', () => {
      STATE.audio.playing = false;
      updatePlayBtn();
      DOM.audioProgress.style.width = '0%';
    });
  }
}

function triggerAudio(src, trackName, autoPrompt) {
  initAudio();

  // If no src is set (empty string), show bar but disable play
  DOM.audioTrackName.textContent = trackName || 'Unknown Track';
  DOM.audioBar.classList.remove('hidden');
  DOM.audioBar.style.display = '';

  if (!src) {
    // No file attached yet — show bar grayed out
    DOM.audioPlayBtn.style.opacity = '0.4';
    DOM.audioPlayBtn.title = 'No audio file set';
    DOM.audioBar.classList.add('visible');
    return;
  }

  DOM.audioPlayBtn.style.opacity = '1';
  DOM.audioPlayBtn.title = 'Play';

  if (STATE.audio.currentSrc !== src) {
    STATE.audio.element.src = src;
    STATE.audio.element.load();
    STATE.audio.currentSrc = src;
    STATE.audio.playing = false;
    DOM.audioProgress.style.width = '0%';
  }

  // Show bar with animation
  requestAnimationFrame(() => {
    DOM.audioBar.classList.add('visible');
  });

  if (autoPrompt) {
    // Don't auto-play; browser policy requires user gesture
    updatePlayBtn();
  }
}

function fadeAudio(targetVolume, duration = 600, callback) {
  const audio = STATE.audio.element;
  if (!audio) return;
  clearInterval(STATE.audio.fadeTimer);

  const steps = 30;
  const interval = duration / steps;
  const startVol = audio.volume;
  const delta = (targetVolume - startVol) / steps;
  let step = 0;

  STATE.audio.fadeTimer = setInterval(() => {
    step++;
    audio.volume = Math.max(0, Math.min(1, startVol + delta * step));
    if (step >= steps) {
      clearInterval(STATE.audio.fadeTimer);
      audio.volume = targetVolume;
      if (callback) callback();
    }
  }, interval);
}

function playAudio() {
  const audio = STATE.audio.element;
  if (!audio || !audio.src || audio.src === window.location.href) return;
  audio.volume = 0;
  audio.play().then(() => {
    STATE.audio.playing = true;
    updatePlayBtn();
    fadeAudio(0.75, 800);
  }).catch(() => {
    console.warn('[Audio] Playback blocked. User gesture required.');
  });
}

function pauseAudio() {
  const audio = STATE.audio.element;
  if (!audio) return;
  fadeAudio(0, 600, () => {
    audio.pause();
    STATE.audio.playing = false;
    updatePlayBtn();
  });
}

function updatePlayBtn() {
  const icon = DOM.audioPlayBtn.querySelector('.play-icon');
  if (!icon) return;
  icon.textContent = STATE.audio.playing ? '⏸' : '▶';
}

function hideAudioBar() {
  DOM.audioBar.classList.remove('visible');
  setTimeout(() => DOM.audioBar.classList.add('hidden'), 450);
}

DOM.audioPlayBtn.addEventListener('click', () => {
  if (STATE.audio.playing) {
    pauseAudio();
  } else {
    playAudio();
  }
});

DOM.audioDismissBtn.addEventListener('click', () => {
  if (STATE.audio.playing) pauseAudio();
  hideAudioBar();
});


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — CHOICE SYSTEM
   ═══════════════════════════════════════════════════════════════════════ */
function showChoice(choiceData) {
  STATE.choiceActive = true;
  lockScroll();

  DOM.choiceContext.textContent = choiceData.context || '';
  DOM.choiceButtons.innerHTML = '';

  choiceData.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `
      <span class="choice-btn-num">${i + 1}</span>
      <span class="choice-btn-text">${opt.label}</span>
      <span class="choice-btn-arrow">→</span>
    `;
    btn.addEventListener('click', () => handleChoice(opt));
    DOM.choiceButtons.appendChild(btn);
  });

  // Animate in
  DOM.choiceOverlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    DOM.choiceOverlay.classList.add('open');
  });
}

function hideChoice() {
  DOM.choiceOverlay.classList.remove('open');
  DOM.scrollLockHint.classList.add('hidden');
  setTimeout(() => {
    DOM.choiceOverlay.classList.add('hidden');
    STATE.choiceActive = false;
    unlockScroll();
  }, 400);
}

function handleChoice(option) {
  hideChoice();

  if (!option.goTo) return;
  const { season, episode, page } = option.goTo;

  // Brief delay for transition feel
  setTimeout(() => {
    if (season !== undefined && episode !== undefined) {
      STATE.currentSeason = season;
      STATE.currentEpisode = episode;
      loadEpisode(season, episode, page || 0);
    }
  }, 300);
}


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — SCROLL LOCK
   ═══════════════════════════════════════════════════════════════════════ */
function lockScroll() {
  STATE.scrollLocked = true;
  DOM.scrollLockHint.classList.remove('hidden');

  // Prevent wheel and touch scroll beyond current position
  DOM.scrollContainer.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  STATE.scrollLocked = false;
  DOM.scrollLockHint.classList.add('hidden');
  DOM.scrollContainer.style.overflow = '';
  document.body.style.overflow = '';
}


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — PAGE BUILDERS
   ═══════════════════════════════════════════════════════════════════════ */
function buildImagePage(pageData) {
  const wrapper = document.createElement('div');
  wrapper.className = 'manga-page';

  const img = document.createElement('img');
  img.alt = pageData.alt || '';
  img.className = 'loading';

  img.addEventListener('load', () => {
    img.classList.remove('loading');
    img.classList.add('loaded');
  });
  img.addEventListener('error', () => {
    img.classList.remove('loading');
    img.classList.add('loaded');
    img.style.background = '#0a0a0a';
    img.style.minHeight = '300px';
  });

  img.src = pageData.src;
  wrapper.appendChild(img);
  return wrapper;
}

function buildPlaceholderPage(pageData) {
  const wrapper = document.createElement('div');
  wrapper.className = 'manga-page';

  const ph = document.createElement('div');
  ph.className = 'page-placeholder';
  ph.innerHTML = `
    ${pageData.sceneTag ? `<div class="placeholder-scene-tag">${pageData.sceneTag}</div>` : ''}
    ${pageData.character ? `<div class="placeholder-char">${pageData.character}</div>` : ''}
    <div class="placeholder-dialogue">
      ${pageData.speaker ? `<div class="placeholder-speaker">${pageData.speaker}</div>` : ''}
      ${pageData.dialogue ? `<div class="placeholder-text">${pageData.dialogue}</div>` : ''}
      ${pageData.mood ? `<div class="placeholder-mood-bar" style="margin:12px auto 0;"></div>` : ''}
    </div>
  `;

  wrapper.appendChild(ph);
  return wrapper;
}

function buildSeparator() {
  const wrapper = document.createElement('div');
  wrapper.className = 'manga-page';
  const sep = document.createElement('div');
  sep.className = 'scene-separator';
  wrapper.appendChild(sep);
  return wrapper;
}

function buildAudioTrigger(pageData, triggerCallback) {
  const wrapper = document.createElement('div');
  wrapper.className = 'audio-trigger-block';
  wrapper.dataset.audioSrc = pageData.src || '';
  wrapper.dataset.audioName = pageData.trackName || '';
  wrapper.dataset.audioAuto = pageData.autoPrompt ? '1' : '0';
  // Actual trigger is handled by IntersectionObserver
  return wrapper;
}

function buildChoiceTrigger(pageData) {
  const wrapper = document.createElement('div');
  wrapper.className = 'choice-anchor';
  wrapper.dataset.choiceData = JSON.stringify(pageData);
  return wrapper;
}

function buildEndSpacer() {
  const sp = document.createElement('div');
  sp.className = 'end-spacer';
  return sp;
}


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — INTERSECTION OBSERVER (Scroll animations + triggers)
   ═══════════════════════════════════════════════════════════════════════ */
let pageObserver = null;
let audioObserver = null;
let choiceObserver = null;
const triggeredAudio = new Set();
const triggeredChoice = new Set();

function setupObservers() {
  // ── Page fade-in observer ──
  if (pageObserver) pageObserver.disconnect();
  pageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.manga-page').forEach(el => pageObserver.observe(el));

  // ── Audio trigger observer ──
  if (audioObserver) audioObserver.disconnect();
  audioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggeredAudio.has(entry.target)) {
        triggeredAudio.add(entry.target);
        const src  = entry.target.dataset.audioSrc;
        const name = entry.target.dataset.audioName;
        const auto = entry.target.dataset.audioAuto === '1';
        triggerAudio(src, name, auto);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.audio-trigger-block').forEach(el => audioObserver.observe(el));

  // ── Choice trigger observer ──
  if (choiceObserver) choiceObserver.disconnect();
  choiceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggeredChoice.has(entry.target)) {
        triggeredChoice.add(entry.target);
        try {
          const data = JSON.parse(entry.target.dataset.choiceData);
          showChoice(data);
        } catch(e) {
          console.error('[Choice] Failed to parse choice data', e);
        }
      }
    });
  }, { threshold: 1.0 }); // 100% visible before triggering

  document.querySelectorAll('.choice-anchor').forEach(el => choiceObserver.observe(el));
}


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — EPISODE LOADER
   ═══════════════════════════════════════════════════════════════════════ */
function loadEpisode(seasonIndex, episodeIndex, startPage = 0) {
  const season  = MANGA_DATA[seasonIndex];
  const episode = season?.episodes[episodeIndex];
  if (!episode) {
    console.error(`[Reader] Episode not found: Season ${seasonIndex}, Episode ${episodeIndex}`);
    return;
  }

  STATE.currentSeason  = seasonIndex;
  STATE.currentEpisode = episodeIndex;

  // Reset state
  STATE.choiceActive = false;
  unlockScroll();
  hideChoice();
  hideAudioBar();
  triggeredAudio.clear();
  triggeredChoice.clear();
  DOM.episodeEndScreen.classList.add('hidden');

  // Update header
  updateHeader(seasonIndex, episodeIndex);

  // Clear container
  DOM.pagesContainer.innerHTML = '';

  // Build pages
  episode.pages.forEach((pageData) => {
    let el = null;

    switch (pageData.type) {
      case 'image':
        el = buildImagePage(pageData);
        break;
      case 'placeholder':
        el = buildPlaceholderPage(pageData);
        break;
      case 'separator':
        el = buildSeparator();
        break;
      case 'audio':
        el = buildAudioTrigger(pageData);
        break;
      case 'choice':
        el = buildChoiceTrigger(pageData);
        break;
      default:
        console.warn('[Reader] Unknown page type:', pageData.type);
        return;
    }

    if (el) DOM.pagesContainer.appendChild(el);
  });

  // End spacer + episode end trigger
  DOM.pagesContainer.appendChild(buildEndSpacer());
  addEndTrigger(seasonIndex, episodeIndex);

  // Scroll to top (or to startPage if specified)
  DOM.scrollContainer.scrollTo({ top: 0, behavior: 'instant' });

  // Setup observers after DOM is ready
  requestAnimationFrame(() => {
    setupObservers();
  });
}


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — EPISODE END TRIGGER
   ═══════════════════════════════════════════════════════════════════════ */
function addEndTrigger(seasonIndex, episodeIndex) {
  const sentinel = document.createElement('div');
  sentinel.style.height = '1px';
  sentinel.style.width = '100%';
  DOM.pagesContainer.appendChild(sentinel);

  const endObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        endObserver.disconnect();
        showEpisodeEnd(seasonIndex, episodeIndex);
      }
    });
  }, { threshold: 1.0 });

  endObserver.observe(sentinel);
}

function showEpisodeEnd(seasonIndex, episodeIndex) {
  if (STATE.choiceActive) return; // Don't show end if choice is pending

  const season  = MANGA_DATA[seasonIndex];
  const episode = season?.episodes[episodeIndex];
  if (!episode) return;

  const hasNext = !!season.episodes[episodeIndex + 1];

  DOM.endEpisodeNum.textContent   = episode.id;
  DOM.endEpisodeTitle.textContent = episode.title;
  DOM.episodeEndScreen.classList.remove('hidden');

  if (hasNext) {
    DOM.nextEpisodeBtn.classList.remove('hidden');
    DOM.nextEpisodeBtn.textContent = '';
    DOM.nextEpisodeBtn.innerHTML = `Next Episode <span class="next-arrow">→</span>`;
    DOM.nextEpisodeBtn.onclick = () => {
      DOM.episodeEndScreen.classList.add('hidden');
      loadEpisode(seasonIndex, episodeIndex + 1);
    };
  } else {
    DOM.nextEpisodeBtn.classList.add('hidden');
  }

  DOM.endSeasonBtn.onclick = openSeasonOverlay;
}


/* ═══════════════════════════════════════════════════════════════════════
   ENGINE — INIT
   ═══════════════════════════════════════════════════════════════════════ */
function init() {
  if (!MANGA_DATA || MANGA_DATA.length === 0) {
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;
                  height:100vh;font-family:'Unbounded',sans-serif;
                  color:rgba(255,255,255,0.3);font-size:12px;
                  letter-spacing:0.3em;text-align:center;padding:20px;">
        NO CONTENT FOUND.<br>Add episodes to MANGA_DATA in script.js.
      </div>`;
    return;
  }

  // Load the first episode of the first season
  loadEpisode(0, 0);
}

// Start the engine
document.addEventListener('DOMContentLoaded', init);
