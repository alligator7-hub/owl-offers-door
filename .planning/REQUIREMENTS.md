# Requirements: Owl Offers door

**Defined:** 2026-09-02
**Core Value:** The shop looks ready. The homeowner actually calls.

## v1 Requirements

These describe the **already live** door. Checkboxes are complete because the code and Pages site already satisfy them.

### Studio door

- [x] **DOOR-01**: Visitor on `/` sees the exact H1 *The shop looks ready. The homeowner actually calls.*
- [x] **DOOR-02**: Home presents Owl Offers as a studio/firm for local service shops (copy, pages, follow-up, documents, presence) — not as a single $497 SKU
- [x] **DOOR-03**: Practice section uses human outcome labels (Words, Pages, Follow-up, Documents, Presence, Stay on), not an acronym service menu
- [x] **DOOR-04**: Studio section is a quiet firm note with signature `Alex Anderson · Owl Offers` and no founder hero photo
- [x] **DOOR-05**: Public copy does not name Olympia, Tumwater, or Lacey; geography is Pacific Northwest / West Coast / worldwide starting local
- [x] **DOOR-06**: Public pages do not link to shopowloffers.com

### First paid step

- [x] **STEP-01**: `$497` appears on the home first-step panel and on `/start`, never in the home H1
- [x] **STEP-02**: `/start` states five business days, ranked list, replacement copy, recorded walkthrough, seven-day written questions
- [x] **STEP-03**: `/start` states what is not included (ads, retainers, promised call counts) and the redo-or-refund delivery promise

### SAMPLE

- [x] **SAMP-01**: `/sample` is labeled SAMPLE / fictional shop / not a real client
- [x] **SAMP-02**: SAMPLE shows before/after, observations, ranked fixes, and a rewritten first screen for Northfork Fence & Gate
- [x] **SAMP-03**: `/sample` is `noindex`

### Intake

- [x] **MAIL-01**: Intake form composes `mailto:owloffersofficial@gmail.com` with owner, shop, URL, category, area, email, phone, blocker
- [x] **MAIL-02**: Nothing is stored on the page; fallback copy names the same address
- [x] **MAIL-03**: This origin has no Stripe, checkout, or payment SDK

### Publish

- [x] **PAGE-01**: Site is a static SPA with routes `/`, `/sample`, `/start`, and a client 404
- [x] **PAGE-02**: Vite `base` is `/owl-offers-door/` so GitHub Pages project hosting works
- [x] **PAGE-03**: Build writes `docs/` and mirrors published files to the repo root for branch Pages

## v2 Requirements

Not committed. Do not pull these into a roadmap without a new yes.

- Domain mailbox instead of Gmail for intake
- Stripe/checkout on this door
- Extra priced retainers or a public rate card for stay-on work

## Out of Scope

| Feature | Reason |
|---------|--------|
| Stripe / checkout | Locked off this site; intake is mailto |
| shopowloffers.com | Separate Shopify merch property |
| SMMA/SEO/GEO/AEO menu | Voice lock |
| Founder headshot hero | Removed; do not restore |
| Olympia / Tumwater / Lacey | Public copy lock |
| Homepage redesign during GSD install | Tooling must not restyle the door |
| Ads, Kit, Linktree | Explicitly unused |
| Promised calls/jobs/revenue | Delivery promise only, not results |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DOOR-01 | Phase 1 | Complete |
| DOOR-02 | Phase 1 | Complete |
| DOOR-03 | Phase 1 | Complete |
| DOOR-04 | Phase 1 | Complete |
| DOOR-05 | Phase 1 | Complete |
| DOOR-06 | Phase 1 | Complete |
| STEP-01 | Phase 1 | Complete |
| STEP-02 | Phase 1 | Complete |
| STEP-03 | Phase 1 | Complete |
| SAMP-01 | Phase 1 | Complete |
| SAMP-02 | Phase 1 | Complete |
| SAMP-03 | Phase 1 | Complete |
| MAIL-01 | Phase 1 | Complete |
| MAIL-02 | Phase 1 | Complete |
| MAIL-03 | Phase 1 | Complete |
| PAGE-01 | Phase 1 | Complete |
| PAGE-02 | Phase 1 | Complete |
| PAGE-03 | Phase 1 | Complete |

**Coverage:**
- v1 requirements: 18 total
- Mapped to phases: 18
- Unmapped: 0 ✓

---
*Requirements defined: 2026-09-02*
*Last updated: 2026-09-02 after brownfield onboard of the live door*
