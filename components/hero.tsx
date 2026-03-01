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
          {/* Badge — hover to spin the sparkle */}
          <motion.div
            className="group mb-6 inline-flex cursor-default items-center gap-2 rounded-full border border-brand-ai/30 bg-brand-ai/10 px-4 py-1.5 text-sm font-medium text-foreground"
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <motion.span
              variants={{
                rest: { rotate: 0 },
                hover: { rotate: 360, transition: { duration: 0.5, ease: "easeInOut" } },
              }}
            >
              <Sparkles className="h-4 w-4 text-brand-ai" />
            </motion.span>
            <span className="transition-colors duration-300 group-hover:text-brand-ai">
              AI-Powered Marketing & Technology
            </span>
          </motion.div>
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
          <span className="text-xl text-muted-foreground md:text-3xl">Powered by AI.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Marketing that converts. Websites that connect. AI that compounds.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" asChild className="group">
            <a href="#contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#ai-in-action">See Where to Start</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
