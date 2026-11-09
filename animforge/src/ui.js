import * as project from './project.js';
import * as viewport from './viewport.js';
import { PRIMITIVES, PRIM_ORDER, paramDefs } from './primitives.js';
import * as library from './library.js';
import { on, emit } from './bus.js';
import * as exporter from './exporter.js';

const $ = (id) => document.getElementById(id);
const fmt = (v) => String(Math.round((Number(v) || 0) * 1000) / 1000);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let inspSig = null;
const collapsedGroups = new Set();
let suppressFieldUpdate = false;

/* ════════════════════════════════════════════════════════════
   Toasts
   ════════════════════════════════════════════════════════════ */
export function toast(msg, kind = '') {
  const wrap = $('toasts');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.innerHTML = `<span class="tdot"></span><span>${esc(msg)}</span>`;
  wrap.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 260); }, 2400);
  while (wrap.children.length > 4) wrap.firstChild.remove();
}

/* ════════════════════════════════════════════════════════════
   Init
   ════════════════════════════════════════════════════════════ */
export function init() {
  buildPrimitives();
  wireOutlinerEvents();
  wireClips();
  wireTopbar();
  wireToolbar();
  wireTransport();
  wireInspectorEvents();
  wireHelp();
  buildLibraryUI();

  on('change', (reason) => {
    refreshOutliner(reason);
    refreshClips();
    refreshInspector(reason);
    syncHeader();
  });
  on('selection', () => {
    refreshOutliner('selection');
    refreshInspector('selection');
    refreshClips();
  });
  on('time', () => { updateTransportTime(); updateInspectorValues(); });
  on('playback', updatePlayIcon);
  on('history', updateHistoryButtons);
  on('clip', () => { refreshClips(); refreshInspector('clip'); syncHeader(); });
  on('project:reload', () => { inspSig = null; syncHeader(); refreshOutliner('objects'); refreshClips(); refreshInspector('reload'); updateHistoryButtons(); updateTransportTime(); });

  syncHeader();
  refreshOutliner('objects');
  refreshClips();
  refreshInspector('reload');
  updateHistoryButtons();
  updateTransportTime();
}

function syncHeader() {
  const p = project.state.project;
  if (!p) return;
  if (document.activeElement !== $('project-name')) $('project-name').value = p.name;
  $('obj-count').textContent = String(p.objects.length);
  $('clip-count').textContent = String(p.clips.length);
  const c = project.clip();
  $('tp-duration').textContent = (c?.duration || 4).toFixed(2);
  if (document.activeElement !== $('tl-duration')) $('tl-duration').value = String(c?.duration ?? 4);
  if (document.activeElement !== $('tl-fps')) $('tl-fps').value = String(p.fps);
}

/* ════════════════════════════════════════════════════════════
   Primitives palette
   ════════════════════════════════════════════════════════════ */
function buildPrimitives() {
  const grid = $('prim-grid');
  grid.innerHTML = PRIM_ORDER.map((type) => {
    const def = PRIMITIVES[type];
    return `<button class="prim" data-type="${type}" title="Add ${def.label}">
      <svg viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round">${def.icon}</svg>
      <span>${def.label}</span>
    </button>`;
  }).join('');
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.prim');
    if (!btn) return;
    const obj = project.addObject(btn.dataset.type, { xz: spawnPoint() });
    if (obj) {
      toast(`Added ${obj.name}`, 'ok');
      requestAnimationFrame(() => viewport.ensureVisible(obj.id));
    }
  });
}

/** find a free spot on the ground in front of the camera */
function spawnPoint() {
  const { point, right } = viewport.getSpawnPoint();
  const fwd = [-right[1], right[0]];
  const objects = project.state.project?.objects || [];
  const grid = [[0, 0], [1.15, 0], [-1.15, 0], [0, 1.15], [0, -1.15],
    [1.15, 1.15], [-1.15, 1.15], [1.15, -1.15], [-1.15, -1.15], [2.3, 0], [-2.3, 0]];
  for (const [a, b] of grid) {
    const p = [point[0] + right[0] * a + fwd[0] * b, point[1] + right[1] * a + fwd[1] * b];
    const taken = objects.some((o) => Math.hypot(o.pos[0] - p[0], o.pos[2] - p[1]) < 1.1);
    if (!taken) return p;
  }
  return point;
}

