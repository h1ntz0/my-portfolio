import type { Metadata } from "next";

import { buildMetadata } from "@/lib/site";
import { SkillsClient } from "@/components/skills/skills-client";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description:
    "QA skills grouped by discipline, each tied to the work it came from.",
});

export default function SkillsPage() {
  return <SkillsClient />;
}
