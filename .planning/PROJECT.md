# Owl Offers — public studio door

## What This Is

This repository is the **live** Owl Offers convert door: a static studio site for a small full-service firm that helps local service shops look ready so a homeowner can actually call. It is already shipped at https://alligator7-hub.github.io/owl-offers-door/ (package version 4.0.0). It is not a greenfield app, not a merch store, and not a $497 product landing page pretending to be the whole brand.

## Core Value

The shop looks ready. The homeowner actually calls.

## Business Context

- **Customer**: Local service shops (trade, home service, field work) with one main public page a homeowner can open. Starting Pacific Northwest / West Coast; shops worldwide, starting local.
- **Revenue model**: First paid step is a $497 public-page look (shown below the pitch, never in the H1). Stay-on work (more words, another page, follow-up) is a conversation — unpriced on this door.
- **Success metric**: A shop owner can tell this is a firm, see one labeled SAMPLE, and send a page by email. Not ad spend, not a promised job count.
- **Strategy notes**: Internal defaults in `OFFER-SHEET.md`. Fulfillment owner: Alex Anderson, solo.

## Requirements

### Validated

- ✓ Studio door presents Owl Offers as a full-service firm (copy, pages, follow-up, documents, presence) — live v4
- ✓ Exact home H1: *The shop looks ready. The homeowner actually calls.*
- ✓ First paid step ($497, five business days, ranked fixes, replacement copy, walkthrough) lives on `/start` and a home invite — not in the H1
- ✓ SAMPLE work is fiction (Northfork Fence & Gate) and labeled SAMPLE
- ✓ Intake composes `mailto:owloffersofficial@gmail.com` and stores nothing on the page
- ✓ Quiet studio signature: Alex Anderson · Owl Offers. No founder hero photo. Does not run ads.

### Active

(None — this onboard documents the existing door. Do not invent a next product here.)

### Out of Scope

- Stripe / checkout / cart on this origin — no payment integration until a new yes; intake is mailto only
- shopowloffers.com — Shopify merch, not this door; do not link the agency site there
- Acronym service menu (SMMA/SEO/GEO/AEO) — voice lock
- Bro-agency founder card as the face of the site — removed; do not bring it back
- Olympia, Tumwater, or Lacey in public copy — geography is PNW / West Coast / worldwide-starting-local
- Redesign of public layout, CSS, or homepage copy as part of tooling/onboard work
- Kit, Linktree, ads, retainers, promised call/job/revenue numbers
- Changing owloffers.com DNS from this build

## Context

Brownfield static SPA (Vite + React 19 + React Router 7) in `app/`. GitHub Pages project path `/owl-offers-door/`. Source of truth is `app/`; root `index.html` / `404.html` / `assets/` are generated. Internal offer sheet is `OFFER-SHEET.md` (not rendered). GSD Core was installed locally for Cursor so future work can use `.planning/` without treating the repo as a blank project.

Default branch: `main`. Live commit at onboard: `ed91480` (“Rebuild Owl Offers as a production studio site”).

## Constraints

- **Product**: Public door is a firm, not a $497 SKU
- **Copy**: Home H1 is locked; `$497` may appear later, not in that H1
- **Voice**: Human, calm. No guru, no fake scale, no invented testimonials or real outreach shop names
- **Tech**: Static site only — no backend, no database, no auth
- **Intake**: mailto `owloffersofficial@gmail.com` only
- **Publish**: Keep Vite `base` `/owl-offers-door/` unless the Pages path changes
- **GSD**: Local Cursor install only (`.cursor/`); do not require a global `~/.cursor` skills install for this repo

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Firm-first door, $497 as first step | Brand is the studio; SKU is how most shops start | ✓ Good — live v4 |
| mailto intake, no Stripe | No checkout yes; no PII stored on the page | ✓ Good |
| SAMPLE is fiction | Do not invent a client roster | ✓ Good |
| No metro-specific public copy | Avoid Olympia / Tumwater / Lacey | ✓ Good |
| shopowloffers.com stays off this door | Different property (Printful merch) | ✓ Good |
| Edit `app/`, not generated root HTML | Pages copies are build output | ✓ Good |

---
*Last updated: 2026-09-02 after GSD brownfield onboard*
