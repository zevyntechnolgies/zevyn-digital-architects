import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Case Studies — Measurable Outcomes | ZEVYN Technologies" },
      {
        name: "description",
        content:
          "Selected ZEVYN case studies across fintech, SaaS, logistics, and revenue ops — with the metrics that matter to leadership.",
      },
      { property: "og:title", content: "ZEVYN Case Studies" },
      { property: "og:description", content: "Selected work and the outcomes it produced." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Project = {
  category: string;
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  metric: { value: string; label: string };
  secondary: { value: string; label: string };
};

const allProjects: Project[] = [
  {
    category: "Landing Page",
    title: "QuantFlow — Acquisition rebuild",
    problem: "Stalled CAC and a leaky funnel from a generic marketing site.",
    solution: "Re-architected the funnel, shipped a conversion-engineered hero, and instrumented every interaction.",
    tech: ["React", "Edge", "PostHog"],
    metric: { value: "+137%", label: "Leads Generated" },
    secondary: { value: "4.2s", label: "Avg Load Speed" },
  },
  {
    category: "AI",
    title: "Northwind — Operations agent network",
    problem: "Operators spent hours triaging shipment exceptions by hand.",
    solution: "Built an agent network that classifies, routes, and drafts responses with human approval gates.",
    tech: ["LangGraph", "Python", "RAG"],
    metric: { value: "40%", label: "Faster Operations" },
    secondary: { value: "8h", label: "Saved per Operator/Week" },
  },
  {
    category: "SEO",
    title: "Lumina — Programmatic search engine",
    problem: "Strong demand for long-tail queries with no content to capture it.",
    solution: "Designed a programmatic SEO engine and rebuilt the marketing site around topic clusters.",
    tech: ["Next.js", "Sanity", "Schema"],
    metric: { value: "+280%", label: "Organic Traffic" },
    secondary: { value: "920", label: "Pages Indexed" },
  },
  {
    category: "CRM",
    title: "Aether — Revenue ops replatform",
    problem: "Sales and marketing operated on disconnected data with no attribution.",
    solution: "Replatformed CRM with custom attribution, automated lifecycle, and exec dashboards.",
    tech: ["HubSpot", "Snowflake", "dbt"],
    metric: { value: "3×", label: "Sales Pipeline" },
    secondary: { value: "12", label: "Markets Live" },
  },
  {
    category: "Security",
    title: "Symmetry — SOC 2 readiness",
    problem: "Enterprise deals blocked by a missing security review.",
    solution: "Ran an OWASP-aligned audit, hardened infrastructure, and delivered SOC 2 documentation.",
    tech: ["AWS", "Terraform", "Vanta"],
    metric: { value: "0", label: "Critical Findings" },
    secondary: { value: "6 wk", label: "To Audit-Ready" },
  },
  {
    category: "Landing Page",
    title: "Vertex — Pricing page experiment system",
    problem: "Pricing changes shipped without measurement; learnings were lost.",
    solution: "Built an experiment-first pricing surface with statistical guardrails.",
    tech: ["React", "Edge", "Statsig"],
    metric: { value: "+31%", label: "Trial → Paid" },
    secondary: { value: "9", label: "Experiments / Quarter" },
  },
];

const categories = ["All", "Landing Page", "AI", "SEO", "CRM", "Security"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? allProjects : allProjects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Case Studies
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Work that ships, measured against the numbers that matter.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A selection of recent engagements across SaaS, fintech, logistics, and B2B —
              with the outcomes leadership cared about.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => {
              const on = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    on
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-12 grid max-w-7xl gap-5 px-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{p.category}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-foreground"
                  >
                    Discuss
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold leading-snug">{p.title}</h2>

                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Challenge
                    </dt>
                    <dd className="mt-1 text-foreground">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Solution
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{p.solution}</dd>
                  </div>
                </dl>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
                  <div>
                    <div className="font-display text-3xl font-bold">{p.metric.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {p.metric.label}
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold">{p.secondary.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {p.secondary.label}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
