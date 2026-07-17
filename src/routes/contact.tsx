import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { submitContact } from "@/lib/contact.functions";

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitContact({
        data: {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          company: formData.get("company") as string,
          // website: formData.get("website") as string,
          projectType: formData.get("projectType") as string,
          message: formData.get("message") as string,
        },
      });

      form.reset();
      setSent(true);

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);

    }
  }
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Contact
              </span>
              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
                Let's Design your next growth chapter.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Tell us about your project. We reply within one business day with a clear next step
                — either a strategy call or a written proposal.
              </p>

              <ul className="mt-10 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-sky text-foreground">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <div className="font-semibold">Team@zevyn.tech</div>
                    <div className="text-muted-foreground">For new projects & partnerships</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-peach text-foreground">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">We operate in Coimbatore</div>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <form
                onSubmit={handleSubmit}
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
                    <div className="md:col-span-2">
                      <Field label="Company" name="company" />
                    </div>
                    {/* <Field label="Website" name="website" /> */}
                    <div className="md:col-span-2">
                      <label className="block">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Project Type
                        </span>

                        <select
                          name="projectType"
                          required
                          defaultValue=""
                          className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring/40"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option value="Landing Page Development">Landing Page Development</option>
                          <option value="AI Integration">AI Integration</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="CRM Solutions">CRM Solutions</option>
                          <option value="SEO Optimization">SEO Optimization</option>
                          <option value="Security Audit">Security Audit</option>
                          <option value="Custom Web Development">Custom Web Development</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
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
                      {error && (
                        <div className="md:col-span-2 rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-600">
                          {error}
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={loading}

                        className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-elegant transition-transform hover:-translate-y-px disabled:cursor-not-allowed"
                      >
                        {loading ? "Sending..." : "Send Message"}
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
