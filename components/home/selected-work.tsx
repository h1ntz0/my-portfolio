import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";
import { BrowserVisual } from "@/components/qa/browser-visual";

const projectUrl = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + ".app";

export function SelectedWork() {
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">02</span>
      <div>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Selected work
          </h2>
          <p className="mt-3 text-muted-foreground">
            A few things I&apos;ve tested, automated, broken, and learned from.
          </p>
        </div>

        <div className="mt-10 space-y-16 sm:space-y-20">
          {projects.map((project, i) => {
            const reverse = i % 2 === 1;
            const large = i === 2;
            return (
              <article
                key={project.slug}
                className={cn(
                  "grid gap-8",
                  large
                    ? "lg:grid-cols-1"
                    : "lg:grid-cols-2 lg:items-center"
                )}
              >
                <div
                  className={cn(
                    !large && reverse && "lg:order-2"
                  )}
                >
                  <p className="mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.categories.slice(0, 4).map((c) => (
                      <span
                        key={c}
                        className="mono rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline"
                  >
                    Read case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className={cn(!large && reverse && "lg:order-1")}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block transition-transform duration-200 hover:-translate-y-1"
                    aria-label={`Read the ${project.name} case study`}
                  >
                    <BrowserVisual
                      accent={i === 0}
                      url={projectUrl(project.name)}
                      subtitle={project.applicationType}
                      title={project.name}
                      tags={project.testingTypes.slice(0, 4)}
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
