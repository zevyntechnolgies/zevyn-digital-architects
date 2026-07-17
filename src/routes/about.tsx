import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Building Digital Solutions That Create Real Business Impact | ZEVYN" },
      {
        name: "description",
        content:
          "ZEVYN is a distributed team of senior designers, engineers, and growth operators building digital systems that create measurable business outcomes.",
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
    title: "Client-Centric Approach",
    desc: "We put your business goals first, creating tailored digital solutions that deliver measurable value and long-term success.",
  },
  {
    title: "Innovation & Technology",
    desc: "By leveraging modern technologies, AI, and industry best practices, we build scalable, future-ready digital experiences.",
  },
  {
    title: "Quality & Performance",
    desc: "Every website and application is optimized for speed, security, accessibility, and exceptional user experience from day one.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We believe in lasting relationships, providing continuous support, maintenance, and strategic guidance as your business grows.",
  },
];



function AboutPage() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              About ZEVYN
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Building Digital Solutions That Create Real Business Impact
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              ZEVYN Technologies is a modern digital solutions agency dedicated to helping businesses grow through innovative technology, intelligent automation, and exceptional digital experiences. We combine creativity, strategy, and engineering to build products that deliver measurable results.
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
             { v: "100%", l: "Custom Solutions" },
{ v: "24/7", l: "Technical Support" },
{ v: "AI", l: "Powered Solutions" },
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
