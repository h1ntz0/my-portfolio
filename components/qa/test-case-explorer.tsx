"use client";

import * as React from "react";

import type { TestCase } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/qa/status-badge";

const typeFilters = ["All", "Functional", "Regression", "Smoke", "Negative", "Boundary", "API", "Automation"] as const;
const statusFilters = ["All", "Passed", "Failed", "Blocked", "Skipped"] as const;

export function TestCaseExplorer({ cases }: { cases: TestCase[] }) {
  const [query, setQuery] = React.useState("");
  const [type, setType] = React.useState<(typeof typeFilters)[number]>("All");
  const [status, setStatus] = React.useState<(typeof statusFilters)[number]>("All");

  const filtered = cases.filter((tc) => {
    const matchesQuery =
      query.trim() === "" ||
      tc.title.toLowerCase().includes(query.toLowerCase()) ||
      tc.id.toLowerCase().includes(query.toLowerCase());
    const matchesType = type === "All" || tc.type === type;
    const matchesStatus = status === "All" || tc.status === status;
    return matchesQuery && matchesType && matchesStatus;
  });

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Input
          type="search"
          placeholder="Search test cases..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search test cases"
          className="max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          <FilterGroup
            label="Type"
            options={typeFilters}
            value={type}
            onChange={setType}
          />
          <FilterGroup
            label="Status"
            options={statusFilters}
            value={status}
            onChange={setStatus}
          />
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">List of test cases</caption>
            <thead className="border-b bg-muted/50">
              <tr>
                <th scope="col" className="mono px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">ID</th>
                <th scope="col" className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Title</th>
                <th scope="col" className="hidden px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground md:table-cell">Type</th>
                <th scope="col" className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Priority</th>
                <th scope="col" className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filtered.map((tc) => (
                <tr key={tc.id} className="transition-colors hover:bg-muted/40">
                  <td className="mono px-4 py-3 text-xs text-accent">{tc.id}</td>
                  <td className="px-4 py-3">
                    <span className="block">{tc.title}</span>
                    <span className="mono mt-0.5 block text-[11px] text-muted-foreground">{tc.project}</span>
                  </td>
                  <td className={cn("hidden px-4 py-3 md:table-cell")}>{tc.type}</td>
                  <td className="mono px-4 py-3 text-xs">{tc.priority}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={tc.status} dot />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="mt-6 text-sm text-muted-foreground">
          No test cases found. Try changing your filter.
        </p>
      )}
      <p className="mono mt-4 text-xs text-muted-foreground">
        {filtered.length} of {cases.length} test cases shown
      </p>
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex max-w-full flex-wrap items-center gap-1 rounded-md border p-1">
      <span className="mono pl-2 text-[11px] uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "rounded px-2 py-1 text-xs font-medium transition-colors",
            value === opt
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-muted"
          )}
          aria-pressed={value === opt}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
