"use client";

import Image from "next/image";
import { Github, ArrowUpRight, Sparkles, Terminal } from "lucide-react";

import { repos } from "@/content/github";
import { useLang } from "@/components/lang-provider";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";

export function ProjectsClient() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        eyebrow={t("projects_eyebrow")}
        title={t("projects_title")}
        description={t("projects_desc")}
      />

      <Section>
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          {t("projects_intro")}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {repos.map((repo) => (
            <article
              key={repo.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
            >
              {repo.image ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted/30">
                  <Image
                    src={repo.image}
                    alt={repo.alt || repo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {repo.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-[10px] font-mono font-medium text-accent-foreground backdrop-blur-md">
                      <Sparkles className="h-3 w-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative aspect-[16/9] w-full flex flex-col justify-between border-b border-border bg-gradient-to-br from-secondary/60 via-card to-background p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-mono text-foreground border border-border">
                      <Terminal className="h-3.5 w-3.5 text-accent" />
                      <span>{repo.language ?? "Tool"}</span>
                    </div>
                    {repo.featured && (
                      <div className="flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-[10px] font-mono font-medium text-accent-foreground backdrop-blur-md">
                        <Sparkles className="h-3 w-3" />
                        <span>Featured QA Tool</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl font-semibold font-mono tracking-tight text-foreground group-hover:text-accent">
                      {repo.name}
                    </h3>
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-lg tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {repo.name}
                    </h3>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent hover:bg-secondary/50 shrink-0"
                      aria-label={`Open ${repo.name} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="mono rounded-md bg-secondary/60 border border-border/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline ml-auto"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