/* ════════════════════════════════════════════════════════════
   Outliner
   ════════════════════════════════════════════════════════════ */
function refreshOutliner(reason = 'objects') {
  const list = $('outliner');
  const p = project.state.project;
  if (!p) return;

  if (reason === 'values' && list.querySelectorAll('.ol-item').length === p.objects.length) {
    // light update: colours + hidden flags
    for (const li of list.querySelectorAll('.ol-item')) {
      const obj = project.getObject(li.dataset.id);
      if (!obj) continue;
      li.classList.toggle('is-hidden', !obj.visible);
      const sw = li.querySelector('.ol-swatch');
      if (sw) sw.style.background = obj.material.color;
      li.classList.toggle('sel', project.isSelected(obj.id));
    }
    return;
  }

  if (!p.objects.length) {
    list.innerHTML = '<li class="ol-empty">No objects yet — add a primitive above.</li>';
    return;
  }
  let html = '';
  let lastGroup = null;
  for (const o of p.objects) {
    if (o.group && o.group !== lastGroup) {
      const members = p.objects.filter((x) => x.group === o.group);
      const presetName = library.getPreset(o.preset)?.name || 'Model';
      const collapsed = collapsedGroups.has(o.group);
      const allSel = members.every((m) => project.isSelected(m.id));
      html += `
    <li class="ol-group${allSel ? ' sel' : ''}" data-group="${o.group}">
      <button class="ol-caret" data-collapse="${o.group}" title="Collapse / expand">${collapsed ? '▸' : '▾'}</button>
      <span class="ol-swatch" style="background:${esc(members[0]?.material?.color || '#7cc7ff')}"></span>
      <span class="ol-name" data-selectgroup="${o.group}" title="Select the whole model">${esc(presetName)}</span>
      <span class="ol-type">${members.length} parts</span>
    </li>`;
    }
    lastGroup = o.group || null;
    if (o.group && collapsedGroups.has(o.group)) continue;
    html += `
    <li class="ol-item${o.group ? ' in-group' : ''}${project.isSelected(o.id) ? ' sel' : ''}${o.visible ? '' : ' is-hidden'}" data-id="${o.id}">
      <span class="ol-swatch" style="background:${esc(o.material.color)}"></span>
      <span class="ol-name" data-name="${o.id}">${esc(o.name)}</span>
      <span class="ol-type">${esc(PRIMITIVES[o.type]?.label || o.type)}</span>
      <span class="ol-actions">
        <button class="ol-act${o.visible ? '' : ' hidden-eye'}" data-act="visible" data-id="${o.id}" title="Show / hide">
          <svg viewBox="0 0 24 24">${o.visible
            ? '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.6"/>'
            : '<path d="M4 4l16 16M9.9 5.9A9.6 9.6 0 0112 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 01-2.6 3.4M6.4 7.8A16.7 16.7 0 002.5 12S6 18.5 12 18.5c1 0 1.9-.2 2.7-.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}
          </svg>
        </button>
        <button class="ol-act" data-act="dup" data-id="${o.id}" title="Duplicate">
          <svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M15 6.5V5a1.5 1.5 0 00-1.5-1.5H5A1.5 1.5 0 003.5 5v8.5A1.5 1.5 0 005 15h1.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>
        </button>
        <button class="ol-act" data-act="del" data-id="${o.id}" title="Delete">
          <svg viewBox="0 0 24 24"><path d="M5 7h14M9 7V4.8h6V7M7 7l1 13h8l1-13M10.5 11v5M13.5 11v5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
      </span>
    </li>`;
  }
  list.innerHTML = html;
}

