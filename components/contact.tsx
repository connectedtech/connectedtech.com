"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
      botcheck: formData.get("botcheck") as string,
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

        // Fire GA4 conversion event for ad campaign tracking
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            event_category: "contact",
            event_label: payload.company || "no company",
            value: 1,
          });
        }
      } else {
        setError(
          data.error || "Something went wrong. Please try again or email us directly."
        );
      }
    } catch {
      setError(
        "We couldn\u2019t send your message. Please try again or reach out to us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let&apos;s Start a Conversation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us a bit about your business and what you&apos;re looking to
            achieve. We&apos;ll get back to you within one business day.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          {submitted ? (
            <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                Message received!
              </h3>
              <p className="mt-2 text-muted-foreground">
                We&apos;ll be in touch within one business day. Looking forward to
                learning about your business.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals or challenges..."
                  rows={5}
                  required
                />
              </div>

              {/* Honeypot for spam — hidden from real users */}
              <input type="checkbox" name="botcheck" className="hidden" />

              {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
