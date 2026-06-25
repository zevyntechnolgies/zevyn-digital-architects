import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Gauge,
  LineChart,
  Lock,
  Megaphone,
  Plus,
  Search,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { AnimatedNumber } from "../components/site/AnimatedNumber";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZEVYN Technologies — Landing Pages That Convert. Built for Growth." },
      {
        name: "description",
        content:
          "ZEVYN helps businesses grow with conversion-focused landing pages, AI automation, SEO, CRM integrations, and enterprise-grade security.",
      },
      { property: "og:title", content: "ZEVYN Technologies" },
      {
        property: "og:description",
        content:
          "Landing pages that turn visitors into customers — engineered with conversion, AI, and SEO at the core.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ZEVYN Technologies",
          url: "/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

/* ----------------------------- Data ----------------------------- */

const services = [
  {
    icon: Zap,
    title: "Landing Page Development",
    desc: "High-converting, lightning-fast landing pages engineered for measurable ROI.",
    bullets: ["A/B-tested layouts", "Sub-second load times", "Edge-rendered"],
    tag: "Most popular",
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "Custom LLM agents and workflow automation that compress operational cost.",
    bullets: ["RAG pipelines", "Workflow automation", "Human-in-the-loop"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Full-funnel growth campaigns with measurable attribution across every channel.",
    bullets: ["Paid + organic", "Attribution modeling", "Creative testing"],
  },
  {
    icon: Users,
    title: "CRM Solutions",
    desc: "Custom dashboards and automated pipelines that sync sales and marketing.",
    bullets: ["HubSpot · Salesforce", "Lead routing", "Lifecycle automation"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven search strategy and technical SEO that dominates the SERP.",
    bullets: ["Technical audits", "Topic clusters", "Authority building"],
  },
  {
    icon: Lock,
    title: "Security Audits",
    desc: "Enterprise-grade security reviews to keep customer data protected and compliant.",
    bullets: ["OWASP review", "Pen-test ready", "SOC 2 prep"],
  },
] as const;

const process = [
  {
    n: "01",
    title: "Discovery",
    desc: "Audit current workflows, identify revenue leaks, and align on measurable goals.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "Architect a system: information design, conversion math, and engineering scope.",
  },
  {
    n: "03",
    title: "Development",
    desc: "Ship in weekly sprints with daily deploys, instrumentation, and QA gates.",
  },
  {
    n: "04",
    title: "Launch & Scale",
    desc: "Optimize against live data, expand growth loops, and harden for global scale.",
  },
] as const;

const projects = [
  {
    category: "Fintech SaaS",
    title: "Accelerating Pipeline Velocity for QuantFlow",
    description:
      "Re-architected acquisition funnel and shipped an AI lead-qualifier that compressed sales cycles.",
    metric: { value: "+137%", label: "Leads Generated" },
    secondary: { value: "4.2s", label: "Avg Load Speed" },
    tech: ["React", "Edge", "LLM"],
  },
  {
    category: "Logistics AI",
    title: "Automating Operations at Northwind",
    description:
      "Designed an AI agent network that automated triage, freeing 8 hours per operator each week.",
    metric: { value: "40%", label: "Faster Operations" },
    secondary: { value: "8h", label: "Saved per Week" },
    tech: ["LangGraph", "Python", "RAG"],
  },
  {
    category: "B2B SaaS · SEO",
    title: "Capturing Search Demand for Lumina",
    description:
      "Built a programmatic SEO engine and rebuilt the marketing site for a measurable organic lift.",
    metric: { value: "+280%", label: "Organic Traffic" },
    secondary: { value: "920", label: "Pages Indexed" },
    tech: ["Next.js", "Sanity", "Schema"],
  },
  {
    category: "Revenue Ops",
    title: "Unifying Sales & Marketing for Aether",
    description:
      "Replatformed the CRM with custom attribution and pipeline automations across 12 markets.",
    metric: { value: "3×", label: "Sales Pipeline" },
    secondary: { value: "12", label: "Markets Live" },
    tech: ["HubSpot", "Snowflake", "dbt"],
  },
] as const;

const stats = [
  { value: 150, suffix: "+", label: "Projects shipped" },
  { value: 95, suffix: "%", label: "Client satisfaction" },
  { value: 40, suffix: "+", label: "Active partners" },
  { value: 98, suffix: "%", label: "Performance score" },
] as const;

const testimonials = [
  {
    quote:
      "ZEVYN rebuilt our acquisition system end to end. We shipped in six weeks and saw a 137% jump in qualified leads.",
    name: "Priya Nair",
    role: "VP Growth, QuantFlow",
  },
  {
    quote:
      "The AI workflow they integrated paid for itself in the first month. Operations are genuinely faster and calmer.",
    name: "Marcus Lin",
    role: "COO, Northwind Logistics",
  },
  {
    quote:
      "Easily the most rigorous engineering team we've partnered with. The work feels like it came from a product company.",
    name: "Sara Reyes",
    role: "Head of Brand, Lumina",
  },
  {
    quote:
      "Conversion-focused thinking on every screen. Our trial-to-paid lifted 31% without changing the offer.",
    name: "Daniel Okafor",
    role: "Founder, Aether",
  },
] as const;

const why = [
  { icon: Zap, title: "Conversion-first", desc: "Every layout earns its place against a measurable goal." },
  { icon: Gauge, title: "Performance optimized", desc: "Sub-second loads. Lighthouse 95+ as a baseline." },
  { icon: Bot, title: "AI-ready architecture", desc: "Built to plug into the LLM stack you'll use next year." },
  { icon: Search, title: "SEO from day one", desc: "Schema, semantics, and content design built in." },
  { icon: Lock, title: "Enterprise security", desc: "OWASP-aligned reviews and SOC 2-ready infrastructure." },
  { icon: LineChart, title: "Measurable outcomes", desc: "Every engagement ties to a number leadership cares about." },
] as const;

const faqs = [
  {
    q: "How fast can ZEVYN ship a landing page?",
    a: "Most conversion-focused landing pages launch in 2–3 weeks from kickoff, including copy, design, build, instrumentation, and QA.",
  },
  {
    q: "What does an AI integration engagement look like?",
    a: "We scope a use case, ship a working pilot in 4–6 weeks, then harden it for production with evaluation, observability, and rollback paths.",
  },
  {
    q: "Do you handle SEO for existing sites or only new builds?",
    a: "Both. We run a full technical audit, prioritize fixes by traffic impact, and ship rewrites alongside topical content strategy.",
  },
  {
    q: "Which CRM platforms do you work with?",
    a: "HubSpot and Salesforce are our primary stacks, with custom Snowflake/dbt pipelines when reporting requirements demand it.",
  },
  {
    q: "How do you approach security and compliance?",
    a: "We follow OWASP guidance, run dependency and infrastructure scans on every release, and produce SOC 2-ready documentation as you grow.",
  },
  {
    q: "Do you offer ongoing maintenance after launch?",
    a: "Yes. Retainers cover performance monitoring, conversion experiments, content updates, and infrastructure hardening.",
  },
  {
    q: "What does pricing look like?",
    a: "Engagements typically range from focused $8–15k landing pages to enterprise programs in the six-figure range. Every quote is fixed-scope.",
  },
  {
    q: "Where is the ZEVYN team based?",
    a: "ZEVYN operates as a distributed senior team across North America, Europe, and South Asia, with overlap across all major time zones.",
  },
] as const;

const logos = ["FORGE", "QUANTUM", "NEXUS", "LUMINA", "STRATA", "AETHER", "NORTHWIND", "VERTEX"] as const;

/* ----------------------------- Page ----------------------------- */

function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Process />
        <FeaturedProjects />
        <Stats />
        <Testimonials />
        <WhyZevyn />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ----------------------------- Sections ----------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-mesh animate-mesh opacity-70" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
                <span className="relative inline-flex size-2 rounded-full bg-foreground" />
              </span>
              Engineering Intelligent Digital Experiences
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Landing Pages That Turn{" "}
              <span className="relative inline-block">
                Visitors
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-brand-sky"
                />
              </span>{" "}
              Into Customers.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              ZEVYN helps businesses grow with conversion-focused landing pages,
              AI-powered automation, SEO optimization, digital marketing, and
              scalable web solutions.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-elegant transition-transform hover:-translate-y-px"
              >
                Book a Free Strategy Call
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["Conversion Focused", "SEO Optimized", "AI Ready", "Fast Delivery"].map((f) => (
                <li key={f} className="inline-flex items-center gap-2">
                  <span className="grid size-4 place-items-center rounded-full bg-brand-sky">
                    <Check className="size-2.5 text-foreground" strokeWidth={3} />
                  </span>
                  <span className="font-medium text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <Reveal delay={200}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[36px] bg-mesh blur-3xl opacity-60"
              />
              <DashboardCard />

              <div className="absolute -left-6 top-1/3 hidden animate-float-soft rounded-2xl border border-border bg-card/90 p-4 shadow-elegant backdrop-blur md:block">
                <div className="font-display text-2xl font-bold">+280%</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Organic Traffic
                </div>
              </div>
              <div className="absolute -right-6 bottom-10 hidden animate-float-soft rounded-2xl border border-border bg-card/90 p-3 shadow-elegant backdrop-blur md:block">
                <div className="flex items-center gap-3 pr-2">
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-peach">
                    <Sparkles className="size-4 text-foreground" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">AI Agent live</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600">
                      40% faster ops
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DashboardCard() {
  return (
    <div className="relative rounded-3xl border border-border bg-card p-3 shadow-elegant">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="size-2.5 rounded-full bg-muted" />
        <span className="size-2.5 rounded-full bg-muted" />
        <span className="size-2.5 rounded-full bg-muted" />
        <span className="ml-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          zevyn.app / growth
        </span>
      </div>
      <div className="rounded-2xl bg-brand-subtle p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Conversion Rate
            </div>
            <div className="mt-1 font-display text-3xl font-bold">7.42%</div>
          </div>
          <span className="rounded-full bg-brand-sky px-3 py-1 text-xs font-semibold">
            +2.1% wk
          </span>
        </div>

        {/* sparkline */}
        <svg viewBox="0 0 320 90" className="mt-5 h-24 w-full">
          <defs>
            <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.91 0.045 235)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="oklch(0.91 0.045 235)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,70 L30,60 L60,65 L90,50 L120,55 L150,40 L180,42 L210,28 L240,30 L270,18 L300,22 L320,10 L320,90 L0,90 Z"
            fill="url(#grad)"
          />
          <path
            d="M0,70 L30,60 L60,65 L90,50 L120,55 L150,40 L180,42 L210,28 L240,30 L270,18 L300,22 L320,10"
            fill="none"
            stroke="oklch(0.18 0.025 265)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { l: "Sessions", v: "48.2k" },
            { l: "Signups", v: "3,576" },
            { l: "Revenue", v: "$184k" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border bg-card p-3">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
              <div className="mt-1 font-display text-lg font-bold">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustedBy() {
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-border bg-background/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by SaaS, startups, agencies & enterprise teams
        </p>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-16 pr-16">
            {row.map((l, i) => (
              <span
                key={`${l}-${i}`}
                className="font-display text-2xl font-semibold tracking-tight text-foreground/40"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Solutions
              </span>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
                Solutions built for growth.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-muted-foreground">
              A complete digital surface area — from the first click to the
              long-tail revenue loop — engineered as one system.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-elegant">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-sky opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                />
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-subtle text-foreground ring-1 ring-border">
                    <s.icon className="size-5" />
                  </span>
                  {"tag" in s && s.tag ? (
                    <span className="rounded-full bg-brand-peach px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground">
                      {s.tag}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-7 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-foreground">
                      <span className="size-1.5 rounded-full bg-foreground" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
                >
                  Explore solution
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative bg-brand-subtle py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Process
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              A precise path from idea to scale.
            </h2>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block"
          />
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <li className="relative">
                <div className="flex size-14 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-bold text-foreground shadow-sm">
                  {p.n}
                </div>
                <h3 className="mt-6 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Case Studies
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                Outcomes our partners measure.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              View all case studies
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{p.category}</span>
                  <span className="rounded-full bg-brand-subtle px-2.5 py-1 text-[10px] tracking-[0.16em] text-foreground ring-1 ring-border">
                    Case Study
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

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

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                  >
                    Read study
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-border bg-brand-subtle py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <div>
              <div className="font-display text-4xl font-bold md:text-5xl">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Testimonials
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Leaders trust ZEVYN with their growth.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                <div className="flex items-center gap-1 text-foreground" aria-label="Five stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} viewBox="0 0 20 20" className="size-4 fill-current" aria-hidden>
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg leading-snug text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    aria-hidden
                    className="grid size-10 place-items-center rounded-full bg-brand-sky font-display text-sm font-bold text-foreground"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyZevyn() {
  return (
    <section className="bg-brand-subtle py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Why ZEVYN
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              The engineering bar leadership expects.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <div className="flex h-full gap-4 rounded-3xl border border-border bg-background p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-sky text-foreground">
                  <w.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Questions, answered.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Can't find what you're looking for? Reach out and a human will reply within one
              business day.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold"
            >
              Talk to the team
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-border rounded-3xl border border-border bg-card">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold md:text-lg">{f.q}</span>
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full border border-border bg-background transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden px-6 transition-[grid-template-rows,opacity,padding] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-border bg-foreground p-12 text-background md:p-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-0 bg-mesh animate-mesh opacity-25"
        />
        <div className="relative z-10 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-background/70">
              Let's build
            </span>
            <h2 className="mt-3 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              Ready to grow faster?
            </h2>
            <p className="mt-5 max-w-xl text-background/70">
              Tell us where you want to be in 12 months. We'll show you how to get there — and
              ship the system that takes you.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:col-span-4 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-sky px-6 text-sm font-semibold text-foreground transition-transform hover:-translate-y-px"
            >
              Book Consultation
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-background/20 bg-background/5 px-6 text-sm font-semibold text-background backdrop-blur transition-colors hover:bg-background/10"
            >
              Get Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
