import type { Metadata } from "next";

export const site = {
  name: "Arrofi Zein Abdillah",
  brand: "Arrofi",
  title: "Arrofi Zein Abdillah · QA Tester & QA Automation Engineer",
  role: "QA Tester / QA Automation Engineer",
  eyebrow: "QUALITY ASSURANCE / SOFTWARE TESTING",
  tagline: "I test software with evidence, not assumptions.",
  description:
    "QA Tester focused on functional testing, API validation, automation, and finding defects before users do.",
  email: "arrofizeinabdillah66@gmail.com",
  location: "Jakarta, Indonesia",
  links: {
    github: "https://github.com/h1ntz0",
    linkedin: "https://www.linkedin.com/in/arrofizeinabdillah66/",
    email: "arrofizeinabdillah66@gmail.com",
  },
  resumeUrl: "/resume",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/testing-lab", label: "Testing Lab" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://benn.example.com";

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: site.title,
      template: `%s · ${site.name}`,
    },
    description: site.description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      siteName: site.name,
      title: site.title,
      description: site.description,
    },
    twitter: {
      card: "summary",
      title: site.title,
      description: site.description,
    },
    ...overrides,
  };
}
