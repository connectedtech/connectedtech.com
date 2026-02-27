import { BarChart3, Brain, Code2, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion-wrapper";

const services = [
  {
    icon: BarChart3,
    title: "AI-Infused Digital Marketing",
    description:
      "SEO, content strategy, paid media, and analytics powered by AI — helping us move faster, target smarter, and deliver better ROI.",
    bullets: [
      "SEO strategy and on-page optimization",
      "Paid media across Google, Meta, and LinkedIn",
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
      "Fast, modern, conversion-focused websites built with AI-assisted workflows — designed to perform, and built to grow with you.",
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

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.title} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:border-primary/30 hover:shadow-md">

                {/* Icon + AI chip */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="inline-flex rounded-xl bg-muted p-3 text-muted-foreground transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-brand-ai/10 px-2 py-0.5 text-xs font-semibold text-brand-ai">
                    <Sparkles className="h-3 w-3" />
                    <span>AI</span>
                  </div>
                </div>

                {/* Title — plain black */}
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
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

                {/* CTA — pinned to bottom */}
                <div className="mt-auto pt-8">
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <a href="#contact">
                      {service.cta}
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
