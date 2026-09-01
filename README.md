# Owl Offers

Public studio site for Owl Offers — a small firm for local service shops.

Live: https://alligator7-hub.github.io/owl-offers-door/

The brand is the studio. The $497 public-page look is the first paid step, not the headline.

## Open it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173/owl-offers-door/ (the GitHub Pages base path).

Preview the GitHub Pages build (base path `/owl-offers-door/`):

```bash
npm run build
npm run preview
```

Preview serves the site at http://localhost:4173/owl-offers-door/.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — exact H1, work, practice, studio |
| `/sample` | Northfork Fence & Gate SAMPLE (fiction) |
| `/start` | First paid step + intake form |

Intake composes `mailto:owloffersofficial@gmail.com`. No checkout, Stripe, Kit, or Linktree.

## GitHub Pages

`npm run build` writes a static SPA into `docs/` (gitignored, used by Actions) and copies that build to the repo root (`index.html`, `404.html`, `assets/`) so GitHub Pages can keep serving from `main` `/`.

Two publish options:

1. **Branch root** (current) — Settings → Pages → Deploy from a branch → `main` / `/`. Commit the built `index.html`, `404.html`, and `assets/`.
2. **GitHub Actions** — `.github/workflows/pages.yml` builds on push to `main`. Settings → Pages → Source: GitHub Actions.

Source lives in `app/`. Do not edit the root `index.html` by hand; it is generated.

## Brand locks

- H1 on home is exactly: *The shop looks ready. The homeowner actually calls.*
- `$497` never in that H1. It may appear later on the first-step panel / `/start`.
- No SMMA/SEO/GEO/AEO menu. No guru voice. No invented testimonials or clients.
- No Olympia, Tumwater, or Lacey. Pacific Northwest / West Coast / worldwide-starting-local is fine.
- Do not use shopowloffers.com (live Shopify merch). Do not add a founder hero photo.
- Quiet signature: Alex Anderson · Owl Offers. Small studio. Does not run ads.

Internal offer defaults live in `OFFER-SHEET.md`.
