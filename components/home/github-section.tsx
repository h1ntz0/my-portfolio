"use client";

import { Github, ArrowUpRight, FolderGit2 } from "lucide-react";

import { repos, githubProfile } from "@/content/github";
import { useLang } from "@/components/lang-provider";

export function GitHubSection() {
  const { t } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">{t("gh_num")}</span>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("gh_title")}
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{t("gh_desc")}</p>
          </div>
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-mono font-medium text-foreground transition-colors hover:border-accent hover:text-accent shrink-0"
          >
            <Github className="h-4 w-4" />
            <span>@h1ntz0 on GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:bg-card hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground group-hover:text-accent">
                    <FolderGit2 className="h-4 w-4 text-accent" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5 overflow-hidden">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="mono rounded-md bg-secondary/70 border border-border/60 px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="mono text-[10px] text-muted-foreground self-center">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>

                {repo.language && (
                  <span className="mono text-[11px] font-medium text-accent shrink-0">
                    {repo.language}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
