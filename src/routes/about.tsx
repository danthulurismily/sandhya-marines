import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, Item } from "@/components/site/motion";
import lab from "@/assets/lab.jpg";
import farmer from "@/assets/farmer.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sandhya Marines" },
      {
        name: "description",
        content:
          "Three decades of shrimp nutrition expertise. Learn how Sandhya Marines pairs scientific rigour with on-farm partnership to shape the future of aquaculture.",
      },
      { property: "og:title", content: "About Sandhya Marines" },
      {
        property: "og:description",
        content:
          "A science-driven aquaculture company shaping the future of shrimp nutrition.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title={
          <>
            Nutrition, engineered by people who <em className="text-secondary">know</em> the pond.
          </>
        }
        subtitle="Founded in 1993, Sandhya Marines has spent three decades turning marine science into feed farmers can trust. We are equal parts laboratory, factory, and field team."
      />

      <section className="container-editorial py-24">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="overflow-hidden rounded-2xl">
                <img src={lab} alt="Nutritionists at work" className="w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-secondary">Our approach</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                Scientific formulations. Scaled with discipline.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We operate one of India&rsquo;s largest integrated shrimp feed
                facilities — a 15-acre campus producing 66,000 metric tons a year.
                Every formulation is developed and tested in-house, then refined
                against real-world data from more than a thousand acres of
                partner farms.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                The result is a portfolio designed not for the average pond, but
                for the specific conditions of each life-stage, each species,
                each geography.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-primary py-32 text-primary-foreground">
        <div className="container-editorial">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.28em] text-accent">Values</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
                  Four beliefs that shape everything we make.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Stagger>
                {[
                  ["Science first", "If it cannot be measured, it does not ship. Every formulation is trialled and traced."],
                  ["Farmer partnership", "Our field agronomists spend more time in ponds than at desks."],
                  ["Sustainability", "The health of the ocean is the long-term health of this industry."],
                  ["Global standards", "Certifications are a floor, not a ceiling."],
                ].map(([t, d]) => (
                  <Item key={t} className="border-b border-primary-foreground/15 py-8">
                    <h3 className="font-display text-3xl">{t}</h3>
                    <p className="mt-3 text-primary-foreground/70">{d}</p>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial py-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <img src={farmer} alt="A farmer at his pond at sunrise" className="w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                A partnership that outlasts a stocking cycle.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We measure our success in the yields our partners take home. It
                is a relationship, not a transaction — and it&rsquo;s the reason
                growers have stayed with us across generations.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Talk to our team <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <FeatureImage src={manufacturing} alt="Manufacturing facility" />
    </SiteLayout>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="container-editorial pb-16 pt-40 md:pb-24 md:pt-48">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-secondary">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] tracking-tight text-balance">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      </Reveal>
    </section>
  );
}

export function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="container-editorial pb-32">
      <Reveal>
        <div className="overflow-hidden rounded-3xl">
          <img src={src} alt={alt} className="h-[60vh] w-full object-cover" loading="lazy" />
        </div>
      </Reveal>
    </section>
  );
}
