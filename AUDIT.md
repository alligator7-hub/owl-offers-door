# Public page audit — 2026-09-02

Scope: every HTML route a visitor can hit on the live door, plus `README.md`. Read-only audit against the brand locks. No redesign. No copy changes.

Audited commit: `ed91480` on `main` (the commit GitHub Pages is serving).

**Result: 0 lock violations. No public copy was edited.**

## Locks checked

| # | Lock |
| --- | --- |
| L1 | Full-service firm identity, not a $497 SKU |
| L2 | Home H1 is exactly *The shop looks ready. The homeowner actually calls.* |
| L3 | No Olympia / Tumwater / Lacey in public copy |
| L4 | No shopowloffers.com as an agency door |
| L5 | No acronym service menu (SMMA / SEO / GEO / AEO) |
| L6 | No founder hero photo |
| L7 | Intake goes to `mailto:owloffersofficial@gmail.com` |
| L8 | `$497` may appear as the first paid step, never as the headline |
| L9 | SAMPLE Northfork is fiction and stays labeled fiction |

## How it was verified

- Read every source file under `app/src/`, the generated `index.html` / `404.html`, `sitemap.xml`, `robots.txt`, `og.png`, `README.md`, `OFFER-SHEET.md`.
- Grepped the whole repo and the shipped JS bundle (`assets/index-Ch0UwqNM.js`) for every lock term.
- Fetched every live URL under `https://alligator7-hub.github.io/owl-offers-door/` and diffed the served `index.html`, `404.html`, and JS bundle against the repo: byte-identical.
- Rendered `/`, `/sample`, `/start`, and an unknown path in headless Chrome against the live site and extracted the rendered `<title>`, `<h1>`, `<h2>`s, robots meta, canonical, `$497` count, SAMPLE/fiction labels, `mailto:` targets, `<img>` count, and banned terms.

## Route inventory

The site is a small static SPA (Vite + React Router). There are exactly three routes plus a catch-all. The hunch was right.

