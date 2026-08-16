import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <p className="mono text-sm text-muted-foreground">{project.applicationType}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {project.name}
      </h3>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.testingTypes.slice(0, 4).map((t) => (
          <span
            key={t}
            className="mono rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read case study
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
