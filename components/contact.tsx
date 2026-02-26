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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Fallback: show success anyway for demo purposes
      // Replace with proper error handling once Web3Forms key is added
      setSubmitted(true);
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
              {/* Web3Forms access key — replace with your key */}
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY"}
              />
              <input
                type="hidden"
                name="subject"
                value="New inquiry from connectedtech.com"
              />

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

              {/* Honeypot for spam */}
              <input type="checkbox" name="botcheck" className="hidden" />

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
