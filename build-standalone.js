/* Builds a self-contained single-file version of the app:
   inlines styles.css + app.js into one .html you can open by double-clicking. */
const fs = require('fs');
const path = require('path');

const root = __dirname;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

// NOTE: use function replacers — the bundle contains "$&" sequences that
// String.replace would otherwise interpret as substitution patterns.
const safeJs = js.replace(/<\/script/gi, '<\\/script');
const out = html
  .replace('<link rel="stylesheet" href="./styles.css">', () => `<style>\n${css}\n</style>`)
  .replace('<script src="./app.js"></script>', () => `<script>\n${safeJs}\n</script>`);

const target = path.join(root, 'animforge-standalone.html');
fs.writeFileSync(target, out);
console.log(`wrote ${target} (${(out.length / 1024).toFixed(0)} KB)`);
