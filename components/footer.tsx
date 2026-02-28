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
              <linearGradient id="footer-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="oklch(0.55 0.22 260)"/>
                <stop offset="100%" stopColor="oklch(0.75 0.22 140)"/>
              </linearGradient>
            </defs>
            {/* Outer ring — nodes connected to each other */}
            <line x1="16" y1="4.5" x2="27.5" y2="16" stroke="url(#footer-grad)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="27.5" y1="16" x2="16" y2="27.5" stroke="url(#footer-grad)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="16" y1="27.5" x2="4.5" y2="16" stroke="url(#footer-grad)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="4.5" y1="16" x2="16" y2="4.5" stroke="url(#footer-grad)" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Spokes — hub to outer nodes */}
            <line x1="16" y1="7" x2="16" y2="12.5" stroke="url(#footer-grad)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="19.5" y1="16" x2="25" y2="16" stroke="url(#footer-grad)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="16" y1="19.5" x2="16" y2="25" stroke="url(#footer-grad)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="7" y1="16" x2="12.5" y2="16" stroke="url(#footer-grad)" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="3.5" fill="url(#footer-grad)"/>
            <circle cx="16" cy="4.5" r="2.5" fill="url(#footer-grad)"/>
            <circle cx="27.5" cy="16" r="2.5" fill="url(#footer-grad)"/>
            <circle cx="16" cy="27.5" r="2.5" fill="url(#footer-grad)"/>
            <circle cx="4.5" cy="16" r="2.5" fill="url(#footer-grad)"/>
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
