"use client";

import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    label: "Lead Gen & Sales",
    color: "oklch(0.70 0.14 190)",
    glow: {
      bg: "oklch(0.70 0.14 190 / 0.08)",
      border: "oklch(0.70 0.14 190 / 0.30)",
      shadow: "0 8px 28px oklch(0.70 0.14 190 / 0.25)",
    },
    items: [
      "Auto-qualify leads from your contact form",
      "Score inbound leads before sales touches them",
      "Personalize outreach at scale",
      "Trigger follow-up sequences from CRM activity",
      "Identify high-intent website visitors",
      "Draft proposals from a simple intake form",
    ],
  },
  {
    label: "Content & Marketing",
    color: "oklch(0.75 0.22 140)",
    glow: {
      bg: "oklch(0.75 0.22 140 / 0.08)",
      border: "oklch(0.75 0.22 140 / 0.30)",
      shadow: "0 8px 28px oklch(0.75 0.22 140 / 0.25)",
    },
    items: [
      "Write a month of social posts in an hour",
      "Repurpose one blog post into 10 assets",
      "Draft landing page copy in minutes",
      "Create ad variations and test them faster",
      "Generate email campaigns from a brief",
      "Produce weekly newsletters automatically",
    ],
  },
  {
    label: "Operations & Automation",
    color: "oklch(0.68 0.18 220)",
    glow: {
      bg: "oklch(0.68 0.18 220 / 0.08)",
      border: "oklch(0.68 0.18 220 / 0.30)",
      shadow: "0 8px 28px oklch(0.68 0.18 220 / 0.25)",
    },
    items: [
      "Summarize sales calls into action items",
      "Auto-tag and route support tickets",
      "Automate your monthly reporting workflows",
      "Turn your SOPs into an always-on knowledge base",
      "Build a 24/7 FAQ bot for your website",
      "Respond to reviews and inquiries around the clock",
    ],
  },
  {
    label: "SEO & Visibility",
    color: "oklch(0.72 0.18 300)",
    glow: {
      bg: "oklch(0.72 0.18 300 / 0.08)",
      border: "oklch(0.72 0.18 300 / 0.30)",
      shadow: "0 8px 28px oklch(0.72 0.18 300 / 0.25)",
    },
    items: [
      "Monitor competitors and surface insights weekly",
      "Identify content gaps vs. top-ranking pages",
      "Generate optimized meta and schema at scale",
      "Track keyword trends and flag opportunities",
      "Refresh underperforming pages automatically",
      "Build topical authority faster with AI-assisted content",
    ],
  },
];

/* ─── Category card ───────────────────────────────────────────── */

function CategoryCard({
  cat,
  isMobileActive,
}: {
  cat: (typeof categories)[number];
  isMobileActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = isHovered || isMobileActive;

  return (
    <div
      className="rounded-2xl border p-6 transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `translateY(${isActive ? -4 : 0}px)`,
        borderColor: isActive ? cat.glow.border : "rgba(255,255,255,0.14)",
        backgroundColor: isActive ? cat.glow.bg : "transparent",
        boxShadow: isActive
          ? cat.glow.shadow
          : "0 0px 0px transparent",
      }}
    >
      {/* Category header */}
      <div className="mb-5 flex items-center gap-2.5">
        <span
          className="h-2.5 w-2.5 flex-none rounded-full"
          style={{ backgroundColor: cat.color }}
        />
        <span
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: cat.color }}
        >
          {cat.label}
        </span>
      </div>

      {/* Items */}
      <FadeInStagger className="mt-1 flex flex-col">
        {cat.items.map((item) => (
          <FadeInStaggerItem key={item}>
            <div className="flex items-start gap-3 py-2">
              <span
                className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full transition-opacity duration-300"
                style={{
                  backgroundColor: cat.color,
                  opacity: isActive ? 1 : 0.55,
                }}
              />
              <span
                className="text-sm leading-relaxed transition-colors duration-300"
                style={{
                  color: isActive
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.65)",
                }}
              >
                {item}
              </span>
            </div>
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>
    </div>
  );
}

/* ─── Main section ────────────────────────────────────────────── */

export function AiTicker() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(
    null,
  );
  const isMobileRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    isMobileRef.current = mq.matches;

    const handleMediaChange = (e: MediaQueryListEvent) => {
      isMobileRef.current = e.matches;
      if (!e.matches) setMobileActiveIndex(null);
    };
    mq.addEventListener("change", handleMediaChange);

    const handleScroll = () => {
      if (!isMobileRef.current) return;

      const center = window.innerHeight / 2;
      let idx: number | null = null;
      let best = Infinity;

      cardRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const r = ref.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;

        const d = Math.abs(r.top + r.height / 2 - center);
        if (d < best) {
          best = d;
          idx = i;
        }
      });

      // Only highlight when a card is near viewport centre
      if (best > window.innerHeight * 0.45) idx = null;
      setMobileActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <section id="ai-in-action" className="bg-brand-dark px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-ai">
            AI in the wild
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Where do you even start?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Most businesses know they should be doing more with AI. The hard part
            is knowing which moves to make first. Here&rsquo;s a taste of what we help
            clients implement — and maintain long after launch.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <FadeIn key={cat.label}>
              <div
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
              >
                <CategoryCard
                  cat={cat}
                  isMobileActive={mobileActiveIndex === i}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-ai/40 bg-brand-ai/10 px-6 py-3 text-sm font-semibold text-brand-ai transition-all duration-200 hover:bg-brand-ai/20 hover:border-brand-ai/60"
          >
            Find your first AI win
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
