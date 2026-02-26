import { Search, Lightbulb, Rocket } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { Headshot } from "@/components/headshot";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We start by understanding your business — your workflows, pain points, and goals. No assumptions, just listening.",
  },
  {
    icon: Lightbulb,
    title: "Design",
    description:
      "We map the opportunities to practical solutions with clear ROI. You'll know exactly what we're building and why.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description:
      "We implement, test, and refine. You get working solutions, not slide decks. And we stick around to make sure they work.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple, transparent, effective. Every engagement follows the same
            proven path.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeInStaggerItem key={step.title}>
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  Step {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        {/* About / Bio */}
        <FadeIn className="mt-20">
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 md:p-12">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <div className="flex-shrink-0">
                <Headshot />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Steve Danforth
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  Founder, Connected Technologies
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  I started in network administration, spent 15+ years leading
                  digital transformation for healthcare organizations, and now
                  help businesses across industries harness AI to work smarter.
                  Connected Technologies is backed by a network of seasoned
                  specialists — we&apos;re small enough to be nimble, experienced
                  enough to be trusted.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
