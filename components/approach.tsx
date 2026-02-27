"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a free strategy call to understand your business, your goals, and where AI can make the biggest difference. No assumptions, just listening.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We build a focused plan with clear priorities, AI-informed recommendations, and measurable outcomes. You\u2019ll know exactly what we\u2019re doing and why before we start.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We execute using AI-powered tools, measure everything, and optimize continuously. Campaigns go live, performance is tracked, and we stay engaged to keep improving.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="bg-muted/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting started is simple. Three steps, no surprises.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-0 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeInStaggerItem key={step.title}>
              <div className="relative px-2 py-6 md:px-8">
                {/* Connector line between steps on desktop */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-14 hidden h-px w-8 bg-border md:block" />
                )}
                <div className="mb-3 text-7xl font-black leading-none text-brand-amber/20 md:text-8xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
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
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="text-muted-foreground">
            Step 1 is a free strategy call. No commitment required.
          </p>
          <Button asChild className="mt-4">
            <a href="#contact">
              Book Your Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
