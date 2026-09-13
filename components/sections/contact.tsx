"use client";

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { useLang } from "@/components/lang-provider";

export function ContactSection() {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="measure">
        <h2 className="h2">{t("contact_title")}</h2>
        <p className="lead mt-4 text-muted-foreground">{t("contact_desc")}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${site.links.email}`}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Mail className="h-4 w-4" />
          {t("contact_email")}
        </a>
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-1.5 rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-1.5 rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <Github className="h-4 w-4" />
          GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
