"use client";

import { useState } from "react";
import {
  HeartPulse,
  Factory,
  Monitor,
  Briefcase,
  Landmark,
  HardHat,
  Truck,
  GraduationCap,
  ShoppingBag,
  Check,
  ChevronDown,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { AnimatePresence, motion } from "framer-motion";

// Ordered by likelihood to visit an AI marketing agency
const industries = [
  {
    icon: Monitor,
    title: "Technology & Software",
    description: "SaaS companies, IT service providers, MSPs, and technology consultancies.",
    color: "oklch(0.52 0.22 235)",
    colorBg: "oklch(0.52 0.22 235 / 0.12)",
    colorHoverHeader: "oklch(0.52 0.22 235 / 0.15)",
    colorHoverBg: "oklch(0.52 0.22 235 / 0.08)",
    colorShadow: "oklch(0.52 0.22 235 / 0.28)",
    opportunities: [
      "Demand generation and pipeline marketing",
      "Thought leadership content at scale",
      "SEO and paid media in competitive software markets",
      "Marketing automation and CRM integration",
    ],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Law firms, consultancies, accounting firms, staffing agencies, and HR companies.",
    color: "oklch(0.54 0.17 193)",
    colorBg: "oklch(0.54 0.17 193 / 0.12)",
    colorHoverHeader: "oklch(0.54 0.17 193 / 0.15)",
    colorHoverBg: "oklch(0.54 0.17 193 / 0.08)",
    colorShadow: "oklch(0.54 0.17 193 / 0.28)",
    opportunities: [
      "Thought leadership content that attracts ideal clients",
      "LinkedIn and search campaigns targeting decision-makers",
      "Local SEO and Google Business optimization",
      "Automated follow-up and client nurture sequences",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical",
    description: "Health systems, physician practices, behavioral health, and health tech companies.",
    color: "oklch(0.58 0.22 350)",
    colorBg: "oklch(0.58 0.22 350 / 0.12)",
    colorHoverHeader: "oklch(0.58 0.22 350 / 0.15)",
    colorHoverBg: "oklch(0.58 0.22 350 / 0.08)",
    colorShadow: "oklch(0.58 0.22 350 / 0.28)",
    opportunities: [
      "Patient acquisition campaigns built to meet compliance requirements",
      "Service line and specialty program marketing",
      "Reputation management and review response automation",
      "AI-assisted content for patient and provider education",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    description: "Discrete manufacturers, process industries, distributors, and engineering firms.",
    color: "oklch(0.62 0.19 48)",
    colorBg: "oklch(0.62 0.19 48 / 0.12)",
    colorHoverHeader: "oklch(0.62 0.19 48 / 0.15)",
    colorHoverBg: "oklch(0.62 0.19 48 / 0.08)",
    colorShadow: "oklch(0.62 0.19 48 / 0.28)",
    opportunities: [
      "Lead generation for complex, long-cycle B2B sales",
      "Technical SEO and content for engineering audiences",
      "Account-based marketing for key accounts",
      "Trade show amplification and post-show nurture",
    ],
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Banks, credit unions, insurance providers, financial advisors, and fintech companies.",
    color: "oklch(0.52 0.18 152)",
    colorBg: "oklch(0.52 0.18 152 / 0.12)",
    colorHoverHeader: "oklch(0.52 0.18 152 / 0.15)",
    colorHoverBg: "oklch(0.52 0.18 152 / 0.08)",
    colorShadow: "oklch(0.52 0.18 152 / 0.28)",
    opportunities: [
      "Compliant digital marketing within regulatory guidelines",
      "Lead generation for financial products and services",
      "AI-powered personalization across the customer lifecycle",
      "Cross-sell and upsell campaign automation",
    ],
  },
  {
    icon: HardHat,
    title: "Construction & Real Estate",
    description: "General contractors, specialty trades, developers, and commercial property firms.",
    color: "oklch(0.57 0.20 27)",
    colorBg: "oklch(0.57 0.20 27 / 0.12)",
    colorHoverHeader: "oklch(0.57 0.20 27 / 0.15)",
    colorHoverBg: "oklch(0.57 0.20 27 / 0.08)",
    colorShadow: "oklch(0.57 0.20 27 / 0.28)",
    opportunities: [
      "Local SEO and Google Business for service area businesses",
      "Lead generation for residential and commercial projects",
      "Project portfolio and case study content",
      "Automated lead qualification and follow-up",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    description: "Freight brokers, 3PLs, distributors, and supply chain technology providers.",
    color: "oklch(0.50 0.20 272)",
    colorBg: "oklch(0.50 0.20 272 / 0.12)",
    colorHoverHeader: "oklch(0.50 0.20 272 / 0.15)",
    colorHoverBg: "oklch(0.50 0.20 272 / 0.08)",
    colorShadow: "oklch(0.50 0.20 272 / 0.28)",
    opportunities: [
      "B2B lead generation for freight and logistics services",
      "Account-based marketing for enterprise shippers",
      "AI-assisted proposal and RFP content",
      "Email and nurture campaigns for long-cycle deals",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Higher education, trade schools, corporate training providers, and e-learning platforms.",
    color: "oklch(0.55 0.17 128)",
    colorBg: "oklch(0.55 0.17 128 / 0.12)",
    colorHoverHeader: "oklch(0.55 0.17 128 / 0.15)",
    colorHoverBg: "oklch(0.55 0.17 128 / 0.08)",
    colorShadow: "oklch(0.55 0.17 128 / 0.28)",
    opportunities: [
      "Enrollment and student recruitment campaigns",
      "Search and social ads for prospective students",
      "Workforce development and employer partnership marketing",
      "Inquiry automation and lead nurture",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description: "Online retailers, brick-and-mortar shops, and omnichannel consumer brands.",
    color: "oklch(0.52 0.21 308)",
    colorBg: "oklch(0.52 0.21 308 / 0.12)",
    colorHoverHeader: "oklch(0.52 0.21 308 / 0.15)",
    colorHoverBg: "oklch(0.52 0.21 308 / 0.08)",
    colorShadow: "oklch(0.52 0.21 308 / 0.28)",
    opportunities: [
      "AI-optimized product listings and SEO",
      "Paid search and shopping campaigns",
      "Email marketing and customer lifecycle automation",
      "Conversion rate optimization across product pages and checkout",
    ],
  },
];

const INITIAL_COUNT = 3;

function IndustryCard({ industry }: { industry: typeof industries[number] }) {
  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
      whileHover={{ y: -4, boxShadow: `0 16px 48px ${industry.colorShadow}` }}
      whileTap={{ scale: 0.98 }}
      transition={{
        y: { type: "spring", stiffness: 400, damping: 25 },
        boxShadow: { duration: 0.2, ease: "easeOut" },
      }}
    >
      {/* Card body hover overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ backgroundColor: industry.colorHoverBg }}
      />

      {/* Colored header */}
      <div
        className="relative flex items-center gap-3 px-5 py-4"
        style={{ backgroundColor: industry.colorBg }}
      >
        {/* Header hover overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ backgroundColor: industry.colorHoverHeader }}
        />
        <industry.icon
          className="relative z-10 h-4 w-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
          style={{ color: industry.color }}
        />
        <h3
          className="relative z-10 text-sm font-semibold leading-snug"
          style={{ color: industry.color }}
        >
          {industry.title}
        </h3>
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground">{industry.description}</p>

        <ul className="mt-4 space-y-2 border-t border-border pt-4">
          {industry.opportunities.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <div
                className="mt-0.5 flex-shrink-0 rounded-full p-0.5"
                style={{ backgroundColor: industry.colorBg, color: industry.color }}
              >
                <Check className="h-3 w-3" />
              </div>
              <span className="text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Opportunities() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="how-we-help" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Who We Help
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            See how we help businesses in your industry grow revenue, build
            better digital experiences, and put AI to work.
          </p>
        </FadeIn>

        {/* First 3 — always visible, stacked on mobile */}
        <FadeInStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, INITIAL_COUNT).map((industry) => (
            <FadeInStaggerItem key={industry.title} className="min-h-[366px]">
              <IndustryCard industry={industry} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        {/* Remaining industries — animated expand */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="extra-industries"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {industries.slice(INITIAL_COUNT).map((industry, i) => (
                  <motion.div
                    key={industry.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: "easeOut" }}
                    className="min-h-[366px]"
                  >
                    <IndustryCard industry={industry} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <FadeIn delay={0.2} className="mt-8 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-foreground"
          >
            {expanded
              ? "Show fewer industries"
              : `See all ${industries.length} industries`}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-6 text-center">
          <p className="text-muted-foreground">
            Don&apos;t see your industry?{" "}
            <a href="#contact" className="font-medium text-primary hover:underline">
              Get in touch — we&apos;ve likely worked in your space.
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
