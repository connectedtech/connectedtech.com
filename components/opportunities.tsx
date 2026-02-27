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
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare & Medical",
    description: "Health systems, physician practices, behavioral health, and health tech companies.",
    color: "oklch(0.58 0.22 350)",
    colorBg: "oklch(0.58 0.22 350 / 0.12)",
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
    opportunities: [
      "Lead generation for complex, long-cycle B2B sales",
      "Technical SEO and content for engineering audiences",
      "Account-based marketing for key accounts",
      "Trade show amplification and post-show nurture",
    ],
  },
  {
    icon: Monitor,
    title: "Technology & Software",
    description: "SaaS companies, IT service providers, MSPs, and technology consultancies.",
    color: "oklch(0.52 0.22 235)",
    colorBg: "oklch(0.52 0.22 235 / 0.12)",
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
    opportunities: [
      "Thought leadership content that attracts ideal clients",
      "LinkedIn and search campaigns targeting decision-makers",
      "Local SEO and Google Business optimization",
      "Automated follow-up and client nurture sequences",
    ],
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Banks, credit unions, insurance providers, financial advisors, and fintech companies.",
    color: "oklch(0.52 0.18 152)",
    colorBg: "oklch(0.52 0.18 152 / 0.12)",
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
    opportunities: [
      "AI-optimized product listings and SEO",
      "Paid search and shopping campaigns",
      "Email marketing and customer lifecycle automation",
      "Conversion rate optimization",
    ],
  },
];

export function Opportunities() {
  return (
    <section id="how-we-help" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Who We Help
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            Browse by industry to see the specific ways we help businesses like
            yours grow, automate, and compete.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <FadeInStaggerItem key={industry.title} className="min-h-[366px]">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

                {/* Colored header — icon + title live here */}
                <div
                  className="flex items-center gap-3 px-5 py-4"
                  style={{ backgroundColor: industry.colorBg }}
                >
                  <industry.icon
                    className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: industry.color }}
                  />
                  <h3
                    className="text-sm font-semibold leading-snug"
                    style={{ color: industry.color }}
                  >
                    {industry.title}
                  </h3>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <p className="text-sm text-muted-foreground">
                    {industry.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {industry.opportunities.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div
                          className="mt-0.5 flex-shrink-0 rounded-full p-0.5"
                          style={{ backgroundColor: industry.colorBg, color: industry.color }}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <p className="text-muted-foreground">
            Don&apos;t see your industry?{" "}
            <a href="#contact" className="font-medium text-primary hover:underline">
              Let&apos;s talk — we&apos;ve likely worked in your space.
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
