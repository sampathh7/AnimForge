import { PRIMITIVES, defaultParams, defaultMaterial, nextColor, buildGeometry } from './primitives.js';
import { emit } from './bus.js';

/* ════════════════════════════════════════════════════════════
   Application state & scene document model
   ════════════════════════════════════════════════════════════ */

export const uid = (p = 'o') => p + Math.random().toString(36).slice(2, 9);

export const state = {
  project: null,
  selectedIds: [],
  time: 0,
  playing: false,
  loop: true,
  autoKey: true,
  snap: false,
  tool: 'translate',
  selectedKey: null, // {objId, key}
};

const HISTORY_MAX = 90;
const undoStack = [];
const redoStack = [];

export const EASES = ['smooth', 'linear', 'in', 'out'];
export const EASE_LABEL = { smooth: 'Smooth', linear: 'Linear', in: 'Ease in', out: 'Ease out' };

/* ───────────────── document ───────────────── */

export function blankProject(name = 'Untitled scene') {
  return {
    v: 1,
    name,
    fps: 30,
    objects: [],
    clips: [{ id: uid('c'), name: 'Clip 1', duration: 4, tracks: {} }],
    activeClipId: null,
  };
}

export function newProject(name = 'Untitled scene') {
  const p = blankProject(name);
  p.activeClipId = p.clips[0].id;
  state.project = p;
  state.selectedIds = [];
  state.time = 0;
  state.playing = false;
  state.selectedKey = null;
  undoStack.length = 0;
  redoStack.length = 0;
  commit('reset');
  emit('project:reload');
}

export function loadProject(doc) {
  if (!doc || !Array.isArray(doc.objects) || !Array.isArray(doc.clips)) throw new Error('Not an AnimForge project');
  const p = {
    v: 1,
    name: doc.name || 'Untitled scene',
    fps: clamp(Number(doc.fps) || 30, 12, 60),
    objects: doc.objects.map((o) => normalizeObject(o)),
    clips: doc.clips.map((c) => ({
      id: c.id || uid('c'),
      name: c.name || 'Clip',
      duration: clamp(Number(c.duration) || 4, 0.5, 60),
      tracks: c.tracks && typeof c.tracks === 'object' ? c.tracks : {},
    })),
    activeClipId: doc.activeClipId || null,
  };
  if (!p.clips.length) p.clips.push({ id: uid('c'), name: 'Clip 1', duration: 4, tracks: {} });
  if (!p.clips.some((c) => c.id === p.activeClipId)) p.activeClipId = p.clips[0].id;
  // drop orphan tracks
  const ids = new Set(p.objects.map((o) => o.id));
  for (const c of p.clips) for (const k of Object.keys(c.tracks)) if (!ids.has(k)) delete c.tracks[k];

  state.project = p;
  state.selectedIds = p.objects.length ? [p.objects[0].id] : [];
  state.time = 0;
  state.playing = false;
  state.selectedKey = null;
  undoStack.length = 0;
  redoStack.length = 0;
  commit('reset');
  emit('project:reload');
}

function normalizeObject(o) {
  const type = PRIMITIVES[o.type] ? o.type : 'box';
  return {
    id: o.id || uid('o'),
    name: o.name || type,
    type,
    params: { ...defaultParams(type), ...(o.params || {}) },
    pos: vec3(o.pos, [0, 1, 0]),
    rot: vec3(o.rot, [0, 0, 0]),
    scale: vec3(o.scale, [1, 1, 1]),
    visible: o.visible !== false,
    group: o.group || null,
    preset: o.preset || null,
    material: { ...defaultMaterial(o.material?.color || '#7cc7ff'), ...(o.material || {}) },
  };
}
const vec3 = (v, d) => (Array.isArray(v) && v.length === 3 ? v.map((n) => Number(n) || 0) : d.slice());
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/* ───────────────── accessors ───────────────── */

