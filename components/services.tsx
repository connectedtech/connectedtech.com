"use client";

import { BarChart3, Brain, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion-wrapper";

export function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Digital marketing at the core. AI woven through everything.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Featured primary service — takes 3/5 columns */}
          <FadeIn className="lg:col-span-3">
            <div className="flex h-full flex-col rounded-2xl border-2 border-primary/25 bg-primary/[0.04] p-8 md:p-10">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Core Service
              </div>
              <div className="mb-5 inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                AI-Infused Digital Marketing
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                SEO, content strategy, paid media, and analytics — all powered
                by AI tools that help us move faster, target smarter, and
                deliver better ROI. 15+ years of driving measurable results,
                now with AI built in from the start.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <a href="#contact">
                    Book a Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Supporting services stacked — takes 2/5 columns */}
          <FadeIn className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex flex-1 flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex w-fit rounded-xl bg-muted p-3 text-muted-foreground">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                AI Strategy & Integration
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                We identify where AI makes the biggest difference in your
                marketing and operations, then build it in. Working solutions
                from day one — not slide decks.
              </p>
            </div>

            <div className="flex flex-1 flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex w-fit rounded-xl bg-muted p-3 text-muted-foreground">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Web Design & Development
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                Fast, modern, conversion-focused websites built to perform and
                grow with you.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
