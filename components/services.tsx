import { Brain, BarChart3, Code2 } from "lucide-react";
import { FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Enablement",
    description:
      "We assess your operations, identify high-impact AI opportunities, and build a practical roadmap to get you there. From automation to intelligent workflows — we go from assessment to production, not just strategy decks.",
    accent: true,
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "SEO, content strategy, paid media, and analytics — enhanced with AI tools that give you an edge. 15 years of driving measurable results for organizations that need marketing to actually move the needle.",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Modern, fast, conversion-focused websites and web applications built with the latest frameworks. Your digital presence should work as hard as your team does.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three disciplines, one thread: AI amplifies everything we touch.
          </p>
        </div>

        <FadeInStagger className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <FadeInStaggerItem key={service.title}>
              <div
                className={`group relative rounded-xl border p-8 transition-all duration-300 hover:shadow-lg ${
                  service.accent
                    ? "border-primary/20 bg-primary/[0.03]"
                    : "border-border bg-card"
                } hover:border-primary/30`}
              >
                <div
                  className={`mb-5 inline-flex rounded-lg p-3 ${
                    service.accent
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  } transition-colors`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
