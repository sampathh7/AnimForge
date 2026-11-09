/* Injected into the page before load: cursor, click pulse, captions, title cards. */
(() => {
  const F = 'ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif';

  function mk(html, css) {
    const d = document.createElement('div');
    d.style.cssText = css;
    d.innerHTML = html;
    document.body.appendChild(d);
    return d;
  }

  window.__installOverlays = () => {
    if (document.getElementById('__cursor')) return;

    /* ── fake pointer ── */
    window.__cursorEl = mk(
      `<svg width="30" height="32" viewBox="0 0 30 32">
         <path d="M1 1 L1 24.5 L7.6 18.6 L11.4 27.6 L16.2 25.6 L12.4 16.9 L21.5 16.2 Z"
               fill="#ffffff" stroke="#080b11" stroke-width="1.7" stroke-linejoin="round"/>
       </svg>`,
      `position:fixed;left:0;top:0;z-index:99999;pointer-events:none;opacity:0;
       transform:translate(-300px,-300px);filter:drop-shadow(0 3px 6px rgba(0,0,0,.55));transition:opacity .25s;`
    );

    /* ── click pulse ── */
    window.__fxEl = mk(
      '',
      `position:fixed;left:0;top:0;width:62px;height:62px;z-index:99998;pointer-events:none;opacity:0;
       border-radius:50%;border:2px solid #6ee7ff;box-shadow:0 0 18px rgba(110,231,255,.85),inset 0 0 14px rgba(110,231,255,.35);
       transform:scale(.2);`
    );

    /* ── caption pill (under the viewport toolbar) ── */
    window.__capEl = mk(
      `<span style="width:7px;height:7px;border-radius:50%;background:#6ee7ff;box-shadow:0 0 10px #6ee7ff;flex:none"></span>
       <span id="__capK" style="font:800 10.5px/1 ${F};letter-spacing:.16em;text-transform:uppercase;color:#6ee7ff"></span>
       <span style="width:1px;height:13px;background:rgba(255,255,255,.18);flex:none"></span>
       <span id="__capT" style="font:500 15.5px/1.25 ${F};color:#eaf2ff;white-space:nowrap"></span>`,
      `position:fixed;left:276px;top:110px;z-index:9998;pointer-events:none;opacity:0;
       display:flex;align-items:center;gap:10px;padding:9px 16px;border-radius:999px;
       background:rgba(9,13,20,.82);border:1px solid rgba(110,231,255,.28);
       box-shadow:0 20px 50px -26px #000,0 0 0 1px rgba(255,255,255,.03) inset;backdrop-filter:blur(12px);`
    );

    /* ── title / outro card ── */
    window.__cardEl = mk(
      `<div style="position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);width:1500px;height:900px;
                   background:radial-gradient(closest-side,rgba(110,231,255,.14),rgba(167,139,250,.09) 55%,transparent 100%);
                   pointer-events:none"></div>
       <div id="__cardInner" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:16px;padding:0 40px;text-align:center"></div>`,
      `position:fixed;inset:0;z-index:9997;pointer-events:none;opacity:0;display:flex;align-items:center;justify-content:center;
       background:radial-gradient(120% 95% at 50% 42%,rgba(8,12,19,.90) 0%,rgba(4,7,12,.965) 68%,rgba(3,5,9,.99) 100%);`
    );
    window.__cardKind = null;
  };

  window.__cur = (x, y, visible = 1) => {
    const el = window.__cursorEl;
    if (!el) return;
    el.style.transform = `translate(${x - 1}px,${y - 1}px)`;
    el.style.opacity = String(visible);
  };

  window.__clickFx = (x, y, p) => {
    const el = window.__fxEl;
    if (!el) return;
    if (p >= 1) { el.style.opacity = '0'; return; }
    el.style.left = `${x - 31}px`;
    el.style.top = `${y - 31}px`;
    el.style.opacity = String(1 - p * 0.85);
    el.style.transform = `scale(${0.25 + p * 0.95})`;
  };

  window.__cap = (kicker, text, opacity = 1) => {
    const el = window.__capEl;
    if (!el) return;
    if (kicker !== undefined) document.getElementById('__capK').textContent = kicker || '';
    if (text !== undefined) document.getElementById('__capT').textContent = text || '';
    el.style.opacity = String(opacity);
  };

  const LOGO = `<svg width="54" height="54" viewBox="0 0 32 32" style="display:block">
      <defs><linearGradient id="__lg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#6ee7ff"/><stop offset="1" stop-color="#a78bfa"/>
      </linearGradient></defs>
      <path d="M16 3.2l10.2 5.9v13.8L16 28.8 5.8 22.9V9.1z" fill="none" stroke="url(#__lg)" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M16 3.2v11M16 14.2l10.2-5.1M16 14.2L5.8 9.1M16 14.2v14.6" fill="none" stroke="url(#__lg)" stroke-width="1.1" opacity=".75"/>
      <circle cx="16" cy="14.2" r="2.1" fill="url(#__lg)"/>
    </svg>`;

  const CHIP = (t) => `<span style="font:600 12.5px/1 ${F};color:#cfe4f7;letter-spacing:.02em;
      padding:9px 15px;border-radius:999px;border:1px solid rgba(150,180,215,.22);
      background:rgba(255,255,255,.04)">${t}</span>`;

  window.__card = (cfg, opacity) => {
    const el = window.__cardEl;
    const inner = document.getElementById('__cardInner');
    if (!el || !inner) return;
    if (cfg && cfg.title) {
      const kind = cfg.kind || 'title';
      if (window.__cardKind !== kind + cfg.title) {
        window.__cardKind = kind + cfg.title;
        const big = kind === 'title';
        inner.innerHTML = `
          <div style="display:flex;align-items:center;gap:14px">
            ${LOGO}
            <div style="font:700 ${big ? 46 : 34}px/1 ${F};letter-spacing:-.02em;color:#f2f7ff">AnimForge</div>
          </div>
          <div style="font:600 ${big ? 40 : 30}px/1.15 ${F};letter-spacing:-.025em;max-width:820px;
            background:linear-gradient(100deg,#eaf6ff 0%,#9fe6ff 42%,#c4b5fd 78%,#eaf6ff 100%);
            -webkit-background-clip:text;background-clip:text;color:transparent">${cfg.title}</div>
          <div style="font:400 19px/1.5 ${F};color:#93a4bd;max-width:640px;margin-top:-2px">${cfg.sub || ''}</div>
          <div style="display:flex;flex-wrap:wrap;gap:9px;justify-content:center;margin-top:10px">
            ${(cfg.chips || []).map(CHIP).join('')}
          </div>`;
      }
    }
    el.style.opacity = String(opacity);
  };

  /* timeline geometry helpers */
  window.__timelineX = (t) => {
    const r = document.getElementById('tl-ruler').getBoundingClientRect();
    const dur = window.__ANIMFORGE__.project.clip().duration;
    return r.left + (t / dur) * r.width;
  };
  window.__timelineY = () => {
    const r = document.getElementById('tl-ruler').getBoundingClientRect();
    return r.top + r.height / 2;
  };
})();
