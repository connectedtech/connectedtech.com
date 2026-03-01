"use client";

import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { ArrowRight } from "lucide-react";

/* ─── Category styles ────────────────────────────────────────── */

const categoryStyles = {
  sales: {
    label: "Sales",
    color: "oklch(0.70 0.14 190)",
    bg: "oklch(0.70 0.14 190 / 0.12)",
  },
  marketing: {
    label: "Marketing",
    color: "oklch(0.75 0.22 140)",
    bg: "oklch(0.75 0.22 140 / 0.12)",
  },
  operations: {
    label: "Operations",
    color: "oklch(0.68 0.18 220)",
    bg: "oklch(0.68 0.18 220 / 0.12)",
  },
  seo: {
    label: "SEO",
    color: "oklch(0.72 0.18 300)",
    bg: "oklch(0.72 0.18 300 / 0.12)",
  },
} as const;

type Category = keyof typeof categoryStyles;

/* ─── Ranked items (by impact × ease) ────────────────────────── */

const items: { title: string; impact: string; category: Category }[] = [
  {
    title: "Auto-summarize meetings into notes and next steps",
    impact: "Set up in minutes. Saves 3+ hours per person, per week.",
    category: "operations",
  },
  {
    title: "Draft a month of marketing content in an afternoon",
    impact: "Cut first-draft time by 60\u201380%.",
    category: "marketing",
  },
  {
    title: "Deploy a 24/7 support chatbot on your website",
    impact: "Drop support costs up to 90% per interaction.",
    category: "operations",
  },
  {
    title: "Personalize and automate email campaigns",
    impact: "Automated emails see 2\u00d7 the open rates of manual sends.",
    category: "marketing",
  },
  {
    title: "Score and route inbound leads automatically",
    impact: "Sales spends time on prospects who actually convert.",
    category: "sales",
  },
  {
    title: "Respond to every online review, on brand",
    impact: "Stay consistent across Google, Yelp, and social \u2014 without the hours.",
    category: "marketing",
  },
  {
    title: "Turn one blog post into ten social media assets",
    impact: "Cut content production time by 60%+.",
    category: "marketing",
  },
  {
    title: "Optimize existing pages for SEO and AI search",
    impact: "Improve rankings up to 49% with AI-assisted optimization.",
    category: "seo",
  },
  {
    title: "Build dashboards anyone can query in plain English",
    impact: "Replace \u2018Can someone pull this report?\u2019 with instant answers.",
    category: "operations",
  },
  {
    title: "Generate proposals and SOWs from simple intake forms",
    impact: "What took 3 hours now takes 20 minutes.",
    category: "sales",
  },
];

/* ─── List item ──────────────────────────────────────────────── */

function ListItem({
  item,
  rank,
}: {
  item: (typeof items)[number];
  rank: number;
}) {
  const cat = categoryStyles[item.category];

  return (
    <div className="group flex items-start gap-4 rounded-xl px-3 py-4 transition-all duration-200 hover:bg-white/[0.04] sm:px-4">
      {/* Rank number */}
      <span className="w-7 flex-none text-right text-lg font-bold tabular-nums text-white/20 transition-colors duration-200 group-hover:text-white/40">
        {rank}
      </span>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="text-[15px] font-medium leading-snug text-white/90 transition-colors duration-200 group-hover:text-white">
            {item.title}
          </p>
          <span
            className="flex-none rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide"
            style={{ color: cat.color, backgroundColor: cat.bg }}
          >
            {cat.label}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-white/40 transition-colors duration-200 group-hover:text-white/60">
          {item.impact}
        </p>
      </div>
    </div>
  );
}

/* ─── Main section ───────────────────────────────────────────── */

export function AiTicker() {
  return (
    <section id="ai-in-action" className="bg-brand-dark px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-ai">
            AI in the wild
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            A few ideas worth putting to work
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Ranked by impact and ease. Start at the top.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 flex flex-col divide-y divide-white/[0.06]">
          {items.map((item, i) => (
            <FadeInStaggerItem key={item.title}>
              <ListItem item={item} rank={i + 1} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-ai/40 bg-brand-ai/10 px-6 py-3 text-sm font-semibold text-brand-ai transition-all duration-200 hover:border-brand-ai/60 hover:bg-brand-ai/20"
          >
            Put AI to work for your business
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