export const clip = () => state.project?.clips.find((c) => c.id === state.project.activeClipId) || state.project?.clips[0] || null;
export const getObject = (id) => state.project?.objects.find((o) => o.id === id) || null;
export const primary = () => getObject(state.selectedIds[state.selectedIds.length - 1] || '');
export const isSelected = (id) => state.selectedIds.includes(id);

export function select(ids, additive = false) {
  const list = (Array.isArray(ids) ? ids : [ids]).filter(Boolean);
  if (additive) {
    for (const id of list) {
      const i = state.selectedIds.indexOf(id);
      if (i >= 0) state.selectedIds.splice(i, 1);
      else state.selectedIds.push(id);
    }
  } else {
    state.selectedIds = list.slice(-1);
  }
  state.selectedKey = null;
  emit('selection');
  emit('timeline:refresh');
}

/* ───────────────── objects ───────────────── */

export function uniqueName(base) {
  const names = new Set(state.project.objects.map((o) => o.name));
  if (!names.has(base)) return base;
  let i = 2;
  while (names.has(`${base} ${i}`)) i++;
  return `${base} ${i}`;
}

export function addObject(type, opts = {}) {
  const def = PRIMITIVES[type] || PRIMITIVES.box;
  const n = state.project.objects.length;
  const params = defaultParams(type);

  // drop new shapes on the floor, spread around the origin so they don't stack
  let groundY = 0.5;
  try {
    const g = buildGeometry(type, params);
    g.computeBoundingBox();
    groundY = Math.max(0, -g.boundingBox.min.y);
    g.dispose();
  } catch { /* keep fallback */ }
  let pos = opts.pos;
  if (!pos && Array.isArray(opts.xz)) pos = [opts.xz[0], groundY, opts.xz[1]];
  if (!pos) {
    if (n === 0) pos = [0, groundY, 0];
    else {
      const k = n - 1;
      const ring = Math.floor(k / 8);
      const ang = ((k % 8) / 8) * Math.PI * 2 + ring * 0.42;
      const r = 2.0 + ring * 1.5;
      pos = [Math.cos(ang) * r, groundY, Math.sin(ang) * r];
    }
  }

  const obj = {
    id: uid('o'),
    name: uniqueName(opts.name || def.label),
    type,
    params,
    pos,
    rot: opts.rot || [0, 0, 0],
    scale: [1, 1, 1],
    visible: true,
    material: { ...defaultMaterial(nextColor(n)), ...(opts.material || {}) },
  };
  pushHistory();
  state.project.objects.push(obj);
  state.selectedIds = [obj.id];
  commit('objects');
  emit('selection');
  return obj;
}

/* build a document object without touching history / selection (used by the library) */
export function makeObject({ name, type, params, pos, rot, scale, material, group, preset }) {
  return normalizeObject({
    id: uid('o'),
    name: uniqueName(name || (PRIMITIVES[type]?.label ?? 'Object')),
    type,
    params,
    pos: pos || [0, 1, 0],
    rot: rot || [0, 0, 0],
    scale: scale || [1, 1, 1],
    material,
    group,
    preset,
  });
}

/** swap an object's primitive while keeping position, material, keys and any shared params */
export function selectMany(ids) {
  state.selectedIds = [...new Set((ids || []).filter(Boolean))];
  state.selectedKey = null;
  emit('selection');
  emit('timeline:refresh');
}

/** every object that belongs to the same model as `id` (or just `id`) */
export function groupMembers(id) {
  const obj = getObject(id);
  if (!obj) return [];
  if (!obj.group) return [obj.id];
  return state.project.objects.filter((o) => o.group === obj.group).map((o) => o.id);
}

export function selectGroup(id) {
  const ids = groupMembers(id);
  if (!ids.length) return;
  selectMany(ids);
  emit('toast', { msg: `${ids.length} parts selected — drag the gizmo to move, rotate or scale the whole model`, kind: 'ok' });
}

