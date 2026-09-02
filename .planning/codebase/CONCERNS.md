# Codebase Concerns

**Analysis Date:** 2026-09-02

```yaml
last_mapped_commit: ed914806f3a122e01e52810d4efea9d8d6424881
```

## Tech Debt

**Dual publish (repo root + `docs/`):**
- Issue: `scripts/pages-spa.mjs` copies the Vite `docs/` build to repo-root `index.html`, `404.html`, and `assets/`. Root copies can be committed while `docs/` is gitignored.
- Why: Pages can serve from `main` `/` without Actions, and Actions can also deploy `docs/`.
- Impact: Hand-editing root HTML/CSS/JS desyncs from `app/` and is overwritten on the next build.
- Fix approach: Keep treating root publish files as generated. Edit `app/` only.

**No automated tests:**
- Issue: Build is `tsc` + Vite only.
- Why: Small static door.
- Impact: Copy/regression mistakes are easy if someone “tidies” Home or Start.
- Fix approach: Do not invent a greenfield test suite in onboard. If tests come later, start with `composeIntakeMailto`.

## Known Bugs

**None confirmed from static reading.** Do not file invented defects.

**Intake depends on a local mail handler:**
- Symptoms: Submit does nothing useful if no `mailto:` handler is installed.
- Trigger: `/start` form submit
- Workaround: On-page copy tells the user to write `owloffersofficial@gmail.com`
- Root cause: Intentional — no form backend

## Security Considerations

**mailto body is user-controlled:**
- Risk: Low for this origin (no server). Users compose email in their own client.
- Current mitigation: No storage, no webhook
- Recommendations: Do not replace this with an unauthenticated public form endpoint without spam controls

**No secrets in the app:**
- Risk: Someone adding Stripe keys or third-party tokens to a static site
- Current mitigation: No payment SDK, no env-based secrets
- Recommendations: Keep it that way on this door

## Performance Bottlenecks

**None measured.** The site is a small static SPA with two variable fonts and one CSS file.

## Fragile Areas

**Locked public copy:**
- Why fragile: Product constraints live in several files (`site.ts`, `Home.tsx`, `Start.tsx`, `Sample.tsx`, `app/index.html`, `README.md`, `OFFER-SHEET.md`)
- Common failures: Rewriting the H1, adding an acronym service menu, putting `$497` in the headline, naming Olympia/Tumwater/Lacey, adding a founder headshot, linking shopowloffers.com, adding Stripe
- Safe modification: Change structure/comments/planning files; do not “improve” public voice without an explicit yes
- Test coverage: None — this is a process lock

**`SITE.h1` vs `app/index.html` title/OG:**
- Why fragile: Default document title and OG title are duplicated as literals in `app/index.html`
- Safe modification: If the locked H1 ever changes (it should not without a product yes), update both `site.ts` and `app/index.html`

**GitHub Pages base path:**
- Why fragile: `base: "/owl-offers-door/"` and `routerBasename()` must stay aligned
- Common failures: Absolute `/` links that ignore the basename (React Router `Link` is used; keep using it)
- Safe modification: Do not change `base` unless the Pages project path changes

**SAMPLE is fiction:**
- Why fragile: Easy to accidentally present Northfork as a client
- Safe modification: Keep SAMPLE banners and “not a real shop” language

## Brand / scope landmines (treat as defects if they appear)

- Public door presented as a $497 SKU instead of a full-service firm
- Acronym service menu (SMMA, SEO, GEO, AEO)
- Bro-agency founder card / hero headshot
- Olympia, Tumwater, or Lacey in public copy
- Links to shopowloffers.com
- Stripe or any checkout on this origin

## Dependencies Worth Monitoring

- React 19 + Vite 7 + react-router 7 — keep `basename` behavior in mind on upgrades
- `@fontsource-variable/*` — CSS import paths in `main.tsx`

## Upcoming Risks

**GSD local Cursor hooks:**
- Installer-written `.cursor/hooks.json` records absolute hook script paths from the machine that ran `npx @opengsd/gsd-core`. Re-run the official installer on another machine if hooks 404.

**GSD used as a greenfield license:**
- Risk: A future `/gsd-new-project` or phase invents a new product, a merch link, or a checkout
- Mitigation: `PROJECT.md`, `CONTEXT.md`, and this file — onboard describes the live door; do not replace it

---

*Concerns analysis: 2026-09-02*
*Update as new issues are discovered*
