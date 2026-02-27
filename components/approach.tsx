"use client";

import { ArrowRight, Search, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We start with a free strategy call to understand your business, your goals, and where AI can make the biggest difference. No assumptions, just listening.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design",
    description:
      "We build a focused plan with clear priorities, AI-informed recommendations, and measurable outcomes. You\u2019ll know exactly what we\u2019re doing and why before we start.",
  },
  {
    number: "03",
    icon: Rocket,
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
            A Simple Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three steps. No surprises.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeInStaggerItem key={step.title} className="flex">
              <div className="group relative flex w-full flex-col rounded-2xl border border-border bg-card px-8 py-8 transition-all duration-200 hover:-translate-y-1 hover:border-brand-amber/30 hover:shadow-md">

                {/* Connector arrow between steps on desktop */}
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-[1.4rem] top-12 z-10 hidden h-5 w-5 text-border md:block" />
                )}

                {/* Step number */}
                <div className="mb-4 text-7xl font-black leading-none text-brand-amber/10 md:text-8xl">
                  {step.number}
                </div>

                {/* Icon badge + title */}
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex-none rounded-lg bg-brand-amber/10 p-1.5 transition-colors duration-200 group-hover:bg-brand-amber/20">
                    <step.icon className="h-4 w-4 text-brand-amber" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-1 leading-relaxed text-muted-foreground">
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
          <p className="font-semibold text-foreground">
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