/** break a model into independent parts */
export function ungroup(id) {
  const obj = getObject(id);
  const gid = obj?.group;
  if (!gid) return;
  pushHistory();
  for (const o of state.project.objects) {
    if (o.group === gid) { o.group = null; o.preset = null; }
  }
  commit('objects');
  emit('selection');
  emit('toast', { msg: 'Model split into separate objects' });
}

/** remove a whole model (all parts) */
export function deleteGroup(id) {
  const ids = groupMembers(id);
  if (ids.length) deleteObjects(ids);
}

export function changeType(id, type) {
  const obj = getObject(id);
  if (!obj || !PRIMITIVES[type] || obj.type === type) return null;
  pushHistory();
  const next = defaultParams(type);
  const keep = {};
  for (const k of Object.keys(next)) if (obj.params[k] !== undefined) keep[k] = obj.params[k];
  obj.type = type;
  obj.params = { ...next, ...keep };
  commit('objects');
  emit('selection');
  emit('toast', { msg: `${obj.name} → ${PRIMITIVES[type].label}`, kind: 'ok' });
  return obj;
}

export function duplicateObject(id) {
  const src = getObject(id);
  if (!src) return null;
  pushHistory();
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = uid('o');
  copy.name = uniqueName(src.name.replace(/ \d+$/, '') + ' copy');
  copy.pos = [src.pos[0] + 0.35, src.pos[1], src.pos[2] + 0.35];
  state.project.objects.push(copy);
  const c = clip();
  if (c?.tracks[id]?.length) c.tracks[copy.id] = c.tracks[id].map((k) => ({ ...k, pos: [...k.pos], rot: [...k.rot], scale: [...k.scale] }));
  state.selectedIds = [copy.id];
  commit('objects');
  emit('selection');
  return copy;
}

export function deleteObjects(ids) {
  const list = (Array.isArray(ids) ? ids : [ids]).filter(Boolean);
  if (!list.length) return;
  pushHistory();
  state.project.objects = state.project.objects.filter((o) => !list.includes(o.id));
  for (const c of state.project.clips) for (const id of list) delete c.tracks[id];
  state.selectedIds = state.selectedIds.filter((id) => !list.includes(id));
  commit('objects');
  emit('selection');
}

export function renameObject(id, name) {
  const o = getObject(id);
  if (!o) return;
  const clean = (name || '').trim().slice(0, 40) || o.name;
  if (clean === o.name) return;
  pushHistory();
  o.name = uniqueName(clean);
  commit('objects');
}

export function toggleVisible(id) {
  const o = getObject(id);
  if (!o) return;
  pushHistory();
  o.visible = !o.visible;
  commit('objects');
}

/* ───────────────── clips ───────────────── */

export function setActiveClip(id) {
  if (!state.project.clips.some((c) => c.id === id)) return;
  state.project.activeClipId = id;
  state.time = Math.min(state.time, clip().duration);
  commit('clip');
  emit('clip');
}

export function addClip(name) {
  pushHistory();
  const c = { id: uid('c'), name: name || `Clip ${state.project.clips.length + 1}`, duration: clip()?.duration || 4, tracks: {} };
  state.project.clips.push(c);
  state.project.activeClipId = c.id;
  state.time = 0;
  commit('clip');
  emit('clip');
  return c;
}

export function deleteClip(id) {
  if (state.project.clips.length <= 1) return;
  pushHistory();
  state.project.clips = state.project.clips.filter((c) => c.id !== id);
  if (state.project.activeClipId === id) state.project.activeClipId = state.project.clips[0].id;
  state.time = Math.min(state.time, clip().duration);
  commit('clip');
  emit('clip');
}

export function renameClip(id, name) {
  const c = state.project.clips.find((x) => x.id === id);
  const clean = (name || '').trim().slice(0, 40);
  if (!c || !clean || clean === c.name) return;
  pushHistory();
  c.name = clean;
  commit('clip');
  emit('clip');
}

