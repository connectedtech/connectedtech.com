import { Factory, HeartPulse, Briefcase } from "lucide-react";
import { FadeInStagger, FadeInStaggerItem, FadeIn } from "@/components/motion-wrapper";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
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
  return (
    <section
      id="how-we-help"
      className="bg-muted/50 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How We Help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AI-infused marketing looks different depending on your industry.
            Here&apos;s what it means for the businesses we work with.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-8 md:grid-cols-3">
          {industries.map((industry) => (
            <FadeInStaggerItem key={industry.title}>
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {industry.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {industry.opportunities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.3} className="mt-12 text-center">
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
