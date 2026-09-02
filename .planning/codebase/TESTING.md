# Testing Patterns

**Analysis Date:** 2026-09-02

```yaml
last_mapped_commit: ed914806f3a122e01e52810d4efea9d8d6424881
```

## Test Framework

**Runner:**
- None. `package.json` has no `test` script. No Jest, Vitest, Playwright, or Testing Library dependency.

**Assertion Library:**
- None

**Run Commands:**
```bash
npm run build      # tsc --noEmit && vite build && node scripts/pages-spa.mjs
npm run preview    # inspect the Pages-shaped build locally
```

There is no `npm test`.

## Test File Organization

**Location:**
- No `*.test.ts`, `*.spec.ts`, `__tests__/`, or `e2e/` tree

**Structure:**
```
app/src/          # production only
scripts/          # build helpers, untested
```

## Test Structure

**Suite Organization:**
- N/A — no suites

**Patterns:**
- Verification today is: TypeScript compile + local `dev`/`preview` + visual check of `/`, `/sample`, `/start`

## Mocking

**None.** Do not introduce a mock layer for intake; the real behavior is a `mailto:` navigation.

## Fixtures and Factories

**None.** SAMPLE shop content is production copy in `Sample.tsx` / `ShopScreens.tsx`, labeled fiction — not a test fixture.

## Coverage

**Current:**
- No coverage tooling

**What is “checked” in practice:**
- `tsc --noEmit` (types)
- Vite production build
- GitHub Actions `pages.yml` build on `main`

## What to do if tests are added later

Only add a runner if someone explicitly asks. If they do:

- Prefer a small unit test of `composeIntakeMailto` in `app/src/lib/intake.ts` (pure, no DOM)
- Do not drive public copy changes through snapshot tests of `Home.tsx` — copy is locked by product, not by CSS snapshots
- Do not add Stripe/checkout tests; payments are out of scope for this origin

## Manual verification (current)

| Surface | How |
|---------|-----|
| Home H1 + studio framing | Open `/` under `/owl-offers-door/` |
| SAMPLE packet | Open `/sample` (should be `noindex`) |
| First paid step + intake | Open `/start`, submit form, confirm mailto to `owloffersofficial@gmail.com` |
| Unknown route | Open a junk path → NotFound copy |
| Pages base path | `npm run preview` at `http://localhost:4173/owl-offers-door/` |

---

*Testing analysis: 2026-09-02*
*Update when a test runner is actually added*