export function setDuration(v) {
  const c = clip();
  if (!c) return;
  const d = clamp(Number(v) || 1, 0.5, 60);
  if (d === c.duration) return;
  pushHistory();
  c.duration = d;
  if (state.time > d) state.time = d;
  for (const id in c.tracks) c.tracks[id] = c.tracks[id].filter((k) => k.t <= d + 1e-6);
  commit('clip');
  emit('clip');
}

export function setFps(v) {
  const f = Math.round(clamp(Number(v) || 30, 12, 60));
  if (f === state.project.fps) return;
  pushHistory();
  state.project.fps = f;
  commit('fps');
}

/* ───────────────── keyframes ───────────────── */

const EPS = 1e-4;
const sortKeys = (keys) => keys.sort((a, b) => a.t - b.t);

export const keysFor = (objId, c = clip()) => (c?.tracks?.[objId] || []);

export function hasKeys(objId, c = clip()) {
  return (c?.tracks?.[objId]?.length || 0) > 0;
}

export function keyAt(objId, t, c = clip()) {
  return keysFor(objId, c).find((k) => Math.abs(k.t - t) < EPS) || null;
}

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeFn = (mode, u) => {
  switch (mode) {
    case 'linear': return u;
    case 'in': return u * u * u;
    case 'out': return 1 - Math.pow(1 - u, 3);
    default: return u * u * (3 - 2 * u); // smoothstep
  }
};

/** interpolate a key list at time t (returns a key-like object or null) */
export function sampleTrack(keys, t) {
  const n = keys.length;
  if (!n) return null;
  if (t <= keys[0].t) return keys[0];
  if (t >= keys[n - 1].t) return keys[n - 1];
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (keys[mid].t <= t) lo = mid; else hi = mid;
  }
  const a = keys[lo], b = keys[hi];
  const span = b.t - a.t || 1;
  const u = easeFn(a.ease || 'smooth', clamp01((t - a.t) / span));
  const mix = (p, q) => p + (q - p) * u;
  return {
    t,
    ease: a.ease,
    pos: [mix(a.pos[0], b.pos[0]), mix(a.pos[1], b.pos[1]), mix(a.pos[2], b.pos[2])],
    rot: [mix(a.rot[0], b.rot[0]), mix(a.rot[1], b.rot[1]), mix(a.rot[2], b.rot[2])],
    scale: [mix(a.scale[0], b.scale[0]), mix(a.scale[1], b.scale[1]), mix(a.scale[2], b.scale[2])],
  };
}

/** transform of an object at time t in a given clip (falls back to rest pose) */
export function evalObject(obj, t, c = clip()) {
  const keys = keysFor(obj.id, c);
  if (!keys.length) return { pos: [...obj.pos], rot: [...obj.rot], scale: [...obj.scale] };
  const s = sampleTrack(keys, t);
  return { pos: [...s.pos], rot: [...s.rot], scale: [...s.scale] };
}

export const currentTransform = (obj) => evalObject(obj, state.time);

function upsertKey(objId, c, t, tr, ease) {
  if (!c) return null;
  if (!c.tracks[objId]) c.tracks[objId] = [];
  const keys = c.tracks[objId];
  const cleanT = Math.round(t * 1000) / 1000;
  const existing = keys.find((k) => Math.abs(k.t - cleanT) < 0.002);
  if (existing) {
    existing.pos = [...tr.pos];
    existing.rot = [...tr.rot];
    existing.scale = [...tr.scale];
    if (ease) existing.ease = ease;
    return existing;
  }
  const k = {
    t: cleanT, ease: ease || 'smooth',
    pos: [...tr.pos], rot: [...tr.rot], scale: [...tr.scale],
  };
  keys.push(k);
  sortKeys(keys);
  return k;
}

/** write a transform change, recording a key when appropriate */
export function writeTransform(objId, patch, { silent = false } = {}) {
  const obj = getObject(objId);
  if (!obj) return;
  const c = clip();
  const animated = hasKeys(objId, c);
  if (animated || (state.autoKey && c)) {
    const base = evalObject(obj, state.time, c);
    const next = { ...base, ...patch };
    const existing = keyAt(objId, state.time, c);
    upsertKey(objId, c, state.time, next, existing?.ease);
  } else {
    Object.assign(obj, patch);
  }
  if (!silent) commit('values');
}

