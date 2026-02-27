import { TrendingUp, PieChart, Scissors, Gem } from "lucide-react";
import { FadeInStagger, FadeInStaggerItem, FadeIn } from "@/components/motion-wrapper";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Grow Revenue",
    color: "oklch(0.65 0.18 150)",
    colorBg: "oklch(0.65 0.18 150 / 0.18)",
    description:
      "AI-powered campaigns that reach the right buyers, generate more qualified leads, and convert at a higher rate.",
  },
  {
    icon: PieChart,
    title: "Win Market Share",
    color: "oklch(0.68 0.18 220)",
    colorBg: "oklch(0.68 0.18 220 / 0.18)",
    description:
      "SEO, content, and paid media that expand your digital footprint and put you ahead of competitors.",
  },
  {
    icon: Scissors,
    title: "Reduce Costs",
    color: "oklch(0.70 0.17 75)",
    colorBg: "oklch(0.70 0.17 75 / 0.18)",
    description:
      "AI automation eliminates repetitive manual work so your team focuses on strategy over execution.",
  },
  {
    icon: Gem,
    title: "Improve Quality",
    color: "oklch(0.68 0.19 310)",
    colorBg: "oklch(0.68 0.19 310 / 0.18)",
    description:
      "Smarter targeting, stronger content, and data-driven optimization that raises the bar across your marketing.",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-brand-dark px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            How We Make a Difference
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Everything we do maps back to the metrics that matter most to your
            business.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <FadeInStaggerItem key={outcome.title}>
              <div className="group text-center">
                <div
                  className="mx-auto mb-4 inline-flex rounded-full p-3 transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: outcome.colorBg, color: outcome.color }}
                >
                  <outcome.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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
