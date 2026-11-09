import * as project from './project.js';
import { on } from './bus.js';

/* ════════════════════════════════════════════════════════════
   Timeline: ruler, object tracks, keyframe diamonds, scrubbing
   ════════════════════════════════════════════════════════════ */

const NAME_W = 151;
let pps = 110;          // pixels per second
let els = {};
let drag = null;
let raf = null;

export function init() {
  els.body = document.getElementById('tl-body');
  els.grid = document.getElementById('tl-grid');
  els.ruler = document.getElementById('tl-ruler');
  els.rows = document.getElementById('tl-rows');
  els.playhead = document.getElementById('tl-playhead');
  els.clipLabel = document.getElementById('tl-clip-label');
  els.duration = document.getElementById('tl-duration');
  els.fps = document.getElementById('tl-fps');

  els.duration.addEventListener('change', () => project.setDuration(els.duration.value));
  els.fps.addEventListener('change', () => project.setFps(els.fps.value));
  document.getElementById('tl-key').addEventListener('click', () => {
    const id = project.state.selectedIds[0];
    if (id) project.insertKey(id, project.state.time);
  });
  document.getElementById('tl-delkey').addEventListener('click', () => {
    const id = project.state.selectedIds[0];
    if (id && !project.deleteKey(id, project.state.time)) {
      // fall back to deleting the selected diamond
      if (project.state.selectedKey) {
        const { objId, key } = project.state.selectedKey;
        project.deleteKey(objId, key.t);
      }
    }
  });

  els.grid.addEventListener('pointerdown', onPointerDown);
  els.grid.addEventListener('dblclick', onDoubleClick);

  new ResizeObserver(() => refresh()).observe(els.body);
  on('change', schedule);
  on('timeline:refresh', schedule);
  on('selection', schedule);
  on('clip', schedule);
  on('time', updatePlayhead);
  on('playback', updatePlayhead);

  layout();
  refresh();
}

function schedule() {
  if (raf) return;
  raf = requestAnimationFrame(() => { raf = null; refresh(); });
}

function layout() {
  const c = project.clip();
  const width = Math.max(320, (els.body?.clientWidth || 800) - NAME_W - 6);
  const dur = c?.duration || 4;
  pps = Math.max(28, Math.min(240, width / dur));
  els.grid?.style.setProperty('--lane-w', `${Math.round(dur * pps)}px`);
}

export function refresh() {
  const p = project.state.project;
  if (!p || !els.rows) return;
  layout();
  const c = project.clip();
  const dur = c?.duration || 4;

  els.clipLabel.textContent = c ? c.name : 'Timeline';
  if (document.activeElement !== els.duration) els.duration.value = String(dur);
  if (document.activeElement !== els.fps) els.fps.value = String(p.fps);

  /* ── ruler ── */
  const step = pps >= 150 ? 0.25 : pps >= 90 ? 0.5 : pps >= 45 ? 1 : 2;
  const frag = document.createDocumentFragment();
  for (let t = 0; t <= dur + 1e-6; t += step) {
    const tick = document.createElement('div');
    const major = Math.abs(t - Math.round(t)) < 1e-6;
    tick.className = 'tick' + (major ? ' major' : '');
    tick.style.left = `${t * pps}px`;
    if (major) {
      const s = document.createElement('span');
      s.textContent = `${Math.round(t)}s`;
      tick.appendChild(s);
    }
    frag.appendChild(tick);
  }
  els.ruler.replaceChildren(frag);

  /* ── object rows ── */
  const rowsFrag = document.createDocumentFragment();
  for (const obj of p.objects) {
    const row = document.createElement('div');
    row.className = 'tl-row' + (project.isSelected(obj.id) ? ' sel' : '');
    row.dataset.id = obj.id;

    const name = document.createElement('div');
    name.className = 'tl-cell name';
    const keys = project.keysFor(obj.id);
    name.innerHTML = `<span class="sw" style="background:${obj.material.color}"></span>
      <span class="nm">${escapeHtml(obj.name)}</span>
      <span class="kcount">${keys.length ? keys.length + 'k' : ''}</span>`;
    row.appendChild(name);

    const lane = document.createElement('div');
    lane.className = 'tl-cell lane';
    for (const k of keys) {
      const el = document.createElement('div');
      const isSel = project.state.selectedKey?.key === k && project.state.selectedKey?.objId === obj.id;
      el.className = `key ${k.ease || 'smooth'}${isSel ? ' sel' : ''}`;
      el.style.left = `${k.t * pps}px`;
      el.dataset.t = String(k.t);
      el.title = `${obj.name} · ${k.t.toFixed(2)}s · ${project.EASE_LABEL[k.ease || 'smooth']}`;
      lane.appendChild(el);
    }
    row.appendChild(lane);
    rowsFrag.appendChild(row);
  }
  els.rows.replaceChildren(rowsFrag);

  updatePlayhead();
}

