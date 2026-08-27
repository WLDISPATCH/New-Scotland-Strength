// Build-time prerender: renders each route to static HTML and writes it as its
// own file (dist/about/index.html, etc.) so crawlers and social share cards get
// real content and correct per-page <head> without executing JavaScript.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// Pure Node — no headless browser — so it works in any CI/build environment.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "entry-server.js");

// Keep in sync with the routes in src/App.tsx.
const routes = ["/", "/about", "/services", "/results", "/faq", "/contact"];

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

if (!template.includes("<!--app-head-->")) {
  throw new Error("index.html is missing the <!--app-head--> placeholder");
}
if (!template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the <div id="root"></div> mount point');
}

const { render } = await import(pathToFileURL(serverEntry).href);

for (const url of routes) {
  const { html, head } = render(url);

  const page = template
    .replace("<!--app-head-->", head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outDir = url === "/" ? distDir : path.join(distDir, url);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page);

  console.log(`prerendered ${url} -> ${path.relative(root, path.join(outDir, "index.html"))}`);
}

console.log(`\nDone. Prerendered ${routes.length} routes.`);
