"use client";

import { BarChart3, Brain, Code2, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion-wrapper";
import { motion, type Variants } from "framer-motion";

// Sparkles in the AI chip spin on card hover — propagated from parent variants
const sparkleVariants: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.6, ease: "easeInOut" } },
};

const services = [
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Generate more qualified leads and revenue through SEO, content, paid media, and analytics — all enhanced by AI to move faster and target smarter.",
    bullets: [
      "Rank higher and get found by the right buyers",
      "Reach decision-makers on Google, Meta, and LinkedIn",
      "AI-assisted content that drives traffic and conversions",
      "Performance reporting tied to revenue, not vanity metrics",
      "Continuous optimization driven by real data",
    ],
    cta: "Start Growing",
    // Bar chart bars grow taller — revenue going up
    iconVariants: {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.28, y: -4, transition: { type: "spring", stiffness: 400, damping: 10 } },
    } as Variants,
  },
  {
    icon: Brain,
    title: "AI Strategy & Automation",
    description:
      "Not sure where AI fits? We find the highest-impact opportunities across your business, then build and automate them — so you see results from day one.",
    bullets: [
      "AI readiness assessment and prioritized roadmap",
      "Workflow automation that eliminates manual work",
      "Custom AI tools built for your specific processes",
      "Team training so your people actually adopt it",
      "Ongoing optimization as AI capabilities evolve",
    ],
    cta: "Explore AI Strategy",
    // Brain pulses and wobbles — thinking hard
    iconVariants: {
      rest: { scale: 1, rotate: 0 },
      hover: {
        scale: 1.25,
        rotate: [-6, 6, -5, 5, 0],
        transition: {
          scale: { type: "spring", stiffness: 400, damping: 10 },
          rotate: { duration: 0.5, ease: "easeInOut" },
        },
      },
    } as Variants,
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Websites, web apps, and custom software — built with modern frameworks and AI-assisted workflows. Designed to perform, engineered to scale.",
    bullets: [
      "Conversion-focused design and user experience",
      "Web apps, dashboards, and custom software",
      "Next.js and modern framework development",
      "Performance optimization and Core Web Vitals",
      "Ongoing maintenance, iteration, and support",
    ],
    cta: "Start a Build",
    // Code brackets bounce — like typing furiously
    iconVariants: {
      rest: { x: 0 },
      hover: {
        x: [-3, 3, -2, 2, 0],
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    } as Variants,
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Marketing. Technology. AI. One team, end to end.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.title} className="flex">
              <motion.div
                className="group flex w-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/50 hover:bg-primary/[0.03]"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                variants={{
                  rest: { y: 0, boxShadow: "0 0px 0px oklch(0.55 0.22 260 / 0)" },
                  hover: { y: -8, boxShadow: "0 20px 60px oklch(0.55 0.22 260 / 0.18)" },
                }}
                transition={{
                  y: { type: "spring", stiffness: 400, damping: 25 },
                  boxShadow: { duration: 0.25, ease: "easeOut" },
                }}
              >

                {/* Icon + AI chip */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="inline-flex rounded-xl bg-muted p-3 text-muted-foreground transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary">
                    <motion.div variants={service.iconVariants}>
                      <service.icon className="h-6 w-6" />
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-brand-ai/10 px-2 py-0.5 text-xs font-semibold text-brand-ai">
                    <motion.span variants={sparkleVariants}>
                      <Sparkles className="h-3 w-3" />
                    </motion.span>
                    <span>AI</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA — pinned to bottom */}
                <div className="mt-auto pt-8">
                  <Button asChild size="default" className="w-full">
                    <a href="#contact">
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
