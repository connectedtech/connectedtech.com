import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { SectionHeader } from "@/components/section-header";

const phases = [
  {
    title: "Conversation",
    terms: "Free · 30 minutes",
    description:
      "Tell us what's slowing you down. We'll ask how work actually gets done today and give you an honest read on whether we can help.",
  },
  {
    title: "Workflow & software review",
    terms: "Fixed price · about 2 weeks",
    description:
      "We map your processes, your tools, and what they cost you in fees and hours. You get a prioritized plan — what to build, automate, or keep — that's yours whether or not we build it.",
  },
  {
    title: "First build",
    terms: "Fixed price per phase · a few weeks",
    description:
      "We ship the highest-value piece first and run it alongside your existing tool until your team is confident. You see the return before committing to more, and you can stop after any phase.",
  },
  {
    title: "Run & evolve",
    terms: "Monthly · no long-term contract",
    description:
      "Hosting, monitoring, support, and ongoing changes as your business shifts. The software keeps up with you instead of holding you back.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-tint px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            eyebrow="How engagements work"
            title="Small phases. Fixed prices. No big-bang projects."
            summary="You only ever commit to the next step, and every phase delivers something your team can use."
          />
        </FadeIn>

        <div className="relative mt-12">
          {/* Connector line behind the step numbers (desktop) */}
          <div className="absolute left-0 right-0 top-[2.6rem] hidden h-0.5 bg-primary/25 lg:block" aria-hidden="true" />

          <FadeInStagger className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, i) => (
              <FadeInStaggerItem key={phase.title} className="flex flex-col rounded-lg border border-border bg-card p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{phase.title}</h3>
                <span className="mt-2 self-start rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {phase.terms}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{phase.description}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
