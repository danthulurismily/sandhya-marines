import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, Item } from "@/components/site/motion";
import { PageHero } from "./about";
import { ArrowUpRight } from "lucide-react";
import pellets from "@/assets/feed-pellets.jpg";
import shrimp from "@/assets/shrimp.jpg";
import lab from "@/assets/lab.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import farmer from "@/assets/farmer.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Sandhya Marines" },
      {
        name: "description",
        content:
          "Precision-formulated shrimp feed for every life stage: Vannamei, Monodon, Starter, Grower, and Finisher.",
      },
      { property: "og:title", content: "Sandhya Marines — Product Range" },
      {
        property: "og:description",
        content:
          "A complete portfolio of shrimp feed engineered life-stage by life-stage.",
      },
    ],
  }),
  component: ProductsPage,
});

const catalog = [
  {
    name: "Vannamei Feed",
    tag: "L. vannamei · All stages",
    desc: "High-density nutrition engineered for the Pacific white shrimp — accelerating growth while preserving pond health across the cycle.",
    img: pellets,
    facts: ["38–42% crude protein", "Extruded floating & sinking", "Immunity-forward formulation"],
  },
  {
    name: "Monodon Feed",
    tag: "P. monodon · Grow-out",
    desc: "Formulated for the Black Tiger to deliver superior size uniformity, colour, and resilience across the grow-out phase.",
    img: shrimp,
    facts: ["High marine protein", "Astaxanthin-enhanced", "Superior FCR"],
  },
  {
    name: "Starter Feed",
    tag: "Post-larvae · Nursery",
    desc: "Micro-pellets rich in immunity boosters, digestive enzymes, and essential lipids for post-larvae and early juvenile stages.",
    img: lab,
    facts: ["Crumble & micro-pellet", "Pre-biotic enriched", "Water-stable"],
  },
  {
    name: "Grower Feed",
    tag: "Mid-cycle",
    desc: "A balanced protein-to-lipid profile to sustain rapid growth through the intermediate stage without compromising water quality.",
    img: manufacturing,
    facts: ["Optimised energy density", "Reduced ammonia excretion", "Batch-verified"],
  },
  {
    name: "Finisher Feed",
    tag: "Pre-harvest",
    desc: "Peak-density formulation for maximum weight gain, muscle quality, and premium harvest condition.",
    img: farmer,
    facts: ["Maximum growth", "Improved colour & texture", "Traceable batches"],
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Products"
        title={
          <>
            A range as considered as the <em className="text-secondary">species</em> it feeds.
          </>
        }
        subtitle="Five formulations, engineered around the biology of the shrimp — and validated in real ponds by real farmers."
      />

      <section className="container-editorial pb-32">
        <div className="space-y-24">
          {catalog.map((p, i) => (
            <Reveal key={p.name}>
              <article
                className={`grid gap-10 md:grid-cols-12 md:items-center ${
                  i % 2 === 1 ? "md:[&>div:first-child]:col-start-7" : ""
                }`}
              >
                <div className="md:col-span-6 overflow-hidden rounded-2xl">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
                <div className="md:col-span-5 md:col-start-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-secondary">
                    {p.tag}
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                    {p.name}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {p.facts.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-foreground/70"
                      >
                        <span className="h-px w-6 bg-secondary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm text-primary transition-colors hover:text-secondary hover:border-secondary"
                  >
                    Request a spec sheet <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-editorial grid gap-8 md:grid-cols-3">
          {[
            ["66,000 MT", "Annual production capacity"],
            ["100%", "Traceable batches"],
            ["24/7", "Farmer support"],
          ].map(([n, d]) => (
            <Stagger key={String(d)}>
              <Item>
                <p className="font-display text-6xl tracking-tight text-accent">{n}</p>
                <p className="mt-3 text-sm uppercase tracking-widest text-primary-foreground/70">
                  {String(d)}
                </p>
              </Item>
            </Stagger>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
