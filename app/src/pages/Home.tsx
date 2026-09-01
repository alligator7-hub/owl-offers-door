import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { ShopAfter, ShopBefore } from "../components/ShopScreens";
import { usePageMeta } from "../lib/usePageMeta";
import { SITE } from "../lib/site";

const practice = [
  {
    n: "01",
    label: "Words",
    title: "The first screen names the job",
    body: "Copy that says what you install or repair, who it is for, and what happens after they reach out. No slogans pretending to be offers.",
  },
  {
    n: "02",
    label: "Pages",
    title: "The public page can finish the call",
    body: "Layout, order, and the path from first look to first contact. Phone, form, hours — where a tired person can use them.",
  },
  {
    n: "03",
    label: "Follow-up",
    title: "Silence does not close the job",
    body: "What you say after they write. An honest window for a callback. Language for the message they get while they wait.",
  },
  {
    n: "04",
    label: "Documents",
    title: "Bids and notes that feel like the shop",
    body: "The paper and PDF a homeowner keeps. Clear scope, next step, and a voice that matches the truck, not a template mill.",
  },
  {
    n: "05",
    label: "Presence",
    title: "The shop looks ready in public",
    body: "One coherent face: what is on the page, what a search result implies, what a listing claims. Firm first. No costume.",
  },
  {
    n: "06",
    label: "Stay on",
    title: "Owl can keep working with you",
    body: "After the first paid step, more words, another page, follow-up that holds. That is a conversation, not a productized menu.",
  },
];

export function Home() {
  usePageMeta(
    "Owl Offers — The shop looks ready. The homeowner actually calls.",
    "Owl Offers is a small studio for local service shops: copy, pages, follow-up, documents, and public presence. The first paid step is a $497 look at the page that should earn the call.",
    "/",
  );

  return (
    <main id="main">
      <section className="hero" aria-labelledby="h1">
        <div className="wrap">
          <p className="eyebrow">A studio for local service shops</p>
          <h1 id="h1">{SITE.h1}</h1>
          <div className="hero-split">
            <p className="lede">
              Owl Offers is the firm behind the public face of the shop: the words, the page, the
              follow-up, the documents. We work in human language so a tired homeowner can tell
              what you do, and can finish the call.
            </p>
            <div className="hero-aside">
              <p>Pacific Northwest / West Coast.</p>
              <p>Shops worldwide, starting local.</p>
              <p className="hero-sig">{SITE.signature}</p>
            </div>
          </div>
          <div className="actions">
            <Link className="btn btn-solid" to="/start">
              See the first paid step
            </Link>
            <Link className="btn btn-ghost" to="/sample">
              View a SAMPLE
            </Link>
          </div>
        </div>
      </section>

      <section className="band" id="work" aria-labelledby="work-h">
        <div className="wrap">
          <Reveal>
            <div className="band-head">
              <p className="eyebrow">Selected work</p>
              <h2 id="work-h">One piece, labeled, so you can see the thinking.</h2>
              <p className="intro">
                Northfork Fence &amp; Gate is not a client. It is fiction, used to show how Owl
                reads a public page. We do not invent a roster.
              </p>
            </div>
          </Reveal>

          <Reveal className="work-stage" delay={80}>
            <div className="work-meta">
              <div>
                <p className="work-kicker">Public page look</p>
                <h3>Northfork Fence &amp; Gate</h3>
              </div>
              <span className="pill">SAMPLE · fiction</span>
            </div>
            <div className="compare">
              <ShopBefore compact />
              <ShopAfter compact />
            </div>
            <div className="work-foot">
              <p>
                First screen rewritten so the work, the place, and the number sit where a thumb can
                use them.
              </p>
              <Link className="text-link" to="/sample">
                Open the full SAMPLE
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band band-tight" id="practice" aria-labelledby="practice-h">
        <div className="wrap">
          <Reveal>
            <div className="band-head">
              <p className="eyebrow">Practice</p>
              <h2 id="practice-h">Outcomes, not a menu of tricks.</h2>
              <p className="intro">
                Owl stays in language a shop owner and a homeowner both understand.
              </p>
            </div>
          </Reveal>
          <ol className="practice">
            {practice.map((item, i) => (
              <Reveal as="li" key={item.n} delay={i * 40} className="practice-row">
                <span className="practice-n">{item.n}</span>
                <span className="practice-label">{item.label}</span>
                <div className="practice-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" id="studio" aria-labelledby="studio-h">
        <div className="wrap studio">
          <Reveal>
            <p className="eyebrow">Studio</p>
            <h2 id="studio-h">Quiet about the firm</h2>
            <p className="intro">
              Owl Offers is a small studio. The work is the public path a homeowner takes before
              they hire a shop. We do not run ads against this door. We do not dress the firm as a
              crowd. If the first step is a fit, you work with Alex.
            </p>
            <p className="sig">{SITE.signature}</p>
          </Reveal>
          <Reveal className="studio-card" delay={90}>
            <h3>Where</h3>
            <p>
              Starting in the Pacific Northwest and the West Coast. Local service shops anywhere
              can send a page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band band-tight" aria-labelledby="step-h">
        <div className="wrap">
          <Reveal className="invite">
            <div>
              <p className="eyebrow">First paid step</p>
              <h2 id="step-h">A look at the page that should earn the call.</h2>
              <p>
                One main public page, plus the path from first look to first contact. Five business
                days. Ranked fixes. Replacement copy. A short recorded walkthrough. This is how
                most shops start — it is not the whole firm.
              </p>
            </div>
            <div className="invite-aside">
              <p className="invite-price">$497</p>
              <p className="invite-note">Shown here, not in the headline. Unpriced stay-on work after.</p>
              <Link className="btn btn-solid" to="/start">
                How it works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
