"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";

type FieldState = "untouched" | "valid" | "invalid";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fields, setFields] = useState<{ name: FieldState; email: FieldState }>({
    name: "untouched",
    email: "untouched",
  });

  function validateField(field: "name" | "email", value: string) {
    if (field === "name") {
      setFields((prev) => ({ ...prev, name: value.trim() ? "valid" : "invalid" }));
    } else {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      setFields((prev) => ({ ...prev, email: ok ? "valid" : "invalid" }));
    }
  }

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
          data.error || "Something went wrong — please try again or email us directly."
        );
      }
    } catch {
      setError(
        "We couldn\u2019t reach our server. Check your connection and try again, or reach out to us directly."
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
            Let&apos;s Talk
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your business and what you want to achieve. We&apos;ll
            respond within one business day with a clear path forward.
          </p>
          <a
            href="tel:8102857000"
            className="mt-6 inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <Phone className="h-4 w-4" />
            (810) 285-7000
          </a>
        </FadeIn>

        <FadeIn delay={0.15}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
              >
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="mt-4 text-xl font-semibold text-foreground"
              >
                You&apos;re on our radar!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.38 }}
                className="mt-2 text-muted-foreground"
              >
                We&apos;ll be in touch within one business day with next steps.
                Looking forward to learning about your business.
              </motion.p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      required
                      onBlur={(e) => validateField("name", e.target.value)}
                      className={
                        fields.name === "valid"
                          ? "border-green-500 pr-9"
                          : fields.name === "invalid"
                          ? "border-destructive pr-9"
                          : ""
                      }
                    />
                    {fields.name === "valid" && (
                      <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
                    )}
                  </div>
                  {fields.name === "invalid" && (
                    <p className="text-xs text-destructive">Your name is required.</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      onBlur={(e) => validateField("email", e.target.value)}
                      className={
                        fields.email === "valid"
                          ? "border-green-500 pr-9"
                          : fields.email === "invalid"
                          ? "border-destructive pr-9"
                          : ""
                      }
                    />
                    {fields.email === "valid" && (
                      <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
                    )}
                  </div>
                  {fields.email === "invalid" ? (
                    <p className="text-xs text-destructive">
                      Check your email — looks like there may be a typo.
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground/60">No spam, ever.</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">
                  Company{" "}
                  <span className="text-xs font-normal text-muted-foreground/60">(optional)</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">What&apos;s going on, and what would a win look like?</Label>
                <Textarea
                  id="message"
                  name="message"
                  className="min-h-48 placeholder:text-muted-foreground/40"
                  placeholder={`e.g. "We're a 30-person B2B software company. Our leads have dried up — cost per lead doubled this year and we don't know if it's the ads, the SEO, or the messaging. We refreshed the site last year but nothing really moved. We want to figure this out before Q2. We're not looking to spend more, just use what we have better."`}
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
                    Let&apos;s Talk
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