| Live URL | Source | What it is | Locks | Verdict |
| --- | --- | --- | --- | --- |
| `/owl-offers-door/` | `app/src/pages/Home.tsx` | Home. Hero, Selected work (Northfork before/after), Practice (6 outcomes), Studio, First paid step panel | L1 hero lede names the firm and four practice areas; L2 rendered H1 is exactly the locked string (from `SITE.h1`); L5 practice labels are Words / Pages / Follow-up / Documents / Presence / Stay on; L6 zero `<img>` on page, mark is inline SVG, signature is text; L8 `$497` appears twice: once in the last panel (`invite-price`) with the note "Shown here, not in the headline", once in the meta description phrased as "first paid step"; not in `<title>`, H1, or `og:title`; L9 work card carries the `SAMPLE · fiction` pill and the intro says "not a client... It is fiction" | **PASS** |
| `/owl-offers-door/sample` | `app/src/pages/Sample.tsx` | Northfork Fence & Gate SAMPLE work piece: before/after, observations, ranked fixes, rewrite | L9 top banner "SAMPLE — fictional shop. Not a real business. Not a real client."; `<title>` prefixed SAMPLE; closing line "SAMPLE only. Owl Offers has not worked with a shop named Northfork."; meta `robots=noindex`; fictional contact (`555-0148`, `northfork.example`); L8 no `$497`; L6 zero `<img>` ("truck photo" is copy describing the fictional shop's page, no image shipped) | **PASS** |
| `/owl-offers-door/start` | `app/src/pages/Start.tsx` + `components/IntakeForm.tsx` + `lib/intake.ts` | First paid step + intake form | L8 H1 is "A look at one main public page."; `$497` sits in the price panel under the eyebrow "Fixed first step" and in the meta description; L1 lede: "This is how most shops start with Owl. It is not the whole firm."; step 04 and the "After the first step" block invite unpriced stay-on work; L7 form submit composes `mailto:owloffersofficial@gmail.com` with subject `Public page look — {shop}`; fallback copy repeats the address; nothing stored | **PASS** |
| any unknown path (e.g. `/owl-offers-door/nope`) | `404.html` → `app/src/pages/NotFound.tsx` | 404. GitHub Pages serves `404.html` (a copy of `index.html`), router renders NotFound | H1 "That page is not on this door."; links back to Home and Start; no banned terms; no price | **PASS** |
| `/owl-offers-door/sitemap.xml` | `public/sitemap.xml` | Lists `/`, `/sample`, `/start` | No copy | PASS (see note N1) |
| `/owl-offers-door/robots.txt` | `public/robots.txt` | Allow all, points at sitemap | No copy | PASS |
| `/owl-offers-door/og.png` | `scripts/og.html` | Social card | Locked H1 text on dark ground, kicker "Owl Offers", sub "A studio for local service shops"; no photo, no price | **PASS** |
| Shared header / footer | `components/SiteHeader.tsx`, `SiteFooter.tsx` | Nav: Work / Sample / Start / Send a page. Footer: signature, "Small studio. Does not run ads.", mailto | L7 footer mailto is `owloffersofficial@gmail.com`; L4/L3/L5 none | **PASS** |
| `README.md` | repo root | Public repo doc: live URL, routes, publish options, brand locks | Mentions Olympia/Tumwater/Lacey, shopowloffers.com, SMMA/SEO/GEO/AEO **only as prohibitions** inside the "Brand locks" list. This is the lock sheet, not door copy. States "$497 ... first paid step, not the headline". | **PASS** (note N2) |
| `OFFER-SHEET.md` | repo root | Internal offer defaults | Same as README: banned terms appear only as "do not" rules. Not linked from the door. | PASS (internal) |

## Bundle sweep (`assets/index-Ch0UwqNM.js`, byte-identical to live)

| Term | Count | Where |
| --- | --- | --- |
| `The shop looks ready. The homeowner actually calls.` | 2 | `SITE.h1` + Home meta title |
| `$497` | 4 | Home panel, Home meta, Start panel, Start meta |
| `owloffersofficial@gmail.com` | 1 | `SITE.email` (used by footer, intake, Start copy) |
| `SAMPLE` | 7 | Home pill/buttons, Sample banner/title/closing, 404 copy |
| `fiction` | 3 | Home intro, Home pill, Sample meta |
| `Northfork` | 10 | Home card, Sample page, ShopScreens |
| Olympia / Tumwater / Lacey | 0 | — |
| shopowloffers | 0 | — |
| SMMA / SEO / GEO / AEO | 0 | — |
| Stripe / Linktree / Kit / checkout | 0 | — |

## Is GitHub Pages the live door?

**Yes.** `https://alligator7-hub.github.io/owl-offers-door/` is live and serving `main`.

| Fact | Value |
| --- | --- |
| Pages status | `built`, HTTPS enforced, `custom_404: true` |
| Pages source | `build_type: legacy` → **Deploy from a branch: `main` / `/`** (the README's "Branch root (current)" option) |
| Custom domain | `cname: null`; no `CNAME` file in repo |
| Last successful Pages build | commit `ed91480`, 2026-09-01 21:24 UTC |
| Served files vs repo | `index.html`, `404.html`, `assets/index-Ch0UwqNM.js` byte-identical to `main` |
| HTTP status by route | `/` 200 · `/sample` 404 · `/start` 404 · `/sitemap.xml` 200 · `/robots.txt` 200 · `/og.png` 200 · `/assets/*` 200 |

Both publish paths described in the README fired on the last push: the branch-root Pages build and the `.github/workflows/pages.yml` Actions job (build + `deploy-pages` both succeeded, two `github-pages` deployments 3 s apart for `ed91480`). Because the root build is a copy of `docs/`, they publish identical bytes, so there is no drift today. The effective source per Settings is the branch root.

## Missing info (not violations)

| Item | State | Note |
| --- | --- | --- |
| **DNS — owloffers.com** | Not pointed at the door. `NS` on Google Cloud DNS; `MX` on Google Workspace; `SPF` TXT present; **no `A` / `AAAA` / `CNAME`** for apex or `www`; HTTPS/HTTP to `owloffers.com` does not connect. Pages `cname` is null and there is no `CNAME` file. | Matches `OFFER-SHEET.md`: "Do not change DNS for owloffers.com from this build." The domain already has a Google mailbox route, but intake still uses the gmail.com address per lock L7 / offer sheet ("until a domain mailbox exists"). |
| **shopowloffers.com** | Resolves to Shopify (`23.227.38.66`), 301 → `www.shopowloffers.com`. | Never referenced from the door. Lock L4 holds. |
| **Stripe / checkout** | Absent. No payment link, no Stripe script, no checkout route. `/start` explicitly says intake is email. | Intentional per `OFFER-SHEET.md` ("Stripe/checkout until Alex spends yes"). If a paid step is ever sold on-door, `/start` is the only place it belongs. |
| **Kit (email list)** | Absent. No forms other than the mailto intake, no Kit scripts. | Intentional per `OFFER-SHEET.md` channels list. |
| **Linktree** | Absent. | Intentional. |
| **Analytics** | None. No tags, no pixels. | Consistent with "Does not run ads." Noted only so nobody assumes a tracker exists. |

## Non-lock observations (left alone; not in scope)

- **N1** `/sample` and `/start` return **HTTP 404** to crawlers (standard GitHub Pages SPA fallback via `404.html`), while `sitemap.xml` lists them. Humans see the right page; search engines see a 404 for `/start`. `/sample` is `noindex` anyway. Fix, if wanted, is pre-rendering those two routes to real `sample/index.html` and `start/index.html` at build time. Not a lock issue.
- **N2** `README.md` is public on GitHub and names the banned cities/domain/acronyms as things not to do. That is the lock list doing its job, not door copy. If the goal is zero occurrences anywhere public, move the "Brand locks" section into `OFFER-SHEET.md` and keep README to build/publish notes.
- **N3** `NotFound` sets canonical to `/404`, which is not a route. Harmless.
- **N4** Draft PR #2 (`cursor/gsd-core-local-a533`) adds `.cursor/` and `.planning/` only; its description states public pages are unchanged. Not audited as door content.
