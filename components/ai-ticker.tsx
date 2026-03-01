"use client";

import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { ArrowRight } from "lucide-react";

/* ─── Items: real transformative outcomes, not productivity tips ── */

const items = [
  "Compress weeks of strategic research into a single afternoon",
  "Build the tools and features your team has been requesting for years",
  "Ship website updates in days instead of development cycles",
  "Automate the workflows your team still does by hand",
  "Find the brand voice you\u2019ve been trying to nail for months",
  "Create interactive experiences that used to need a full dev team",
  "Turn scattered data into a strategy you\u2019d actually bet on",
  "Finally write the SOPs and playbooks that never get prioritized",
  "Replace the spreadsheets holding your operations together",
  "Get competitive intelligence you never had the bandwidth for",
];

/* ─── Accent color per rank (teal → purple spectrum) ─────────── */

const accentColors = [
  "oklch(0.72 0.19 170)",
  "oklch(0.74 0.20 155)",
  "oklch(0.76 0.22 140)",
  "oklch(0.74 0.20 160)",
  "oklch(0.70 0.17 190)",
  "oklch(0.68 0.16 210)",
  "oklch(0.66 0.17 230)",
  "oklch(0.68 0.18 260)",
  "oklch(0.70 0.18 280)",
  "oklch(0.72 0.18 300)",
];

/* ─── List item ──────────────────────────────────────────────── */

function ListItem({ title, rank }: { title: string; rank: number }) {
  const accent = accentColors[rank - 1];

  return (
    <div
      className="group relative flex items-center gap-5 rounded-xl px-4 py-4 transition-all duration-300 sm:px-5"
      style={
        {
          "--accent": accent,
        } as React.CSSProperties
      }
    >
      {/* Left accent bar — visible on hover */}
      <span
        className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full opacity-0 transition-all duration-300 group-hover:h-3/5 group-hover:opacity-100"
        style={{ backgroundColor: accent }}
      />

      {/* Hover background glow */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 0% 50%, ${accent.replace(")", " / 0.10)")}, transparent 70%)`,
        }}
      />

      {/* Rank number */}
      <span
        className="relative w-8 flex-none text-right text-lg font-bold tabular-nums transition-colors duration-300"
        style={{ color: "rgba(255,255,255,0.18)" }}
      >
        <span className="group-hover:hidden">{rank}</span>
        <span className="hidden group-hover:inline" style={{ color: accent }}>
          {rank}
        </span>
      </span>

      {/* Title */}
      <p className="relative text-[15px] font-medium leading-snug text-white/75 transition-colors duration-300 group-hover:text-white">
        {title}
      </p>
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
            The work that finally gets done
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Not productivity hacks — the projects you&rsquo;ve been putting off
            for years, now within reach.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 flex flex-col">
          {items.map((title, i) => (
            <FadeInStaggerItem key={title}>
              <ListItem title={title} rank={i + 1} />
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
