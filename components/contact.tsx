"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Phone, Send, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";

// ── Types ─────────────────────────────────────────────────────────────────────

type FieldState = "untouched" | "valid" | "invalid";
type Tab = "intake" | "general";

// ── Pill selector (shared between radio and multi-select) ─────────────────────

function PillOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150 ${
        selected
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

// ── Success card ──────────────────────────────────────────────────────────────

function SuccessCard({ heading, body }: { heading: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center"
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
        {heading}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.38 }}
        className="mt-2 text-muted-foreground"
      >
        {body}
      </motion.p>
    </motion.div>
  );
}

// ── Intake form (project sizing) ──────────────────────────────────────────────

const SERVICE_OPTIONS = [
  "AI Strategy & Integration",
  "Website or App",
  "Digital Marketing",
  "Workflow Automation",
  "Not sure yet",
];

const TIMELINE_OPTIONS = ["Right now", "1–3 months", "3–6 months", "Just exploring"];

const BUDGET_OPTIONS = [
  "Under $2,500/mo",
  "$2,500–$5,000/mo",
  "$5,000–$10,000/mo",
  "$10,000+/mo",
];

function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [attempted, setAttempted] = useState(false);

  // Text field validation states
  const [nameState, setNameState] = useState<FieldState>("untouched");
  const [emailState, setEmailState] = useState<FieldState>("untouched");

  // Selector states
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  }

  function validateName(v: string): FieldState {
    return v.trim() ? "valid" : "invalid";
  }
  function validateEmail(v: string): FieldState {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "valid" : "invalid";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAttempted(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const company = fd.get("company") as string;
    const phone = fd.get("phone") as string;
    const projectDescription = fd.get("projectDescription") as string;

    // Validate text fields
    const ns = validateName(name);
    const es = validateEmail(email);
    setNameState(ns);
    setEmailState(es);

    if (
      ns === "invalid" ||
      es === "invalid" ||
      !company.trim() ||
      selectedServices.length === 0 ||
      !timeline ||
      !budget ||
      !projectDescription.trim()
    ) {
      setError("Please complete all required fields before submitting.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "intake",
          name,
          email,
          company,
          phone: phone || undefined,
          services: selectedServices,
          timeline,
          budget,
          projectDescription,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            event_category: "contact",
            event_label: "project_intake",
            value: 5,
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
      <SuccessCard
        heading="We've got your project details."
        body="Expect to hear from us within one business day. We'll come back with a clear plan and next steps."
      />
    );
  }

  const sectionLabel = "text-sm font-semibold text-foreground";
  const groupError = "mt-1.5 text-xs text-destructive";

  return (
    <form onSubmit={handleSubmit} autoComplete="on" className="mt-8 space-y-7">
      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="i-name">Name</Label>
          <div className="relative">
            <Input
              id="i-name"
              name="name"
              autoComplete="name"
              required
              onBlur={(e) => {
                if (e.target.value.trim()) setNameState(validateName(e.target.value));
              }}
              onChange={(e) => {
                if (nameState === "invalid") setNameState(validateName(e.target.value));
              }}
              className={
                nameState === "valid"
                  ? "border-green-500 pr-9"
                  : nameState === "invalid"
                    ? "border-destructive pr-9"
                    : ""
              }
            />
            {nameState === "valid" && (
              <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
            )}
          </div>
          {nameState === "invalid" && (
            <p className="text-xs text-destructive">Your name is required.</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="i-email">Email</Label>
          <div className="relative">
            <Input
              id="i-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onBlur={(e) => {
                if (e.target.value.trim()) setEmailState(validateEmail(e.target.value));
              }}
              onChange={(e) => {
                if (emailState === "invalid") setEmailState(validateEmail(e.target.value));
              }}
              className={
                emailState === "valid"
                  ? "border-green-500 pr-9"
                  : emailState === "invalid"
                    ? "border-destructive pr-9"
                    : ""
              }
            />
            {emailState === "valid" && (
              <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
            )}
          </div>
          {emailState === "invalid" && (
            <p className="text-xs text-destructive">Check your email — looks like a typo.</p>
          )}
        </div>
      </div>

      {/* Company + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="i-company">Company</Label>
          <Input
            id="i-company"
            name="company"
            autoComplete="organization"
            required
            className={attempted && !document.querySelector<HTMLInputElement>("#i-company")?.value?.trim() ? "border-destructive" : ""}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="i-phone">
            Phone{" "}
            <span className="text-xs font-normal text-muted-foreground/60">(optional)</span>
          </Label>
          <Input
            id="i-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Services */}
      <div className="space-y-2.5">
        <p className={sectionLabel}>What are you looking to do?</p>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((s) => (
            <PillOption
              key={s}
              label={s}
              selected={selectedServices.includes(s)}
              onClick={() => toggleService(s)}
            />
          ))}
        </div>
        {attempted && selectedServices.length === 0 && (
          <p className={groupError}>Select at least one option.</p>
        )}
      </div>

      {/* Timeline */}
      <div className="space-y-2.5">
        <p className={sectionLabel}>When do you want to start?</p>
        <div className="flex flex-wrap gap-2">
          {TIMELINE_OPTIONS.map((t) => (
            <PillOption
              key={t}
              label={t}
              selected={timeline === t}
              onClick={() => setTimeline(t)}
            />
          ))}
        </div>
        {attempted && !timeline && (
          <p className={groupError}>Please select a timeline.</p>
        )}
      </div>

      {/* Budget */}
      <div className="space-y-2.5">
        <p className={sectionLabel}>Monthly investment range</p>
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((b) => (
            <PillOption
              key={b}
              label={b}
              selected={budget === b}
              onClick={() => setBudget(b)}
            />
          ))}
        </div>
        {attempted && !budget && (
          <p className={groupError}>Please select a budget range.</p>
        )}
      </div>

      {/* Project description */}
      <div className="space-y-2">
        <Label htmlFor="i-project">Tell us about your project</Label>
        <Textarea
          id="i-project"
          name="projectDescription"
          required
          className="min-h-36 placeholder:text-muted-foreground/40"
          placeholder="What's the situation? What would a win look like? The more context you give us, the faster we can respond with something useful."
        />
        {attempted && (
          <p className="text-xs text-muted-foreground/60">Required.</p>
        )}
      </div>

      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? (
          "Submitting…"
        ) : (
          <>
            Submit Project Inquiry
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

// ── General contact form ──────────────────────────────────────────────────────

function GeneralForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fields, setFields] = useState<{
    name: FieldState;
    email: FieldState;
    company: FieldState;
    message: FieldState;
  }>({ name: "untouched", email: "untouched", company: "untouched", message: "untouched" });

  function getNameState(v: string): FieldState {
    return v.trim() ? "valid" : "invalid";
  }
  function getEmailState(v: string): FieldState {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "valid" : "invalid";
  }

  function handleBlur(field: keyof typeof fields, value: string) {
    if (field === "name") {
      if (value.trim()) setFields((p) => ({ ...p, name: getNameState(value) }));
    } else if (field === "email") {
      if (value.trim()) setFields((p) => ({ ...p, email: getEmailState(value) }));
    } else {
      setFields((p) => ({ ...p, [field]: value.trim() ? "valid" : "untouched" }));
    }
  }

  function handleChange(field: "name" | "email", value: string) {
    setFields((p) => {
      if (p[field] !== "invalid") return p;
      // If they've cleared the field, remove the error rather than keeping it
      if (!value.trim()) return { ...p, [field]: "untouched" };
      return { ...p, [field]: field === "name" ? getNameState(value) : getEmailState(value) };
    });
  }

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
      <SuccessCard
        heading="You're on our radar!"
        body="We'll be in touch within one business day. Looking forward to learning more about your business."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="on" className="mt-8 space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="g-name">Name</Label>
          <div className="relative">
            <Input
              id="g-name"
              name="name"
              autoComplete="name"
              required
              onBlur={(e) => handleBlur("name", e.target.value)}
              onChange={(e) => handleChange("name", e.target.value)}
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
          <Label htmlFor="g-email">Email</Label>
          <div className="relative">
            <Input
              id="g-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onBlur={(e) => handleBlur("email", e.target.value)}
              onChange={(e) => handleChange("email", e.target.value)}
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
            <p className="text-xs text-destructive">Check your email — looks like a typo.</p>
          ) : (
            <p className="text-xs text-muted-foreground/60">No spam, ever.</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="g-company">
          Company{" "}
          <span className="text-xs font-normal text-muted-foreground/60">(optional)</span>
        </Label>
        <div className="relative">
          <Input
            id="g-company"
            name="company"
            autoComplete="organization"
            onBlur={(e) => handleBlur("company", e.target.value)}
            className={fields.company === "valid" ? "border-green-500 pr-9" : ""}
          />
          {fields.company === "valid" && (
            <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="g-message">What&apos;s going on?</Label>
        <Textarea
          id="g-message"
          name="message"
          required
          className={`min-h-48 placeholder:text-muted-foreground/40 ${fields.message === "valid" ? "border-green-500" : ""}`}
          placeholder={`e.g. "We're a 30-person B2B software company. Our leads have dried up — cost per lead doubled this year and we don't know if it's the ads, the SEO, or the messaging. We want to figure this out before Q2."`}
          onBlur={(e) => handleBlur("message", e.target.value)}
        />
      </div>

      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? (
          "Sending…"
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function Contact() {
  const [activeTab, setActiveTab] = useState<Tab>("intake");

  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let&apos;s Get to Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to start? Tell us about your project. Just exploring? Send us a message.
          </p>
        </FadeIn>

        {/* Tab switcher */}
        <FadeIn delay={0.1}>
          <div className="mt-8 flex rounded-xl border border-border bg-muted/40 p-1">
            <button
              onClick={() => setActiveTab("intake")}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeTab === "intake"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Start a Project
            </button>
            <button
              onClick={() => setActiveTab("general")}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeTab === "general"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Send a Message
            </button>
          </div>
        </FadeIn>

        {/* Forms */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {activeTab === "intake" ? <IntakeForm /> : <GeneralForm />}
          </motion.div>
        </AnimatePresence>

        {/* Phone — passive */}
        <FadeIn delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <motion.a
              href="tel:8102857000"
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
              initial="rest"
              whileHover="hover"
            >
              <motion.span
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: [0, -18, 18, -15, 15, -10, 10, 0], transition: { duration: 0.65 } },
                }}
              >
                <Phone className="h-3.5 w-3.5" />
              </motion.span>
              (810) 285-7000
            </motion.a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
