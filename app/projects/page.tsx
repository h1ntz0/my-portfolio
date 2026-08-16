import type { Metadata } from "next";
import { Github, ArrowUpRight } from "lucide-react";

import { buildMetadata } from "@/lib/site";
import { repos } from "@/content/github";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Real projects on my GitHub.",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Things I've built"
        description="Real projects straight from my GitHub. I build these, I test them, and I keep the source public so you can look at how I actually work."
      />

      <Section>
        <p className="text-muted-foreground">
          A few of these are small and experimental, a few are more complete.
          What they have in common is that they&apos;re real: real code, real
          bugs, and real lessons. Click any repo to open the source on GitHub.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50"
            >
              <Github className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5 font-medium">
                  {repo.name}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {repo.description}
                </span>
                <span className="mt-2 flex flex-wrap gap-1.5">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="mono rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </span>
              </span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
