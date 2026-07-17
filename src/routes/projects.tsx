import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Portfolio — Digital Solutions That Drive Growth | ZEVYN Technologies" },
      {
        name: "description",
        content:
          "Selected ZEVYN case studies across fintech, SaaS, logistics, and revenue ops — with the metrics that matter to leadership.",
      },
      { property: "og:title", content: "ZEVYN Our Portfolio" },
      { property: "og:description", content: "Selected work and the outcomes it produced." },
      { property: "og:url", content: "/our-portfolio" },
    ],
    links: [{ rel: "canonical", href: "/our-portfolio" }],
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
    title: "SaaS Product Landing Page",
    problem: "Low visitor engagement and poor lead conversion from an outdated landing page.",
    solution: "Designed and developed a modern, conversion-focused landing page with optimized user journeys, compelling CTAs, and high-performance architecture.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    metric: { value: "+180%", label: "Lead Conversion" },
    secondary: { value: "0.8s", label: "Load Time" },
  },
  {
    category: "AI",
    title: "AI Customer Support Assistant",
    problem: "Businesses struggled with delayed customer responses and repetitive support requests.",
    solution: "Developed an AI-powered virtual assistant capable of handling FAQs, lead qualification, and customer support 24/7.",
    tech: ["OpenAI", "Node.js", "LangChain"],
    metric: { value: "70%", label: "Support Automated" },
    secondary: { value: "24/7", label: "Availability" },
  },
  {
    category: "SEO",
    title: "Business Website SEO Optimization",
    problem: "The website had low search visibility and minimal organic traffic.",
    solution: "Implemented technical SEO, performance improvements, schema markup, and content optimization to improve rankings.",
    tech: ["Next.js", "Google Analytics", "Schema.org"],
    metric: { value: "+300%", label: "Organic Traffic" },
    secondary: { value: "Top 5", label: "Keyword Rankings" },
  },
  {
    category: "CRM",
    title: "Custom CRM Dashboard",
    problem: "Sales teams relied on spreadsheets, causing inefficient lead tracking and follow-ups.",
    solution: "Built a centralized CRM platform with lead management, sales automation, customer analytics, and reporting dashboards.",
    tech: ["React", "Node.js", "MongoDB"],
    metric: { value: "60%", label: "Productivity Increase" },
    secondary: { value: "100%", label: "Lead Tracking" },
  },
  {
    category: "Security",
    title: "Enterprise Security Assessment",
    problem: "The organization required a complete security review before deploying its web platform.",
    solution: "Performed vulnerability assessments, security testing, and implemented industry best practices to strengthen application security.",
    tech: ["OWASP", "Burp Suite", "Nmap"],
    metric: { value: "0", label: "Critical Vulnerabilities" },
    secondary: { value: "99.9%", label: "System Security" },
  },
  {
    category: "Digital Marketing",
    title: "Performance Marketing Campaign",
    problem: "The business struggled to generate consistent online leads through digital channels.",
    solution: "Executed SEO, Google Ads, Meta Ads, and social media campaigns backed by analytics and conversion tracking.",
    tech: ["Google Ads", "Meta Ads", "Google Analytics"],
    metric: { value: "+250%", label: "Qualified Leads" },
    secondary: { value: "4.8x", label: "ROAS" },
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
    <div className="min-h-dvh">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Our Portfolio
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
             Building Digital Solutions That Drive Business Growth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Explore a selection of our expertise across landing pages, AI integration, digital marketing, CRM solutions, SEO optimization, security, and custom web development—crafted to help businesses grow, scale, and succeed.
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
