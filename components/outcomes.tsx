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
    colorBg: "oklch(0.65 0.18 150 / 0.25)",
    colorHoverHeader: "oklch(0.65 0.18 150 / 0.32)",
    colorGlow: "oklch(0.65 0.18 150 / 0.08)",
    colorHoverBg: "oklch(0.65 0.18 150 / 0.20)",
    colorShadow: "oklch(0.65 0.18 150 / 0.55)",
    colorShadowRest: "oklch(0.65 0.18 150 / 0)",
    description:
      "AI-powered campaigns that reach the right buyers, generate more qualified leads, and convert at a higher rate.",
    // TrendingUp literally trends upward
    iconVariants: {
      rest: { y: 0 },
      hover: { y: -8, transition: { type: "spring", stiffness: 500, damping: 10 } },
    },
  },
  {
    icon: PieChart,
    title: "Win Market Share",
    detail: "Rank higher. Reach further.",
    color: "oklch(0.68 0.18 220)",
    colorBg: "oklch(0.68 0.18 220 / 0.25)",
    colorHoverHeader: "oklch(0.68 0.18 220 / 0.32)",
    colorGlow: "oklch(0.68 0.18 220 / 0.08)",
    colorHoverBg: "oklch(0.68 0.18 220 / 0.20)",
    colorShadow: "oklch(0.68 0.18 220 / 0.55)",
    colorShadowRest: "oklch(0.68 0.18 220 / 0)",
    description:
      "SEO, content, and paid media that expand your digital footprint and put you ahead of competitors.",
    // PieChart rotates — claiming more of the pie
    iconVariants: {
      rest: { rotate: 0 },
      hover: { rotate: 180, transition: { duration: 0.55, ease: "easeInOut" } },
    },
  },
  {
    icon: Scissors,
    title: "Reduce Costs",
    detail: "Less overhead. More output.",
    color: "oklch(0.70 0.17 75)",
    colorBg: "oklch(0.70 0.17 75 / 0.25)",
    colorHoverHeader: "oklch(0.70 0.17 75 / 0.32)",
    colorGlow: "oklch(0.70 0.17 75 / 0.08)",
    colorHoverBg: "oklch(0.70 0.17 75 / 0.20)",
    colorShadow: "oklch(0.70 0.17 75 / 0.55)",
    colorShadowRest: "oklch(0.70 0.17 75 / 0)",
    description:
      "AI automation eliminates repetitive manual work so your team focuses on strategy over execution.",
    // Scissors snip! — cuts costs
    iconVariants: {
      rest: { rotate: 0, x: 0 },
      hover: { rotate: -35, x: 5, transition: { type: "spring", stiffness: 500, damping: 8 } },
    },
  },
  {
    icon: Gem,
    title: "Improve Quality",
    detail: "Better work. Every time.",
    color: "oklch(0.68 0.19 310)",
    colorBg: "oklch(0.68 0.19 310 / 0.25)",
    colorHoverHeader: "oklch(0.68 0.19 310 / 0.32)",
    colorGlow: "oklch(0.68 0.19 310 / 0.08)",
    colorHoverBg: "oklch(0.68 0.19 310 / 0.20)",
    colorShadow: "oklch(0.68 0.19 310 / 0.55)",
    colorShadowRest: "oklch(0.68 0.19 310 / 0)",
    description:
      "Smarter targeting, stronger content, and data-driven optimization that raises the bar across your marketing.",
    // Gem catches the light — quality sparkles
    iconVariants: {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.65, rotate: 22, transition: { type: "spring", stiffness: 400, damping: 10 } },
    },
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
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 transition-colors duration-200 hover:border-white/35"
                style={{ backgroundColor: outcome.colorGlow }}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                variants={{
                  rest: { y: 0, boxShadow: `0 0px 0px ${outcome.colorShadowRest}` },
                  hover: { y: -6, boxShadow: `0 24px 80px ${outcome.colorShadow}` },
                }}
                transition={{
                  y: { type: "spring", stiffness: 400, damping: 25 },
                  boxShadow: { duration: 0.25, ease: "easeOut" },
                }}
              >
                {/* Card body hover overlay — materialises on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ backgroundColor: outcome.colorHoverBg }}
                />

                {/* Colored header */}
                <div
                  className="relative flex items-center gap-3 px-5 py-4"
                  style={{ backgroundColor: outcome.colorBg }}
                >
                  {/* Header hover overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ backgroundColor: outcome.colorHoverHeader }}
                  />
                  {/* Icon — animates via variant propagation from parent card */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    variants={outcome.iconVariants}
                  >
                    <outcome.icon
                      className="h-4 w-4 opacity-70 transition-opacity duration-200 group-hover:opacity-100"
                      style={{ color: outcome.color }}
                    />
                  </motion.div>
                  <h3
                    className="relative z-10 text-sm font-semibold leading-snug"
                    style={{ color: outcome.color }}
                  >
                    {outcome.title}
                  </h3>
                </div>

                {/* Card body */}
                <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-4">
                  <p
                    className="text-xs font-semibold opacity-70 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ color: outcome.color }}
                  >
                    {outcome.detail}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 transition-colors duration-200 group-hover:text-white">
                    {outcome.description}
                  </p>
                </div>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