function wireOutlinerEvents() {
  const list = $('outliner');
  list.addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]');
    if (act) {
      const id = act.dataset.id;
      if (act.dataset.act === 'del') project.deleteObjects([id]);
      if (act.dataset.act === 'dup') project.duplicateObject(id);
      if (act.dataset.act === 'visible') project.toggleVisible(id);
      return;
    }
    const caret = e.target.closest('[data-collapse]');
    if (caret) {
      const gid = caret.dataset.collapse;
      collapsedGroups.has(gid) ? collapsedGroups.delete(gid) : collapsedGroups.add(gid);
      refreshOutliner('objects');
      return;
    }
    const gname = e.target.closest('[data-selectgroup]');
    if (gname) {
      project.selectGroup(gname.dataset.selectgroup);
      return;
    }
    const li = e.target.closest('.ol-item');
    if (!li || e.target.isContentEditable) return;
    project.select([li.dataset.id], e.shiftKey || e.metaKey || e.ctrlKey);
  });
  list.addEventListener('dblclick', (e) => {
    const name = e.target.closest('.ol-name');
    if (!name) return;
    name.contentEditable = 'true';
    name.focus();
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(name);
    sel.removeAllRanges();
    sel.addRange(range);
  });
  list.addEventListener('blur', (e) => {
    const name = e.target.closest?.('.ol-name');
    if (!name) return;
    name.contentEditable = 'false';
    project.renameObject(name.dataset.name, name.textContent);
    refreshOutliner('objects');
  }, true);
  list.addEventListener('keydown', (e) => {
    const name = e.target.closest?.('.ol-name');
    if (!name) return;
    if (e.key === 'Enter') { e.preventDefault(); name.blur(); }
    if (e.key === 'Escape') { name.textContent = project.getObject(name.dataset.name)?.name || ''; name.blur(); }
    e.stopPropagation();
  });
}

/* ════════════════════════════════════════════════════════════
   Clips
   ════════════════════════════════════════════════════════════ */
function refreshClips() {
  const list = $('clip-list');
  const p = project.state.project;
  if (!p || !list) return;
  list.innerHTML = p.clips.map((c) => {
    const keys = Object.values(c.tracks || {}).reduce((n, arr) => n + arr.length, 0);
    return `<li class="clip-item${c.id === p.activeClipId ? ' active' : ''}" data-id="${c.id}">
      <span class="clip-name" data-name="${c.id}">${esc(c.name)}</span>
      <span class="clip-meta">${c.duration.toFixed(1)}s · ${keys}◆</span>
      <button class="ol-act" data-clipdel="${c.id}" title="Delete clip">
        <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </li>`;
  }).join('');
}

function wireClips() {
  $('clip-list').addEventListener('click', (e) => {
    const del = e.target.closest('[data-clipdel]');
    if (del) {
      if (project.state.project.clips.length <= 1) { toast('A project needs at least one clip', 'err'); return; }
      project.deleteClip(del.dataset.clipdel);
      return;
    }
    if (e.target.isContentEditable) return;
    const li = e.target.closest('.clip-item');
    if (li) project.setActiveClip(li.dataset.id);
  });
  $('clip-list').addEventListener('dblclick', (e) => {
    const name = e.target.closest('.clip-name');
    if (!name) return;
    name.contentEditable = 'true';
    name.focus();
    const sel = window.getSelection();
    const r = document.createRange();
    r.selectNodeContents(name);
    sel.removeAllRanges();
    sel.addRange(r);
  });
  $('clip-list').addEventListener('blur', (e) => {
    const name = e.target.closest?.('.clip-name');
    if (!name) return;
    name.contentEditable = 'false';
    project.renameClip(name.dataset.name, name.textContent);
    refreshClips();
  }, true);
  $('clip-list').addEventListener('keydown', (e) => {
    const name = e.target.closest?.('.clip-name');
    if (!name) return;
    if (e.key === 'Enter') { e.preventDefault(); name.blur(); }
    e.stopPropagation();
  });
  $('btn-add-clip').addEventListener('click', () => {
    const c = project.addClip();
    toast(`Created ${c.name} — key your objects to build it`, 'ok');
  });
}

/* ════════════════════════════════════════════════════════════
   Inspector
   ════════════════════════════════════════════════════════════ */
