import { TrendingUp, Target, Zap, Star } from "lucide-react";
import { FadeInStagger, FadeInStaggerItem, FadeIn } from "@/components/motion-wrapper";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Grow Revenue",
    description:
      "AI-powered campaigns that reach the right buyers, generate more qualified leads, and convert at a higher rate.",
  },
  {
    icon: Target,
    title: "Win Market Share",
    description:
      "SEO, content, and paid media that expand your digital footprint and put you ahead of competitors.",
  },
  {
    icon: Zap,
    title: "Reduce Costs",
    description:
      "AI automation eliminates repetitive manual work so your team focuses on strategy — not execution.",
  },
  {
    icon: Star,
    title: "Improve Quality",
    description:
      "Smarter targeting, better content, and data-driven optimization that raises the bar across your marketing.",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-primary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Four Outcomes. One Agency.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Everything we do maps back to the metrics that matter most to your
            business.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <FadeInStaggerItem key={outcome.title}>
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-white/10 p-3 text-white">
                  <outcome.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {outcome.description}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