export function insertKey(objId = state.selectedIds[0], t = state.time) {
  const obj = getObject(objId);
  const c = clip();
  if (!obj || !c) return;
  const existing = keyAt(objId, t, c);
  if (existing) { emit('toast', { msg: 'Key already exists at this time', kind: 'err' }); return; }
  pushHistory();
  const tr = evalObject(obj, t, c);
  upsertKey(objId, c, t, tr);
  state.selectedKey = { objId, key: keyAt(objId, t, c) };
  commit('keys');
  emit('clip');
  emit('toast', { msg: `Key added · ${obj.name} @ ${t.toFixed(2)}s`, kind: 'ok' });
}

export function deleteKey(objId, t = state.time) {
  const c = clip();
  const keys = keysFor(objId, c);
  const idx = keys.findIndex((k) => Math.abs(k.t - t) < 0.002);
  if (idx < 0) return false;
  pushHistory();
  keys.splice(idx, 1);
  if (!keys.length) delete c.tracks[objId];
  state.selectedKey = null;
  commit('keys');
  emit('clip');
  return true;
}

/** retime a key (used by timeline dragging). Returns new index. */
export function moveKey(objId, key, newT) {
  const c = clip();
  const keys = keysFor(objId, c);
  if (!keys.includes(key)) return -1;
  const t = Math.round(clamp(newT, 0, c.duration) * 1000) / 1000;
  const clash = keys.find((k) => k !== key && Math.abs(k.t - t) < 0.002);
  if (clash) {
    clash.pos = [...key.pos]; clash.rot = [...key.rot]; clash.scale = [...key.scale];
    keys.splice(keys.indexOf(key), 1);
    key.t = clash.t;
  } else {
    key.t = t;
  }
  sortKeys(keys);
  commit('keys', true); // silent: caller refreshes timeline itself
  return keys.indexOf(key);
}

export function cycleEase(key) {
  if (!key) return;
  pushHistory();
  key.ease = EASES[(EASES.indexOf(key.ease || 'smooth') + 1) % EASES.length];
  commit('keys');
  emit('clip');
  emit('toast', { msg: `Interpolation: ${EASE_LABEL[key.ease]}`, kind: 'ok' });
}

export function clearTrack(objId) {
  const c = clip();
  if (!c?.tracks?.[objId]) return;
  pushHistory();
  delete c.tracks[objId];
  commit('keys');
  emit('clip');
}

/* ───────────────── playback ───────────────── */

export function setTime(t, { silent = false } = {}) {
  const c = clip();
  const d = c?.duration || 4;
  state.time = state.loop ? Math.max(0, Math.min(d, t)) : Math.max(0, Math.min(d, t));
  if (!silent) emit('time');
}

export function stepFrame(dir = 1) {
  const f = 1 / (state.project?.fps || 30);
  const t = Math.round((state.time / f)) * f + dir * f;
  const d = clip()?.duration || 4;
  setTime(t > d ? (dir > 0 ? d : 0) : t < 0 ? 0 : t);
}

export function jumpKey(dir = 1) {
  const c = clip();
  const ids = state.selectedIds.length ? state.selectedIds : c ? Object.keys(c.tracks) : [];
  const times = [];
  for (const id of ids) for (const k of keysFor(id, c)) times.push(k.t);
  if (!times.length) return;
  const uniq = [...new Set(times)].sort((a, b) => a - b);
  const next = dir > 0 ? uniq.find((t) => t > state.time + 1e-4) : [...uniq].reverse().find((t) => t < state.time - 1e-4);
  if (next !== undefined) setTime(next);
}

