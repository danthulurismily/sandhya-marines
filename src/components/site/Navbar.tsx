import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="container-editorial flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/sandhya-logo.webp"
              alt="Sandhya Marines"
              className="h-18 w-18 object-contain transition-transform group-hover:scale-[1.03]"
            />
            <span className="flex flex-col leading-none">
              <span
                className={`font-display text-lg tracking-tight transition-colors ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Sandhya Marines
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.22em] transition-colors ${
                  scrolled ? "text-foreground/70" : "text-white/70"
                }`}
              >
                Marine Nutrition
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative text-sm tracking-wide transition-colors ${
                    scrolled
                      ? active
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                      : active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute -bottom-1 left-0 h-px w-full ${
                        scrolled ? "bg-primary" : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Partner with us
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-border/60 text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Scroll progress */}
        <div
          className="h-px origin-left gradient-ocean"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-editorial flex h-full flex-col justify-center gap-6 pt-24">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={l.to}
                    className="font-display text-5xl text-primary-foreground"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
