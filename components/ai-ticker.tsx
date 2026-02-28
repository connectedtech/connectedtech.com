"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { FadeIn } from "@/components/motion-wrapper";

const items = [
  "Auto-qualify leads from your contact form",
  "Write a month of social posts in an hour",
  "Generate follow-up emails from meeting notes",
  "Build a 24/7 FAQ bot for your website",
  "Score inbound leads before sales touches them",
  "Repurpose one blog post into 10 assets",
  "Auto-tag and route support tickets",
  "Draft landing page copy in minutes",
  "Summarize sales calls into action items",
  "Monitor competitors and surface insights weekly",
  "Personalize outreach at scale without extra headcount",
  "Turn your SOPs into an always-on knowledge base",
  "Automate your monthly reporting workflows",
  "Create ad variations and test them faster",
  "Respond to reviews and inquiries around the clock",
];

// Duplicate for seamless loop
const allItems = [...items, ...items];

function TickerTrack({ direction = 1, speed = 35 }: { direction?: 1 | -1; speed?: number }) {
  const x = useMotionValue(0);
  const baseWidth = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (!trackRef.current) return;
    if (baseWidth.current === 0) {
      baseWidth.current = trackRef.current.scrollWidth / 2;
    }
    const pxPerMs = speed / 1000;
    const move = pxPerMs * delta * direction;
    let current = x.get() - move;
    // Wrap: reset when we've scrolled one full set width
    if (direction === 1 && current <= -baseWidth.current) {
      current += baseWidth.current;
    } else if (direction === -1 && current >= 0) {
      current -= baseWidth.current;
    }
    x.set(current);
  });

  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-dark to-transparent" />

      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex w-max gap-3"
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
          >
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-ai" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function AiTicker() {
  return (
    <section id="ai-in-action" className="overflow-hidden bg-brand-dark px-0 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-ai">
            AI in the wild
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Where do you even start?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Most businesses know AI should be part of the plan. The hard part is
            knowing which moves to make first. Here are just a few of the things
            we help clients put into practice.
          </p>
        </FadeIn>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <TickerTrack direction={1} speed={32} />
        <TickerTrack direction={-1} speed={28} />
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6 text-center">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-brand-ai/40 bg-brand-ai/10 px-5 py-2.5 text-sm font-semibold text-brand-ai transition-all duration-200 hover:bg-brand-ai/20 hover:border-brand-ai/60"
        >
          Find your first AI win
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
