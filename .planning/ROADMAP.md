# Roadmap: Owl Offers door

## Overview

This is a brownfield roadmap for the **already live** GitHub Pages studio door. Phase 1 is the shipped v4 convert site. There is no invented greenfield build. Future phases are added only when Alex asks for real work that does not break the locked door.

## Milestones

- ✅ **v4.0 Live studio door** — Phase 1 (shipped; live at https://alligator7-hub.github.io/owl-offers-door/)
- 📋 **Later work** — not scoped. Do not invent SKUs, checkout, or a redesign.

## Phases

<details>
<summary>✅ v4.0 Live studio door (Phase 1) — SHIPPED</summary>

### Phase 1: Live studio door
**Goal**: Public Owl Offers door that reads as a full-service firm; $497 public-page look as the first paid step; SAMPLE fiction; mailto intake.
**Depends on**: Nothing (already in production)
**Requirements**: DOOR-01–DOOR-06, STEP-01–STEP-03, SAMP-01–SAMP-03, MAIL-01–MAIL-03, PAGE-01–PAGE-03
**Success Criteria** (what must be TRUE):
  1. Visitor sees H1 *The shop looks ready. The homeowner actually calls.*
  2. Visitor can open a labeled SAMPLE and the first-step page
  3. Visitor can compose intake email to owloffersofficial@gmail.com
  4. No Stripe, no shopowloffers.com, no acronym menu, no founder hero, no Olympia/Tumwater/Lacey
**Plans**: Shipped on `main` before GSD (commit `ed91480` and earlier). No GSD plan files — do not re-execute this phase.

Plans:
- [x] 01-01: Studio home, SAMPLE, start, intake, Pages publish (already on `main`)

</details>

## Phase Details

### Phase 1: Live studio door
**Goal**: See milestone above — this phase is complete.
**Status**: Complete
**Canonical refs:**
- `README.md` — run locally, routes, brand locks
- `OFFER-SHEET.md` — internal offer defaults
- `app/src/lib/site.ts` — name, email, canonical, H1, signature
- `app/src/pages/Home.tsx` — public door
- `app/src/pages/Start.tsx` — first paid step
- `app/src/pages/Sample.tsx` — SAMPLE packet
- `app/src/lib/intake.ts` — mailto composer
- `.planning/CONTEXT.md` — locked product + implementation context

## Progress

**Execution Order:**
Phase 1 is done. Do not start a Phase 2 unless a new milestone is explicitly requested.

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Live studio door | v4.0 | n/a (pre-GSD ship) | Complete | 2026-09-02 (onboarded as already live) |

---
*Roadmap written: 2026-09-02 during `/gsd-onboard` equivalent — existing door, not a new product*
