import type { Metadata } from "next";

import { buildMetadata } from "@/lib/site";
import { ProjectsClient } from "@/components/projects/projects-client";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Real projects on my GitHub.",
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}
