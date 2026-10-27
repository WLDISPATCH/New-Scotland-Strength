// Writes one HTML file per route into dist/ (dist/about/index.html, ...) with that page's
// own title, description, canonical, and social tags, so crawlers see distinct pages
// before any JavaScript runs. Run after `vite build`.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const siteUrl = "https://www.newscotlandstrength.com";
const pages = JSON.parse(readFileSync(join(root, "src/content/pageMeta.json"), "utf8"));
const template = readFileSync(join(dist, "index.html"), "utf8");

const escape = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`prerender: could not find ${label} in dist/index.html`);
  return html.replace(pattern, replacement);
}

const metaContent = (attr, name) => new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`);

for (const [path, { title, description }] of Object.entries(pages)) {
  const url = `${siteUrl}${path}`;
  const t = escape(title);
  const d = escape(description);
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${t}</title>`, "<title>");
  html = replaceOnce(html, metaContent("name", "description"), `$1${d}$2`, "meta description");
  html = replaceOnce(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`, "canonical");
  html = replaceOnce(html, metaContent("property", "og:title"), `$1${t}$2`, "og:title");
  html = replaceOnce(html, metaContent("property", "og:description"), `$1${d}$2`, "og:description");
  html = replaceOnce(html, metaContent("property", "og:url"), `$1${url}$2`, "og:url");
  html = replaceOnce(html, metaContent("name", "twitter:title"), `$1${t}$2`, "twitter:title");
  html = replaceOnce(html, metaContent("name", "twitter:description"), `$1${d}$2`, "twitter:description");

  const outDir = path === "/" ? dist : join(dist, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  console.log(`prerendered ${path}`);
}