function emptyInspectorHTML() {
  const empty = !project.state.project?.objects.length;
  return `<div class="insp-empty">
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4">
      <path d="M32 6l22 12.7v26.6L32 58 10 45.3V18.7z"/><path d="M32 32v26M32 32l22-13.3M32 32L10 18.7" opacity=".6"/>
    </svg>
    <b>${empty ? 'Empty scene' : 'Nothing selected'}</b>
    <p>${empty
      ? 'Add a primitive to start modelling, or load the demo scene to see how a rigged animation is put together.'
      : 'Pick an object in the viewport or the outliner to edit its shape, finish and keyframes.'}</p>
    ${empty ? `<div class="insp-empty-actions">
        <button class="ghost-btn small" id="insp-empty-box">+ Add a box</button>
        <button class="ghost-btn small" id="insp-empty-demo">Load demo scene</button>
      </div>` : ''}
  </div>`;
}

function inspectorHTML(obj) {
  const def = PRIMITIVES[obj.type] || PRIMITIVES.box;
  const tr = project.currentTransform(obj);
  const keys = project.keysFor(obj.id);
  const mat = obj.material;
  const multi = project.state.selectedIds.length;

  const vecRow = (label, ch, vals, step = 0.05) => `
    <div class="vec-row">
      <label>${label}</label>
      ${['X', 'Y', 'Z'].map((ax, i) => `
        <div class="axis-field ${ax.toLowerCase()}">
          <span class="axis">${ax}</span>
          <input type="number" step="${step}" data-ch="${ch}" data-axis="${i}" value="${fmt(vals[i])}">
        </div>`).join('')}
    </div>`;

  const slider = (label, key, val, min, max, step) => `
    <div class="slider-row">
      <label>${label}</label>
      <input type="range" data-mat="${key}" min="${min}" max="${max}" step="${step}" value="${val}">
      <output data-out="${key}">${Number(val).toFixed(2)}</output>
    </div>`;

  const colorRow = (label, key, val) => `
    <div class="color-row">
      <label>${label}</label>
      <div class="color-input"><input type="color" data-mat="${key}" value="${val}"><span data-out="${key}">${esc(val)}</span></div>
    </div>`;

  const check = (label, key, val) => `
    <label class="check-row"><input type="checkbox" data-mat="${key}" ${val ? 'checked' : ''}><span>${label}</span></label>`;

  const shapeChips = PRIM_ORDER.map((t) => `
      <button class="swap-chip${t === obj.type ? ' active' : ''}" data-swap="${t}" title="Turn into ${PRIMITIVES[t].label}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${PRIMITIVES[t].icon}</svg>
      </button>`).join('');

  const paramRows = Object.entries(paramDefs(obj.type)).map(([k, d]) => `
    <div class="field-row">
      <label>${d.label}</label>
      <input type="number" data-param="${k}" min="${d.min}" max="${d.max}" step="${d.step}" value="${fmt(obj.params[k])}">
    </div>`).join('');

  const model = obj.group ? {
    name: library.getPreset(obj.preset)?.name || 'Model',
    parts: project.groupMembers(obj.id).length,
  } : null;

  return `
    <div class="insp-head">
      <span class="tag">${esc(def.label)}</span>
      <h2>${esc(obj.name)}</h2>
    </div>

    ${model ? `<div class="model-bar">
      <span class="model-name"><svg viewBox="0 0 24 24"><path d="M4 8l8-4 8 4-8 4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 12l8 4 8-4M4 16l8 4 8-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" opacity=".65"/></svg>${esc(model.name)}</span>
      <span class="model-count">${model.parts} parts</span>
      <div class="model-actions">
        <button class="ghost-btn small" id="insp-selmodel" title="Select every part, then drag the gizmo to move / rotate / scale the model">Select whole model</button>
        <button class="ghost-btn small" id="insp-splitmodel" title="Break the model into independent objects">Split</button>
        <button class="ghost-btn small danger" id="insp-delmodel" title="Delete every part of this model">Delete model</button>
      </div>
    </div>` : ''}

    <div class="sect">
      <h4>Transform
        <span class="badge" id="insp-anim">${keys.length ? `${keys.length} keys` : 'static'}</span>
      </h4>
      ${vecRow('Position', 'pos', tr.pos)}
      ${vecRow('Rotation', 'rot', tr.rot, 1)}
      ${vecRow('Scale', 'scale', tr.scale, 0.05)}
      <button class="key-btn" id="insp-key">
        <svg viewBox="0 0 24 24"><path d="M12 4l7 8-7 8-7-8z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
        <span id="insp-key-label">Insert key at ${project.state.time.toFixed(2)}s</span>
      </button>
    </div>

    <div class="sect">
      <h4>Shape</h4>
      <div class="swap-block">
        <label>Convert to</label>
        <div class="swap-grid">${shapeChips}</div>
      </div>
      ${paramRows}
    </div>

    <div class="sect">
      <h4>Material</h4>
      ${colorRow('Base colour', 'color', mat.color)}
      ${slider('Metalness', 'metalness', mat.metalness, 0, 1, 0.01)}
      ${slider('Roughness', 'roughness', mat.roughness, 0, 1, 0.01)}
      ${slider('Opacity', 'opacity', mat.opacity, 0.05, 1, 0.01)}
      ${colorRow('Glow', 'emissive', mat.emissive || '#000000')}
      ${slider('Glow power', 'emissiveIntensity', mat.emissiveIntensity ?? 1, 0, 6, 0.05)}
      ${check('Wireframe', 'wireframe', !!mat.wireframe)}
      ${check('Flat shading', 'flatShading', !!mat.flatShading)}
    </div>

    <div class="sect">
      <h4>Actions</h4>
      <div style="display:flex;gap:6px">
        <button class="ghost-btn small" id="insp-dup" style="flex:1">Duplicate</button>
        <button class="ghost-btn small" id="insp-del" style="flex:1;color:#ff8fa0">Delete${multi > 1 ? ` (${multi})` : ''}</button>
      </div>
      ${keys.length ? `<button class="ghost-btn small" id="insp-clearkeys" style="width:100%;margin-top:6px">Clear keys in “${esc(project.clip()?.name || '')}”</button>` : ''}
    </div>`;
}

