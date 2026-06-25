import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/services", label: "Solutions" },
  { to: "/projects", label: "Case Studies" },
  { to: "/about", label: "Company" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-lg bg-brand-ink text-background transition-transform group-hover:rotate-3"
          >
            <span className="size-3 rounded-sm bg-brand-sky" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">ZEVYN</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:text-foreground [&.active]:text-foreground"
              activeProps={{ className: "active" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background shadow-elegant transition-transform hover:-translate-y-px"
          >
            Book a Call
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid size-10 place-items-center rounded-full border border-border bg-background"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
