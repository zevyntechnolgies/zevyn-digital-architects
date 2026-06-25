import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Strategy Call | ZEVYN Technologies" },
      {
        name: "description",
        content:
          "Tell ZEVYN about your project. We respond within one business day and scope a fixed-price engagement.",
      },
      { property: "og:title", content: "Contact ZEVYN" },
      {
        property: "og:description",
        content: "Book a strategy call. Fixed-scope engagements. One-business-day replies.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Contact
              </span>
              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
                Let's engineer your next growth chapter.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Tell us about your project. We reply within one business day with a clear next
                step — either a strategy call or a written proposal.
              </p>

              <ul className="mt-10 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-sky text-foreground">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <div className="font-semibold">hello@zevyn.tech</div>
                    <div className="text-muted-foreground">For new projects & partnerships</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-peach text-foreground">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <div className="font-semibold">Distributed worldwide</div>
                    <div className="text-muted-foreground">Hubs across NA, EU, and South Asia</div>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10"
              >
                {sent ? (
                  <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <span className="grid size-12 place-items-center rounded-full bg-brand-sky">
                      <Check className="size-5 text-foreground" />
                    </span>
                    <h2 className="font-display text-2xl font-bold">Thanks — we got it.</h2>
                    <p className="max-w-md text-muted-foreground">
                      A member of our team will reply within one business day with next steps.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Work email" name="email" type="email" required />
                    <Field label="Company" name="company" />
                    <Field label="Website" name="website" />
                    <div className="md:col-span-2">
                      <Field label="Project type" name="type" placeholder="Landing page, AI, SEO, CRM…" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Tell us about your project
                        </span>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring/40"
                        />
                      </label>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between gap-4">
                      <p className="text-xs text-muted-foreground">
                        By submitting, you agree to be contacted about your project.
                      </p>
                      <button
                        type="submit"
                        className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-elegant transition-transform hover:-translate-y-px"
                      >
                        Send message
                        <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring/40"
      />
    </label>
  );
}
