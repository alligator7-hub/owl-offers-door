# External Integrations

**Analysis Date:** 2026-09-02

```yaml
last_mapped_commit: ed914806f3a122e01e52810d4efea9d8d6424881
```

## APIs & External Services

**Payment Processing:**
- None on this site. No Stripe, no checkout, no SKU cart.
- `OFFER-SHEET.md` is explicit: Stripe/checkout waits for a separate yes. Do not add it here.

**Email:**
- Intake is the user’s mail client via `mailto:owloffersofficial@gmail.com`
- Composer: `app/src/lib/intake.ts` (`composeIntakeMailto`)
- No SendGrid, Kit, Formspree, or server inbox
- Fallback: user writes that address themselves (`IntakeForm.tsx`, `Start.tsx`)

**External APIs:**
- None. No `fetch` to third parties in `app/src/`.

## Data Storage

**Databases:**
- None

**File Storage:**
- GitHub repo + GitHub Pages static files
- Source of truth for the door: `app/`
- Generated publish copies: repo root + `docs/` (docs gitignored)

**Caching:**
- Browser / CDN only (Pages). No Redis, no service worker in source.

## Authentication & Identity

**Auth Provider:**
- None. The door is public. There is no login.

## Monitoring & Observability

**Error Tracking:**
- None (no Sentry or similar)

**Analytics:**
- None in application source. Do not add a tracker as part of GSD work.

**Logs:**
- GitHub Actions build logs only

## CI / hosting

**GitHub Pages:**
- Live: `https://alligator7-hub.github.io/owl-offers-door/`
- Canonical in `app/src/lib/site.ts` and `app/index.html`
- Workflow: `.github/workflows/pages.yml` (Node 22, `npm ci`, `npm run build`, artifact `docs`)

**GitHub (source):**
- `alligator7-hub/owl-offers-door`, default branch `main`

## Fonts

**@fontsource-variable/fraunces** and **@fontsource-variable/outfit**:
- Bundled at build time from `app/src/main.tsx`
- Not loaded from Google Fonts CDN

## Properties that are NOT this door

| Property | Relationship |
|----------|----------------|
| shopowloffers.com | Live Shopify / Printful merch. Do not point this agency door at it. |
| owloffers.com DNS | `OFFER-SHEET.md`: do not change DNS from this build |
| Linktree / Kit | Explicitly unused for this door |

## Environment Variables

**Required:**
- None for the app

**CI:**
- Default `GITHUB_TOKEN` / Pages OIDC via `pages.yml` permissions — not referenced in app code

## Integration map (honest)

```
Browser
  → static files on GitHub Pages
  → React routes
  → mailto: owloffersofficial@gmail.com   (only outbound “integration”)
```

---

*Integrations analysis: 2026-09-02*
*Update when external services are added — they should not be added without a new yes*
