import { Link } from "@tanstack/react-router";
import { Reveal } from "./motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-40 top-0 h-[40rem] w-[40rem] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[40rem] w-[40rem] rounded-full bg-secondary/40 blur-3xl" />
      </div>

      <div className="container-editorial relative pt-24 pb-10">
        <Reveal>
          <p className="max-w-4xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Let&rsquo;s grow the future of aquaculture — together.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
            >
              Start a conversation →
            </Link>
            <a
              href="mailto:sales@sandhyafeed.com"
              className="text-sm text-primary-foreground/70 underline-offset-4 hover:underline"
            >
              sales@sandhyafeed.com
            </a>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-10 border-t border-primary-foreground/15 pt-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/sandhya-logo.webp"
                alt="Sandhya Marines"
                className="h-17 w-17 object-contain "
              />
              <span className="font-display text-xl">Sandhya Marines</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Science-driven shrimp nutrition, engineered with three decades of
              aquaculture expertise and a lasting commitment to healthier oceans.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary-foreground/50">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["About", "/about"],
                ["Products", "/products"],
                ["Manufacturing", "/manufacturing"],
                ["Sustainability", "/sustainability"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary-foreground/50">
              Reach us
            </p>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>Andhra Pradesh, India</li>
              <li>+91 89127 84599</li>
              <li>sales@sandhyafeed.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Sandhya Marines. All rights reserved.</p>
          <p>Nourishing aquaculture · Est. 1993</p>
        </div>
      </div>
    </footer>
  );
}
