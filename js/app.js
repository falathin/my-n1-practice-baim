import { availableDays, getDayById, getAllAvailableVocabulary } from './list/index.js';

const STORAGE = {
  progress: 'kotoba-n1:v1:progress',
  mode: 'kotoba-n1:v1:appearance',
  lastDay: 'kotoba-n1:v1:last-day',
  examHistory: 'kotoba-n1:v1:exam-history'
};
const STATUS = {
  unlearned: { label: 'Belum Hafal', className: 'status-unlearned' },
  pending: { label: 'Pending', className: 'status-pending' },
  learned: { label: 'Sudah Hafal', className: 'status-learned' }
};
const STATUS_ORDER = ['unlearned', 'pending', 'learned'];
const STATUS_DEFAULT = 'unlearned';
const EXAM_QUESTION_COUNT = 20;
const ALL_DAYS = availableDays;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function safeRead(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`Data ${key} tidak dapat dibaca. Menggunakan nilai awal.`, error);
    try { localStorage.removeItem(key); } catch { /* Penyimpanan mungkin dinonaktifkan. */ }
    return fallback;
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Data ${key} gagal disimpan.`, error);
    showToast('Penyimpanan browser tidak tersedia. Periksa pengaturan browser.');
    return false;
  }
}

function safeGetString(key, fallback) {
  try { return localStorage.getItem(key) || fallback; }
  catch { return fallback; }
}

function safeSetString(key, value) {
  try { localStorage.setItem(key, value); }
  catch { showToast('Pengaturan tidak dapat disimpan di browser ini.'); }
}

const state = {
  currentDayId: getDayById(safeGetString(STORAGE.lastDay, 'day1'))?.id || ALL_DAYS[0]?.id || 'day1',
  currentView: 'home',
  filter: 'all',
  query: '',
  selectedWordId: null,
  appearance: ['system', 'light', 'dark'].includes(safeGetString(STORAGE.mode, 'system'))
    ? safeGetString(STORAGE.mode, 'system') : 'system',
  progress: {},
  exam: null,
  examHistory: [],
  confirmAction: 'finish',
  toastTimer: null,
  restDismissed: false
};

function loadProgress() {
  const stored = safeRead(STORAGE.progress, {});
  state.progress = stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {};
  for (const day of ALL_DAYS) {
    if (!state.progress[day.id] || typeof state.progress[day.id] !== 'object' || Array.isArray(state.progress[day.id])) {
      state.progress[day.id] = {};
    }
    for (const word of day.vocabulary) {
      const current = state.progress[day.id][word.id];
      if (!STATUS_ORDER.includes(current)) state.progress[day.id][word.id] = STATUS_DEFAULT;
    }
  }
  safeWrite(STORAGE.progress, state.progress);
}

function persistProgress() {
  safeWrite(STORAGE.progress, state.progress);
}

function getCurrentDay() {
  return getDayById(state.currentDayId) || ALL_DAYS[0];
}

function getStatus(dayId, wordId) {
  const saved = state.progress?.[dayId]?.[wordId];
  return STATUS_ORDER.includes(saved) ? saved : STATUS_DEFAULT;
}

function setStatus(dayId, wordId, status) {
  if (!STATUS_ORDER.includes(status) || !state.progress[dayId]) return;
  state.progress[dayId][wordId] = status;
  persistProgress();
  renderAll();
  if (state.selectedWordId === wordId && $('#detail-modal') && !$('#detail-modal').hidden) {
    renderWordDetail(wordId);
  }
}

function cycleStatus(dayId, wordId) {
  const current = getStatus(dayId, wordId);
  const next = STATUS_ORDER[(STATUS_ORDER.indexOf(current) + 1) % STATUS_ORDER.length];
  setStatus(dayId, wordId, next);
  showToast(`Status diubah: ${STATUS[next].label}`);
}

function getStats(day) {
  const stats = { total: day.vocabulary.length, unlearned: 0, pending: 0, learned: 0 };
  for (const word of day.vocabulary) stats[getStatus(day.id, word.id)] += 1;
  stats.percent = stats.total ? Math.round((stats.learned / stats.total) * 100) : 0;
  return stats;
}

function isDayComplete(day) {
  return day.vocabulary.length > 0 && day.vocabulary.every((word) => getStatus(day.id, word.id) === 'learned');
}

function isCombinedComplete() {
  const allWords = getAllAvailableVocabulary();
  return allWords.length > 0 && ALL_DAYS.every((day) => day.vocabulary.every((word) => getStatus(day.id, word.id) === 'learned'));
}

function renderDaySelect() {
  const select = $('#day-select');
  select.replaceChildren();
  for (const day of ALL_DAYS) {
    const option = document.createElement('option');
    option.value = day.id;
    option.textContent = day.label;
    select.append(option);
  }
  select.value = state.currentDayId;
}

function switchDay(dayId) {
  const day = getDayById(dayId);
  if (!day) return;
  state.currentDayId = day.id;
  safeSetString(STORAGE.lastDay, day.id);
  state.filter = 'all';
  state.query = '';
  $('#vocab-search').value = '';
  $('#clear-search').hidden = true;
  $$('.filter-tab').forEach((button) => button.classList.toggle('is-selected', button.dataset.filter === 'all'));
  renderAll();
}

function switchView(view) {
  const validViews = ['home', 'vocabulary', 'exam'];
  if (!validViews.includes(view)) return;
  state.currentView = view;
  $$('.view').forEach((section) => {
    const active = section.id === `view-${view}`;
    section.classList.toggle('is-visible', active);
    section.hidden = !active;
  });
  $$('.nav-link').forEach((button) => button.classList.toggle('is-active', button.dataset.view === view));
  $('#main-content').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (view === 'exam') renderExamLobby();
}

function renderHome() {
  const day = getCurrentDay();
  const stats = getStats(day);
  $('#home-eyebrow').textContent = `CATATAN BELAJAR · ${day.label.toUpperCase()}`;
  $('#day-title').textContent = day.title;
  $('#stat-total').textContent = stats.total;
  $('#stat-unlearned').textContent = stats.unlearned;
  $('#stat-pending').textContent = stats.pending;
  $('#stat-learned').textContent = stats.learned;
  $('#progress-percent').textContent = `${stats.percent}%`;
  $('#home-progress-fill').style.width = `${stats.percent}%`;
  $('#home-progress').setAttribute('aria-valuenow', String(stats.percent));
  $('#progress-caption').textContent = stats.percent === 100
    ? 'Semua kosakata hari ini sudah kamu kuasai.'
    : stats.learned === 0 ? 'Mulai dari satu kata pertama.' : `${stats.learned} dari ${stats.total} kosakata sudah berstatus Sudah Hafal.`;
  $('#exam-home-status').textContent = isDayComplete(day)
    ? 'Ujian harian Day ini sudah terbuka. Siap menguji pemahamanmu?'
    : `Ujian harian terbuka setelah ${stats.unlearned + stats.pending} kosakata lagi berstatus Sudah Hafal.`;
  $('#today-date').textContent = new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date());
}

function makeStatusBadge(status, compact = false) {
  const badge = document.createElement('span');
  badge.className = `status-badge ${STATUS[status].className}${compact ? ' status-badge-compact' : ''}`;
  badge.textContent = STATUS[status].label;
  return badge;
}

function matchesSearch(word, query) {
  if (!query) return true;
  const haystack = [
    word.word, word.reading, word.meaning, word.explanation, word.nuance,
    ...(word.contexts || []), ...(word.examples || []).flatMap((example) => [example.japanese, example.furigana, example.translation])
  ].join(' ').toLocaleLowerCase('id');
  return haystack.includes(query.toLocaleLowerCase('id'));
}

function renderVocabularyList() {
  const day = getCurrentDay();
  const query = state.query.trim();
  const filtered = day.vocabulary.filter((word) => {
    const statusMatch = state.filter === 'all' || getStatus(day.id, word.id) === state.filter;
    return statusMatch && matchesSearch(word, query);
  });
  const list = $('#vocab-list');
  list.replaceChildren();
  for (const word of filtered) {
    const status = getStatus(day.id, word.id);
    const row = document.createElement('article');
    row.className = 'vocab-row';
    row.dataset.wordId = word.id;

    const open = document.createElement('button');
    open.type = 'button';
    open.className = 'vocab-row-main';
    open.dataset.openWord = word.id;
    open.setAttribute('aria-label', `Buka detail ${word.word}, ${word.meaning}`);

    const index = document.createElement('span');
    index.className = 'vocab-row-index';
    index.textContent = String(day.vocabulary.indexOf(word) + 1).padStart(2, '0');
    const wordBlock = document.createElement('span');
    wordBlock.className = 'vocab-word-block';
    const kanji = document.createElement('strong');
    kanji.className = 'vocab-kanji';
    kanji.textContent = word.word;
    const reading = document.createElement('span');
    reading.className = 'vocab-reading';
    reading.textContent = word.reading;
    wordBlock.append(kanji, reading);
    const meaning = document.createElement('span');
    meaning.className = 'vocab-meaning';
    meaning.textContent = word.meaning;
    const chevron = document.createElement('span');
    chevron.className = 'row-chevron';
    chevron.textContent = '↗';
    open.append(index, wordBlock, meaning, chevron);

    const statusButton = document.createElement('button');
    statusButton.type = 'button';
    statusButton.className = `row-status-button ${STATUS[status].className}`;
    statusButton.dataset.cycleStatus = word.id;
    statusButton.dataset.dayId = day.id;
    statusButton.textContent = STATUS[status].label;
    statusButton.title = 'Klik untuk mengganti status hafalan';
    statusButton.setAttribute('aria-label', `Status ${word.word}: ${STATUS[status].label}. Klik untuk mengubah.`);
    row.append(open, statusButton);
    list.append(row);
  }

  const stats = getStats(day);
  $('#list-result-count').textContent = `${filtered.length} dari ${day.vocabulary.length} kosakata`;
  $('#empty-state').hidden = filtered.length !== 0;
  list.hidden = filtered.length === 0;
  $('#filter-count-all').textContent = stats.total;
  $('#filter-count-unlearned').textContent = stats.unlearned;
  $('#filter-count-pending').textContent = stats.pending;
  $('#filter-count-learned').textContent = stats.learned;
  $('#vocab-day-label').textContent = day.label.toUpperCase();
  $('#clear-search').hidden = !query;
}

function renderWordDetail(wordId) {
  const day = getCurrentDay();
  const index = day.vocabulary.findIndex((word) => word.id === wordId);
  const word = day.vocabulary[index];
  if (!word) return;
  state.selectedWordId = wordId;
  $('#detail-day-label').textContent = `${day.label.toUpperCase()} VOCABULARY`;
  $('#detail-index').textContent = `${String(index + 1).padStart(2, '0')} / ${day.vocabulary.length}`;
  $('#detail-word').textContent = word.word;
  $('#detail-reading').textContent = word.reading;
  $('#detail-meaning').textContent = word.meaning;
  $('#detail-explanation').textContent = word.explanation;
  $('#detail-nuance').textContent = word.nuance;

  const statusControl = $('#detail-status-control');
  statusControl.replaceChildren();
  for (const status of STATUS_ORDER) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `detail-status-option ${STATUS[status].className}${getStatus(day.id, word.id) === status ? ' is-current' : ''}`;
    button.textContent = STATUS[status].label;
    button.setAttribute('aria-pressed', String(getStatus(day.id, word.id) === status));
    button.addEventListener('click', () => {
      setStatus(day.id, word.id, status);
      showToast(`Status diperbarui: ${STATUS[status].label}`);
    });
    statusControl.append(button);
  }

  const examples = $('#detail-examples');
  examples.replaceChildren();
  word.examples.forEach((example, i) => {
    const card = document.createElement('article');
    card.className = 'example-card';
    const number = document.createElement('span');
    number.className = 'example-number';
    number.textContent = `0${i + 1}`;
    const jp = document.createElement('p');
    jp.className = 'example-japanese';
    jp.textContent = example.japanese;
    const reading = document.createElement('p');
    reading.className = 'example-furigana';
    reading.textContent = example.furigana;
    const translation = document.createElement('p');
    translation.className = 'example-translation';
    translation.textContent = example.translation;
    card.append(number, jp, reading, translation);
    examples.append(card);
  });

  const contexts = $('#detail-contexts');
  contexts.replaceChildren();
  word.contexts.forEach((context) => {
    const tag = document.createElement('span');
    tag.className = 'context-tag';
    tag.textContent = context;
    contexts.append(tag);
  });

  $('#detail-previous').disabled = index === 0;
  $('#detail-next').disabled = index === day.vocabulary.length - 1;
}

function openModal(modal) {
  modal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => $('.modal-sheet', modal)?.focus());
}

function closeModal(modal) {
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  if ($$('.modal-backdrop:not([hidden])').length === 0) document.body.classList.remove('modal-open');
}

function openWord(wordId) {
  renderWordDetail(wordId);
  openModal($('#detail-modal'));
}

function moveDetail(direction) {
  const day = getCurrentDay();
  const index = day.vocabulary.findIndex((word) => word.id === state.selectedWordId);
  const target = day.vocabulary[index + direction];
  if (!target) return;
  renderWordDetail(target.id);
  $('.detail-sheet').scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

// Tema waktu lokal: pembagian jam dibuat eksplisit agar batas rentang konsisten.
const TIME_THEMES = [
  { id: 'dawn', label: 'Dini hari', start: 2, end: 4 },
  { id: 'morning', label: 'Pagi', start: 5, end: 8 },
  { id: 'late-morning', label: 'Menjelang siang', start: 9, end: 11 },
  { id: 'noon', label: 'Siang', start: 12, end: 14 },
  { id: 'afternoon', label: 'Sore', start: 15, end: 17 },
  { id: 'night', label: 'Malam', start: 18, end: 25 }
];

function getTimeTheme(hour) {
  if (hour >= 2 && hour <= 4) return TIME_THEMES[0];
  if (hour >= 5 && hour <= 8) return TIME_THEMES[1];
  if (hour >= 9 && hour <= 11) return TIME_THEMES[2];
  if (hour >= 12 && hour <= 14) return TIME_THEMES[3];
  if (hour >= 15 && hour <= 17) return TIME_THEMES[4];
  return TIME_THEMES[5]; // 18.00–01.59
}

function applyAppearance() {
  document.documentElement.dataset.appearance = state.appearance;
  $('#mode-select').value = state.appearance;
}

function updateTimeTheme() {
  const now = new Date();
  const theme = getTimeTheme(now.getHours());
  document.documentElement.dataset.timeTheme = theme.id;
  $('#theme-label').textContent = theme.label;
  $('#live-clock').textContent = new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }).format(now);
  $('#today-date').textContent = new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).format(now);
}

function checkRestReminder() {
  if (state.restDismissed || !$('#rest-modal').hidden) return;
  const hour = new Date().getHours();
  const inQuietHours = hour >= 22 || hour < 2;
  if (!inQuietHours) return;
  try {
    if (sessionStorage.getItem('kotoba-n1:rest-dismissed') === 'yes') { state.restDismissed = true; return; }
  } catch { /* sessionStorage mungkin tidak tersedia; state lokal tetap mencegah pengulangan. */ }
  openModal($('#rest-modal'));
}

function dismissRestReminder() {
  state.restDismissed = true;
  try { sessionStorage.setItem('kotoba-n1:rest-dismissed', 'yes'); } catch { /* Tetap tutup modal. */ }
  closeModal($('#rest-modal'));
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function uniqueByWord(words) {
  const seen = new Set();
  return words.filter((word) => {
    if (seen.has(word.word)) return false;
    seen.add(word.word);
    return true;
  });
}

function getDistractors(target, pool, field, count = 3) {
  const candidates = shuffle(pool.filter((item) => item.id !== target.id && item.word !== target.word && item[field] && item[field] !== target[field]));
  const values = [];
  for (const item of candidates) {
    if (!values.includes(item[field])) values.push(item[field]);
    if (values.length === count) break;
  }
  return values;
}

function findMaskedExample(target) {
  const word = target.word;
  const candidates = new Set([word]);
  const addForms = (stem, forms) => forms.forEach((form) => candidates.add(stem + form));
  if (word.endsWith('する')) {
    const stem = word.slice(0, -2);
    addForms(stem, ['する', 'した', 'して', 'している', 'される', 'された', 'されている']);
  } else if (word.endsWith('る')) {
    const stem = word.slice(0, -1);
    addForms(stem, ['った', 'って', 'て', 'た', 'ている', 'られる', 'られた', 'られない', 'り']);
  } else if (word.endsWith('う')) {
    const stem = word.slice(0, -1);
    addForms(stem, ['う', 'った', 'って', 'わない', 'わず']);
  } else if (word.endsWith('く')) {
    const stem = word.slice(0, -1);
    addForms(stem, ['く', 'いた', 'いて', 'かれる', 'かれた', 'かれて']);
  } else if (word.endsWith('す')) {
    const stem = word.slice(0, -1);
    addForms(stem, ['す', 'した', 'して', 'される', 'された']);
  } else if (word.endsWith('ぐ')) {
    const stem = word.slice(0, -1);
    addForms(stem, ['ぐ', 'いだ', 'いで']);
  } else if (/[ぶむぬ]$/.test(word)) {
    const stem = word.slice(0, -1);
    addForms(stem, [word.slice(-1), 'んだ', 'んで']);
  } else if (word.endsWith('つ')) {
    const stem = word.slice(0, -1);
    addForms(stem, ['つ', 'った', 'って']);
  }
  const sortedForms = [...candidates].sort((a, b) => b.length - a.length);
  for (const example of target.examples) {
    for (const form of sortedForms) {
      if (example.japanese.includes(form)) {
        return {
          ...example,
          japanese: example.japanese.replace(form, '（　）'),
          furigana: example.furigana.replace(target.reading, '（　）')
        };
      }
    }
  }
  return null;
}

function makeQuestion(target, pool, type, index) {
  const examples = target.examples;
  let prompt = '';
  let context = '';
  let correct = '';
  let choices = [];
  let explanation = '';
  let displayType = '';

  if (type === 'reading') {
    displayType = 'CARA BACA';
    prompt = 'Pilih cara baca yang tepat untuk kosakata berikut.';
    context = target.word;
    correct = target.reading;
    choices = [correct, ...getDistractors(target, pool, 'reading')];
    explanation = `${target.word} dibaca ${target.reading}. Maknanya: ${target.meaning}.`;
  } else if (type === 'meaning') {
    displayType = 'ARTI KOSAKATA';
    prompt = 'Apa arti yang paling tepat dari kosakata berikut?';
    context = target.word;
    correct = target.meaning;
    choices = [correct, ...getDistractors(target, pool, 'meaning')];
    explanation = `${target.word} berarti ${target.meaning}. ${target.explanation}`;
  } else if (type === 'context') {
    displayType = 'PEMAHAMAN KONTEKS';
    prompt = `Apa makna 「${target.word}」 dalam kalimat berikut?`;
    context = examples[index % examples.length].japanese;
    correct = target.meaning;
    choices = [correct, ...getDistractors(target, pool, 'meaning')];
    explanation = `${examples[index % examples.length].translation} ${target.word} (${target.reading}) berarti ${target.meaning}.`;
  } else if (type === 'usage') {
    displayType = 'PENGGUNAAN';
    prompt = `Kalimat manakah yang menggunakan kosakata 「${target.word}」 secara tepat?`;
    const correctExample = examples[index % examples.length];
    correct = correctExample.japanese;
    const otherSentences = shuffle(pool.filter((item) => item.word !== target.word).flatMap((item) => item.examples.map((example) => example.japanese)));
    choices = [correct, ...otherSentences.slice(0, 3)];
    explanation = `${correctExample.translation} Kosakata ${target.word} digunakan secara alami dalam kalimat tersebut.`;
  } else {
    displayType = 'KOSAKATA DALAM KALIMAT';
    const example = findMaskedExample(target);
    if (example) {
      prompt = 'Pilih kosakata yang paling tepat untuk melengkapi bagian kosong.';
      context = example.japanese;
      correct = target.word;
      choices = [correct, ...getDistractors(target, pool, 'word')];
      explanation = `${example.translation} Kosakata yang sesuai adalah ${target.word}（${target.reading}）— ${target.meaning}.`;
    } else {
      displayType = 'MAKNA DALAM KONTEKS';
      prompt = `Apa makna 「${target.word}」 dalam kalimat berikut?`;
      context = examples[index % examples.length].japanese;
      correct = target.meaning;
      choices = [correct, ...getDistractors(target, pool, 'meaning')];
      explanation = `${examples[index % examples.length].translation} ${target.word} berarti ${target.meaning}.`;
    }
  }

  const uniqueChoices = [...new Set(choices)];
  // Jika beberapa sinonim sangat dekat, pilihan tetap dibuat unik dan jumlahnya disesuaikan.
  return {
    id: `q-${target.id}-${type}-${index}`,
    wordId: target.id,
    type,
    displayType,
    prompt,
    context,
    correct,
    choices: shuffle(uniqueChoices),
    explanation,
    selected: null
  };
}

function startExam(scope) {
  const words = scope === 'daily'
    ? getCurrentDay().vocabulary
    : getAllAvailableVocabulary();
  const uniqueWords = uniqueByWord(words);
  if (!uniqueWords.length) return;
  const available = shuffle(uniqueWords);
  const questionWords = available.slice(0, Math.min(EXAM_QUESTION_COUNT, available.length));
  const types = ['reading', 'meaning', 'context', 'usage', 'fit'];
  const questions = questionWords.map((word, index) => makeQuestion(word, uniqueWords, types[index % types.length], index));
  state.exam = {
    scope,
    dayId: state.currentDayId,
    title: scope === 'daily' ? `Ujian ${getCurrentDay().label}` : 'Ujian Gabungan',
    questions: shuffle(questions),
    currentIndex: 0,
    completed: false,
    result: null
  };
  $('#exam-lobby').hidden = true;
  $('#exam-result').hidden = true;
  $('#exam-workspace').hidden = false;
  renderExamQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderExamLobby() {
  const dailyUnlocked = isDayComplete(getCurrentDay());
  const combinedUnlocked = isCombinedComplete();
  $('#daily-lock-state').textContent = dailyUnlocked ? 'TERBUKA' : 'TERKUNCI';
  $('#combined-lock-state').textContent = combinedUnlocked ? 'TERBUKA' : 'TERKUNCI';
  $('#daily-exam-option').classList.toggle('is-unlocked', dailyUnlocked);
  $('#combined-exam-option').classList.toggle('is-unlocked', combinedUnlocked);
  $('#start-daily-exam').disabled = !dailyUnlocked;
  $('#start-combined-exam').disabled = !combinedUnlocked;
  const stats = getStats(getCurrentDay());
  $('#daily-exam-description').textContent = dailyUnlocked
    ? `${getCurrentDay().label}: ${stats.total} kosakata sudah berstatus Sudah Hafal.`
    : `Tandai ${stats.unlearned + stats.pending} kosakata tersisa sebagai Sudah Hafal untuk membuka ujian.`;
  const total = getAllAvailableVocabulary().length;
  const learned = ALL_DAYS.reduce((sum, day) => sum + getStats(day).learned, 0);
  $('#combined-exam-description').textContent = combinedUnlocked
    ? `${ALL_DAYS.length} hari tersedia · ${total} entri kosakata siap diuji.`
    : `Sudah hafal ${learned} dari ${total} entri pada seluruh hari yang tersedia.`;
}

function renderExamQuestion() {
  const exam = state.exam;
  if (!exam) return;
  const question = exam.questions[exam.currentIndex];
  const count = exam.questions.length;
  const number = exam.currentIndex + 1;
  $('#exam-type-label').textContent = exam.scope === 'daily' ? `UJIAN HARIAN · ${getDayById(exam.dayId)?.label.toUpperCase() || ''}` : 'UJIAN GABUNGAN';
  $('#exam-session-title').textContent = exam.title;
  $('#exam-progress-label').textContent = `Soal ${number} dari ${count}`;
  $('#exam-progress-fill').style.width = `${Math.round((number / count) * 100)}%`;
  $('#exam-progress-percent').textContent = `${Math.round((number / count) * 100)}%`;
  $('#question-type').textContent = question.displayType;
  $('#question-number').textContent = `${String(number).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
  $('#question-prompt').textContent = question.prompt;
  const context = $('#question-context');
  context.textContent = question.context;
  context.hidden = !question.context;
  context.classList.toggle('has-reading', question.type === 'fit');

  const options = $('#answer-options');
  options.replaceChildren();
  question.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    if (choice === question.selected) button.classList.add('is-selected');
    button.dataset.answerIndex = String(choiceIndex);
    const letter = document.createElement('span');
    letter.className = 'answer-letter';
    letter.textContent = String.fromCharCode(65 + choiceIndex);
    const text = document.createElement('span');
    text.className = 'answer-text';
    text.textContent = choice;
    button.append(letter, text);
    button.addEventListener('click', () => {
      question.selected = choice;
      renderExamQuestion();
    });
    options.append(button);
  });

  const map = $('#question-map');
  map.replaceChildren();
  exam.questions.forEach((item, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'map-number';
    if (i === exam.currentIndex) button.classList.add('is-current');
    if (item.selected !== null) button.classList.add('is-answered');
    button.textContent = String(i + 1);
    button.setAttribute('aria-label', `Buka soal ${i + 1}${item.selected !== null ? ', sudah dijawab' : ', belum dijawab'}`);
    button.addEventListener('click', () => {
      exam.currentIndex = i;
      renderExamQuestion();
    });
    map.append(button);
  });

  $('#previous-question').disabled = exam.currentIndex === 0;
  $('#next-question').disabled = question.selected === null;
  $('#next-question').textContent = exam.currentIndex === count - 1 ? 'Akhiri ujian →' : 'Berikutnya →';
  const answered = exam.questions.filter((item) => item.selected !== null).length;
  $('#exam-reminder').textContent = `${answered} dari ${count} soal telah dijawab. Jawaban tidak akan ditampilkan sebelum ujian selesai.`;
}

