import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/motion";
import { PageHero, FeatureImage } from "./about";
import manufacturing from "@/assets/manufacturing.jpg";
import lab from "@/assets/lab.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing — Sandhya Marines" },
      {
        name: "description",
        content:
          "Inside our 15-acre feed manufacturing campus: precision extrusion, in-line quality control, and end-to-end traceability at scale.",
      },
      { property: "og:title", content: "Manufacturing at Sandhya Marines" },
      {
        property: "og:description",
        content:
          "A 66,000 MT feed facility engineered for precision, sustainability, and scale.",
      },
    ],
  }),
  component: Page,
});

const steps = [
  { id: "raw-material-selection", n: "01", t: "Raw material selection", d: "Marine proteins, cereals, and micro-ingredients sourced under strict qualification protocols and verified on arrival." },
  { id: "research", n: "02", t: "Research & formulation", d: "Nutritionists translate species biology into precise recipes, validated in trial ponds before production." },
  { id: "production", n: "03", t: "Precision production", d: "Continuous extrusion at our 66,000 MT facility with real-time particle and moisture control." },
  { id: "quality-testing", n: "04", t: "Quality testing", d: "Every batch tested for nutrition, microbial load, and pellet stability — nothing ships without a passport." },
  { id: "packaging", n: "05", t: "Packaging", d: "Moisture-barrier packaging engineered for tropical storage and long-distance logistics." },
  { id: "distribution", n: "06", t: "Global distribution", d: "A cold-chain-ready network delivering across South Asia, South-East Asia, and the Middle East." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Manufacturing"
        title={
          <>
            Fifteen acres. Six stages. <em className="text-secondary">Zero shortcuts.</em>
          </>
        }
        subtitle="Our campus is engineered end-to-end for consistency at scale — because the difference between good feed and great feed is in every micro-nutrient."
      />

      <FeatureImage src={manufacturing} alt="Sandhya Marines manufacturing facility" />

      <section className="container-editorial pb-32">
        <ol className="mx-auto max-w-4xl">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <li id={s.id} className="grid scroll-mt-28 gap-6 border-t border-border py-12 md:grid-cols-[8rem_1fr]">
                <span className="font-display text-3xl text-secondary">{s.n}</span>
                <div>
                  <h3 className="font-display text-4xl leading-tight">{s.t}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <FeatureImage src={lab} alt="Nutrition laboratory" />
    </SiteLayout>
  );
}
