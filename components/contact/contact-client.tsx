"use client";

import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/contact/contact-form";
import { useLang } from "@/components/lang-provider";

export function ContactClient() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        title={t("contact_page_title")}
        description={t("contact_page_desc")}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <ContactMethod
              icon={Mail}
              label="Email"
              value={site.email}
              href={`mailto:${site.email}`}
            />
            <ContactMethod
              icon={Linkedin}
              label="LinkedIn"
              value="in/arrofizeinabdillah66"
              href={site.links.linkedin}
              external
            />
            <ContactMethod
              icon={Github}
              label="GitHub"
              value="github.com/h1ntz0"
              href={site.links.github}
              external
            />

            <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {site.location}
            </p>
          </div>

          <div>
            <h2 className="h2">{t("contact_form_heading")}</h2>
            <p className="body-text mt-3 text-muted-foreground">
              {t("contact_fallback")}
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactMethod({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 border-b border-border py-4 transition-colors hover:border-accent/50"
    >
      <Icon className="h-4 w-4 shrink-0 text-accent" />
      <span className="min-w-0 flex-1">
        <span className="label block text-muted-foreground">{label}</span>
        <span className="mt-1 block truncate text-sm font-medium">{value}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
    </a>
  );
}
