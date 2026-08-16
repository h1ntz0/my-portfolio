import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

import { buildMetadata, site } from "@/lib/site";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch about QA and automation opportunities.",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let&apos;s Talk About Quality"
        description="Available for QA and QA automation opportunities. Reach out through email, LinkedIn, or the form below."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <ContactMethod
              icon={Mail}
              label="Email"
              value={site.email}
              href={`mailto:${site.email}`}
            />
            <ContactMethod
              icon={Linkedin}
              label="LinkedIn"
              value="in/benn"
              href={site.links.linkedin}
              external
            />
            <ContactMethod
              icon={Github}
              label="GitHub"
              value="github.com/benn"
              href={site.links.github}
              external
            />
            <Card>
              <CardContent className="flex items-center gap-3 p-5">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Based in {site.location}
                </span>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <SectionHeading title="Send a message" />
            <div className="mt-6">
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
      className="group flex items-center gap-4 rounded-lg border bg-card p-4 transition-all hover:border-accent/40"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
        <Icon className="h-4 w-4 text-accent" />
      </span>
      <span className="flex-1">
        <span className="mono block text-[11px] uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        <span className="block text-sm font-medium">{value}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
    </a>
  );
}
