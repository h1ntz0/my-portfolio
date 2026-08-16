import { Github, Linkedin, Mail } from "lucide-react";

import { site } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

const socials = [
  { label: "GitHub", href: site.links.github, icon: Github },
  { label: "LinkedIn", href: site.links.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${site.links.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="mono text-sm font-semibold">
              {site.name}
              <span className="text-accent">.qa</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              QA Tester focused on finding defects before users do, and
              documenting every result with evidence.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. Built to demonstrate how I build quality into software.</p>
          <p className="mono">manual · api · automation · database</p>
        </div>
      </Container>
    </footer>
  );
}
