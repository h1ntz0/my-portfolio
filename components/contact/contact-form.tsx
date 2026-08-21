"use client";

import * as React from "react";
import { Send } from "lucide-react";

import { site } from "@/lib/site";
import { useLang } from "@/components/lang-provider";
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
  const { t, lang } = useLang();
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
    if (!name) next.name = lang === "id" ? "Nama wajib diisi." : "Name is required.";
    if (!email) {
      next.email = lang === "id" ? "Email wajib diisi." : "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = lang === "id" ? "Masukkan format email yang valid." : "Enter a valid email address.";
    }
    if (!subject) next.subject = lang === "id" ? "Subjek wajib diisi." : "Subject is required.";
    if (!message) {
      next.message = lang === "id" ? "Pesan wajib diisi." : "Message is required.";
    } else if (message.length < 20) {
      next.message = lang === "id" ? "Pesan minimal 20 karakter." : "Message must be at least 20 characters.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = encodeURIComponent(message);
    const mailto = `mailto:${site.links.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {sent && (
        <div className="rounded-md border border-success/40 bg-success/10 px-4 py-3 text-sm text-success">
          {lang === "id"
            ? "Membuka email client. Pesan akan dialamatkan ke email saya."
            : "Opening your email client. Your message will be addressed to me."}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("contact_name")} name="name" type="text" error={errors.name} autoComplete="name" />
        <Field label={t("contact_email_label")} name="email" type="email" error={errors.email} autoComplete="email" />
      </div>
      <Field label={t("contact_subject")} name="subject" type="text" error={errors.subject} />
      <div>
        <Label htmlFor="message">{t("contact_message")}</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1.5 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder={t("contact_placeholder_msg")}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" variant="accent">
        <Send className="h-4 w-4" />
        {t("contact_send")}
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
