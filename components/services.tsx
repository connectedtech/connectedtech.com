import { Workflow, LayoutDashboard, Bot, Check } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { SectionHeader } from "@/components/section-header";

const services = [
  {
    icon: Workflow,
    title: "Workflow automation",
    description:
      "Connect the tools you already use and remove the re-keying, chasing, and copy-paste between them.",
    examples: [
      "Order, quote, and invoice handoffs",
      "Intake, approvals, and request routing",
      "Reports that build themselves",
      "Document and contract generation",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Custom business software",
    description:
      "Replace per-seat subscriptions and side spreadsheets with an application built around your process — owned by you.",
    examples: [
      "Operations and job tracking",
      "Scheduling and dispatch",
      "Client and vendor portals",
      "Quoting and estimating tools",
    ],
  },
  {
    icon: Bot,
    title: "AI inside your workflows",
    description:
      "Practical AI built into your systems, with people approving the decisions that matter.",
    examples: [
      "Pulling data out of documents",
      "Drafting replies, summaries, and proposals",
      "Sorting and routing incoming requests",
      "Searching your own records",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            eyebrow="Services"
            title="Fewer tools. Less manual work. Systems that fit."
            summary="Three ways we help — usually in combination."
          />
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <FadeInStaggerItem
              key={service.title}
              className="flex flex-col rounded-lg border border-border border-t-4 border-t-primary bg-card p-6 md:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground">
                Typical projects
              </p>
              <ul className="mt-3 space-y-2">
                {service.examples.map((example) => (
                  <li key={example} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    {example}
                  </li>
                ))}
              </ul>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        {/* Secondary services — still offered, no longer the lead */}
        <FadeIn className="mt-6">
          <div className="flex flex-col gap-4 rounded-lg bg-tint px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-foreground">Also available: websites &amp; digital marketing</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Site builds, SEO, and campaigns — often alongside the systems work, so leads land
                directly in the tools your team uses.
              </p>
            </div>
            <a href="#contact" className="shrink-0 text-sm font-semibold text-primary underline-offset-4 hover:underline">
              Ask about it &rarr;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
