"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-ai/30 bg-brand-ai/10 px-4 py-1.5 text-sm font-medium text-foreground">
            <Sparkles className="h-4 w-4 text-brand-ai" />
            AI-Powered Digital Solutions
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl md:leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Grow.{" "}
          <span className="text-primary">Build.</span>{" "}
          <span className="text-brand-ai">Automate.</span>
          <br />
          <span className="text-muted-foreground">Powered by AI.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We bring the tools today&apos;s most competitive businesses use — and
          handle the technical side so you don&apos;t have to.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" variant="cta" asChild className="group">
            <a href="#contact">
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#approach">See How We Work</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
