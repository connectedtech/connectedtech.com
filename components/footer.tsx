"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <motion.div
          className="flex cursor-default items-center gap-2"
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <span className="text-lg font-bold tracking-tight text-foreground">
            Connected<span className="text-primary">Tech</span>
          </span>
        </motion.div>

        <a
          href="tel:8102857000"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          (810) 285-7000
        </a>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Connected Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
