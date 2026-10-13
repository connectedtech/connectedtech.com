"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
  { label: "Why custom", href: "#why-custom" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
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

  const headerBg =
    scrolled || mobileOpen
      ? "bg-white/95 backdrop-blur border-b border-border"
      : "bg-transparent border-b border-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${headerBg}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" aria-label="Connected Technologies — home">
            <Logo />
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
            <a
              href="#contact"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a conversation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-white pt-[73px] md:hidden">
          <nav className="flex flex-col px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-border py-4 text-lg font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 pt-8">
            <a
              href="#contact"
              className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-4 text-base font-medium text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Start a conversation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
