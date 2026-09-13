"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";

import { repos } from "@/content/github";
import { cn } from "@/lib/utils";
import { useLang } from "@/components/lang-provider";
import { BrowserVisual } from "@/components/qa/browser-visual";

/**
 * Media section. Alternating full width blocks with a rule between them. The
 * language tag replaces the old ordinal, which only restated the order.
 */
export function SelectedWork() {
  const { t, lang } = useLang();
  const isId = lang === "id";
  const featured = repos.filter((r) => r.featured).slice(0, 3);

  return (
    <div data-reveal>
      <div className="measure">
        <h2 className="h2">{t("work_title")}</h2>
        <p className="lead mt-4 text-muted-foreground">{t("work_desc")}</p>
      </div>

      <div className="mt-14 border-t border-border">
        {featured.map((repo, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={repo.name}
              className="grid gap-8 border-b border-border py-12 lg:grid-cols-2 lg:items-center lg:gap-16"
            >
              <div className={cn(reverse && "lg:order-2")}>
                <div className="flex items-center gap-3">
                  <span className="label text-accent">{repo.language ?? "Tool"}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                <h3 className="h2 mt-4">{repo.name}</h3>

                <p className="body-text mt-4 max-w-md text-muted-foreground">
                  {isId && repo.descriptionId ? repo.descriptionId : repo.description}
                </p>

                <p className="mono mt-5 text-xs text-muted-foreground">
                  {repo.topics.join("  ·  ")}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline"
                  >
                    {t("work_view_github")}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  {repo.liveUrl && (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent hover:underline"
                    >
                      {t("work_view_live")}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className={cn(reverse && "lg:order-1")}>
                <a
                  href={repo.liveUrl ?? repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-200 hover:-translate-y-1"
                  aria-label={`Open ${repo.name} ${repo.liveUrl ? "live site" : "on GitHub"}`}
                >
                  <BrowserVisual
                    accent={i === 0}
                    url={
                      repo.liveUrl
                        ? repo.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                        : repo.url.replace("https://github.com/", "")
                    }
                    subtitle={repo.topics[0] ?? "GitHub"}
                    title={repo.name}
                    tags={repo.topics.slice(0, 4)}
                    image={repo.image}
                    alt={repo.alt}
                  />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
