"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <motion.div
          className="flex cursor-default items-center gap-2.5"
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="footer-grad" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="oklch(0.55 0.22 260)"/>
                <stop offset="100%" stopColor="oklch(0.75 0.22 140)"/>
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="9" stroke="url(#footer-grad)" strokeWidth="2.5"/>
            <circle cx="20" cy="20" r="9" stroke="url(#footer-grad)" strokeWidth="2.5"/>
          </svg>
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