function refreshInspector(reason = 'values') {
  const root = $('inspector');
  const obj = project.primary();
  const sig = obj ? `${obj.id}|${obj.type}|${project.state.selectedIds.length}|${obj.group || ''}` : 'none';
  if (sig !== inspSig || reason !== 'values') {
    inspSig = sig;
    root.innerHTML = obj ? inspectorHTML(obj) : emptyInspectorHTML();
    if (obj) wireInspector(root, obj);
    else {
      $('insp-empty-box')?.addEventListener('click', () => project.addObject('box', { xz: spawnPoint() }));
      $('insp-empty-demo')?.addEventListener('click', () => {
        project.loadProject(project.demoProject());
        viewport.frameAll();
        toast('Demo scene loaded', 'ok');
      });
    }
    return;
  }
  if (obj) updateInspectorValues();
}

function updateInspectorValues() {
  const obj = project.primary();
  if (!obj || inspSig === 'none') return;
  const root = $('inspector');
  if (!root.querySelector('[data-ch]')) return;
  const tr = project.currentTransform(obj);
  for (const input of root.querySelectorAll('[data-ch]')) {
    if (document.activeElement === input) continue;
    const ch = input.dataset.ch;
    const i = Number(input.dataset.axis);
    input.value = fmt(tr[ch][i]);
  }
  const badge = $('insp-anim');
  if (badge) {
    const n = project.keysFor(obj.id).length;
    badge.textContent = n ? `${n} keys` : 'static';
  }
  const kl = $('insp-key-label');
  if (kl) kl.textContent = `Insert key at ${project.state.time.toFixed(2)}s`;
}

function readVec(root, ch) {
  const vals = [];
  for (const input of root.querySelectorAll(`[data-ch="${ch}"]`)) vals[Number(input.dataset.axis)] = Number(input.value) || 0;
  return vals;
}

