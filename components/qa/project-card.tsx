import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function ProjectCard({ project }: { project: Project }) {
  const { metrics } = project;
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
    >
      <Card className="h-full overflow-hidden border transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:shadow-md">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="mono text-xs uppercase tracking-wide text-muted-foreground">
                {project.applicationType}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {project.name}
              </h3>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.categories.map((c) => (
              <Badge key={c} variant="outline">
                {c}
              </Badge>
            ))}
          </div>

          <Separator className="my-5" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Metric label="Test Cases" value={String(metrics.testCases)} />
            <Metric label="Defects" value={String(metrics.defects)} />
            <Metric
              label="Automated"
              value={`${metrics.automated} / ${metrics.testCases}`}
            />
            <Metric label="Pass Rate" value={`${metrics.passRate}%`} />
          </div>

          <p className="mt-5 text-sm text-muted-foreground">{project.summary}</p>

          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
            View Case Study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mono text-lg font-semibold text-foreground">{value}</p>
      <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
