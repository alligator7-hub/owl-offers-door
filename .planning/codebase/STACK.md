# Technology Stack

**Analysis Date:** 2026-09-02

```yaml
last_mapped_commit: ed914806f3a122e01e52810d4efea9d8d6424881
```

## Languages

**Primary:**
- TypeScript 5.9 — application source under `app/src/` (`package.json` `typescript`, `tsconfig.json`)

**Secondary:**
- JavaScript (ESM) — `scripts/pages-spa.mjs` (GitHub Pages SPA copy)
- Python 3 — `scripts/make-images.py` (one-off `og.png` / `apple-touch-icon.png` generator)
- CSS — `app/src/styles/global.css` (single stylesheet, no CSS-in-JS)

## Runtime

**Environment:**
- Browser SPA (React 19) served as static files
- Node.js for local Vite 7 dev/build (CI uses Node 22 via `.github/workflows/pages.yml`; no `engines` field in `package.json`)

**Package Manager:**
- npm (lockfile: `package-lock.json` present)
- Scripts: `dev`, `build` (`tsc --noEmit && vite build && node scripts/pages-spa.mjs`), `preview`

## Frameworks

**Core:**
- React 19.2 — UI
- react-router-dom 7.18 — client routes with `basename` from Vite `BASE_URL`

**Testing:**
- None — no test runner, no `*.test.*` / `*.spec.*` files, no test script in `package.json`

**Build/Dev:**
- Vite 7.3 (`vite.config.ts`: `root` = `app/`, `publicDir` = `public/`, `base` = `/owl-offers-door/`, `outDir` = `docs/`)
- `@vitejs/plugin-react` 5
- TypeScript 5.9 (`noEmit`, `strict`)

## Key Dependencies

**Critical:**
- `react` / `react-dom` 19.2 — page components
- `react-router-dom` 7.18 — `/`, `/sample`, `/start`, catch-all 404
- `@fontsource-variable/fraunces` / `@fontsource-variable/outfit` — self-hosted variable fonts imported in `app/src/main.tsx`

**Infrastructure:**
- None (no server framework, no database client, no payments SDK)

## Configuration

**Environment:**
- No `.env` files, no runtime secrets
- Site constants in `app/src/lib/site.ts` (`SITE.name`, `SITE.email`, `SITE.canonical`, `SITE.h1`, `SITE.signature`)
- Vite `base` is `/owl-offers-door/` (GitHub Pages project path)

**Build:**
- `vite.config.ts` — app root, Pages base path, `docs/` output
- `tsconfig.json` — includes only `app/src`
- `scripts/pages-spa.mjs` — copies `docs/index.html` → `docs/404.html`, writes `.nojekyll`, mirrors published files to repo root

## Platform Requirements

**Development:**
- Any OS with Node.js + npm
- Local URLs include the Pages base: `http://localhost:5173/owl-offers-door/`

**Production:**
- GitHub Pages at `https://alligator7-hub.github.io/owl-offers-door/`
- Two publish options: committed root `index.html` / `404.html` / `assets/` on `main`, and `.github/workflows/pages.yml` (builds `docs/`, deploys via Actions)

---

*Stack analysis: 2026-09-02*
*Update after major dependency changes*
