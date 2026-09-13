"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import type { TranslationKey } from "@/lib/i18n";
import { useLang } from "@/components/lang-provider";
import { Container } from "@/components/layout/container";

const socials = [
  { label: "GitHub", href: site.links.github, icon: Github },
  { label: "LinkedIn", href: site.links.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${site.links.email}`, icon: Mail },
];

const pages: { href: string; labelKey: TranslationKey }[] = [
  { href: "/projects", labelKey: "nav_work" },
  { href: "/skills", labelKey: "nav_skills" },
  { href: "/experience", labelKey: "nav_experience" },
  { href: "/about", labelKey: "nav_about" },
  { href: "/resume", labelKey: "nav_resume" },
  { href: "/contact", labelKey: "nav_contact" },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/70 bg-card">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="h3">{site.brand}</p>
          <p className="body-text measure mt-3 text-muted-foreground">
            {t("footer_tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between lg:justify-end lg:gap-16">
          <nav aria-label="Footer">
            <ul className="space-y-2.5">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(page.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="space-y-2.5">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border/60">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {site.name}</span>
          <span className="mono">{t("footer_note")}</span>
        </Container>
      </div>
    </footer>
  );
}
