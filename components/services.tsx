"use client";

import { useState } from "react";
import { BarChart3, Brain, Code2, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion-wrapper";

const services = [
  {
    icon: BarChart3,
    title: "AI-Infused Digital Marketing",
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

export function Services() {
  const [active, setActive] = useState<number | null>(null);

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

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`flex cursor-default flex-col rounded-2xl border p-8 transition-all duration-200 ${
                  active === i
                    ? "border-primary/30 bg-primary/[0.04] shadow-sm"
                    : "border-border bg-card"
                }`}
              >
                <div
                  className={`mb-5 inline-flex w-fit rounded-xl p-3 transition-colors duration-200 ${
                    active === i
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {active === i && (
                  <div className="mt-6">
                    <ul className="space-y-2.5">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <div className="mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button asChild size="sm">
                        <a href="#contact">
                          {service.cta}
                          <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
