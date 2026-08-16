import type { Metadata } from "next";
import { Github, ArrowUpRight } from "lucide-react";

import { buildMetadata } from "@/lib/site";
import { repos } from "@/content/github";
import { projects } from "@/content/projects";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { ProjectListing } from "@/components/projects/project-listing";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Real projects on my GitHub, plus sample QA testing case studies that show how I test.",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Things I've built"
        description="Real projects live on my GitHub. Below them, some sample testing case studies that show how I approach QA."
      />

      <Section>
        <h2 className="text-xl font-semibold tracking-tight">On GitHub</h2>
        <p className="mt-2 text-muted-foreground">
          The repos I actually work on, straight from my profile.
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

      <Section className="bg-card">
        <h2 className="text-xl font-semibold tracking-tight">
          Sample testing case studies
        </h2>
        <p className="mt-2 text-muted-foreground">
          These are example projects I built to demonstrate QA methodology.
          The metrics are sample values, not real client work.
        </p>
        <div className="mt-6">
          <ProjectListing projects={projects} />
        </div>
      </Section>
    </>
  );
}
