import { Plus } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { SectionHeader } from "@/components/section-header";

const faqs = [
  {
    q: "Who owns the software?",
    a: "You do, and it's in writing. The code lives in a repository in your account, it runs on hosting in your name, and your data stays yours. There's no license to renew and nothing to hand back if we stop working together.",
  },
  {
    q: "What happens if you're not around?",
    a: "We build on mainstream, widely used technology and document as we go, so any competent developer can pick the system up. Ownership of the code, hosting, and data means you're never locked in to us.",
  },
  {
    q: "Do we have to replace everything at once?",
    a: "No — and we'd advise against it. We start with the one workflow or tool that costs you the most, run the new version alongside the old one until your team is confident, then cancel the subscription. Then we move to the next one, if it makes sense.",
  },
  {
    q: "How much does it cost?",
    a: "Each phase is scoped and priced before it starts, so there are no open-ended invoices. The review gives you a clear estimate for each piece, alongside what you currently spend on subscriptions and manual work, so you can judge the return before committing.",
  },
  {
    q: "Who handles maintenance, security, and backups?",
    a: "An optional monthly plan covers hosting, monitoring, updates, backups, and small changes. Access controls and encryption are standard, and your data isn't used to train AI models.",
  },
  {
    q: "Can it work with the tools we're keeping?",
    a: "Yes. Most business software — accounting, CRM, email, payments — has an API we can connect to, so new tools fit into what you already use rather than adding another silo.",
  },
  {
    q: "Do you still do websites and marketing?",
    a: "Yes. They're no longer what we lead with, but we build websites and run SEO and campaigns — often connected to the systems work so new leads land straight in the tools your team uses.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <FadeIn>
          <SectionHeader
            eyebrow="FAQ"
            title="Ownership, cost, and what happens after launch."
          />
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Something else on your mind?{" "}
            <a href="#contact" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
              Just ask.
            </a>
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border-t border-border">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-foreground hover:text-primary [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus className="h-5 w-5 flex-none text-primary transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="-mt-1 pb-6 pr-10 leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
