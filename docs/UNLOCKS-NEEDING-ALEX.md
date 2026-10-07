# Unlocks needing Alex

Operator note for the Owl Offers door. Dated 2026-10-07. This file does not authorize spend, a domain purchase, DNS changes, Cloudflare, a Pages plan change, Stripe, outreach, or a public-copy rewrite.

Evidence tags: **P** = proven from this repo or a live HTTP check on 2026-10-07. **R** = reported on the Master To Do as of 2026-10-06 PT and not re-decided here. **U** = unknown until Alex says so.

## Leave these alone

| Unlock | State | What Alex has to do | What this repo will not do |
| --- | --- | --- | --- |
| Lovable **$27.45** | **R** — a billing decision, not an auto-pay. Phrase: `LOVABLE BILLING DECIDE`. Left alone until then. | Decide the Lovable bill in the Lovable account. | Do not pay, upgrade, attach a card, or start a Lovable build from this door. |
| Audit spec | **R** — critical path waits on `OWL AUDIT SPEC LOCK`. | Lock the spec: pillar names, weights, and deliverable length. | Do not invent the spec on `/` or `/start`. The public door already describes the separate public-page look in `OFFER-SHEET.md`. |
| **$497 credit** | **U** — price vs credit vs platform. Same phrase: `OWL AUDIT SPEC LOCK`. | Define what “$497 credit” means. | Do not change the door. **P**: `$497` on the door is the fixed first step (public-page look), shown below the pitch, never in the H1. |
| Hours | **U** — capacity is not set. Same phrase: `OWL AUDIT SPEC LOCK`. | Set hours per audit, or say there is no hour budget. | Do not publish an hours promise, a rate card, or a calendar. |
| Meta page creates | **R** — a logged-in human action. | Create any new Facebook or Instagram Page, and post to Facebook Groups, from a Meta session Alex is signed into. | Do not create Pages, change Page settings, or post. Meta removed Facebook Groups posting permissions in April 2024, so this repo cannot do that job. |

Customer cash for an audit payment was **U** (zero receipts) on the 2026-10-06 PT note. This file does not update that.

## Door check — banners

Checked `app/src/pages/` and the live routes on 2026-10-07.

- No AI-agent page. No draft-mode page. No new status banner was added to the firm door.
- `/sample` is fiction and already carries a status line: “SAMPLE — fictional shop. Not a real business. Not a real client.” That line is now `role="status"` so it is announced as status. The words did not change.
- Home, Start, and the 404 are finished pages with copy. They are not empty stubs.

## Door check — links

**P** on 2026-10-07, before this change: `https://alligator7-hub.github.io/owl-offers-door/sample` and `/start` returned **HTTP 404**. The body was the shared empty `#root` shell (2,126 bytes) titled as the home page. The sitemap and the on-site links still point at those paths. GitHub Pages only showed the real page after JavaScript routed the 404 shell.

`npm run build` now writes `sample/index.html` and `start/index.html` (the same SPA shell as `index.html`) so those two routes are real files. Assets, `og.png`, favicon, and apple-touch icon already returned 200. No in-app link pointed at an empty route.

## Secrets

No `.env` is tracked. `.gitignore` ignores `.env` and `.env.*` (an optional `.env.example` may be committed). Do not add Lovable, Stripe, Meta, or Cloudflare tokens to this repo.
