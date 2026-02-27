"use client";

import { useState } from "react";
import { Factory, HeartPulse, Briefcase, Check } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
    description: "AI-powered capabilities for industrial and technical markets",
    color: "oklch(0.70 0.17 75)",
    colorBg: "oklch(0.70 0.17 75 / 0.15)",
    opportunities: [
      "AI-driven content and campaigns for complex products",
      "Automated lead nurturing and sales enablement",
      "SEO and digital presence for technical buyers",
      "Predictive analytics for marketing performance",
      "AI-assisted documentation and training materials",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Compliant, patient-centered marketing that drives engagement",
    color: "oklch(0.65 0.22 350)",
    colorBg: "oklch(0.65 0.22 350 / 0.15)",
    opportunities: [
      "Patient engagement and communication automation",
      "Reputation management and review response",
      "Personalized marketing for service lines",
      "Content strategy built for compliance",
      "AI-powered analytics for campaign optimization",
    ],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Thought leadership and client acquisition at scale",
    color: "oklch(0.60 0.22 28)",
    colorBg: "oklch(0.60 0.22 28 / 0.15)",
    opportunities: [
      "Thought leadership and content marketing at scale",
      "AI-assisted proposal and report generation",
      "Lead qualification and CRM enrichment",
      "Client communication automation",
      "Search and paid campaigns that attract the right clients",
    ],
  },
];

export function Opportunities() {
  const [active, setActive] = useState(0);
  const industry = industries[active];

  return (
    <section id="how-we-help" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How We Help
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            We specialize in three industries where we&apos;ve driven consistent, measurable results.
          </p>
        </FadeIn>

        {/* Industry tab pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => (
            <button
              key={ind.title}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "text-white shadow-md"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
              style={active === i ? { backgroundColor: ind.color } : undefined}
            >
              <ind.icon className="h-4 w-4" />
              {ind.title}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <FadeIn key={active} className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Industry header */}
            <div className="flex items-center gap-5 border-b border-border bg-muted/30 px-8 py-5">
              <div
                className="flex-shrink-0 rounded-xl p-3"
                style={{ backgroundColor: industry.colorBg, color: industry.color }}
              >
                <industry.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{industry.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{industry.description}</p>
              </div>
              <div
                className="ml-auto hidden h-1 w-16 flex-shrink-0 rounded-full sm:block"
                style={{ backgroundColor: industry.color, opacity: 0.4 }}
              />
            </div>

            {/* Opportunities grid */}
            <div className="p-8 md:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {industry.opportunities.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex-shrink-0 rounded-full p-1"
                      style={{ backgroundColor: industry.colorBg, color: industry.color }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 text-center">
          <p className="text-muted-foreground">
            Don&apos;t see your industry?{" "}
            <a
              href="#contact"
              className="font-medium text-primary hover:underline"
            >
              Let&apos;s talk — we&apos;ve likely worked in your space.
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
