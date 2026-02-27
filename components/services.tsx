import { BarChart3, Brain, Code2 } from "lucide-react";
import { FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";

const services = [
  {
    icon: BarChart3,
    title: "AI-Infused Digital Marketing",
    description:
      "SEO, content strategy, paid media, and analytics — all powered by AI tools that help us move faster, target smarter, and deliver better ROI. 15+ years of driving measurable results, now with AI built in from the start.",
    accent: true,
  },
  {
    icon: Brain,
    title: "AI Strategy & Integration",
    description:
      "We identify where AI can make the biggest difference in your marketing and operations, then build it in. Not strategy decks — working solutions you can see and measure from day one.",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Fast, modern, conversion-focused websites built with the latest frameworks. Your digital home base, designed to perform and built to grow with you.",
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
            Digital marketing at the core. AI woven through everything.
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
