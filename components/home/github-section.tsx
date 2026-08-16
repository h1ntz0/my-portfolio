"use client";

import { Github, ArrowUpRight } from "lucide-react";

import { repos, githubProfile } from "@/content/github";
import { useLang } from "@/components/lang-provider";

export function GitHubSection() {
  const { t } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">{t("gh_num")}</span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t("gh_title")}
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">{t("gh_desc")}</p>

        <div className="mt-7 space-y-3">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/50"
            >
              <Github className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5 text-sm font-medium">
                  {repo.name}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="mt-0.5 block text-sm text-muted-foreground">
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

        <a
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline"
        >
          {t("gh_view")}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
