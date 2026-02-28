"use client";

import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    label: "Lead Gen & Sales",
    color: "oklch(0.70 0.14 190)",
    items: [
      "Auto-qualify leads from your contact form",
      "Score inbound leads before sales touches them",
      "Personalize outreach at scale",
      "Trigger follow-up sequences from CRM activity",
      "Identify high-intent website visitors",
      "Draft proposals from a simple intake form",
    ],
  },
  {
    label: "Content & Marketing",
    color: "oklch(0.75 0.22 140)",
    items: [
      "Write a month of social posts in an hour",
      "Repurpose one blog post into 10 assets",
      "Draft landing page copy in minutes",
      "Create ad variations and test them faster",
      "Generate email campaigns from a brief",
      "Produce weekly newsletters automatically",
    ],
  },
  {
    label: "Operations & Automation",
    color: "oklch(0.68 0.18 220)",
    items: [
      "Summarize sales calls into action items",
      "Auto-tag and route support tickets",
      "Automate your monthly reporting workflows",
      "Turn your SOPs into an always-on knowledge base",
      "Build a 24/7 FAQ bot for your website",
      "Respond to reviews and inquiries around the clock",
    ],
  },
  {
    label: "SEO & Visibility",
    color: "oklch(0.72 0.18 300)",
    items: [
      "Monitor competitors and surface insights weekly",
      "Identify content gaps vs. top-ranking pages",
      "Generate optimized meta and schema at scale",
      "Track keyword trends and flag opportunities",
      "Refresh underperforming pages automatically",
      "Build topical authority faster with AI-assisted content",
    ],
  },
];

export function AiTicker() {
  return (
    <section id="ai-in-action" className="bg-brand-dark px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">

        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-ai">
            AI in the wild
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Where do you even start?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Most businesses know they should be doing more with AI. The hard part
            is knowing which moves to make first. Here&rsquo;s a taste of what we help
            clients implement — and maintain long after launch.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {categories.map((cat) => (
            <FadeIn key={cat.label}>
              <div className="group rounded-2xl border border-white/10 p-6 transition-all duration-200 md:hover:bg-white/[0.93] md:hover:border-white/20">
                {/* Category header */}
                <div className="mb-5 flex items-center gap-2">
                  <span
                    className="h-2 w-2 flex-none rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: cat.color }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Items */}
                <FadeInStagger className="mt-1 flex flex-col">
                  {cat.items.map((item) => (
                    <FadeInStaggerItem key={item}>
                      <div className="flex items-start gap-3 py-2">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full opacity-60 transition-all duration-200 md:opacity-40 md:group-hover:opacity-100"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className="text-sm leading-relaxed text-white/80 transition-colors duration-200 md:text-white/55 md:group-hover:text-brand-dark">
                          {item}
                        </span>
                      </div>
                    </FadeInStaggerItem>
                  ))}
                </FadeInStagger>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-ai/40 bg-brand-ai/10 px-6 py-3 text-sm font-semibold text-brand-ai transition-all duration-200 hover:bg-brand-ai/20 hover:border-brand-ai/60"
          >
            Find your first AI win
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
