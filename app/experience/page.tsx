import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ExperienceTimeline } from "@/components/sections/experience";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description:
    "QA experience focused on outcomes: application testing, SQL validation, defect analysis, and automation.",
});

const careerPath = [
  "Learning",
  "First Testing Project",
  "Manual QA",
  "API Testing",
  "Automation",
  "QA Engineering",
];

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I&apos;ve built quality"
        description="Focus on outcomes and the testing activities behind each role."
      />

      <Section>
        <SectionHeading title="Career Timeline" />
        <Card className="mt-6">
          <CardContent className="p-6">
            <ol className="flex flex-wrap items-center gap-2">
              {careerPath.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-md border bg-muted/40 px-3 py-1.5 text-sm font-medium">
                    {step}
                  </span>
                  {i < careerPath.length - 1 && (
                    <span className="mono text-muted-foreground">→</span>
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </Section>

      <Section className="bg-card">
        <SectionHeading title="Roles" />
        <div className="mt-6">
          <ExperienceTimeline />
        </div>
      </Section>
    </>
  );
}
