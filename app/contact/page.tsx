import type { Metadata } from "next";

import { buildMetadata } from "@/lib/site";
import { ContactClient } from "@/components/contact/contact-client";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch about QA and automation opportunities.",
});

export default function ContactPage() {
  return <ContactClient />;
}
