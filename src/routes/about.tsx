import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A Senior Product & Engineering Team | ZEVYN" },
      {
        name: "description",
        content:
          "ZEVYN is a distributed team of senior designers, engineers, and growth operators building digital systems for ambitious companies.",
      },
      { property: "og:title", content: "About ZEVYN Technologies" },
      {
        property: "og:description",
        content:
          "A senior, distributed team of designers, engineers, and growth operators.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Outcomes over output",
    desc: "We measure ourselves against revenue, not deliverables. Every engagement ties to a number.",
  },
  {
    title: "Senior by default",
    desc: "Every project is led by people who've shipped at the highest level. No silent juniors learning on your bill.",
  },
  {
    title: "Engineering rigor",
    desc: "Performance budgets, observability, and rollback paths are non-negotiable — not afterthoughts.",
  },
  {
    title: "Bias to ship",
    desc: "We move in weekly increments because compounding learning beats perfect launches.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              About ZEVYN
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              A senior team, engineered for outcomes.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              ZEVYN is a distributed group of designers, engineers, and growth operators who
              have shipped at Stripe-, Linear-, and Vercel-class product teams. We bring that
              bar to companies who need it next.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-24 max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <article className="h-full rounded-3xl border border-border bg-card p-8">
                  <h2 className="font-display text-2xl font-bold">{v.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-7xl px-6">
          <div className="grid gap-12 rounded-[36px] border border-border bg-brand-subtle p-10 md:grid-cols-3 md:p-16">
            {[
              { v: "12+", l: "Years average team experience" },
              { v: "9", l: "Countries we operate from" },
              { v: "100%", l: "Senior-led delivery" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-5xl font-bold">{s.v}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
