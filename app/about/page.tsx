import type { Metadata } from "next";

import { buildMetadata } from "@/lib/site";
import { AboutClient } from "@/components/about/about-client";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "QA Tester focused on finding defects before users do, and documenting every result with evidence.",
});

export default function AboutPage() {
  return <AboutClient />;
}
