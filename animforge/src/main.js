import * as project from './project.js';
import * as viewport from './viewport.js';
import * as timeline from './timeline.js';
import * as ui from './ui.js';
import * as library from './library.js';
import { on, emit } from './bus.js';
import { loadLocal } from './project.js';

/* ════════════════════════════════════════════════════════════
   AnimForge — entry point
   ════════════════════════════════════════════════════════════ */

let lastFrame = performance.now();

function boot() {
  /* document: restore last session, or start from the demo scene */
  const saved = loadLocal();
  if (saved) {
    try { project.loadProject(saved); }
    catch { project.loadProject(project.demoProject()); }
  } else {
    project.loadProject(project.demoProject());
  }

  viewport.init(document.getElementById('viewport'));
  viewport.setSnap(false);
  ui.init();
  timeline.init();

  on('change', () => viewport.sync());
  on('selection', () => viewport.sync());
  on('project:reload', () => viewport.sync());
  on('gizmo:end', () => viewport.sync());
  on('toast', ({ msg, kind }) => ui.toast(msg, kind));
  on('library:insert', ({ preset, xz }) => ui.insertPreset(preset, xz));

  /* first paint framing */
  requestAnimationFrame(() => {
    viewport.frameAll();
    const hint = document.getElementById('vp-hint');
    if (hint) setTimeout(() => { hint.style.transition = 'opacity .8s'; hint.style.opacity = '0'; }, 9000);
  });

  // debug/automation handle
  window.__ANIMFORGE__ = { project, viewport, ui, timeline, library, emit };

  requestAnimationFrame(tick);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('beforeunload', project.saveLocal);
}

/* ───────────────── render + playback loop ───────────────── */

function tick(now) {
  const dt = Math.min(0.1, (now - lastFrame) / 1000);
  lastFrame = now;

  if (project.state.playing) {
    const dur = project.clip()?.duration || 4;
    let t = project.state.time + dt;
    if (t >= dur) {
      if (project.state.loop) t = t % dur;
      else { t = dur; project.togglePlay(false); }
    }
    project.state.time = t;
    emit('time');
  }

  viewport.update(dt);
  requestAnimationFrame(tick);
}

/* ───────────────── keyboard shortcuts ───────────────── */

const isTyping = (el) => {
  if (!el) return false;
  const tag = el.tagName;
  return el.isContentEditable || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
};

function onKeyDown(e) {
  if (isTyping(e.target)) return;
  const meta = e.metaKey || e.ctrlKey;

  if (meta && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    e.shiftKey ? project.redo() : project.undo();
    return;
  }
  if (meta && e.key.toLowerCase() === 'y') { e.preventDefault(); project.redo(); return; }
  if (meta && e.key.toLowerCase() === 's') {
    e.preventDefault();
    import('./exporter.js').then((m) => { m.saveProjectJSON(); ui.toast('Project saved', 'ok'); });
    return;
  }
  if (meta && e.key.toLowerCase() === 'd') {
    e.preventDefault();
    if (project.state.selectedIds[0]) project.duplicateObject(project.state.selectedIds[0]);
    return;
  }
  if (meta) return;

  switch (e.key) {
    case ' ':
      e.preventDefault();
      project.togglePlay();
      break;
    case 'k': case 'K': {
      e.preventDefault();
      const id = project.state.selectedIds[0];
      if (id) project.insertKey(id, project.state.time);
      else emit('toast', { msg: 'Select an object first', kind: 'err' });
      break;
    }
    case 'w': case 'W': ui.setToolUI('translate'); break;
    case 'e': case 'E': ui.setToolUI('rotate'); break;
    case 'r': case 'R': ui.setToolUI('scale'); break;
    case 'f': case 'F': viewport.focusSelection(); break;
    case 'd': case 'D':
      if (project.state.selectedIds[0]) project.duplicateObject(project.state.selectedIds[0]);
      break;
    case 'ArrowLeft': e.preventDefault(); project.stepFrame(-1); break;
    case 'ArrowRight': e.preventDefault(); project.stepFrame(1); break;
    case 'Home': e.preventDefault(); project.setTime(0); break;
    case 'End': e.preventDefault(); project.setTime(project.clip()?.duration || 4); break;
    case 'Delete': case 'Backspace': {
      e.preventDefault();
      const sel = project.state.selectedKey;
      if (sel) {
        if (project.deleteKey(sel.objId, sel.key.t)) { project.state.selectedKey = null; emit('toast', { msg: 'Key deleted', kind: '' }); }
      } else if (project.state.selectedIds.length) {
        project.deleteObjects(project.state.selectedIds.slice());
      }
      break;
    }
    case 'Escape':
      project.select([]);
      break;
    default: break;
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
