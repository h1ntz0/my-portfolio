"use client";

import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";

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
        <p className="text-muted-foreground">
          {t("projects_intro")}
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50"
            >
              {repo.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted/20">
                  <Image
                    src={repo.image}
                    alt={repo.alt || repo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 items-start gap-3 p-5">
                <Github className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    {repo.name}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {repo.description}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-1.5">
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
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