function wireInspector(root, obj) {

  root.querySelectorAll('[data-ch]').forEach((input) => {
    input.addEventListener('input', () => {
      const ch = input.dataset.ch;
      const patch = { [ch]: readVec(root, ch) };
      if (ch === 'scale') patch.scale = patch.scale.map((v) => (Math.abs(v) < 0.001 ? 0.001 : v));
      project.writeTransform(obj.id, patch);
    });
  });

  root.querySelectorAll('[data-param]').forEach((input) => {
    input.addEventListener('input', () => {
      const k = input.dataset.param;
      const def = paramDefs(obj.type)[k];
      let v = Number(input.value);
      if (!Number.isFinite(v)) return;
      v = Math.min(def.max, Math.max(def.min, v));
      obj.params[k] = v;
      project.commit('values');
    });
  });

  root.querySelectorAll('[data-mat]').forEach((input) => {
    const evt = input.type === 'range' || input.type === 'color' ? 'input' : 'change';
    input.addEventListener(evt, () => {
      const k = input.dataset.mat;
      let v;
      if (input.type === 'checkbox') v = input.checked;
      else if (input.type === 'color') v = input.value;
      else v = Number(input.value);
      obj.material[k] = v;
      const out = root.querySelector(`[data-out="${k}"]`);
      if (out) out.textContent = input.type === 'color' ? v : Number(v).toFixed(2);
      project.commit('values');
    });
  });

  $('insp-selmodel')?.addEventListener('click', () => project.selectGroup(obj.id));
  $('insp-splitmodel')?.addEventListener('click', () => project.ungroup(obj.id));
  $('insp-delmodel')?.addEventListener('click', () => {
    const n = project.groupMembers(obj.id).length;
    project.deleteGroup(obj.id);
    toast(`Deleted model · ${n} parts`);
  });

  root.querySelectorAll('[data-swap]').forEach((btn) => {
    btn.addEventListener('click', () => project.changeType(obj.id, btn.dataset.swap));
  });

  $('insp-key')?.addEventListener('click', () => project.insertKey(obj.id, project.state.time));
  $('insp-dup')?.addEventListener('click', () => { project.duplicateObject(obj.id); toast('Duplicated', 'ok'); });
  $('insp-del')?.addEventListener('click', () => {
    const ids = project.state.selectedIds.slice();
    project.deleteObjects(ids);
    toast(ids.length > 1 ? `Deleted ${ids.length} objects` : 'Object deleted');
  });
  $('insp-clearkeys')?.addEventListener('click', () => {
    project.clearTrack(obj.id);
    toast('Track cleared');
  });
}

let focusHistoryBound = false;
function wireInspectorEvents() {
  if (focusHistoryBound) return;
  focusHistoryBound = true;
  $('inspector').addEventListener('focusin', () => project.pushHistory());
}

/* ════════════════════════════════════════════════════════════
   Top bar + export menu
   ════════════════════════════════════════════════════════════ */
function wireTopbar() {
  $('btn-undo').addEventListener('click', project.undo);
  $('btn-redo').addEventListener('click', project.redo);
  $('btn-save').addEventListener('click', () => {
    const f = exporter.saveProjectJSON();
    toast(`Saved ${f}`, 'ok');
  });
  $('btn-new').addEventListener('click', () => {
    if (!confirm('Start a new scene? Unsaved changes will be lost.')) return;
    project.newProject('Untitled scene');
    toast('New scene', 'ok');
  });
  $('btn-open').addEventListener('click', () => $('file-input').click());
  $('file-input').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const text = await file.text();
      project.loadProject(JSON.parse(text));
      toast(`Opened ${file.name}`, 'ok');
      viewport.setView('persp');
    } catch (err) {
      toast('Could not open that project file', 'err');
      console.error(err);
    }
  });
  $('btn-export').addEventListener('click', (e) => openExportMenu(e.currentTarget));
  $('project-name').addEventListener('change', (e) => {
    const name = e.target.value.trim() || 'Untitled scene';
    project.pushHistory();
    project.state.project.name = name;
    project.commit('values');
    e.target.value = name;
  });
}

