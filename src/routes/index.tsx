import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, Stagger, Item, motion } from "@/components/site/motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useInView } from "motion/react";
import {
  ArrowUpRight,
  Leaf,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  Users,
  Microscope,
  MoveDown,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import pellets from "@/assets/feed-pellets.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import ocean from "@/assets/ocean.jpg";
import lab from "@/assets/lab.jpg";
import farmer from "@/assets/farmer.jpg";
import shrimp from "@/assets/shrimp.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandhya Marines — Nourishing the Future of Aquaculture" },
      {
        name: "description",
        content:
          "Science-driven shrimp feed and marine nutrition. Three decades of aquaculture expertise, precision manufacturing, and sustainable partnerships with farmers worldwide.",
      },
      { property: "og:title", content: "Sandhya Marines — Marine Nutrition" },
      {
        property: "og:description",
        content:
          "Science-driven shrimp nutrition for healthier growth, better feed conversion, and a more sustainable aquaculture industry.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <MarqueeBrands />
      <About />
      <Products />
      <WhyUs />
      <Manufacturing />
      <Certifications />
      <Sustainability />
      <Testimonials />
      <ContactCTA />
    </SiteLayout>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[720px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video
          src="/heropage.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster={hero}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/80" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="container-editorial relative flex h-full flex-col justify-end pb-24 text-primary-foreground"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block self-start rounded-full bg-accent px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-primary"
        >
          Sandhya Marines · Since 1993
        </motion.p>

        <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,7vw,7rem)] font-medium leading-[1.02] tracking-tight text-balance">
          {"Nourishing the future".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mr-4 inline-block"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block italic text-accent"
          >
            of aquaculture.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg"
        >
          Precision-formulated shrimp nutrition that helps farmers achieve
          healthier growth, superior feed conversion, and lasting sustainable
          success — from hatchery to harvest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
          >
            Explore products
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            About us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-primary-foreground/60"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <MoveDown className="size-4" />
          </motion.span>
          Scroll to discover
        </motion.div>
      </motion.div>
    </section>
  );
}