export function togglePlay(force) {
  state.playing = force !== undefined ? force : !state.playing;
  if (state.playing && state.time >= (clip()?.duration || 4) - 1e-4) state.time = 0;
  emit('playback');
}

/* ───────────────── history ───────────────── */

export function pushHistory() {
  if (!state.project) return;
  const snap = JSON.stringify(state.project);
  if (undoStack.length && undoStack[undoStack.length - 1] === snap) return;
  undoStack.push(snap);
  if (undoStack.length > HISTORY_MAX) undoStack.shift();
  redoStack.length = 0;
  emit('history');
}

export function undo() {
  const cur = JSON.stringify(state.project);
  let snap = undoStack.pop();
  while (snap !== undefined && snap === cur) snap = undoStack.pop();
  if (snap === undefined) { emit('history'); return; }
  redoStack.push(cur);
  applySnapshot(snap);
  emit('toast', { msg: 'Undo', kind: '' });
}

export function redo() {
  const cur = JSON.stringify(state.project);
  let snap = redoStack.pop();
  while (snap !== undefined && snap === cur) snap = redoStack.pop();
  if (snap === undefined) { emit('history'); return; }
  undoStack.push(cur);
  applySnapshot(snap);
  emit('toast', { msg: 'Redo', kind: '' });
}

function applySnapshot(snap) {
  state.project = JSON.parse(snap);
  const ids = new Set(state.project.objects.map((o) => o.id));
  state.selectedIds = state.selectedIds.filter((id) => ids.has(id));
  if (!state.project.clips.some((c) => c.id === state.project.activeClipId)) state.project.activeClipId = state.project.clips[0]?.id;
  state.time = Math.min(state.time, clip()?.duration || 4);
  commit('reload');
  emit('project:reload');
  emit('history');
}

export const canUndo = () => undoStack.length > 1;
export const canRedo = () => redoStack.length > 0;

/* ───────────────── change notification + autosave ───────────────── */

let saveTimer = null;
export function commit(reason = 'values', silent = false) {
  if (!silent) {
    emit('change', reason);
    emit('timeline:refresh');
  }
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveLocal, 700);
}

export function saveLocal() {
  try { localStorage.setItem('animforge:project', JSON.stringify(state.project)); } catch { /* quota */ }
}

