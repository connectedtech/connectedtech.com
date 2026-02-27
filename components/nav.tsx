"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#how-we-help" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerBg = mobileOpen
    ? "bg-brand-dark border-b border-white/10"
    : scrolled
    ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                mobileOpen ? "text-white" : "text-foreground"
              }`}
            >
              Connected
              <span
                className={`transition-colors duration-300 ${
                  mobileOpen ? "text-brand-ai" : "text-primary"
                }`}
              >
                Tech
              </span>
            </span>
          </a>

          {/* Desktop links + CTA */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

            {/* Gradient glow CTA */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-brand-ai px-5 py-2 text-sm font-semibold text-white shadow-[0_2px_20px_oklch(0.55_0.22_260_/_0.35)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_4px_32px_oklch(0.55_0.22_260_/_0.55)] active:scale-[0.97]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile hamburger / close */}
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <X className="h-5 w-5 text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <Menu className="h-5 w-5 text-foreground" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-brand-dark md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* Spacer that matches the fixed header height */}
            <div className="h-[68px] flex-none border-b border-white/10" />

            {/* Nav links — centered vertically */}
            <nav className="flex flex-1 flex-col justify-center px-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between border-b border-white/10 py-5 text-2xl font-semibold text-white/70 transition-colors duration-150 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.06 + i * 0.07,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="-translate-x-2 h-5 w-5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </nav>

            {/* CTA — pinned to bottom */}
            <motion.div
              className="px-8 pb-14 pt-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.35, ease: "easeOut" }}
            >
              <a
                href="#contact"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-brand-ai px-6 py-5 text-lg font-bold text-white shadow-[0_8px_40px_oklch(0.55_0.22_260_/_0.5)] transition-all duration-300 active:scale-[0.97]"
                onClick={() => setMobileOpen(false)}
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
