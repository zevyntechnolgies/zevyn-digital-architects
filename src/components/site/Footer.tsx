import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const cols = [
  {
    title: "Solutions",
    links: [
      { to: "/services", label: "Landing Pages" },
      { to: "/services", label: "AI Integration" },
      { to: "/services", label: "Digital Marketing" },
      { to: "/services", label: "CRM Solutions" },
      { to: "/services", label: "SEO Optimization" },
      { to: "/services", label: "Security Audits" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/projects", label: "Case Studies" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/", label: "Privacy Policy" },
      { to: "/", label: "Terms of Service" },
      { to: "/", label: "Cookies" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 group">
          <img
    src="/company logo.png"
    alt="ZEVYN Logo"
    className="h-8 w-8 object-contain transition-transform group-hover:rotate-3"
  />
          <span className="font-display text-lg font-bold tracking-tight">Zevyn Technologies</span>
        </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              ZEVYN helps businesses grow with conversion-focused landing pages,
              AI-powered automation, SEO optimization, digital marketing, and
              scalable web solutions.
            </p>
            {/* <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex w-full max-w-sm overflow-hidden rounded-full border border-border bg-card pl-5 pr-1"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="my-1 rounded-full bg-foreground px-4 text-xs font-semibold text-background"
              >
                Subscribe
              </button>
            </form> */}
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {c.links.map((l, i) => (
                  <li key={`${c.title}-${i}`}>
                    <Link to={l.to} className="transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Social
            </h4>
            <div className="mt-5 flex gap-2">
              {[
                { href: "https://www.linkedin.com/in/zevyn-technolgies-b2a029417/", label: "LinkedIn", Icon: Linkedin },
                { href: "https://www.instagram.com/zevyntechnologies_official/", label: "Instagram", Icon: Instagram },
                { href: "https://github.com/zevyntechnolgies", label: "GitHub", Icon: Github },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} ZEVYN Technologies. All rights reserved.</span>
          <span className="font-semibold uppercase tracking-[0.22em]">
            Designed for performance
          </span>
        </div>
      </div>
    </footer>
  );
}
