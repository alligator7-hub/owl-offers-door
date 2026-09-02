# Architecture

**Analysis Date:** 2026-09-02

```yaml
last_mapped_commit: ed914806f3a122e01e52810d4efea9d8d6424881
```

## Pattern Overview

**Overall:** Static single-page studio door (Vite + React Router)

**Key Characteristics:**
- No backend, no database, no checkout
- Three public routes plus a client 404
- Brand copy and intake address live in source constants, not a CMS
- Dual static publish: Vite writes `docs/`; `scripts/pages-spa.mjs` also mirrors that build to the repo root for branch-based Pages

## Layers

**Shell / routing:**
- Purpose: Basename-aware router, skip link, header, footer, scroll restoration
- Contains: `app/src/main.tsx`, `app/src/App.tsx`, `app/src/components/Layout.tsx`
- Depends on: `app/src/lib/site.ts` (`routerBasename`)
- Used by: every page

**Pages:**
- Purpose: Route-level copy and composition
- Contains: `Home.tsx`, `Sample.tsx`, `Start.tsx`, `NotFound.tsx`
- Depends on: shared components + `usePageMeta` + `SITE`
- Used by: `App.tsx` routes

**Presentation components:**
- Purpose: Chrome, SAMPLE device frames, intake form, mark, scroll reveal
- Contains: `app/src/components/*`
- Depends on: CSS classes in `global.css`; intake lib for mailto
- Used by: pages

**Domain helpers (tiny):**
- Purpose: Canonical site strings and intake mailto composition
- Contains: `app/src/lib/site.ts`, `app/src/lib/intake.ts`, `app/src/lib/usePageMeta.ts`
- Depends on: nothing outside the app
- Used by: pages, header/footer, form

**Build / publish:**
- Purpose: Typecheck, bundle, SPA 404, copy to Pages locations
- Contains: `vite.config.ts`, `scripts/pages-spa.mjs`, `.github/workflows/pages.yml`
- Depends on: `app/` source + `public/`
- Used by: local `npm run build` and CI

## Data Flow

**Page view:**

1. Browser loads generated `index.html` (or `404.html` for unknown paths under Pages)
2. `main.tsx` mounts React; fonts + `global.css` load
3. `BrowserRouter` uses `basename` from `import.meta.env.BASE_URL` (`/owl-offers-door/`)
4. `Layout` renders skip link, header, `<Outlet />`, footer
5. Page calls `usePageMeta` to set `document.title`, description, canonical, optional robots

**Intake (the only “submit”):**

1. `/start` renders `IntakeForm`
2. Submit calls `composeIntakeMailto` in `app/src/lib/intake.ts`
3. Browser navigates to `mailto:owloffersofficial@gmail.com` with a composed subject/body
4. Nothing is posted to this origin; nothing is stored on the page

**State Management:**
- Ephemeral React state only (`IntakeForm` fields, header drawer/scroll)
- No global store, no persistence, no cookies/analytics SDKs in source

## Key Abstractions

**`SITE` constant:**
- Purpose: Single source for name, email, canonical URL, locked H1, signature
- Examples: `app/src/lib/site.ts`
- Pattern: `as const` object

**`composeIntakeMailto`:**
- Purpose: Build a `mailto:` URL from intake fields
- Examples: `app/src/lib/intake.ts`
- Pattern: pure function, `encodeURIComponent`

**Page modules:**
- Purpose: One file per route
- Examples: `app/src/pages/Home.tsx`
- Pattern: named export function component + `usePageMeta`

**`Reveal`:**
- Purpose: IntersectionObserver fade-in; respects `prefers-reduced-motion`
- Examples: `app/src/components/Reveal.tsx`
- Pattern: polymorphic `as` prop (`div` | `li` | `article` | `section`)

## Entry Points

**Browser app:**
- Location: `app/src/main.tsx` (loaded from `app/index.html`)
- Triggers: visiting the Pages URL or Vite dev/preview
- Responsibilities: fonts, CSS, mount `<App />`

**Dev server:**
- Location: Vite via `npm run dev` (`vite.config.ts`)
- Triggers: local development
- Responsibilities: serve `/owl-offers-door/` on port 5173

**Publish:**
- Location: `npm run build` → `docs/` + repo-root copy
- Triggers: local build or `pages.yml` on `main`
- Responsibilities: static SPA + `.nojekyll`

## Error Handling

**Strategy:** Client 404 route; no server error pipeline

**Patterns:**
- Unknown paths render `NotFound` (`app/src/pages/NotFound.tsx`)
- HTML5 form `required` on intake fields; no custom validation library
- Mail-app failure is copy, not an exception: “write owloffersofficial@gmail.com yourself”

## Cross-Cutting Concerns

**Logging:**
- None in app source

**Validation:**
- Native HTML required fields on intake only

**Authentication:**
- None

**SEO / social:**
- Static tags in `app/index.html`; per-route updates via `usePageMeta`
- `/sample` sets `robots` to `noindex`

---

*Architecture analysis: 2026-09-02*
*Update when major patterns change*
