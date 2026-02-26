import { Factory, HeartPulse, Briefcase } from "lucide-react";
import { FadeInStagger, FadeInStaggerItem, FadeIn } from "@/components/motion-wrapper";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
    opportunities: [
      "Predictive maintenance that reduces downtime before it happens",
      "Automated quality inspection using computer vision",
      "Supply chain optimization and demand forecasting",
      "Intelligent process documentation and training",
      "Automated reporting and compliance workflows",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    opportunities: [
      "Patient engagement and communication automation",
      "Clinical workflow optimization",
      "Documentation and coding assistance",
      "Reputation management and review response",
      "Personalized marketing for service lines",
    ],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    opportunities: [
      "Document processing and intelligent extraction",
      "Client communication automation",
      "Proposal and report generation",
      "Knowledge management and internal search",
      "Lead qualification and CRM enrichment",
    ],
  },
];

export function Opportunities() {
  return (
    <section
      id="opportunities"
      className="bg-muted/50 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where AI Can Move the Needle
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every business has untapped AI opportunities. Here are some of the
            most impactful ones we see across industries.
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
            Not sure where to start?{" "}
            <a
              href="#contact"
              className="font-medium text-primary hover:underline"
            >
              That&apos;s exactly what our first conversation is for.
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
