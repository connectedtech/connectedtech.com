"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { SectionHeader } from "@/components/section-header";

const nextSteps = [
  {
    title: "We reply within one business day",
    body: "A real reply from the person who'd do the work — not an autoresponder.",
  },
  {
    title: "A 30-minute call",
    body: "No prep or slides needed. Walk us through how work gets done today and where it hurts.",
  },
  {
    title: "A clear first step",
    body: "If there's a fit, you get a short written proposal for a first phase with a fixed price. If there isn't, we'll say so and point you somewhere useful.",
  },
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      formType: "general",
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      company: fd.get("company") as string,
      phone: (fd.get("phone") as string) || undefined,
      message: fd.get("message") as string,
      botcheck: fd.get("botcheck") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        form.reset();
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            event_category: "contact",
            event_label: payload.company || "no company",
            value: 1,
          });
        }
      } else {
        setError(data.error || "Something went wrong — please try again.");
      }
    } catch {
      setError("Couldn't reach our server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-8">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">Message received.</h3>
        <p className="mt-2 text-muted-foreground">
          You&apos;ll hear back within one business day to set up a time to talk.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="on" className="space-y-6 rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-name">Name</Label>
          <Input id="c-name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-email">Work email</Label>
          <Input id="c-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-company">
            Company <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input id="c-company" name="company" autoComplete="organization" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-phone">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input id="c-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-message">What&apos;s slowing your team down?</Label>
        <Textarea
          id="c-message"
          name="message"
          required
          className="min-h-36 placeholder:text-muted-foreground/60"
          placeholder="A sentence or two is plenty. e.g. “We pay for three tools that don’t talk to each other, and someone re-keys every order into our accounting system.”"
        />
      </div>

      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

      {error && (
        <p className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-tint px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <FadeIn>
          <SectionHeader
            eyebrow="Get started"
            title="Tell us what's slowing you down."
            summary="You don't need a spec, a budget, or a timeline to reach out. Describe the problem in plain language and we'll take it from there."
          />

          <ol className="mt-10 space-y-6">
            {nextSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{i + 1}</span>
                <div>
                  <p className="font-semibold text-foreground">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-muted-foreground">
            Prefer the phone?{" "}
            <a href="tel:8102857000" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
              (810) 285-7000
            </a>
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