function MarqueeBrands() {
  const items = [
    "ISO 22000",
    "HACCP Certified",
    "ASC Approved",
    "BAP Standard",
    "EIC Registered",
    "GMP+",
    "FSSAI",
    "ISO 9001",
  ];
  return (
    <section className="border-y border-border/60 bg-surface py-8 overflow-hidden">
      <div className="flex gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((label, i) => (
          <span
            key={i}
            className="font-display text-2xl tracking-tight text-muted-foreground/60"
          >
            {label} <span className="text-accent">·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="container-editorial py-32 md:py-48">
      <div className="grid gap-16 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-secondary">
              Our story
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Three decades at the intersection of{" "}
              <span className="italic text-secondary">science</span> and the sea.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-foreground/80">
              Sandhya Marines was founded on a simple conviction: healthier
              shrimp begin with better nutrition, and better nutrition begins
              with disciplined science. From our 15-acre manufacturing campus,
              we produce precision-engineered feed for hatcheries, nurseries,
              and grow-out farms across the world.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Every formulation is developed with our own R&amp;D team, refined
              through years of on-farm partnership, and manufactured to
              international quality standards. It is craft with the rigour of a
              laboratory.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-medium text-primary transition-colors hover:text-secondary hover:border-secondary"
            >
              Read our full story <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      <Stagger className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
        {[
          { n: 30, suffix: "+", label: "Years of expertise" },
          { n: 66000, suffix: " MT", label: "Annual capacity" },
          { n: 1000, suffix: "+ acres", label: "Farming experience" },
          { n: 15, suffix: " acres", label: "Manufacturing campus" },
        ].map((s) => (
          <Item key={s.label} className="bg-surface p-8 md:p-10">
            <div className="font-display text-5xl tracking-tight text-primary md:text-6xl">
              <Counter to={s.n} />
              <span className="text-3xl text-secondary md:text-4xl">{s.suffix}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}</span>;
}

/* ---------- PRODUCTS ---------- */
const products = [
  {
    id: "vannamei",
    name: "Vannamei Feed",
    tagline: "For Pacific white shrimp",
    desc: "High-density nutrition engineered for L. vannamei — accelerating growth while preserving pond health.",
    img: pellets,
  },
  {
    id: "monodon",
    name: "Monodon Feed",
    tagline: "For Black Tiger shrimp",
    desc: "Formulated for P. monodon to deliver superior size uniformity and resilience across grow-out cycles.",
    img: shrimp,
  },
  {
    id: "starter",
    name: "Starter Feed",
    tagline: "Early-stage nutrition",
    desc: "Micro-pellets rich in immunity boosters for post-larvae and early juvenile stages.",
    img: lab,
  },
  {
    id: "grower",
    name: "Grower Feed",
    tagline: "Mid-cycle performance",
    desc: "Balanced protein and lipid profile to sustain rapid growth through the intermediate stage.",
    img: manufacturing,
  },
  {
    id: "finisher",
    name: "Finisher Feed",
    tagline: "Pre-harvest conditioning",
    desc: "Peak-density formulation for maximum weight gain and premium harvest quality.",
    img: farmer,
  },
];

function Products() {
  return (
    <section className="bg-primary py-32 text-primary-foreground md:py-48">
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">
                Product range
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
                Nutrition, formulated <span className="italic text-accent">life-stage</span> by life-stage.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-primary-foreground/75">
                A complete portfolio for every phase of the shrimp lifecycle,
                built on our proprietary research and manufactured with
                pharmaceutical-grade precision.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Item key={p.name}>
              <ProductCard product={p} />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <Link
      to="/products"
      hash={product.id}
      id={product.id}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-primary-foreground/[0.04] ring-1 ring-primary-foreground/10 transition-all hover:ring-accent/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">
          {product.tagline}
        </p>
        <h3 className="mt-3 font-display text-3xl tracking-tight">{product.name}</h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-primary-foreground/70">
          {product.desc}
        </p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm text-accent transition-transform group-hover:translate-x-1">
          Learn more <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { icon: Sparkles, title: "Innovation", desc: "R&D-led formulations that evolve with the science." },
    { icon: ShieldCheck, title: "Quality", desc: "Every batch verified against international standards." },
    { icon: FlaskConical, title: "Research", desc: "In-house labs, field trials, and biologists on staff." },
    { icon: Leaf, title: "Sustainability", desc: "Responsibly sourced marine ingredients, always." },
    { icon: Users, title: "Farmer support", desc: "Agronomists on call from stocking through harvest." },
    { icon: Microscope, title: "Laboratory testing", desc: "Micro-nutrient, pathogen, and stability screening." },
  ];
  return (
    <section className="container-editorial py-32 md:py-48">
      <div className="max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-secondary">
            Why choose us
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            A partnership built on <span className="italic text-secondary">rigour</span>.
          </h2>
        </Reveal>
      </div>

      <Stagger className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <Item
            key={title}
            className="group relative bg-surface p-10 transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Icon className="size-8 text-secondary transition-colors group-hover:text-accent" />
            <h3 className="mt-8 font-display text-2xl tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70">
              {desc}
            </p>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}

/* ---------- MANUFACTURING TIMELINE ---------- */
function Manufacturing() {
  const steps = [
    { id: "raw-material-selection", n: "01", title: "Raw material selection", desc: "Marine proteins, cereals, and micro-ingredients vetted against strict source criteria." },
    { id: "research", n: "02", title: "Research", desc: "Formulations engineered by our nutritionists and validated in trial ponds." },
    { id: "production", n: "03", title: "Production", desc: "Continuous extrusion at our 66,000 MT facility with real-time process control." },
    { id: "quality-testing", n: "04", title: "Quality testing", desc: "Nutritional, microbial, and stability testing on every production batch." },
    { id: "packaging", n: "05", title: "Packaging", desc: "Moisture-barrier packaging engineered for tropical storage conditions." },
    { id: "distribution", n: "06", title: "Distribution", desc: "A cold-chain-ready logistics network serving farms across three continents." },
  ];
  return (
    <section className="relative overflow-hidden bg-background py-32 md:py-48">
      <div className="container-editorial">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-secondary">
              Manufacturing
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
                From raw ingredient to <span className="italic text-secondary">finished feed</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                A six-stage process, engineered end-to-end at our 15-acre
                campus. Every step is measured; every batch is traceable.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 overflow-hidden rounded-2xl">
                <img
                  src={manufacturing}
                  alt="Sandhya Marines manufacturing facility"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <ol className="md:col-span-6 md:col-start-7">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <li className="border-b border-border first:pt-0">
                  <Link
                    to="/manufacturing"
                    hash={s.id}
                    id={s.id}
                    className="group flex items-baseline gap-6 py-10"
                  >
                    <span className="font-display text-2xl text-secondary">{s.n}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-3xl tracking-tight text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-muted-foreground/40 transition-all group-hover:text-secondary group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATIONS ---------- */
function Certifications() {
  const certs = ["ISO 22000", "HACCP", "ASC", "BAP", "EIC", "GMP+"];
  return (
    <section className="container-editorial py-24">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Certified & audited by
        </p>
      </Reveal>
      <Stagger className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
        {certs.map((c) => (
          <Item
            key={c}
            className="grid h-32 place-items-center bg-surface font-display text-3xl tracking-tight text-primary/80"
          >
            {c}
          </Item>
        ))}
      </Stagger>
    </section>
  );
}

/* ---------- SUSTAINABILITY ---------- */
function Sustainability() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden text-primary-foreground"
      style={{ minHeight: "90vh" }}
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img src={ocean} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </motion.div>

      <div className="container-editorial relative py-40 md:py-56">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">
            Sustainability
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            The ocean gave us <em className="text-accent">everything</em>. We&rsquo;re building a company worthy of it.
          </h2>
        </Reveal>

        <Stagger className="mt-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Responsible sourcing", d: "Marine ingredients from certified, traceable fisheries only." },
            { t: "Water conservation", d: "Closed-loop cooling and rainwater harvesting across the campus." },
            { t: "Eco-manufacturing", d: "Renewable energy and low-waste extrusion at every stage." },
            { t: "Supporting farmers", d: "Training programs that improve yields while lowering environmental impact." },
          ].map((f) => (
            <Item key={f.t}>
              <h3 className="font-display text-2xl">{f.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{f.d}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  {
    quote:
      "Switching to Sandhya's grower feed changed the economics of my farm. FCR dropped, harvest size held up, and the team was there for every stocking cycle.",
    name: "Rajesh K.",
    role: "Farm owner · Andhra Pradesh",
  },
  {
    quote:
      "The consistency batch after batch is what sets them apart. In fifteen years of hatchery work, I have not seen this level of quality control at scale.",
    name: "Dr. Priya Menon",
    role: "Hatchery Director",
  },
  {
    quote:
      "They treat our farm like a partner, not an account. Their nutritionists visit, they run trials, they adapt formulations. That is rare.",
    name: "Nguyen T.",
    role: "Vannamei grower · Vietnam",
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="container-editorial py-32 md:py-48">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-secondary">
          Voices from the field
        </p>
      </Reveal>

      <div className="mt-12 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="relative min-h-[280px]">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={false}
                animate={{
                  opacity: idx === i ? 1 : 0,
                  y: idx === i ? 0 : 20,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
                style={{ pointerEvents: idx === i ? "auto" : "none" }}
              >
                <p className="font-display text-3xl leading-[1.2] tracking-tight text-foreground md:text-5xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-10 text-sm">
                  <span className="font-medium text-primary">{t.name}</span>
                  <span className="mx-2 text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{t.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-10">
          <div className="flex md:flex-col gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="group flex items-center gap-3"
              >
                <span className="relative h-px w-16 overflow-hidden bg-border">
                  <motion.span
                    initial={false}
                    animate={{ scaleX: idx === i ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                    className="absolute inset-0 bg-primary"
                  />
                </span>
                <span
                  className={`text-xs tracking-widest ${
                    idx === i ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT CTA ---------- */
function ContactCTA() {
  return (
    <section className="container-editorial pb-32">
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid gap-12 p-10 md:grid-cols-2 md:p-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">
              Get in touch
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Let&rsquo;s grow <em className="text-accent">together</em>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/75">
              Whether you run a hatchery, a nursery, or a thousand-acre farm —
              our team will build a nutrition program that fits.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between rounded-2xl bg-primary-foreground/[0.06] px-6 py-5 ring-1 ring-primary-foreground/10 transition-all hover:bg-accent hover:text-primary hover:ring-transparent"
              >
                <span className="font-display text-2xl">Contact our team</span>
                <ArrowUpRight className="size-5" />
              </Link>
              <a
                href="mailto:sales@sandhyafeed.com"
                className="group inline-flex items-center justify-between rounded-2xl bg-primary-foreground/[0.06] px-6 py-5 ring-1 ring-primary-foreground/10 transition-all hover:bg-accent hover:text-primary hover:ring-transparent"
              >
                <span className="font-display text-2xl">sales@sandhyafeed.com</span>
                <ArrowUpRight className="size-5" />
              </a>
              <Link
                to="/products"
                className="group inline-flex items-center justify-between rounded-2xl bg-primary-foreground/[0.06] px-6 py-5 ring-1 ring-primary-foreground/10 transition-all hover:bg-accent hover:text-primary hover:ring-transparent"
              >
                <span className="font-display text-2xl">Browse the product range</span>
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
