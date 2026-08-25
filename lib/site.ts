import type { Metadata } from "next";

export const site = {
  name: "Arrofi Zein Abdillah",
  brand: "Arrofi Zein Abdillah",
  firstName: "Arrofi",
  title: "Arrofi Zein Abdillah · Quality Assurance Tester & Linux System Enthusiast",
  role: "Quality Assurance Tester Intern & Linux Enthusiast",
  eyebrow: "QUALITY ASSURANCE / SYSTEM ENTHUSIAST",
  tagline: "I test software with evidence, not assumptions.",
  description:
    "Quality Assurance Tester with a passion for Linux systems and AI-driven automation. Experience in application support, manual testing, API validation, and test case design at WISECON.",
  email: "arrofi.zein12@gmail.com",
  location: "Jakarta, Indonesia",
  links: {
    github: "https://github.com/h1ntz0",
    linkedin: "https://www.linkedin.com/in/arrofizeinabdillah66/",
    email: "arrofi.zein12@gmail.com",
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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://arrofizein.vercel.app";

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
