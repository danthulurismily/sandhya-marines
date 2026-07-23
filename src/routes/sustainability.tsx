import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, Item, motion } from "@/components/site/motion";
import { PageHero } from "./about";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import ocean from "@/assets/ocean.jpg";
import farmer from "@/assets/farmer.jpg";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Sandhya Marines" },
      {
        name: "description",
        content:
          "Responsible sourcing, water conservation, and farmer partnerships. How Sandhya Marines is building a shrimp nutrition company worthy of the ocean.",
      },
      { property: "og:title", content: "Sustainability at Sandhya Marines" },
      {
        property: "og:description",
        content:
          "A commitment to responsible sourcing, cleaner manufacturing, and healthier farming communities.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "18%"]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sustainability"
        title={
          <>
            A company worthy of the <em className="text-secondary">ocean</em>.
          </>
        }
        subtitle="Aquaculture is only as sustainable as the ingredients, energy, and people behind it. We measure our impact everywhere it lands."
      />

      <section
        ref={ref}
        className="relative overflow-hidden text-primary-foreground"
        style={{ minHeight: "80vh" }}
      >
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <img src={ocean} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </motion.div>
        <div className="container-editorial relative py-32 md:py-40">
          <Reveal>
            <h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">
              We source, manufacture, and partner as though the industry&rsquo;s
              next thirty years depend on it.
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-32">
        <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {[
            ["Responsible sourcing", "Marine ingredients drawn only from certified, traceable fisheries. No unknowns, no exceptions."],
            ["Water conservation", "Closed-loop cooling systems and rainwater harvesting across our 15-acre campus."],
            ["Eco-friendly manufacturing", "Renewable energy, low-waste extrusion, and continuous emissions monitoring."],
            ["Supporting farmers", "Field programs that improve yields while lowering the environmental footprint per kilo produced."],
          ].map(([t, d]) => (
            <Item key={t as string} className="bg-surface p-10 md:p-14">
              <h3 className="font-display text-3xl">{t}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{d}</p>
            </Item>
          ))}
        </Stagger>
      </section>

      <section className="container-editorial pb-32">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <img src={farmer} alt="A farmer at his pond" loading="lazy" className="h-[60vh] w-full object-cover" />
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
