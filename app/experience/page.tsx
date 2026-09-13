import type { Metadata } from "next";

import { buildMetadata } from "@/lib/site";
import { ExperienceClient } from "@/components/experience/experience-client";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description: "Two QA roles, with the testing work inside each one.",
});

export default function ExperiencePage() {
  return <ExperienceClient />;
}
