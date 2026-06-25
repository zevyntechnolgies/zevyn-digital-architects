import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Lock, Megaphone, Search, Users, Zap } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Landing Pages, AI, SEO, CRM & Security | ZEVYN" },
      {
        name: "description",
        content:
          "End-to-end digital services from ZEVYN — landing page development, AI integration, digital marketing, CRM, SEO, and security audits.",
      },
      { property: "og:title", content: "ZEVYN Services" },
      {
        property: "og:description",
        content:
          "Landing pages, AI integration, SEO, CRM, digital marketing, and security — engineered as one system.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Zap,
    title: "Landing Page Development",
    desc: "High-converting, edge-rendered pages designed around a measurable revenue goal.",
    includes: ["Conversion strategy", "Copy & design", "A/B testing", "Edge deployment"],
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "Production-grade LLM agents, RAG pipelines, and workflow automation.",
    includes: ["Use-case discovery", "Pilot in 4–6 weeks", "Eval & observability", "Production hardening"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Paid and organic growth campaigns with full-funnel attribution.",
    includes: ["Paid social & search", "Creative testing", "Attribution model", "Reporting cadence"],
  },
  {
    icon: Users,
    title: "CRM Solutions",
    desc: "Custom CRM builds and automations that align sales, marketing, and success.",
    includes: ["HubSpot · Salesforce", "Lifecycle automation", "Lead routing", "Pipeline reporting"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Technical and content SEO that compounds into durable organic traffic.",
    includes: ["Technical audit", "Topic clusters", "Programmatic SEO", "Authority links"],
  },
  {
    icon: Lock,
    title: "Security Audits",
    desc: "Enterprise-grade reviews that keep customer data safe and compliance-ready.",
    includes: ["OWASP review", "Dependency scans", "Pen-test prep", "SOC 2 docs"],
  },
] as const;

function ServicesPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Solutions
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              A complete digital system, engineered by one team.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              ZEVYN brings the disciplines that move revenue — design, engineering, AI,
              marketing, and security — under a single delivery model.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-20 grid max-w-7xl gap-5 px-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-subtle ring-1 ring-border">
                  <s.icon className="size-5" />
                </span>
                <h2 className="mt-7 font-display text-2xl font-bold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                  {s.includes.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-foreground">
                      <span className="size-1.5 rounded-full bg-foreground" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                >
                  Scope an engagement
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