function previousQuestion() {
  if (!state.exam || state.exam.currentIndex === 0) return;
  state.exam.currentIndex -= 1;
  renderExamQuestion();
}

function nextQuestion() {
  if (!state.exam) return;
  const { currentIndex, questions } = state.exam;
  if (questions[currentIndex].selected === null) return;
  if (currentIndex === questions.length - 1) {
    requestFinishExam('finish');
  } else {
    state.exam.currentIndex += 1;
    renderExamQuestion();
  }
}

function requestFinishExam(action) {
  state.confirmAction = action;
  const isQuit = action === 'quit';
  $('#confirm-heading').textContent = isQuit ? 'Keluar dari ujian?' : 'Akhiri ujian sekarang?';
  $('#confirm-description').textContent = isQuit
    ? 'Progres sesi ini tidak akan dicatat sebagai hasil ujian. Kamu dapat memulai sesi baru kapan saja.'
    : `Kamu sudah menjawab ${state.exam.questions.filter((question) => question.selected !== null).length} dari ${state.exam.questions.length} soal. Soal yang belum dijawab akan dihitung salah.`;
  $('#confirm-finish').textContent = isQuit ? 'Keluar' : 'Akhiri ujian';
  openModal($('#confirm-modal'));
}

function completeExam() {
  const exam = state.exam;
  if (!exam) return;
  const correct = exam.questions.filter((question) => question.selected === question.correct).length;
  const total = exam.questions.length;
  const wrong = total - correct;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const result = {
    id: `exam-${Date.now()}`,
    scope: exam.scope,
    title: exam.title,
    date: new Date().toISOString(),
    total, correct, wrong, percent,
    passed: percent >= 70
  };
  state.examHistory.unshift(result);
  state.examHistory = state.examHistory.slice(0, 50);
  safeWrite(STORAGE.examHistory, state.examHistory);
  exam.completed = true;
  exam.result = result;
  closeModal($('#confirm-modal'));
  renderExamResult();
}

