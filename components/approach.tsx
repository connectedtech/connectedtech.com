import { Search, Lightbulb, Rocket } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We start with a free strategy call to understand your business, your goals, and where AI can make the biggest difference. No assumptions, just listening.",
  },
  {
    icon: Lightbulb,
    title: "Design",
    description:
      "We build a focused plan with clear priorities and measurable outcomes. You\u2019ll know exactly what we\u2019re doing and why before we start.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description:
      "We execute, measure, and optimize. Working campaigns and real results \u2014 not slide decks. And we stay engaged to keep improving.",
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
            Getting started is simple. Every engagement follows the same clear
            path \u2014 no surprises, no bloated onboarding.
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
      </div>
    </section>
  );
}
