"use client";

import * as React from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [errors, setErrors] = React.useState<Errors>({});
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Name is required.";
    if (!email) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!subject) next.subject = "Subject is required.";
    if (!message) {
      next.message = "Message is required.";
    } else if (message.length < 20) {
      next.message = "Message must be at least 20 characters.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = encodeURIComponent(message);
    const mailto = `mailto:arrofi.zein12@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {sent && (
        <div className="rounded-md border border-success/40 bg-success/10 px-4 py-3 text-sm text-success">
          Opening your email client. Your message will be addressed to me.
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" error={errors.name} autoComplete="name" />
        <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
      </div>
      <Field label="Subject" name="subject" type="text" error={errors.subject} />
      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1.5 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Tell me about the role or project..."
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" variant="accent">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className="mt-1.5"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
