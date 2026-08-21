"use client";

import { ArrowUpRight } from "lucide-react";

import { repos } from "@/content/github";
import { cn } from "@/lib/utils";
import { useLang } from "@/components/lang-provider";
import { BrowserVisual } from "@/components/qa/browser-visual";

const domain = (url: string) =>
  url.replace("https://github.com/", "");

export function SelectedWork() {
  const { t } = useLang();
  const featured = repos.filter((r) => r.featured).slice(0, 3);

  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">02</span>
      <div>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("work_title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("work_desc")}</p>
        </div>

        <div className="mt-10 space-y-16 sm:space-y-20">
          {featured.map((repo, i) => {
            const reverse = i % 2 === 1;
            const large = i === 2;
            return (
              <article
                key={repo.name}
                className={cn(
                  "grid gap-8",
                  large ? "lg:grid-cols-1" : "lg:grid-cols-2 lg:items-center"
                )}
              >
                <div className={cn(!large && reverse && "lg:order-2")}>
                  <p className="mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {repo.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 4).map((c) => (
                      <span
                        key={c}
                        className="mono rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                    {repo.description}
                  </p>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline"
                  >
                    View on GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className={cn(!large && reverse && "lg:order-1")}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform duration-200 hover:-translate-y-1"
                    aria-label={`Open ${repo.name} on GitHub`}
                  >
                    <BrowserVisual
                      accent={i === 0}
                      url={domain(repo.url)}
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
    </div>
  );
}