function renderExamResult() {
  const exam = state.exam;
  if (!exam?.result) return;
  const result = exam.result;
  $('#exam-workspace').hidden = true;
  $('#exam-lobby').hidden = true;
  $('#exam-result').hidden = false;
  $('#result-percent').textContent = `${result.percent}%`;
  $('#result-total').textContent = result.total;
  $('#result-correct').textContent = result.correct;
  $('#result-wrong').textContent = result.wrong;
  $('#result-heading').textContent = result.passed ? 'Pemahamanmu semakin kuat.' : 'Terus latih pemahamanmu.';
  $('#result-message').textContent = result.passed
    ? 'Hasil latihan mencapai nilai 70% atau lebih. Tetap ulangi kosakata agar semakin mantap.'
    : 'Belum mencapai 70%. Perhatikan pembahasan dan coba lagi setelah mengulang kosakata.';
  const review = $('#review-list');
  review.replaceChildren();
  exam.questions.forEach((question, index) => {
    const correct = question.selected === question.correct;
    const card = document.createElement('article');
    card.className = `review-card ${correct ? 'review-correct' : 'review-wrong'}`;
    const head = document.createElement('div');
    head.className = 'review-card-head';
    const number = document.createElement('span');
    number.className = 'review-number';
    number.textContent = `SOAL ${String(index + 1).padStart(2, '0')}`;
    const status = document.createElement('span');
    status.className = 'review-mark';
    status.textContent = correct ? 'BENAR' : 'PERLU DIULANG';
    head.append(number, status);
    const prompt = document.createElement('p');
    prompt.className = 'review-prompt';
    prompt.textContent = question.prompt;
    const context = document.createElement('p');
    context.className = 'review-context';
    context.textContent = question.context;
    context.hidden = !question.context;
    const answer = document.createElement('p');
    answer.className = 'review-answer';
    answer.textContent = `Jawaban benar: ${question.correct}`;
    const selected = document.createElement('p');
    selected.className = 'review-selected';
    selected.textContent = question.selected === null ? 'Jawabanmu: Belum dijawab' : `Jawabanmu: ${question.selected}`;
    const explanation = document.createElement('p');
    explanation.className = 'review-explanation';
    explanation.textContent = question.explanation;
    card.append(head, prompt, context, answer, selected, explanation);
    review.append(card);
  });
  $('#review-count').textContent = `${result.total} soal`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAll() {
  renderDaySelect();
  renderHome();
  renderVocabularyList();
  renderExamLobby();
  applyAppearance();
}

function handleDocumentClick(event) {
  const navButton = event.target.closest('[data-view]');
  if (navButton) {
    switchView(navButton.dataset.view);
    return;
  }
  const goButton = event.target.closest('[data-go]');
  if (goButton) {
    switchView(goButton.dataset.go);
    return;
  }
  const openButton = event.target.closest('[data-open-word]');
  if (openButton) {
    openWord(openButton.dataset.openWord);
    return;
  }
  const cycleButton = event.target.closest('[data-cycle-status]');
  if (cycleButton) {
    cycleStatus(cycleButton.dataset.dayId, cycleButton.dataset.cycleStatus);
    return;
  }
  const closeButton = event.target.closest('[data-close-modal]');
  if (closeButton) closeModal(closeButton.closest('.modal-backdrop'));
}

function bindEvents() {
  document.addEventListener('click', handleDocumentClick);
  $('#day-select').addEventListener('change', (event) => switchDay(event.target.value));
  $('#mode-select').addEventListener('change', (event) => {
    state.appearance = ['system', 'light', 'dark'].includes(event.target.value) ? event.target.value : 'system';
    safeSetString(STORAGE.mode, state.appearance);
    applyAppearance();
  });
  $('#vocab-search').addEventListener('input', (event) => {
    state.query = event.target.value;
    renderVocabularyList();
  });
  $('#clear-search').addEventListener('click', () => {
    state.query = '';
    $('#vocab-search').value = '';
    renderVocabularyList();
    $('#vocab-search').focus();
  });
  $$('.filter-tab').forEach((button) => button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    $$('.filter-tab').forEach((tab) => tab.classList.toggle('is-selected', tab === button));
    renderVocabularyList();
  }));
  $('#reset-search').addEventListener('click', () => {
    state.query = '';
    state.filter = 'all';
    $('#vocab-search').value = '';
    $$('.filter-tab').forEach((tab) => tab.classList.toggle('is-selected', tab.dataset.filter === 'all'));
    renderVocabularyList();
  });
  $('#detail-previous').addEventListener('click', () => moveDetail(-1));
  $('#detail-next').addEventListener('click', () => moveDetail(1));
  $('#dismiss-rest').addEventListener('click', dismissRestReminder);
  $('#start-daily-exam').addEventListener('click', () => {
    if (isDayComplete(getCurrentDay())) startExam('daily');
  });
  $('#start-combined-exam').addEventListener('click', () => {
    if (isCombinedComplete()) startExam('combined');
  });
  $('#previous-question').addEventListener('click', previousQuestion);
  $('#next-question').addEventListener('click', nextQuestion);
  $('#quit-exam').addEventListener('click', () => requestFinishExam('quit'));
  $('#cancel-finish').addEventListener('click', () => closeModal($('#confirm-modal')));
  $('#confirm-finish').addEventListener('click', () => {
    closeModal($('#confirm-modal'));
    if (state.confirmAction === 'quit') {
      state.exam = null;
      $('#exam-workspace').hidden = true;
      $('#exam-result').hidden = true;
      $('#exam-lobby').hidden = false;
      renderExamLobby();
    } else completeExam();
  });
  $('#back-to-exam-lobby').addEventListener('click', () => {
    state.exam = null;
    $('#exam-result').hidden = true;
    $('#exam-lobby').hidden = false;
    renderExamLobby();
  });
  $('#retake-exam').addEventListener('click', () => {
    const scope = state.exam?.scope || 'daily';
    const previousDayId = state.exam?.dayId;
    if (scope === 'daily' && getDayById(previousDayId)) switchDay(previousDayId);
    startExam(scope);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const topModal = $$('.modal-backdrop:not([hidden])').at(-1);
      if (topModal && topModal.id !== 'rest-modal') closeModal(topModal);
    }
  });
}

function init() {
  if (!ALL_DAYS.length) {
    document.body.innerHTML = '<main class="load-error"><h1>Data kosakata belum tersedia.</h1><p>Periksa registrasi data pada js/list/index.js.</p></main>';
    return;
  }
  loadProgress();
  state.examHistory = safeRead(STORAGE.examHistory, []);
  if (!Array.isArray(state.examHistory)) state.examHistory = [];
  renderAll();
  bindEvents();
  updateTimeTheme();
  checkRestReminder();
  window.setInterval(updateTimeTheme, 30_000);
  window.setInterval(checkRestReminder, 60_000);
}

init();
