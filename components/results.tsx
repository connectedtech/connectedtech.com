import { FadeInStagger, FadeInStaggerItem, FadeIn } from "@/components/motion-wrapper";

const stats = [
  { value: "15+", label: "Years in digital strategy" },
  { value: "40%", label: "Average increase in digital engagement" },
  { value: "200+", label: "Projects delivered" },
  { value: "6", label: "Industries served" },
];

export function Results() {
  return (
    <section id="results" className="bg-muted/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Results That Speak
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We measure success in outcomes, not outputs.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <FadeInStaggerItem key={stat.label}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        {/* Testimonial placeholder */}
        <FadeIn delay={0.2} className="mt-16">
          <blockquote className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground italic">
              &ldquo;Connected Technologies transformed how we think about our
              digital presence. They didn&apos;t just build what we asked for — they
              showed us what was possible.&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium text-foreground">
              — Client Testimonial
              <span className="block text-muted-foreground">
                Placeholder — update with real testimonial
              </span>
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
