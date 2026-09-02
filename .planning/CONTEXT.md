# Owl Offers door — Context

**Gathered:** 2026-09-02
**Status:** Brownfield onboard of the live door (not a phase discuss file)

This is project-level context for agents. Official GSD phase CONTEXT files live under `.planning/phases/` after `/gsd-discuss-phase`. This file exists so the first session after install describes the **shipped** convert door instead of a blank product.

<domain>
## Phase Boundary

**In scope for this onboard:** Install GSD Core for Cursor locally; map and document the existing live door; open a PR. No public-site redesign.

**Out of scope forever unless Alex gives a new yes:** Stripe, shopowloffers.com, acronym menus, founder hero card, Olympia/Tumwater/Lacey, rewriting the home H1, restyling `global.css` for taste.

</domain>

<decisions>
## Implementation Decisions

### Product
- **D-01:** Public door is a full-service firm for local service shops, not a $497 SKU
- **D-02:** Home H1 is exactly: *The shop looks ready. The homeowner actually calls.*
- **D-03:** `$497` may appear on the first-step panel and `/start`, never in that H1
- **D-04:** Practice is outcomes (Words, Pages, Follow-up, Documents, Presence, Stay on), not SMMA/SEO/GEO/AEO
- **D-05:** No bro-agency founder card; quiet signature `Alex Anderson · Owl Offers`
- **D-06:** No Olympia, Tumwater, or Lacey in public copy
- **D-07:** shopowloffers.com is merch and is not this repo’s door

### Intake and money
- **D-08:** Intake is `mailto:owloffersofficial@gmail.com` via `composeIntakeMailto`
- **D-09:** No Stripe, checkout, Kit, or Linktree on this origin

### Code
- **D-10:** Edit `app/` only for site changes; root `index.html` / `404.html` / `assets/` are generated
- **D-11:** Keep Vite `base` `/owl-offers-door/` and React Router `basename` from `BASE_URL`
- **D-12:** SAMPLE (Northfork) is fiction and must stay labeled SAMPLE

### Claude's Discretion
- GSD planning file wording, as long as it stays evidence-based and does not invent a greenfield product
- Whether to re-run the official installer on another machine if Cursor hooks break (do not hand-copy `agents/` or `commands/`)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Product locks
- `README.md` — brand locks, routes, local URLs
- `OFFER-SHEET.md` — internal offer, exclusions, fulfillment owner
- `.planning/PROJECT.md` — identity and out-of-scope
- `.planning/ROADMAP.md` — Phase 1 already complete
- `.planning/REQUIREMENTS.md` — validated live-door requirements

### Source of truth
- `app/src/lib/site.ts` — name, email, canonical, H1, signature
- `app/src/pages/Home.tsx` — public door
- `app/src/pages/Start.tsx` — first paid step
- `app/src/pages/Sample.tsx` — SAMPLE packet
- `app/src/lib/intake.ts` — mailto composer
- `app/index.html` — default title/OG (must stay aligned with H1)
- `vite.config.ts` — Pages base path
- `scripts/pages-spa.mjs` — 404 + root publish copy

### Codebase map
- `.planning/codebase/STACK.md`
- `.planning/codebase/ARCHITECTURE.md`
- `.planning/codebase/STRUCTURE.md`
- `.planning/codebase/CONVENTIONS.md`
- `.planning/codebase/TESTING.md`
- `.planning/codebase/INTEGRATIONS.md`
- `.planning/codebase/CONCERNS.md`

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `SITE` in `app/src/lib/site.ts`: change brand strings here first
- `IntakeForm` + `composeIntakeMailto`: only outbound action
- `ShopBefore` / `ShopAfter`: SAMPLE device frames
- `usePageMeta`: title, description, canonical, optional robots

### Established Patterns
- Named-export page components registered in `App.tsx`
- CSS classes in `app/src/styles/global.css` — do not restyle for onboard/tooling
- React Router `Link` / `NavLink` (honors basename)

### Integration Points
- New routes: `app/src/pages/` + `App.tsx` only
- New intake fields: `IntakeValues` + `fields` in `IntakeForm.tsx` + mailto body lines
- Publish: `npm run build` must remain the way root HTML is produced

</code_context>

<specifics>
## Specific Ideas

- Live URL: https://alligator7-hub.github.io/owl-offers-door/
- H1 lock is non-negotiable
- Northfork Fence & Gate is SAMPLE fiction, not a client
- Do not copy GSD `agents/` or `commands/` by hand — use `npx @opengsd/gsd-core --cursor --local`

</specifics>

<deferred>
## Deferred Ideas

- Stripe / domain mailbox / stay-on rate card — `OFFER-SHEET.md`, not this door
- Any homepage redesign — not part of GSD install
- Automated tests — not present; do not add unless asked

</deferred>

---

*Project: owl-offers-door*
*Context gathered: 2026-09-02*
