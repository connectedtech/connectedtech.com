import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Illustrative stack review — shows the offer at a glance. Figures are examples, not client data.
const stack = [
  { tool: "Project management", cost: "$11,520", action: "Replace" },
  { tool: "Field service scheduling", cost: "$18,000", action: "Replace" },
  { tool: "Quote → invoice handoff", cost: "6 hrs / week", action: "Automate" },
  { tool: "CRM", cost: "$7,200", action: "Keep" },
  { tool: "Weekly reporting spreadsheet", cost: "4 hrs / week", action: "Automate" },
];

const actionStyle: Record<string, string> = {
  Replace: "bg-primary text-primary-foreground",
  Automate: "bg-primary/10 text-primary",
  Keep: "bg-muted text-muted-foreground",
};

export function Hero() {
  return (
    <section className="border-b border-border px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Workflow automation &middot; Custom business software
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground text-balance md:text-[3.5rem]">
            Software built around how your business actually works.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We automate the manual work slowing your team down and replace expensive,
            ill-fitting subscriptions with custom tools you own &mdash; delivered in
            small phases and adapted as your business changes.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#contact">
                Start a conversation
                <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#process">See how engagements work</a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No budget forms, no sales process. A short message is enough to get started.
          </p>
        </div>

        {/* Example stack review */}
        <div className="min-w-0 rounded-lg border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-border px-4 py-3.5 sm:px-5">
            <p className="text-sm font-medium text-foreground">Software &amp; workflow review</p>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Example</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-3 py-2.5 sm:px-5 font-normal">Tool / process</th>
                <th className="px-3 py-2.5 sm:px-5 font-normal">Annual cost</th>
                <th className="px-3 py-2.5 sm:px-5 text-right font-normal">Plan</th>
              </tr>
            </thead>
            <tbody>
              {stack.map((row) => (
                <tr key={row.tool} className="border-t border-border">
                  <td className="px-3 py-3 sm:px-5 text-foreground">{row.tool}</td>
                  <td className="px-3 py-3 sm:whitespace-nowrap sm:px-5 font-mono text-muted-foreground tabular-nums">{row.cost}</td>
                  <td className="px-3 py-3 sm:px-5 text-right">
                    <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${actionStyle[row.action]}`}>
                      {row.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-t border-border bg-muted px-4 py-3.5 sm:px-5 text-sm text-muted-foreground">
            Every engagement starts with a review like this &mdash; so you know what to build,
            what to automate, and what to leave alone.
          </div>
        </div>
      </div>
    </section>
  );
}
