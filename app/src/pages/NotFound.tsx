import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export function NotFound() {
  usePageMeta("Page not found | Owl Offers", "That page is not on this door.", "/404");

  return (
    <main id="main" className="wrap page-lead">
      <p className="eyebrow">404</p>
      <h1>That page is not on this door.</h1>
      <p className="lede">The studio lives on a few routes. Home, the SAMPLE, and start.</p>
      <div className="actions">
        <Link className="btn btn-solid" to="/">
          Back to the studio
        </Link>
        <Link className="btn btn-ghost" to="/start">
          Send a page
        </Link>
      </div>
    </main>
  );
}
