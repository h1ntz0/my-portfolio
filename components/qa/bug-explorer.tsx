"use client";

import * as React from "react";

import type { BugReport } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SeverityBadge, PriorityBadge, StatusBadge } from "@/components/qa/status-badge";
import { Separator } from "@/components/ui/separator";

const severityFilters = ["All", "Critical", "High", "Medium", "Low"] as const;
const statusFilters = ["All", "Open", "Fixed", "In Progress"] as const;

export function BugExplorer({ bugs }: { bugs: BugReport[] }) {
  const [severity, setSeverity] = React.useState<(typeof severityFilters)[number]>("All");
  const [status, setStatus] = React.useState<(typeof statusFilters)[number]>("All");
  const [selected, setSelected] = React.useState<BugReport | null>(null);

  const filtered = bugs.filter(
    (b) =>
      (severity === "All" || b.severity === severity) &&
      (status === "All" || b.status === status)
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterGroup label="Severity" options={severityFilters} value={severity} onChange={setSeverity} />
        <FilterGroup label="Status" options={statusFilters} value={status} onChange={setStatus} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((bug) => (
          <Card
            key={bug.id}
            data-bug={bug.id}
            className="transition-all hover:border-accent/40"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="mono text-xs font-semibold text-destructive">{bug.id}</span>
                <Badge variant="outline">{bug.status}</Badge>
              </div>
              <h3 className="mt-2 font-medium leading-snug">{bug.summary}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <SeverityBadge severity={bug.severity} />
                <PriorityBadge priority={bug.priority} />
              </div>
              <p className="mono mt-3 text-xs text-muted-foreground">{bug.environment}</p>
              <Button
                variant="link"
                className="mt-3 h-auto p-0 text-sm"
                onClick={() => setSelected(bug)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-6 text-sm text-muted-foreground">
          No defects match this filter.
        </p>
      )}

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl">
          {selected && <BugDetail bug={selected} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function BugDetail({ bug }: { bug: BugReport }) {
  const field = (label: string, value: React.ReactNode) => (
    <div>
      <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="mt-0.5 text-sm">{value}</div>
    </div>
  );
  return (
    <>
      <DialogHeader>
        <div className="flex items-center gap-2">
          <span className="mono text-xs font-semibold text-destructive">{bug.id}</span>
          <SeverityBadge severity={bug.severity} />
          <PriorityBadge priority={bug.priority} />
          <StatusBadge status={bug.status === "Fixed" ? "Fixed" : "Failed"} />
        </div>
        <DialogTitle className="pt-2">{bug.summary}</DialogTitle>
        <DialogDescription>{bug.project} · {bug.module}</DialogDescription>
      </DialogHeader>

      <div className="grid grid-cols-2 gap-4">
        {field("Environment", bug.environment)}
        {field("Module", bug.module)}
        {field("Preconditions", bug.preconditions ?? "None")}
        {field("Status", bug.status)}
      </div>

      <Separator />

      <div>
        <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">Steps to Reproduce</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          {bug.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {field("Expected Result", bug.expected)}
        {field("Actual Result", bug.actual)}
      </div>

      {bug.rootCause && field("Root Cause", bug.rootCause)}
      {bug.regressionResult && field("Regression Result", bug.regressionResult)}
    </>
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
      <span className="mono pl-2 text-[11px] uppercase tracking-wide text-muted-foreground">{label}</span>
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
