"use client";

import { TrendingUp, PieChart, Scissors, Gem } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Grow Revenue",
    detail: "More pipeline. Higher close rates.",
    color: "oklch(0.65 0.18 150)",
    colorBg: "oklch(0.65 0.18 150 / 0.15)",
    description:
      "AI-powered campaigns that reach the right buyers, generate more qualified leads, and convert at a higher rate.",
  },
  {
    icon: PieChart,
    title: "Win Market Share",
    detail: "Rank higher. Reach further.",
    color: "oklch(0.68 0.18 220)",
    colorBg: "oklch(0.68 0.18 220 / 0.15)",
    description:
      "SEO, content, and paid media that expand your digital footprint and put you ahead of competitors.",
  },
  {
    icon: Scissors,
    title: "Reduce Costs",
    detail: "Less overhead. More output.",
    color: "oklch(0.70 0.17 75)",
    colorBg: "oklch(0.70 0.17 75 / 0.15)",
    description:
      "AI automation eliminates repetitive manual work so your team focuses on strategy over execution.",
  },
  {
    icon: Gem,
    title: "Improve Quality",
    detail: "Better work. Every time.",
    color: "oklch(0.68 0.19 310)",
    colorBg: "oklch(0.68 0.19 310 / 0.15)",
    description:
      "Smarter targeting, stronger content, and data-driven optimization that raises the bar across your marketing.",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-brand-dark px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            How We Make a Difference
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Everything we do maps back to the metrics that matter most to your
            business.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <FadeInStaggerItem key={outcome.title}>
              <motion.div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Colored top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ backgroundColor: outcome.color }}
                />

                {/* Icon */}
                <div
                  className="mb-4 mt-1 inline-flex rounded-xl p-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: outcome.colorBg }}
                >
                  <outcome.icon
                    className="h-5 w-5"
                    style={{ color: outcome.color }}
                  />
                </div>

                <h3 className="text-base font-semibold text-white">
                  {outcome.title}
                </h3>
                <p
                  className="mt-0.5 text-xs font-medium"
                  style={{ color: outcome.color }}
                >
                  {outcome.detail}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {outcome.description}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
