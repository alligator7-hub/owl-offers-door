import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const name = "UNLOCKS-NEEDING-ALEX.md";
const src = join(process.cwd(), "docs", name);
const stashDir = join(tmpdir(), "owl-offers-door-operator-docs");
const stash = join(stashDir, name);
const cmd = process.argv[2];

if (cmd === "save") {
  if (!existsSync(src)) process.exit(0);
  mkdirSync(stashDir, { recursive: true });
  copyFileSync(src, stash);
} else if (cmd === "restore") {
  if (!existsSync(stash)) process.exit(0);
  mkdirSync(join(process.cwd(), "docs"), { recursive: true });
  copyFileSync(stash, src);
} else {
  console.error("Usage: node scripts/preserve-operator-docs.mjs save|restore");
  process.exit(1);
}
