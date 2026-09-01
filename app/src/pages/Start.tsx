import { Reveal } from "../components/Reveal";
import { IntakeForm } from "../components/IntakeForm";
import { usePageMeta } from "../lib/usePageMeta";
import { SITE } from "../lib/site";

const included = [
  "Marked-up written review of what helps or hurts the call",
  "Ranked list: fix now / fix next / leave alone",
  "Replacement copy for the highest-impact section",
  "Short recorded walkthrough",
  "One written question round, seven days after delivery",
];

const steps = [
  {
    n: "01",
    title: "You send the page",
    body: "Owner, shop, URL, what you think is blocking calls. That is intake.",
  },
  {
    n: "02",
    title: "Owl looks",
    body: "One main public page and the path to first contact. Five business days after intake is complete.",
  },
  {
    n: "03",
    title: "You get the packet",
    body: "Review, ranks, rewrite, walkthrough. Then seven days for written questions.",
  },
  {
    n: "04",
    title: "If you want Owl to stay",
    body: "Words, another page, follow-up. We talk. Those pieces are not priced on this door.",
  },
];

export function Start() {
  usePageMeta(
    "Start — first paid step | Owl Offers",
    "The first paid step is $497: one public page, a path to first contact, ranked fixes, and replacement copy in five business days.",
    "/start",
  );

  return (
    <main id="main">
      <div className="wrap page-lead">
        <p className="eyebrow">First paid step</p>
        <h1>A look at one main public page.</h1>
        <p className="lede">
          This is how most shops start with Owl. It is not the whole firm. After this, stay-on work
          is a conversation — unpriced on this door.
        </p>
      </div>

      <section className="band band-flush" aria-labelledby="offer-h">
        <div className="wrap split">
          <Reveal className="price-panel">
            <p className="eyebrow">Fixed first step</p>
            <p className="price">$497</p>
            <p className="price-lead">
              Five business days after complete intake. One rewrite. A short recorded walkthrough.
              Seven days of written questions.
            </p>
            <h2 id="offer-h" className="visually-hidden">
              What is included
            </h2>
            <ul className="include">
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="not">
              Not included: ads, retainers, a promised number of calls. If there is no clear ranked
              list, tell us within seven days — we redo once, or refund.
            </p>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="h-small">How it works</h2>
              <ol className="steps">
                {steps.map((step) => (
                  <li key={step.n}>
                    <span className="step-n">{step.n}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <span>{step.body}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal className="stay" delay={70}>
              <h3>After the first step</h3>
              <p>
                Some shops only needed the ranked list. Some want Owl on the next page, the
                voicemail, the bid language. If that is you, say so in the note. We will answer
                with a conversation, not a rate card.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band" id="contact" aria-labelledby="intake-h">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Intake</p>
            <h2 id="intake-h">Send the page</h2>
            <p className="intro">
              This opens an email to {SITE.email} with your details. If your mail app does not
              open, write that address yourself.
            </p>
          </Reveal>
          <Reveal delay={40}>
            <IntakeForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
