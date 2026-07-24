import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/motion";
import { PageHero } from "./about";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sandhya Marines" },
      {
        name: "description",
        content:
          "Talk to the Sandhya Marines team. We work with hatcheries, nurseries, and farms across the world.",
      },
      { property: "og:title", content: "Contact Sandhya Marines" },
      {
        property: "og:description",
        content: "Let's grow the future of aquaculture together.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s grow <em className="text-secondary">together</em>.
          </>
        }
        subtitle="Tell us about your operation. Our nutrition team will get back within one business day."
      />

      <section className="container-editorial pb-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 space-y-10">
            {[
              {
                icon: MapPin,
                t: "Corporate / Branch Office",
                d: "Pandurangapuram\nPlot No. 62 & 67, Pandurangapuram,\nVisakhapatnam, Andhra Pradesh 530003",
              },
              { icon: Mail, t: "Email", d: "sales@sandhyafeed.com" },
              { icon: Phone, t: "Phone", d: "+91 89127 84599\nMon–Sat · 9:00 – 18:00 IST" },
            ].map(({ icon: Icon, t, d }) => (
              <Reveal key={t}>
                <div className="flex gap-5">
                  <Icon className="mt-1 size-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-display text-2xl">{t}</p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                      {d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6 rounded-3xl border border-border bg-surface p-8 md:p-12"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Email" name="email" type="email" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Company / farm" name="company" />
                  <Field label="Country" name="country" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Tell us about your operation
                  </label>
                  <textarea
                    rows={5}
                    className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent py-2 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-0"
                    placeholder="Species, pond count, current stocking cycle…"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {sent ? "Thank you — we'll be in touch" : "Send message"} →
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-32">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Sandhya Marines location"
              src="https://www.google.com/maps?q=17.716531,83.322307&output=embed"
              className="h-[420px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Latitude: 17.716531&deg; N &nbsp;·&nbsp; Longitude: 83.322307&deg; E
          </p>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-3 w-full border-0 border-b border-border bg-transparent py-2 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-0"
      />
    </div>
  );
}
