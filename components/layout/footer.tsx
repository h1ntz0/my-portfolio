"use client";

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { useLang } from "@/components/lang-provider";
import { Container } from "@/components/layout/container";

const socials = [
  { label: "GitHub", href: site.links.github, icon: Github },
  { label: "LinkedIn", href: site.links.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${site.links.email}`, icon: Mail },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/70 bg-card">
      <Container className="flex flex-col gap-8 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            {site.name}
            <span className="text-accent">.qa</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {t("footer_tagline")}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
              {label}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ))}
        </div>
      </Container>
      <div className="border-t border-border/60">
        <Container className="py-5 text-xs text-muted-foreground">
          © 2026 {site.name}. {t("footer_copyright")}
        </Container>
      </div>
    </footer>
  );
}