export function loadLocal() {
  try {
    const raw = localStorage.getItem('animforge:project');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

export const serialize = () => JSON.stringify(state.project, null, 2);

/* ════════════════════════════════════════════════════════════
   Demo scene — a little hover-bot with two animation clips
   ════════════════════════════════════════════════════════════ */

export function demoProject() {
  const p = blankProject('Hover-bot demo');
  const add = (name, type, params, pos, rot, mat) => {
    const o = normalizeObject({
      id: uid('o'), name, type,
      params: { ...defaultParams(type), ...params },
      pos, rot: rot || [0, 0, 0],
      material: { ...defaultMaterial('#7cc7ff'), ...mat },
    });
    p.objects.push(o);
    return o;
  };

  /* ── the bot ── */
  const disc = add('Base disc', 'cylinder', { rt: 0.6, rb: 0.72, h: 0.1, seg: 48 }, [0, 0.05, 0], null,
    { color: '#2f3a4d', metalness: 0.7, roughness: 0.38 });
  const ring = add('Glow ring', 'torus', { r: 0.82, tube: 0.021, rseg: 12, tseg: 90 }, [0, 0.07, 0], [90, 0, 0],
    { color: '#08161d', metalness: 0.2, roughness: 0.5, emissive: '#1fb6e8', emissiveIntensity: 1.5 });
  const body = add('Hull', 'capsule', { r: 0.29, h: 0.46, seg: 44 }, [0, 0.74, 0], null,
    { color: '#4f9ada', metalness: 0.55, roughness: 0.28 });
  const core = add('Core lens', 'sphere', { r: 0.13, wseg: 32, hseg: 24 }, [0, 0.78, 0.243], null,
    { color: '#06151f', metalness: 0.12, roughness: 0.28, emissive: '#1187b5', emissiveIntensity: 1.0 });
  const head = add('Head', 'sphere', { r: 0.285, wseg: 40, hseg: 28 }, [0, 1.42, 0], null,
    { color: '#74b5e6', metalness: 0.42, roughness: 0.34 });
  const eyeL = add('Eye L', 'sphere', { r: 0.052, wseg: 20, hseg: 14 }, [-0.1, 1.45, 0.25], null,
    { color: '#04121a', metalness: 0.1, roughness: 0.3, emissive: '#35e0ff', emissiveIntensity: 1.0 });
  const eyeR = add('Eye R', 'sphere', { r: 0.052, wseg: 20, hseg: 14 }, [0.1, 1.45, 0.25], null,
    { color: '#04121a', metalness: 0.1, roughness: 0.3, emissive: '#35e0ff', emissiveIntensity: 1.0 });
  const ant = add('Antenna', 'cylinder', { rt: 0.012, rb: 0.018, h: 0.16, seg: 12 }, [0, 1.72, 0], null,
    { color: '#4d6a86', metalness: 0.9, roughness: 0.3 });
  const tip = add('Beacon', 'sphere', { r: 0.055, wseg: 20, hseg: 14 }, [0, 1.84, 0], null,
    { color: '#1b0f18', metalness: 0.15, roughness: 0.35, emissive: '#e03c93', emissiveIntensity: 1.6 });
  const armL = add('Arm L', 'capsule', { r: 0.05, h: 0.26, seg: 22 }, [-0.34, 0.76, 0], [0, 0, 16],
    { color: '#4a7fae', metalness: 0.62, roughness: 0.33 });
  const armR = add('Arm R', 'capsule', { r: 0.05, h: 0.26, seg: 22 }, [0.34, 0.76, 0], [0, 0, -16],
    { color: '#4a7fae', metalness: 0.62, roughness: 0.33 });

  /* ── animation helpers ── */
  const TAU = Math.PI * 2;
  const addV = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const rotY = (v, deg) => {
    const r = (deg * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r);
    return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c];
  };

  /** poses: array of [object, (t, base) => {pos?,rot?,scale?,ease?}] */
  const buildClip = (name, duration, step, poses) => {
    const c = { id: uid('c'), name, duration, tracks: {} };
    const steps = Math.round(duration / step);
    for (const [obj, fn] of poses) {
      const base = { pos: obj.pos, rot: obj.rot, scale: obj.scale };
      const keys = [];
      for (let i = 0; i <= steps; i++) {
        const t = +((i * duration) / steps).toFixed(4);
        const o = fn(t, base) || {};
        keys.push({
          t: +t.toFixed(3),
          ease: o.ease || 'smooth',
          pos: o.pos ? [...o.pos] : [...base.pos],
          rot: o.rot ? [...o.rot] : [...base.rot],
          scale: o.scale ? [...o.scale] : [...base.scale],
        });
      }
      c.tracks[obj.id] = keys;
    }
    return c;
  };

  const HEAD_C = [0, 1.42, 0];
  const EYE_L = [-0.1, 0.045, 0.25];
  const EYE_R = [0.1, 0.045, 0.25];

  /* ── clip 1 · Idle ── */
  const D = 4;
  const bob = (t) => Math.sin((TAU * t) / D) * 0.05;
  const yaw = (t) => 7 * Math.sin((TAU * t) / D);
  const headAt = (t) => [0, HEAD_C[1] + bob(t), 0];

  const idle = buildClip('Idle', D, 1, [
    [body, (t, b) => ({ pos: addV(b.pos, [0, bob(t), 0]) })],
    [head, (t, b) => ({ pos: addV(b.pos, [0, bob(t), 0]), rot: [0, yaw(t), 0] })],
    [eyeL, (t) => ({ pos: addV(headAt(t), rotY(EYE_L, yaw(t))) })],
    [eyeR, (t) => ({ pos: addV(headAt(t), rotY(EYE_R, yaw(t))) })],
    [core, (t, b) => {
      const s = 1 + 0.05 * Math.sin((TAU * t) / 2);
      return { pos: addV(b.pos, [0, bob(t), 0]), scale: [s, s, 1] };
    }],
    [ant, (t, b) => ({ pos: addV(b.pos, [0, bob(t), 0]), rot: [0, yaw(t), 3 * Math.sin((TAU * t) / D)] })],
    [tip, (t, b) => ({ pos: addV(b.pos, [0.02 * Math.sin((TAU * t) / D), bob(t), 0]) })],
    [armL, (t, b) => ({ pos: addV(b.pos, [0, bob(t), 0]), rot: [0, 0, 16 + 7 * Math.sin((TAU * t) / D)] })],
    [armR, (t, b) => ({ pos: addV(b.pos, [0, bob(t), 0]), rot: [0, 0, -16 - 7 * Math.sin((TAU * t) / D)] })],
    [ring, (t, b) => {
      const s = 1 + 0.02 * Math.sin((TAU * t) / D);
      return { pos: [b.pos[0], 0.07 + bob(t) * 0.35, b.pos[2]], rot: [90, 0, 0], scale: [s, s, 1] };
    }],
    [disc, (t, b) => ({ pos: b.pos, rot: b.rot })],
  ]);

  /* ── clip 2 · Dance ── */
  const bounce = (t) => Math.abs(Math.sin(Math.PI * t)) * 0.14;
  const spin = (t) => (360 * t) / D;
  const headDance = (t) => [0, HEAD_C[1] + bounce(t), 0];

  const dance = buildClip('Dance', D, 0.5, [
    [body, (t, b) => ({ pos: addV(b.pos, [0, bounce(t), 0]), rot: [0, spin(t), 0], ease: 'linear' })],
    [head, (t, b) => ({ pos: addV(b.pos, [0, bounce(t), 0]), rot: [0, spin(t), 6 * Math.sin((TAU * t) / 2)], ease: 'linear' })],
    [eyeL, (t) => ({ pos: addV(headDance(t), rotY(EYE_L, spin(t))), ease: 'linear' })],
    [eyeR, (t) => ({ pos: addV(headDance(t), rotY(EYE_R, spin(t))), ease: 'linear' })],
    [core, (t, b) => {
      const s = 1 + 0.14 * Math.abs(Math.sin(Math.PI * t));
      return { pos: addV(b.pos, [0, bounce(t), 0]), scale: [s, s, 1], ease: 'linear' };
    }],
    [ant, (t, b) => ({ pos: addV(b.pos, [0, bounce(t), 0]), rot: [0, spin(t), 20 * Math.sin(TAU * t)], ease: 'linear' })],
    [tip, (t, b) => ({ pos: addV(b.pos, [0.05 * Math.sin(TAU * t), bounce(t), 0]), ease: 'linear' })],
    [armL, (t, b) => ({
      pos: addV([0, b.pos[1] + bounce(t), 0], rotY([b.pos[0], 0, 0], spin(t))),
      rot: [0, spin(t), 66 + 44 * Math.sin(TAU * t)], ease: 'linear',
    })],
    [armR, (t, b) => ({
      pos: addV([0, b.pos[1] + bounce(t), 0], rotY([b.pos[0], 0, 0], spin(t))),
      rot: [0, spin(t), -66 - 44 * Math.sin(TAU * t + Math.PI)], ease: 'linear',
    })],
    [ring, (t, b) => {
      const s = 1 + 0.06 * Math.abs(Math.sin(Math.PI * t));
      return { pos: [b.pos[0], 0.07 - bounce(t) * 0.35, b.pos[2]], rot: [90, 0, 0], scale: [s, s, 1] };
    }],
    [disc, (t, b) => ({ pos: b.pos, rot: b.rot })],
  ]);

  p.clips = [idle, dance];
  p.activeClipId = idle.id;
  return p;
}
