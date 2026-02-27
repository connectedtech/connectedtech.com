"use client";

import { useState } from "react";
import { BarChart3, Brain, Code2, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion-wrapper";

const services = [
  {
    icon: BarChart3,
    title: "AI-Infused Digital Marketing",
    aiPowered: true,
    description:
      "SEO, content strategy, paid media, and analytics — powered by AI tools that help us move faster, target smarter, and deliver better ROI. 15+ years of driving measurable results, now with AI built in from the start.",
    bullets: [
      "SEO strategy and on-page optimization",
      "Paid media management across Google, Meta, and LinkedIn",
      "AI-assisted content creation and distribution",
      "Marketing analytics and performance reporting",
      "Campaign optimization driven by real data",
    ],
    cta: "Book a Free Strategy Call",
  },
  {
    icon: Brain,
    title: "AI Strategy & Integration",
    aiPowered: true,
    description:
      "We identify where AI makes the biggest difference in your marketing and operations, then build it in — delivering working solutions from day one.",
    bullets: [
      "AI readiness assessment and roadmap",
      "Workflow automation and tool integration",
      "Custom prompt engineering and AI tooling",
      "Team training and adoption support",
      "Ongoing optimization and iteration",
    ],
    cta: "Start the Conversation",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    aiPowered: true,
    description:
      "Fast, modern, conversion-focused websites built to perform and grow with you.",
    bullets: [
      "Conversion-focused design and UX",
      "Next.js and modern framework development",
      "CMS setup and content management",
      "Performance optimization and Core Web Vitals",
      "Ongoing maintenance and support",
    ],
    cta: "Discuss Your Project",
  },
];

/** Highlight every occurrence of "AI" in a string with the AI brand color */
function HighlightAI({ text }: { text: string }) {
  const parts = text.split(/(AI)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === "AI" ? (
          <span key={i} className="text-brand-ai">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export function Services() {
  const [active, setActive] = useState(0);

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

        {/* Service selector cards — fixed height, no layout shift */}
        <div className="mt-16 grid items-stretch gap-4 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title}>
              <button
                onClick={() => setActive(i)}
                className={`flex w-full cursor-pointer flex-col items-start rounded-2xl border p-8 text-left transition-all duration-200 ${
                  active === i
                    ? "border-primary/40 bg-primary/[0.04] shadow-sm"
                    : "border-border bg-card hover:border-primary/20 hover:bg-primary/[0.02]"
                }`}
              >
                {/* Icon row with optional AI chip */}
                <div className="mb-5 flex w-full items-start justify-between gap-3">
                  <div
                    className={`inline-flex rounded-xl p-3 transition-colors duration-200 ${
                      active === i
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  {service.aiPowered && (
                    <div className="flex items-center gap-1 rounded-full bg-brand-ai/10 px-2 py-0.5 text-xs font-semibold text-brand-ai">
                      <Sparkles className="h-3 w-3" />
                      <span>AI</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground">
                  <HighlightAI text={service.title} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </button>
            </FadeIn>
          ))}
        </div>

        {/* Detail panel — always present, updates on card click */}
        <FadeIn className="mt-4 rounded-2xl border border-primary/20 bg-primary/[0.03] px-8 py-7">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services[active].bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-2.5">
                <div className="mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-0.5">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{bullet}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-primary/10 pt-5">
            <Button asChild size="sm">
              <a href="#contact">
                {services[active].cta}
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>
            {services[active].aiPowered && (
              <div className="flex items-center gap-1.5 text-xs text-brand-ai/70">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI-powered</span>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
