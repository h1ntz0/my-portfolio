"use client";

import Image from "next/image";
import { Github, ArrowUpRight, Terminal, ExternalLink } from "lucide-react";

import { repos } from "@/content/github";
import { useLang } from "@/components/lang-provider";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";

export function ProjectsClient() {
  const { t, lang } = useLang();
  const isId = lang === "id";

  return (
    <>
      <PageHeader title={t("projects_title")} description={t("projects_desc")} />

      <Section>
        <p className="body-text measure text-muted-foreground">
          {t("projects_intro")}
        </p>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {repos.map((repo) => (
            <article key={repo.name} className="group flex flex-col">
              {repo.image ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-muted/20">
                  <Image
                    src={repo.image}
                    alt={repo.alt || repo.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/10] w-full flex-col justify-between rounded-lg border border-border bg-muted/20 p-6">
                  <span className="label flex items-center gap-2 text-muted-foreground">
                    <Terminal className="h-3.5 w-3.5 text-accent" />
                    {repo.language ?? "Tool"}
                  </span>
                  <span className="mono text-lg font-medium tracking-tight">
                    {repo.name}
                  </span>
                </div>
              )}

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="h3">{repo.name}</h2>
                  {repo.featured && (
                    <span className="label shrink-0 text-accent">
                      {t("projects_featured")}
                    </span>
                  )}
                </div>

                <p className="body-text mt-3 text-muted-foreground">
                  {isId && repo.descriptionId ? repo.descriptionId : repo.description}
                </p>

                <p className="mono mt-4 text-xs text-muted-foreground">
                  {repo.topics.join("  ·  ")}
                </p>

                <div className="mt-5 flex items-center gap-5 border-t border-border pt-4">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline"
                  >
                    <Github className="h-3.5 w-3.5" />
                    {t("projects_view_repo")}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  {repo.liveUrl && (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent hover:underline"
                      aria-label={`Open ${repo.name} live site`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t("work_view_live")}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
