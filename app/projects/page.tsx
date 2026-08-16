import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import { projects } from "@/content/projects";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { ProjectListing } from "@/components/projects/project-listing";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Evidence-driven QA case studies covering manual, automation, API, and database testing.",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected QA Work"
        title="Projects & Case Studies"
        description="Every project shows the scope, strategy, test cases, defects found, and automation approach."
      />
      <Section>
        <ProjectListing projects={projects} />
      </Section>
    </>
  );
}
