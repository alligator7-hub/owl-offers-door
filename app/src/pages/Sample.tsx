import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { ShopAfter, ShopBefore } from "../components/ShopScreens";
import { usePageMeta } from "../lib/usePageMeta";

const observations = [
  {
    n: "01",
    title: "The offer is a vibe, not a job.",
    body: "“Quality you can see” could be any trade. A tired homeowner comparing two fence pages cannot tell if Northfork does privacy, farm, or vinyl, or whether they replace posts after a storm. The page asks for trust before it names the work.",
  },
  {
    n: "02",
    title: "The call path is hiding.",
    body: "The number is below the fold. The first actions are Gallery and About. Contact is a form with no “we call you back today” line. If the homeowner is standing in the yard with a leaning panel, they will tap the shop that already put the number in their thumb’s way.",
  },
  {
    n: "03",
    title: "Proof is generic, not local-to-the-job.",
    body: "“Family owned” and “for years” do not answer “will they show up for a 180-foot cedar run.” There are no before/after notes, no named fence types, no “what we won’t sell you.” Leave-alone: the truck photo. It already looks like a crew that works outside.",
  },
];

const ranks = [
  {
    tag: "Fix now",
    body: "Rewrite the first screen so it names the work, the area style (river counties / rural lots), and a tap-to-call number. Replace the three equal buttons with Call and one secondary “see fence types.”",
  },
  {
    tag: "Fix next",
    body: "Add a short “what happens after you call” block (same-day callback window on business days, measure visit, written bid). Swap the contact form label from “project details” to three fields: name, property, fence type.",
  },
  {
    tag: "Leave alone",
    body: "Keep the truck photo and the quiet dark layout. Do not add a coupon banner, a rotating slider, or a menu of digital services. The page already looks like a shop, not an agency.",
  },
];

export function Sample() {
  usePageMeta(
    "SAMPLE — Northfork Fence & Gate | Owl Offers",
    "Fictional sample of an Owl Offers public-page look. Not a real shop.",
    "/sample",
    "noindex",
  );

  return (
    <main id="main" className="page-sample">
      <div className="wrap page-lead">
        <p className="sample-banner">SAMPLE — fictional shop. Not a real business. Not a real client.</p>
        <p className="eyebrow">Work piece</p>
        <h1>Northfork Fence &amp; Gate</h1>
        <p className="lede">
          Made-up residential fence shop. One main public page. This is the shape of Owl’s first
          paid step: before notes, observations, ranked fixes, one rewritten section.
        </p>
      </div>

      <section className="band band-flush" aria-labelledby="compare-h">
        <div className="wrap">
          <Reveal>
            <h2 id="compare-h" className="visually-hidden">
              Before and after
            </h2>
            <div className="compare compare-lg">
              <ShopBefore />
              <ShopAfter />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band" aria-labelledby="notes-h">
        <div className="wrap narrow">
          <Reveal>
            <p className="eyebrow">Before view</p>
            <h2 id="notes-h">What the homeowner met</h2>
            <p className="intro">
              A dark hero with a truck photo, the line “Quality you can see,” and three buttons:
              Gallery, About, Contact. The phone number lived in the footer. The first screen did
              not say what they install, where they work, or what happens after a message. A form
              asked for “project details” with no promise of a reply window.
            </p>
          </Reveal>
          <Reveal className="doc" delay={60}>
            <pre>
{`Northfork Fence & Gate
Quality you can see.

[Gallery]  [About]  [Contact]

We do wood, vinyl, and more. Family owned.
Serving the river counties for years.

Footer: 555-0148 · info@northfork.example`}
            </pre>
          </Reveal>
        </div>
      </section>

      <section className="band band-tight" aria-labelledby="obs-h">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Read</p>
            <h2 id="obs-h">Three observations</h2>
          </Reveal>
          <div className="obs-grid">
            {observations.map((item, i) => (
              <Reveal as="article" key={item.n} className="obs" delay={i * 50}>
                <p className="obs-n">{item.n}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="rank-h">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Packet</p>
            <h2 id="rank-h">Ranked fixes</h2>
          </Reveal>
          <div className="rank-grid">
            {ranks.map((item, i) => (
              <Reveal as="article" key={item.tag} className="rank-card" delay={i * 50}>
                <p className="rank-tag">{item.tag}</p>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-tight" aria-labelledby="rewrite-h">
        <div className="wrap narrow">
          <Reveal>
            <p className="eyebrow">Highest-impact rewrite</p>
            <h2 id="rewrite-h">Replacement first screen</h2>
          </Reveal>
          <Reveal className="doc doc-after" delay={50}>
            <pre>
{`Northfork Fence & Gate
Wood and vinyl fence for rural lots and river-county homes.

Call 555-0148. We pick up, or we call you back the same business day.

Privacy, field, and replacement after storms.
We measure on site and send a written bid.

[Call 555-0148]  [See fence types]`}
            </pre>
          </Reveal>
          <Reveal>
            <p className="intro">
              That is the job of the first paid step: one page, ranked friction, copy the shop can
              paste. SAMPLE only. Owl Offers has not worked with a shop named Northfork.
            </p>
            <div className="actions">
              <Link className="btn btn-solid" to="/start">
                Send your page
              </Link>
              <Link className="btn btn-ghost" to="/">
                Back to the studio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
