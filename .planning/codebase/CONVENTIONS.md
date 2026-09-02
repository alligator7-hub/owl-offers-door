# Coding Conventions

**Analysis Date:** 2026-09-02

```yaml
last_mapped_commit: ed914806f3a122e01e52810d4efea9d8d6424881
```

## Naming Patterns

**Files:**
- PascalCase `.tsx` for components and pages (`SiteHeader.tsx`, `Start.tsx`)
- camelCase `.ts` for libs and hooks (`intake.ts`, `usePageMeta.ts`)

**Functions:**
- camelCase; React components are PascalCase named exports (`export function Home`)
- Event handlers: `onSubmit`, `onScroll`, `onKey` (short, local)

**Variables:**
- camelCase
- Module-level data arrays: lowercase nouns (`practice`, `included`, `steps`, `fields`)
- Shared constants: `SITE`, `emptyIntake`

**Types:**
- PascalCase, no `I` prefix (`IntakeValues`, `RevealProps`)
- Inline object types for small props

## Code Style

**Formatting:**
- No Prettier/ESLint config in repo
- Double quotes in TSX/TS
- Semicolons present
- Two-space indent
- Trailing commas in multiline arrays/objects

**Linting:**
- TypeScript `strict` + `noUnusedLocals` / `noUnusedParameters` via `tsc --noEmit` in `build`

## Import Organization

**Order (observed):**
1. `react` / `react-router-dom` / type imports from react
2. Relative components
3. Relative libs (`../lib/site`)

**Path Aliases:**
- None — relative imports only

## Error Handling

**Patterns:**
- No thrown domain errors in the app
- Intake uses native `required` inputs
- Mail client missing → fallback sentence next to the button, still pointing at `SITE.email`

## Logging

**Framework:**
- None. Do not add console logging to public pages.

## Comments

- Sparse. Brand and publish rules live in `README.md` and `OFFER-SHEET.md`, not inline essays.
- `usePageMeta` and `pages-spa.mjs` are straightforward; keep them that way.

## Function Design

**Size:**
- Page files hold route copy + composition; extract a component when UI is reused (`ShopBefore` / `ShopAfter`, `IntakeForm`)

**Parameters:**
- Small props objects; optional flags like `compact?: boolean`

**Return values:**
- Components return JSX
- `composeIntakeMailto` returns a string URL

## Module Design

**Exports:**
- Named exports for pages/components (`export function Start`)
- `SITE` and `routerBasename` from `site.ts`

**File organization:**
- One primary component per file
- SAMPLE before/after screens share `ShopScreens.tsx`

## TypeScript Usage

**Strictness:**
- `strict: true`; `noEmit: true`

**Patterns:**
- `as const` for `SITE` and nav `links`
- `keyof IntakeValues` for form field keys
- Minimal generics

## Async Patterns

- Almost none. `useEffect` for DOM/meta/scroll/intersection only
- No `fetch`, no data loaders

## Product / copy conventions (this repo)

These are coding conventions because they are enforced in source:

- Home H1 is `SITE.h1`: *The shop looks ready. The homeowner actually calls.*
- `$497` is allowed on the first-step panel and `/start`, never in that H1
- Practice is outcomes (Words, Pages, Follow-up, Documents, Presence, Stay on) — not an SMMA/SEO/GEO/AEO menu
- SAMPLE work is fiction and labeled SAMPLE (Northfork Fence & Gate)
- No Olympia, Tumwater, or Lacey in public copy
- Signature: `Alex Anderson · Owl Offers` — small studio line, not a bro-agency founder hero
- Intake is `mailto:` to `owloffersofficial@gmail.com` only
- Do not link this door to shopowloffers.com

## Enforcement

**Automated:**
- `tsc --noEmit` on `npm run build`

**Manual:**
- Brand locks in `README.md` and `OFFER-SHEET.md`
- Review any PR that touches `app/src/pages/`, `app/src/lib/site.ts`, or `global.css` against those locks

---

*Conventions analysis: 2026-09-02*
*Update as patterns evolve*
