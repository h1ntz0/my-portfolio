import { Github, Linkedin, Mail, ArrowUpRight, ArrowRight } from "lucide-react";

import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">08</span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Got a QA opportunity?
        </h2>
        <p className="mt-3 max-w-md text-muted-foreground">
          I&apos;m always open to discussing QA, testing projects, and
          opportunities.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.links.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Mail className="h-4 w-4" />
            Email me
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-md border px-5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-md border px-5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
