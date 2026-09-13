"use client";

import { Github, ArrowUpRight } from "lucide-react";

import { repos, githubProfile } from "@/content/github";
import { useLang } from "@/components/lang-provider";

/**
 * Index section. Rows, not cards, so it reads differently from the grid on the
 * Work page where the same repositories appear at full size.
 */
export function GitHubSection() {
  const { t, lang } = useLang();
  const isId = lang === "id";

  return (
    <div data-reveal>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="measure">
          <h2 className="h2">{t("gh_title")}</h2>
          <p className="lead mt-4 text-muted-foreground">{t("gh_desc")}</p>
        </div>
        <a
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Github className="h-4 w-4" />
          @h1ntz0
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <ul className="mt-10 border-t border-border">
        {repos.map((repo) => (
          <li key={repo.name}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1 border-b border-border py-4 transition-colors hover:bg-secondary/40 sm:grid-cols-[1fr_1.6fr_auto] sm:items-baseline sm:gap-8 sm:px-2"
            >
              <span className="h3 flex items-center gap-2">
                {repo.name}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </span>
              <span className="body-text text-muted-foreground">
                {isId && repo.descriptionId ? repo.descriptionId : repo.description}
              </span>
              <span className="label text-accent">{repo.language ?? "Tool"}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
