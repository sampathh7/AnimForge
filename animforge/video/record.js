/* Records the AnimForge demo video.
   Drives the real app in headless Chrome, steps frames deterministically and
   writes JPEG frames to /tmp/frames. Encode with ffmpeg afterwards.

   usage: node video/record.js [width] [height]
*/
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const W = Number(process.argv[2] || 1280);
const H = Number(process.argv[3] || 720);
const FPS = Number(process.env.FPS || 12);
const OUT = '/tmp/frames';
const URL = 'http://127.0.0.1:8000/';

let frame = 0;
let page, client;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const T0 = Date.now();

/* ── capture ───────────────────────────────────────────── */
async function cap() {
  const { data } = await client.send('Page.captureScreenshot', {
    format: 'jpeg', quality: 93, optimizeForSpeed: true,
  });
  fs.writeFileSync(path.join(OUT, 'f' + String(frame).padStart(5, '0') + '.jpg'), Buffer.from(data, 'base64'));
  frame++;
  if (frame % 24 === 0) {
    console.log(`  frame ${frame} · ${(frame / FPS).toFixed(1)}s of video · ${((Date.now() - T0) / 1000).toFixed(0)}s elapsed`);
  }
}

const ev = (fn, ...a) => page.evaluate(fn, ...a);

async function hold(sec, perFrame) {
  const n = Math.max(1, Math.round(sec * FPS));
  for (let i = 0; i < n; i++) {
    if (perFrame) await perFrame(i, n);
    await cap();
  }
}

/* ── cursor / overlays ─────────────────────────────────── */
let cx = 640, cy = 420;
async function setCursor(x, y, visible = 1) {
  cx = x; cy = y;
  await ev((x, y, v) => window.__cur(x, y, v), x, y, visible);
}
const easeIO = (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);

async function glide(tx, ty, sec = 0.7) {
  const n = Math.max(2, Math.round(sec * FPS));
  const sx = cx, sy = cy;
  for (let i = 1; i <= n; i++) {
    const e = easeIO(i / n);
    await setCursor(sx + (tx - sx) * e, sy + (ty - sy) * e);
    await cap();
  }
}

async function center(sel) {
  return page.$eval(sel, (el) => {
    const b = el.getBoundingClientRect();
    return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
  });
}

async function clickFx(x, y, frames = 3) {
  for (let i = 1; i <= frames; i++) {
    await ev((x, y, p) => window.__clickFx(x, y, p), x, y, i / frames * 0.9);
    await cap();
  }
  await ev(() => window.__clickFx(0, 0, 1));
}

async function clickEl(sel, { move = 0.6, frames = 2, real = false } = {}) {
  const c = await center(sel);
  await glide(c.x, c.y, move);
  await clickFx(c.x, c.y, frames);
  if (real) await page.mouse.click(c.x, c.y);
  else await page.$eval(sel, (el) => el.click());
}

async function caption(kicker, text, p = 1) {
  await ev((k, t, p) => window.__cap(k, t, p), kicker, text, p);
}
async function captionFadeIn(kicker, text, frames = 3) {
  await ev((k, t) => window.__cap(k, t, 0), kicker, text);
  for (let i = 1; i <= frames; i++) {
    await ev((p) => { window.__capEl.style.opacity = String(p); }, i / frames);
    await cap();
  }
}
async function card(cfg, p) { await ev((c, p) => window.__card(c, p), cfg, p); }

/* ── app helpers ───────────────────────────────────────── */
async function setTime(t) {
  await ev((t) => {
    const A = window.__ANIMFORGE__;
    A.project.setTime(t, { silent: true });
    A.emit('time');
    A.viewport.update(0.016);
  }, t);
}
const render = () => ev(() => window.__ANIMFORGE__.viewport.update(0.016));

async function setField(sel, value) {
  await ev((sel, value) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.focus();
    el.value = String(value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }, sel, value);
}

async function pinToast() {
  await ev(() => {
    const t = document.querySelector('#toasts .toast');
    if (t) window.__toastHtml = t.outerHTML;
    if (!window.__toastTimer) {
      window.__toastTimer = setInterval(() => {
        const w = document.querySelector('#toasts');
        if (w && window.__toastHtml && !w.querySelector('.toast')) w.innerHTML = window.__toastHtml;
      }, 180);
    }
  });
}
async function unpinToast() {
  await ev(() => {
    clearInterval(window.__toastTimer);
    window.__toastTimer = null;
    window.__toastHtml = null;
    const w = document.querySelector('#toasts');
    if (w) w.innerHTML = '';
  });
}

