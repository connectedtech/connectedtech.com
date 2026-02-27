"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FadeInStagger, FadeInStaggerItem, FadeIn } from "@/components/motion-wrapper";

const stats = [
  { value: "15+", label: "Years in digital marketing & strategy" },
  { value: "100%", label: "Client retention rate" },
  { value: "200+", label: "Projects delivered" },
  { value: "9", label: "Industries served" },
];

function AnimatedNumber({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return <>{value}</>;

  const target = parseInt(match[1]);
  const suffix = match[2];

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    const duration = 1600;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic — fast start, satisfying slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Results() {
  return (
    <section id="results" className="bg-muted/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built on Real Experience
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
                  <AnimatedNumber value={stat.value} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
