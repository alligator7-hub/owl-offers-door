import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const docs = join(root, "docs");
const operatorDocs = new Set(["UNLOCKS-NEEDING-ALEX.md"]);

cpSync(join(docs, "index.html"), join(docs, "404.html"));
writeFileSync(join(docs, ".nojekyll"), "");

// Real files so /sample and /start are not HTTP 404 shells. Same SPA entry as index.html.
const indexHtml = readFileSync(join(docs, "index.html"));
for (const route of ["sample", "start"]) {
  const dir = join(docs, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), indexHtml);
}

const published = new Set(["index.html", "404.html", ".nojekyll", "assets"]);
for (const name of readdirSync(docs)) {
  if (operatorDocs.has(name)) continue;
  published.add(name);
}

const staleAssets = join(root, "assets");
rmSync(staleAssets, { recursive: true, force: true });

for (const name of published) {
  const from = join(docs, name);
  const to = join(root, name);
  if (name === "assets") {
    mkdirSync(to, { recursive: true });
  }
  cpSync(from, to, { recursive: true });
}

console.log("GitHub Pages: wrote 404.html, sample/index.html, start/index.html, and copied the build to repo root.");
