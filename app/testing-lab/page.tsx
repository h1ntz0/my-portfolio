import type { Metadata } from "next";

import { buildMetadata } from "@/lib/site";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { TestingLabClient } from "@/components/qa/testing-lab-client";

export const metadata: Metadata = buildMetadata({
  title: "Testing Lab",
  description:
    "Interactive QA Command Center: live test case matrix execution, verified API simulator, and defect root-cause analysis.",
});

export default function TestingLabPage() {
  return (
    <>
      <PageHeader
        eyebrow="Interactive Proof-of-Work"
        title="QA Testing Lab"
        description="Explore real test executions, run API assertions live in your browser, and inspect defect root causes across projects."
      />
      <Section>
        <TestingLabClient />
      </Section>
    </>
  );
}
