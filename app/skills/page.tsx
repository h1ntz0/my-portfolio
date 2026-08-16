import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SkillGroups, SkillToProjectHint } from "@/components/sections/skills";
import { MetricGrid } from "@/components/qa/metric-grid";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description:
    "QA skills grouped by discipline, each tied to the projects they were used in.",
});

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Skills with evidence, not percentages"
        description="No subjective progress bars. Every skill is grouped by discipline and linked to the work it came from."
      />

      <Section>
        <SectionHeading title="Disciplines" />
        <div className="mt-6">
          <SkillGroups />
          <SkillToProjectHint />
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading title="Coverage Summary" />
        <div className="mt-6">
          <MetricGrid
            columns={4}
            metrics={[
              { label: "Testing Disciplines", value: "6", detail: "manual, regression, smoke, exploratory, integration, UAT" },
              { label: "Automation Frameworks", value: "3", detail: "Playwright, Cypress, Selenium" },
              { label: "API Tools", value: "Postman", detail: "REST, JSON, HTTP" },
              { label: "Databases", value: "2", detail: "MySQL, SQL Server" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
