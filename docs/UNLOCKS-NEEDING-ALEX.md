# Unlocks needing Alex

Operator note for the Owl Offers door. Dated 2026-10-07. This file does not authorize spend, a domain purchase, DNS changes, Cloudflare, a Pages plan change, Stripe, outreach, or a public-copy rewrite.

Evidence tags: **P** = proven from this repo or a live HTTP check on 2026-10-07. **R** = reported on the Master To Do (as of 2026-10-06 PT), on the named Notion page, or in this 2026-10-07 operator pass — not re-decided here. **U** = unknown until Alex says so.

## Leave these alone

| Unlock | State | What Alex has to do | What this repo will not do |
| --- | --- | --- | --- |
| Lovable **$27.45** | **R** — a billing decision, not an auto-pay. Phrase: `LOVABLE BILLING DECIDE`. Left alone until then. | Decide the Lovable bill in the Lovable account. | Do not pay, upgrade, attach a card, or start a Lovable build from this door. |
| Audit spec | **R** — critical path waits on `OWL AUDIT SPEC LOCK`. | Lock the spec: pillar names, weights, and deliverable length. | Do not invent the spec on `/` or `/start`. The public door already describes the separate public-page look in `OFFER-SHEET.md`. |
| **$497 credit** | **U** — price vs credit vs platform. Same phrase: `OWL AUDIT SPEC LOCK`. | Define what “$497 credit” means. | Do not change the door. **P**: `$497` on the door is the fixed first step (public-page look), shown below the pitch, never in the H1. |
| Hours | **U** — capacity is not set. Same phrase: `OWL AUDIT SPEC LOCK`. | Set hours per audit, or say there is no hour budget. | Do not publish an hours promise, a rate card, or a calendar. |
| Meta page creates | **R** — a logged-in human action. | Create any new Facebook or Instagram Page, and post to Facebook Groups, from a Meta session Alex is signed into. | Do not create Pages, change Page settings, or post. Meta removed Facebook Groups posting permissions in April 2024, so this repo cannot do that job. |

Customer cash for an audit payment was **U** (zero receipts) on the 2026-10-06 PT note. This file does not update that.

## Deeper gates — 2026-10-07

Same rule as the table above. A phrase here is a human gate. This door does not send, publish, upload, or spend because a row says the work is ready.

| Gate | State | What Alex has to do | What this repo will not do |
| --- | --- | --- | --- |
| Fairy `k-FT-LISTING+PAGEFIX` | **R** — My First Fairy Tale Coloring Book listing packet is still a draft (KDP metadata page, edited 2026-10-07). Count rule already written there: **25 original designs / 54 printed pages**. Cover rewrite is out of scope. | Say `k-FT-LISTING+PAGEFIX` before any listing bullet or page-count fix goes live on KDP. | Do not edit the live KDP listing, upload a file, or rewrite the cover from this door. |
| Crypto Dictionary chapter **R** | **R** — page checked 2026-10-07. Book status is “complete except R” (Alex order 2026-10-06). The body on the R page is still Chapter Q. Intended R text is unrecovered. | Recover or supply the real R source. | Do not invent R definitions, and do not count the Q copy as a finished R chapter. |
| Origin create batch 1 | **R** — this 2026-10-07 pass: batch 1 is **OK**, **10 ready**. Not re-counted in this repo. | Review the 10 that are ready before any of them is published or sent. | Do not open a second create batch, and do not publish the 10 from this door. |
| Owl **5** draft cards | **R** — this 2026-10-07 pass: five draft cards are waiting on **Send**. Card titles are **U** here. | Send, or say which cards stay draft. | Do not send, schedule, or post the five cards. |
| Mom surname card | **R** — draft card is up. Phrase: `SEND MOM SURNAME ACK`. Oct 6 PT: intent cleared, send receipt still **U**. | Send that card, or leave it draft. A sent receipt is what closes it. | Do not send the card, and do not put the surname or the message body in this repo. |
| Jeremiah **1000/1000** | **R** — Jeremiah 29:11 art gate. Target is a **PASS at 1000/1000**. Latest score on the Printful Source Recovery page (Oct 6 ~4:50 PM PT): leader AU **~965/1000, REJECT** (prior AQ 962). No PASS artifact. | Hold the store until a 1000/1000 PASS exists. Art work can continue without a store write. | Do not ship, mock, or Add to Store from this door. |
| Shopify Admin | **R** — phrase `SHOPIFY ADMIN VISUAL READY`. Oct 6 PT intent was cleared, and the Admin sign-in session was still not handed over. Backs/handles stay **U**. | Sign in to Shopify Admin and hand over a visual read of the backs and handles. | Do not Add to Store, change the catalog, or store Admin credentials in git. |
| Ep0 watch | **R** — still a true blocker as of Oct 6 ~4:45 PM PT. Alex watches Ep0 v14 first. Phrase after that watch: `EP0 V14 PUBLISH GO`. | Watch Ep0 v14, then say the phrase before any Metricool or YouTube publish. | Do not publish Ep0 to Metricool or YouTube from this door. |
| Lovable leave alone | **R** — same row as the table. **$27.45** stays a decision. Phrase: `LOVABLE BILLING DECIDE`. | Leave the Lovable balance alone until that phrase. | Do not pay, upgrade, attach a card, or start a Lovable build. |

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
