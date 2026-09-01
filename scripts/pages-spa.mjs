import { cpSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const docs = join(root, "docs");

cpSync(join(docs, "index.html"), join(docs, "404.html"));
writeFileSync(join(docs, ".nojekyll"), "");

const published = new Set(["index.html", "404.html", ".nojekyll", "assets"]);
for (const name of readdirSync(docs)) {
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

console.log("GitHub Pages: wrote docs/404.html and copied the build to repo root.");
