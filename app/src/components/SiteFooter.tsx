import { Link } from "react-router-dom";
import { SITE } from "../lib/site";
import { OwlMark } from "./OwlMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <OwlMark />
          <p className="footer-sig">{SITE.signature}</p>
          <p className="footer-note">Small studio. Does not run ads.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/sample">Sample</Link>
          <Link to="/start">Start</Link>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </nav>
      </div>
    </footer>
  );
}
