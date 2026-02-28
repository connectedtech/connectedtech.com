"use client";

import { ArrowRight, Search, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We start by understanding your business, your goals, and where AI can make the biggest difference. No assumptions, no templates — just focused listening.",
    // Search zooms in — magnifying glass looking for answers
    iconVariants: {
      rest: { scale: 1 },
      hover: { scale: 1.7, transition: { type: "spring", stiffness: 400, damping: 10 } },
    } as Variants,
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design",
    description:
      "We build a focused plan with clear priorities, AI-informed recommendations, and measurable outcomes. You\u2019ll know exactly what we\u2019re doing and why before we start.",
    // Lightbulb tips and brightens — idea moment!
    iconVariants: {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.35, rotate: 15, transition: { type: "spring", stiffness: 350, damping: 8 } },
    } as Variants,
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver",
    description:
      "We execute with AI-powered tools, measure everything, and optimize continuously. Campaigns go live, sites launch, automations run — and we stay embedded to keep improving what's working.",
    // Rocket launches — up and to the right
    iconVariants: {
      rest: { y: 0, x: 0, rotate: 0 },
      hover: { y: -8, x: 5, rotate: -30, transition: { type: "spring", stiffness: 300, damping: 8 } },
    } as Variants,
  },
];

export function Approach() {
  return (
    <section id="approach" className="bg-muted/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A Simple Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three steps. No surprises.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeInStaggerItem key={step.title} className="flex">
              <motion.div
                className="group relative flex w-full flex-col rounded-2xl border border-border bg-card px-8 py-8 transition-colors duration-200 hover:border-brand-amber/30"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                variants={{
                  rest: { y: 0, boxShadow: "0 0px 0px oklch(0.70 0.17 75 / 0)" },
                  hover: { y: -4, boxShadow: "0 8px 28px oklch(0.70 0.17 75 / 0.25)" },
                }}
                transition={{
                  y: { type: "spring", stiffness: 400, damping: 25 },
                  boxShadow: { duration: 0.2, ease: "easeOut" },
                }}
              >

                {/* Connector arrow between steps on desktop */}
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-[1.4rem] top-12 z-10 hidden h-5 w-5 text-border md:block" />
                )}

                {/* Step number */}
                <div className="mb-4 text-7xl font-black leading-none text-brand-amber/10 transition-colors duration-200 group-hover:text-brand-amber/25 md:text-8xl">
                  {step.number}
                </div>

                {/* Icon badge + title */}
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex-none rounded-lg bg-brand-amber/10 p-1.5 transition-colors duration-200 group-hover:bg-brand-amber/20">
                    <motion.div variants={step.iconVariants}>
                      <step.icon className="h-4 w-4 text-brand-amber" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-1 leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                  {step.description.split(/(AI)/g).map((part, j) =>
                    part === "AI" ? (
                      <span key={j} className="font-semibold text-brand-ai">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="font-semibold text-foreground">
            Ready to get started? No commitment required.
          </p>
          <Button asChild className="group mt-4">
            <a href="#contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
