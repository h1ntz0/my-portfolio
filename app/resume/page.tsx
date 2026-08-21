import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ResumeClient } from "@/components/resume/resume-client";

export const metadata: Metadata = {
  title: "CV",
  description: `Download ${site.name}'s QA CV as a PDF.`,
};

export default function ResumePage() {
  return <ResumeClient />;
}