function openExportMenu(anchor) {
  document.querySelector('.export-menu')?.remove();
  const menu = document.createElement('div');
  menu.className = 'export-menu';
  menu.innerHTML = `
    <button data-x="glb"><b>GLB model</b><small>Animated binary glTF · Blender, Unity, three.js</small></button>
    <button data-x="png"><b>PNG snapshot</b><small>Current viewport render</small></button>
    <button data-x="json"><b>Project file</b><small>Editable .json you can reopen</small></button>`;
  document.body.appendChild(menu);
  const r = anchor.getBoundingClientRect();
  menu.style.top = `${r.bottom + 8}px`;
  menu.style.left = `${Math.max(12, r.right - menu.offsetWidth)}px`;

  const close = (ev) => {
    if (ev && menu.contains(ev.target)) return;
    menu.remove();
    document.removeEventListener('pointerdown', close, true);
  };
  setTimeout(() => document.addEventListener('pointerdown', close, true), 0);

  menu.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-x]');
    if (!btn) return;
    menu.remove();
    const kind = btn.dataset.x;
    try {
      if (kind === 'glb') {
        toast('Exporting GLB…');
        const res = await exporter.exportGLB();
        toast(`${res.filename} · ${res.objects} objects · ${res.clips} clip${res.clips === 1 ? '' : 's'}`, 'ok');
      } else if (kind === 'png') {
        const f = exporter.exportPNG();
        toast(`Saved ${f}`, 'ok');
      } else {
        const f = exporter.saveProjectJSON();
        toast(`Saved ${f}`, 'ok');
      }
    } catch (err) {
      console.error(err);
      toast(err?.message || 'Export failed', 'err');
    }
  });
}

function updateHistoryButtons() {
  $('btn-undo').disabled = !project.canUndo();
  $('btn-redo').disabled = !project.canRedo();
}

/* ════════════════════════════════════════════════════════════
   Viewport toolbar + transport
   ════════════════════════════════════════════════════════════ */
function wireToolbar() {
  document.querySelectorAll('[data-tool]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-tool]').forEach((b) => b.classList.toggle('active', b === btn));
      viewport.setTool(btn.dataset.tool);
    });
  });
  $('btn-snap').addEventListener('click', (e) => {
    const on = !e.currentTarget.classList.contains('active');
    e.currentTarget.classList.toggle('active', on);
    viewport.setSnap(on);
  });
  $('btn-grid').addEventListener('click', (e) => {
    const on = !e.currentTarget.classList.contains('active');
    e.currentTarget.classList.toggle('active', on);
    viewport.setGridVisible(on);
  });
  $('btn-focus').addEventListener('click', () => viewport.focusSelection());
  document.querySelectorAll('[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b === btn));
      if (btn.dataset.view === 'persp') viewport.setView('persp');
      else viewport.setView(btn.dataset.view);
    });
  });
}

export function setToolUI(tool) {
  document.querySelectorAll('[data-tool]').forEach((b) => b.classList.toggle('active', b.dataset.tool === tool));
  viewport.setTool(tool);
}

function wireTransport() {
  $('tp-play').addEventListener('click', () => project.togglePlay());
  $('tp-start').addEventListener('click', () => project.setTime(0));
  $('tp-prev').addEventListener('click', () => project.stepFrame(-1));
  $('tp-next').addEventListener('click', () => project.stepFrame(1));
  $('tp-prevkey').addEventListener('click', () => project.jumpKey(-1));
  $('tp-loop').addEventListener('click', (e) => {
    project.state.loop = !project.state.loop;
    e.currentTarget.classList.toggle('toggled', project.state.loop);
  });
  $('tp-autokey').addEventListener('click', (e) => {
    project.state.autoKey = !project.state.autoKey;
    e.currentTarget.classList.toggle('toggled', project.state.autoKey);
    toast(`Auto-key ${project.state.autoKey ? 'ON' : 'OFF'}`, project.state.autoKey ? 'ok' : '');
  });
}

function updatePlayIcon() {
  const playing = project.state.playing;
  $('tp-play').querySelector('.i-play').style.display = playing ? 'none' : 'block';
  $('tp-play').querySelector('.i-pause').style.display = playing ? 'block' : 'none';
}

function updateTransportTime() {
  $('tp-current').textContent = project.state.time.toFixed(2);
  const c = project.clip();
  $('tp-duration').textContent = (c?.duration || 4).toFixed(2);
}

/* ════════════════════════════════════════════════════════════
   Model library
   ════════════════════════════════════════════════════════════ */

