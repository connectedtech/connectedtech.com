"use client";

import { Users, Lightbulb, TrendingUp, X } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { motion, type Variants } from "framer-motion";

const profiles = [
  {
    icon: Users,
    label: "Scrappy Teams",
    title: "Growing teams that need to punch above their weight",
    description:
      "Companies with 10–200 people where marketing and operations capacity is the bottleneck. You have ambition that exceeds your headcount — you need systems that scale, not more seats.",
    iconVariants: {
      rest: { scale: 1 },
      hover: { scale: 1.2, transition: { type: "spring", stiffness: 400, damping: 10 } },
    } as Variants,
  },
  {
    icon: Lightbulb,
    label: "AI-Aspirational",
    title: "Leaders who know AI matters but aren't sure where to start",
    description:
      "You've seen the demos. You've tried ChatGPT. But you haven't found someone who can connect AI to actual business outcomes in your workflows. You want a partner, not a vendor.",
    iconVariants: {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.2, rotate: 12, transition: { type: "spring", stiffness: 350, damping: 8 } },
    } as Variants,
  },
  {
    icon: TrendingUp,
    label: "ROI-Driven",
    title: "Businesses ready to invest in growth, not just spend on marketing",
    description:
      "You think in terms of ROI, not impressions. You're comfortable with $2,500–$10,000+/mo because you've seen what cheap marketing costs in the long run.",
    iconVariants: {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.2, y: -3, transition: { type: "spring", stiffness: 400, damping: 10 } },
    } as Variants,
  },
];

const notForYou = [
  "You need a single campaign, not an ongoing partner",
  "Your team prefers to manage all execution in-house",
  "You're not able to share access to your tools, data, or workflows",
  "Approvals move slowly in your organization",
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Who We&apos;re Built For
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            We do our best work with a specific kind of company. Here&apos;s how to tell if that&apos;s you.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-6 md:grid-cols-3">
          {profiles.map((profile) => (
            <FadeInStaggerItem key={profile.title} className="flex">
              <motion.div
                className="group flex w-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-brand-ai/40 hover:bg-brand-ai/[0.03]"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                variants={{
                  rest: { y: 0, boxShadow: "0 0px 0px oklch(0.75 0.22 140 / 0)" },
                  hover: { y: -6, boxShadow: "0 16px 48px oklch(0.75 0.22 140 / 0.14)" },
                }}
                transition={{
                  y: { type: "spring", stiffness: 400, damping: 25 },
                  boxShadow: { duration: 0.25, ease: "easeOut" },
                }}
              >
                <div className="mb-5 flex items-center gap-2.5 rounded-xl bg-brand-ai/10 px-4 py-3 transition-colors duration-200 group-hover:bg-brand-ai/20">
                  <motion.div variants={profile.iconVariants} className="text-brand-ai">
                    <profile.icon className="h-5 w-5" />
                  </motion.div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-ai">
                    {profile.label}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-foreground">
                  {profile.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                  {profile.description}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        {/* Kind disqualification */}
        <FadeIn delay={0.2} className="mt-14">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-muted/30 px-8 py-7">
            <p className="text-sm font-semibold text-foreground">
              We&apos;re probably not the right fit if&hellip;
            </p>
            <ul className="mt-4 space-y-2.5">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400/70" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
