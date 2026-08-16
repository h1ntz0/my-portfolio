import type { Metadata } from "next";

import { buildMetadata, site } from "@/lib/site";
import { certifications } from "@/content/profile";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MethodologyAccordion, RiskMatrix } from "@/components/sections/methodology";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "QA Tester focused on finding defects before users do, and documenting every result with evidence.",
});

const focus = [
  "Manual & functional testing",
  "API validation",
  "UI automation",
  "Regression & smoke suites",
  "Defect documentation",
  "SQL / database validation",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A QA engineer who treats testing as engineering."
        description="I do not just claim to know quality. I show the process, the evidence, and the result."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              {site.name}
              <span className="text-accent">.qa</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I test software to find problems early, document them clearly, and
              verify that fixes actually work. My work covers functional and
              regression testing, API validation, database checks, and building
              automation that runs in CI.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every claim on this site points to evidence: a test case, a bug
              report, an API check, or a test run. If a number is a demo
              execution, I say so. That is how I want my own quality to be
              judged.
            </p>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-accent">
              What I focus on
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {focus.map((f) => (
                <Badge key={f} variant="outline">
                  {f}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="h-fit">
            <CardContent className="p-6">
              <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
                Snapshot
              </p>
              <dl className="mt-3 space-y-3 text-sm">
                <Row label="Role" value={site.role} />
                <Row label="Location" value={site.location} />
                <Row label="Email" value={site.email} />
              </dl>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading
          eyebrow="How I Test"
          title="My methodology"
          description="A repeatable process from understanding requirements to improving the process."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <MethodologyAccordion />
          <RiskMatrix />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Compact list with issuer, year, and credential."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.name} className="h-full">
              <CardContent className="p-5">
                <h3 className="text-sm font-semibold leading-snug">{cert.name}</h3>
                <p className="mt-1 text-xs text-accent">{cert.issuer} · {cert.year}</p>
                <p className="mt-3 text-xs text-muted-foreground">{cert.description}</p>
                {cert.credential && (
                  <p className="mono mt-3 text-[11px] text-muted-foreground">
                    {cert.credential}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-0.5 font-medium">{value}</dd>
    </div>
  );
}
