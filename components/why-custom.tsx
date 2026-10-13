import { Users, Layers, ArrowLeftRight, GitFork, Cpu, ShieldCheck } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import { SectionHeader } from "@/components/section-header";

const problems = [
  {
    icon: Users,
    title: "Per-seat pricing that grows with every hire",
    body: "Costs climb with headcount and annual price increases, whether or not the tool got any better.",
  },
  {
    icon: Layers,
    title: "Paying for features you'll never use",
    body: "Most teams use a fraction of what they pay for — and still keep side spreadsheets for what's missing.",
  },
  {
    icon: ArrowLeftRight,
    title: "Your team is the integration layer",
    body: "When systems don't talk, people re-key orders, chase updates, and copy data between screens.",
  },
  {
    icon: GitFork,
    title: "Your process bends to fit the software",
    body: "You work around the vendor's assumptions, and their roadmap decides what changes.",
  },
];

export function WhyCustom() {
  return (
    <section id="why-custom" className="scroll-mt-20 bg-tint px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            eyebrow="Why custom"
            title="Off-the-shelf software was built for everyone. That's the problem."
            summary="Four signs your software is costing more than it should."
          />
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <FadeInStaggerItem key={p.title} className="rounded-lg border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold leading-snug text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        {/* The math — simple arithmetic, labeled as an example */}
        <FadeIn className="mt-6">
          <div className="grid gap-6 rounded-lg bg-primary p-8 text-primary-foreground md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-10">
            <div>
              <p className="text-sm font-medium text-primary-foreground/80">Example: one tool, 40 people</p>
              <p className="mt-1 text-4xl font-semibold tracking-tight tabular-nums md:text-5xl">$21,600 / year</p>
            </div>
            <p className="leading-relaxed text-primary-foreground/90 md:text-lg">
              40 people &times; $45 per seat per month &mdash; every year, rising with each hire and
              each price increase. Software you own has no per-seat fee, so adding people costs nothing.
            </p>
          </div>
        </FadeIn>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <FadeIn className="rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Cpu className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Why custom is practical now</h3>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Custom software used to mean six-figure budgets and year-long timelines. We rebuild only
              the parts of a product you actually use, AI speeds up the build, and an experienced
              developer reviews and tests every change.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">When we&apos;ll tell you not to build</h3>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Accounting, payroll, email &mdash; some software should stay bought. We replace what
              doesn&apos;t fit, connect what does, and say so plainly when a subscription is the better deal.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
