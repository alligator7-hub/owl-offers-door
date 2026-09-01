import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { OwlMark } from "./OwlMark";

const links = [
  { to: "/#work", label: "Work" },
  { to: "/sample", label: "Sample" },
  { to: "/start", label: "Start" },
] as const;

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const closeBtn = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (open) firstLink.current?.focus();
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Owl Offers home">
          <OwlMark />
          <span className="brand-word">Owl Offers</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) =>
            link.to.includes("#") ? (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <Link className="header-cta" to="/start">
          Send a page
        </Link>

        <button
          ref={closeBtn}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div className={`nav-drawer${open ? " is-open" : ""}`} id={menuId} hidden={!open}>
        <nav className="nav-mobile" aria-label="Mobile">
          {links.map((link, i) => {
            const Comp = link.to.includes("#") ? Link : NavLink;
            return (
              <Comp
                key={link.to}
                ref={i === 0 ? firstLink : undefined}
                to={link.to}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Comp>
            );
          })}
          <Link className="btn btn-solid" to="/start" onClick={() => setOpen(false)}>
            Send a page
          </Link>
        </nav>
      </div>
    </header>
  );
}
