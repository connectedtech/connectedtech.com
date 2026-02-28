"use client";

import { TrendingUp, Zap, Globe } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { motion, type Variants } from "framer-motion";

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
      "AI-powered marketing reaches the right buyers, generates more qualified leads, and converts at a higher rate — without burning more budget.",
    iconVariants: {
      rest: { y: 0 },
      hover: { y: -8, transition: { type: "spring", stiffness: 500, damping: 10 } },
    } as Variants,
  },
  {
    icon: Zap,
    title: "Multiply Your Team",
    detail: "Same headcount. Bigger output.",
    color: "oklch(0.75 0.22 140)",
    colorBg: "oklch(0.75 0.22 140 / 0.20)",
    colorHoverHeader: "oklch(0.75 0.22 140 / 0.28)",
    colorGlow: "oklch(0.75 0.22 140 / 0.07)",
    colorHoverBg: "oklch(0.75 0.22 140 / 0.16)",
    colorShadow: "oklch(0.75 0.22 140 / 0.50)",
    colorShadowRest: "oklch(0.75 0.22 140 / 0)",
    description:
      "AI automation handles the repetitive work — follow-ups, reporting, content creation, workflows — freeing your team to focus on what actually moves the needle.",
    iconVariants: {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.4, rotate: 15, transition: { type: "spring", stiffness: 400, damping: 8 } },
    } as Variants,
  },
  {
    icon: Globe,
    title: "Own Your Market",
    detail: "Rank higher. Reach further.",
    color: "oklch(0.68 0.18 220)",
    colorBg: "oklch(0.68 0.18 220 / 0.25)",
    colorHoverHeader: "oklch(0.68 0.18 220 / 0.32)",
    colorGlow: "oklch(0.68 0.18 220 / 0.08)",
    colorHoverBg: "oklch(0.68 0.18 220 / 0.20)",
    colorShadow: "oklch(0.68 0.18 220 / 0.55)",
    colorShadowRest: "oklch(0.68 0.18 220 / 0)",
    description:
      "SEO, content, and paid media that expand your digital footprint, keep you in front of the right buyers, and put you ahead of competitors in your space.",
    iconVariants: {
      rest: { rotate: 0 },
      hover: { rotate: 360, transition: { duration: 0.7, ease: "easeInOut" } },
    } as Variants,
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

        <FadeInStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                {/* Card body hover overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ backgroundColor: outcome.colorHoverBg }}
                />

                {/* Colored header */}
                <div
                  className="relative flex items-center gap-3 px-5 py-4"
                  style={{ backgroundColor: outcome.colorBg }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ backgroundColor: outcome.colorHoverHeader }}
                  />
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
