"use client";

import * as React from "react";

import type { Project, ProjectCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/qa/project-card";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Manual Testing",
  "Automation",
  "API Testing",
  "Database",
  "Web Testing",
];

export function ProjectListing({ projects }: { projects: Project[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<(typeof categories)[number]>("All");

  const filtered = projects.filter((p) => {
    const matchesQuery =
      query.trim() === "" ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      category === "All" || p.categories.includes(category);
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                category === c
                  ? "border-transparent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:bg-secondary"
              )}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
        <Input
          type="search"
          placeholder="Search projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search projects"
          className="max-w-xs"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          No projects found. Try changing your filter.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