function updatePlayhead() {
  if (!els.playhead || !els.grid) return;
  const t = project.state.time;
  const gridRect = els.grid.getBoundingClientRect();
  const rulerRect = els.ruler.getBoundingClientRect();
  const laneLeft = rulerRect.left - gridRect.left;
  els.playhead.style.left = `${laneLeft + t * pps}px`;
}

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ───────────────── interaction ───────────────── */

function timeFromEvent(e, laneEl) {
  const rect = laneEl.getBoundingClientRect();
  const raw = (e.clientX - rect.left) / pps;
  const fps = project.state.project?.fps || 30;
  const clamped = Math.max(0, Math.min(project.clip()?.duration || 4, raw));
  return Math.round(clamped * fps) / fps;
}

function onPointerDown(e) {
  if (e.button !== 0) return;
  const keyEl = e.target.closest('.key');
  const laneEl = e.target.closest('.tl-cell.lane');
  const rowEl = e.target.closest('.tl-row');
  if (!laneEl) return;
  const objId = rowEl?.dataset.id;

  if (keyEl) {
    if (!objId) return;
    e.preventDefault();
    const obj = project.getObject(objId);
    const idx = [...laneEl.querySelectorAll('.key')].indexOf(keyEl);
    const key = project.keysFor(objId)[idx];
    if (!key) return;
    project.select([objId]);
    project.state.selectedKey = { objId, key };
    project.pushHistory();
    drag = { type: 'key', objId, key, el: keyEl, laneEl };
    keyEl.classList.add('dragging');
    laneEl.querySelectorAll('.key').forEach((k) => k.classList.toggle('sel', k === keyEl));
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp, { once: true });
    return;
  }

  // scrubbing
  e.preventDefault();
  project.setTime(timeFromEvent(e, laneEl));
  drag = { type: 'scrub', laneEl };
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp, { once: true });
}

function onPointerMove(e) {
  if (!drag) return;
  if (drag.type === 'key') {
    const t = timeFromEvent(e, drag.laneEl);
    project.moveKey(drag.objId, drag.key, t);
    drag.el.style.left = `${drag.key.t * pps}px`;
    drag.el.dataset.t = String(drag.key.t);
    if (drag.el.dataset.shownT !== String(drag.key.t)) drag.el.dataset.shownT = String(drag.key.t);
    updatePlayhead();
    project.commit('keys', true);
  } else if (drag.type === 'scrub') {
    project.setTime(timeFromEvent(e, drag.laneEl));
  }
}

function onPointerUp() {
  window.removeEventListener('pointermove', onPointerMove);
  if (drag?.el) drag.el.classList.remove('dragging');
  if (drag?.type === 'key') {
    project.state.selectedKey = { objId: drag.objId, key: drag.key };
    project.commit('keys');
  }
  drag = null;
  refresh();
}

function onDoubleClick(e) {
  const keyEl = e.target.closest('.key');
  if (!keyEl) return;
  const rowEl = e.target.closest('.tl-row');
  const laneEl = e.target.closest('.tl-cell.lane');
  const objId = rowEl?.dataset.id;
  if (!objId) return;
  const idx = [...laneEl.querySelectorAll('.key')].indexOf(keyEl);
  const key = project.keysFor(objId)[idx];
  if (key) project.cycleEase(key);
}