const LIB_ICON = {
  human: '<circle cx="12" cy="6.6" r="3"/><path d="M12 9.6v5.4M12 15l-3 5.4M12 15l3 5.4M7.2 12.6c2-1.3 7.6-1.3 9.6 0"/>',
  animal: '<circle cx="8.2" cy="8.6" r="1.9"/><circle cx="15.8" cy="8.6" r="1.9"/><circle cx="5.4" cy="13.4" r="1.7"/><circle cx="18.6" cy="13.4" r="1.7"/><path d="M12 11.8c2.9 0 4.8 2.3 4.8 4.4S14.7 20.6 12 20.6 7.2 18.3 7.2 16.2s1.9-4.4 4.8-4.4z"/>',
  thing: '<path d="M12 3.4l7.4 4.2v8.8L12 20.6 4.6 16.4V7.6z"/><path d="M12 12l7.4-4.4M12 12v8.6M12 12L4.6 7.6"/>',
};

const partCounts = new Map();
function presetInfo(p) {
  if (!partCounts.has(p.id)) {
    let n = 0;
    try { n = p.make().parts.length; } catch { n = 0; }
    partCounts.set(p.id, n);
  }
  return partCounts.get(p.id);
}

export function insertPreset(preset, xz) {
  const res = library.insertPreset(preset, xz);
  if (res) requestAnimationFrame(() => viewport.frameObjects(res.objects.map((o) => o.id), 1.65));
  return res;
}

function buildLibraryUI() {
  const ov = $('lib-overlay');
  if (!ov) return;
  const grid = $('lib-grid');
  const tabs = $('lib-tabs');
  const search = $('lib-search');
  let cat = 'all';

  const countEl = $('lib-count');
  if (countEl) countEl.textContent = String(library.LIBRARY.length);

  tabs.innerHTML = library.CATEGORIES.map((c) =>
    `<button class="lib-tab${c.id === 'all' ? ' active' : ''}" data-cat="${c.id}">${c.label}</button>`).join('');

  const render = () => {
    const q = (search.value || '').trim().toLowerCase();
    const items = library.LIBRARY.filter((p) => (cat === 'all' || p.cat === cat) && (!q || p.name.toLowerCase().includes(q)));
    grid.innerHTML = items.length
      ? items.map((p) => `
        <button class="lib-card" data-preset="${p.id}">
          <span class="lib-emoji ${p.cat}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${LIB_ICON[p.cat] || LIB_ICON.thing}</svg>
          </span>
          <span class="lib-body">
            <b>${esc(p.name)}</b>
            <small>${presetInfo(p)} parts · ${esc(p.clip)} ${p.duration.toFixed(1)}s</small>
          </span>
          <span class="lib-add">+</span>
        </button>`).join('')
      : '<p class="lib-empty">No models match that search.</p>';
  };

  const open = () => { ov.hidden = false; render(); setTimeout(() => search.focus(), 30); };
  const close = () => { ov.hidden = true; };

  $('btn-library').addEventListener('click', open);
  $('lib-close').addEventListener('click', close);
  ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !ov.hidden) close();
    if ((e.key === 'l' || e.key === 'L') && !e.metaKey && !e.ctrlKey && !/input|textarea/i.test(document.activeElement?.tagName || '')) {
      e.preventDefault();
      ov.hidden ? open() : close();
    }
  });

  tabs.addEventListener('click', (e) => {
    const b = e.target.closest('[data-cat]');
    if (!b) return;
    cat = b.dataset.cat;
    tabs.querySelectorAll('[data-cat]').forEach((t) => t.classList.toggle('active', t === b));
    render();
  });
  search.addEventListener('input', render);

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-preset]');
    if (!card) return;
    const preset = library.getPreset(card.dataset.preset);
    if (!preset) return;
    const into = !!$('lib-into-clip')?.checked;
    const res = library.insertPreset(preset, spawnPoint(), { intoCurrentClip: into });
    close();
    if (res) requestAnimationFrame(() => viewport.frameObjects(res.objects.map((o) => o.id), 1.65));
  });

  render();
}

/* ════════════════════════════════════════════════════════════
   Help overlay
   ════════════════════════════════════════════════════════════ */
function wireHelp() {
  const ov = $('help-overlay');
  const open = () => { ov.hidden = false; };
  const close = () => { ov.hidden = true; };
  $('btn-help').addEventListener('click', open);
  $('help-close').addEventListener('click', close);
  ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !ov.hidden) close();
    if (e.key === '?' || (e.key === '/' && e.shiftKey)) open();
  });
}


