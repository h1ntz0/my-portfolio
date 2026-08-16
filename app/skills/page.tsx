import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { SkillGroups, SkillToProjectHint } from "@/components/sections/skills";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description:
    "QA skills grouped by discipline, each tied to the projects they were used in.",
});

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools & skills"
        title="The tools I use, tied to real work"
        description="No invented percentages. Each skill is grouped by discipline and linked to the projects it came from."
      />
      <Section>
        <SkillGroups />
        <SkillToProjectHint />
      </Section>
    </>
  );
}