async function focusTimelineRow(name) {
  await ev((name) => {
    const rows = [...document.querySelectorAll('.tl-row:not(.head)')];
    const row = rows.find((r) => window.__ANIMFORGE__.project.getObject(r.dataset.id)?.name === name);
    if (row) row.scrollIntoView({ block: 'center', inline: 'nearest' });
  }, name);
  await ev(() => window.__ANIMFORGE__.viewport.update(0.016));
}

/* ══════════════════════════════════════════════════════════ */
(async () => {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  fs.rmSync('/tmp/dl', { recursive: true, force: true });
  fs.mkdirSync('/tmp/dl', { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader',
      '--hide-scrollbars', '--force-device-scale-factor=1'],
  });
  page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.evaluateOnNewDocument(fs.readFileSync(path.join(__dirname, 'overlays.js'), 'utf8'));
  client = await page.createCDPSession();
  await client.send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: '/tmp/dl' });

  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

  await page.goto(URL, { waitUntil: 'networkidle0' });
  await ev(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });
  await sleep(2800);

  await ev(() => {
    const A = window.__ANIMFORGE__;
    A.project.select([]);
    A.project.state.autoKey = false;
    document.getElementById('tp-autokey').classList.remove('toggled');
    document.getElementById('vp-hint').style.display = 'none';
    window.__installOverlays();
  });

  const dur = await ev(() => window.__ANIMFORGE__.project.clip().duration);
  let ambient = 0;
  const bump = async () => { ambient += 1 / FPS; await setTime(ambient % dur); };

  /* ── 1 · TITLE ───────────────────────────────────────── */
  console.log('beat 1: title');
  const TITLE = {
    kind: 'title',
    title: 'Build 3D models. Animate them. Export them.',
    sub: 'A complete 3D modelling and keyframe animation studio that runs in a single web page.',
    chips: ['9 primitives', 'PBR materials', 'Keyframe timeline', 'Multi-clip', 'GLB export'],
  };
  await card(TITLE, 0);
  await setCursor(700, 380, 0);
  await hold(2.2, async (i, n) => { await card(TITLE, Math.min(1, ((i + 1) / (n * 0.7)) ** 0.9)); });

  /* ── 2 · VIEWPORT + ORBIT ────────────────────────────── */
  console.log('beat 2: viewport');
  await caption('Live viewport', 'Orbit, zoom and pose the demo scene', 0);
  await hold(0.7, async (i, n) => {
    await card(TITLE, Math.max(0, 1 - (i + 1) / n));
    await bump();
  });
  await card(TITLE, 0);
  await captionFadeIn('Live viewport', 'Orbit, zoom and pose the demo scene');

  const stage = await ev(() => {
    const b = document.getElementById('viewport').getBoundingClientRect();
    return { x: b.x + b.width / 2, y: b.y + b.height * 0.42 };
  });
  await page.mouse.move(stage.x, stage.y);
  await page.mouse.down();
  await hold(1.7, async (i, n) => {
    const p = i / n;
    await page.mouse.move(stage.x - 160 * p, stage.y + 16 * p);
    await ev(() => { const v = window.__ANIMFORGE__.viewport; v.update(0.09); v.update(0.09); });
    await bump();
  });
  await page.mouse.up();
  await hold(0.45, bump);

  /* ── 3 · MODEL ───────────────────────────────────────── */
  console.log('beat 3: modelling');
  await captionFadeIn('Model', 'Drop in any of 9 primitives');
  await clickEl('.prim[data-type="torus"]', { move: 0.7 });
  await pinToast();
  await hold(0.7, bump);
  await clickEl('.prim[data-type="icosa"]', { move: 0.65 });
  await pinToast();
  await hold(0.75, bump);
  await unpinToast();
  const objName = await ev(() => window.__ANIMFORGE__.project.primary()?.name || 'Crystal');

  /* ── 4 · TRANSFORM ───────────────────────────────────── */
  console.log('beat 4: transform');
  await captionFadeIn('Transform', 'Type exact values — or drag the gizmo');
  await clickEl('#inspector [data-ch="rot"][data-axis="1"]', { move: 0.5, frames: 2 });
  await hold(1.3, async (i, n) => {
    await setField('#inspector [data-ch="rot"][data-axis="1"]', Math.round(easeIO(i / n) * 120));
    await render();
  });
  await hold(0.35, render);

  /* ── 5 · MATERIAL ────────────────────────────────────── */
  console.log('beat 5: materials');
  await captionFadeIn('Materials', 'PBR colour, metal, roughness and glow');
  await clickEl('#inspector [data-mat="color"]', { move: 0.5, frames: 2 });
  await hold(1.2, async (i, n) => {
    await setField('#inspector [data-mat="color"]', hslToHex(198 + (i / n) * 152, 84, 58));
    await render();
  });
  await hold(0.3, render);

  /* ── 6 · KEYFRAMES ───────────────────────────────────── */
  console.log('beat 6: keyframes');
  await focusTimelineRow(objName);
  await captionFadeIn('Keyframes', 'Auto-key records every change');
  await clickEl('#tp-autokey', { move: 0.5, frames: 2 });
  await pinToast();
  await hold(0.4, render);
  await unpinToast();

  const scrub = async (t) => {
    const x = await ev((t) => window.__timelineX(t), t);
    const y = await ev(() => window.__timelineY());
    await glide(x, y, 0.55);
    await page.mouse.click(x, y);
    await render();
  };

  // pose 1 — explicit key
  await scrub(0);
  await clickEl('#insp-key', { move: 0.5, frames: 2 });
  await pinToast();
  await hold(0.45, render);
  await unpinToast();

  // pose 2 — auto-keyed move
  await focusTimelineRow(objName);
  await scrub(1.25);
  await clickEl('#inspector [data-ch="pos"][data-axis="1"]', { move: 0.45, frames: 2 });
  await hold(0.9, async (i, n) => {
    await setField('#inspector [data-ch="pos"][data-axis="1"]', (0.9 + easeIO(i / n) * 1.6).toFixed(2));
    await render();
  });

  // pose 3 — auto-keyed spin
  await focusTimelineRow(objName);
  await scrub(2.5);
  await clickEl('#inspector [data-ch="rot"][data-axis="1"]', { move: 0.45, frames: 2 });
  await hold(0.8, async (i, n) => {
    await setField('#inspector [data-ch="rot"][data-axis="1"]', Math.round(120 + easeIO(i / n) * 170));
    await render();
  });
  await focusTimelineRow(objName);
  await hold(0.5, render);

  /* ── 7 · PLAYBACK + CLIPS ────────────────────────────── */
  console.log('beat 7: playback');
  await captionFadeIn('Playback', 'Smooth interpolation, multiple clips');
  await clickEl('#tp-play', { move: 0.45, frames: 2 });
  let pt = 0;
  await hold(1.6, async () => { pt += 1 / FPS; await setTime(pt % dur); });

  await clickEl('#clip-list .clip-item:nth-child(2)', { move: 0.8, frames: 2 });
  await focusTimelineRow('Hull');
  await render();
  await hold(1.2, async () => { pt += 1 / FPS; await setTime(pt % dur); });
  await clickEl('#tp-play', { move: 0.45, frames: 2 });
  await hold(0.3, render);

  /* ── 8 · EXPORT ──────────────────────────────────────── */
  console.log('beat 8: export');
  await captionFadeIn('Export', 'One GLB with every clip baked in');
  await clickEl('#btn-export', { move: 0.85, frames: 2 });
  await hold(0.45, render);
  await clickEl('.export-menu [data-x="glb"]', { move: 0.45, frames: 2 });
  await sleep(1500);
  await pinToast();
  await hold(1.7, render);
  await unpinToast();

  /* ── 9 · OUTRO ───────────────────────────────────────── */
  console.log('beat 9: outro');
  await ev(() => window.__cap('', '', 0));
  await setCursor(cx, cy, 0);
  const OUTRO = {
    kind: 'outro',
    title: 'Model · Animate · Export',
    sub: 'AnimForge — build a scene, key it, and ship it as glTF.',
    chips: ['Runs fully offline', 'Autosaves your work', 'Undo history', 'No account needed'],
  };
  await card(OUTRO, 0);
  await hold(2.6, async (i, n) => { await card(OUTRO, Math.min(1, ((i + 1) / (n * 0.6)) ** 0.9)); });

  console.log('errors:', errors.length ? errors.join(' | ') : 'none');
  await browser.close();
  console.log('TOTAL FRAMES', frame, '· DURATION', (frame / FPS).toFixed(2) + 's');
})();

function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const to = (v) => Math.round(255 * v).toString(16).padStart(2, '0');
  return `#${to(f(0))}${to(f(8))}${to(f(4))}`;
}
