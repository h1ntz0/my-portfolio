"use client";

import * as React from "react";

import type { ApiEndpoint } from "@/lib/types";
import { cn } from "@/lib/utils";
import { MethodBadge } from "@/components/qa/status-badge";

export function ApiShowcase({ endpoints }: { endpoints: ApiEndpoint[] }) {
  const [selected, setSelected] = React.useState<ApiEndpoint>(endpoints[0]);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="overflow-hidden rounded-lg border">
        <p className="border-b bg-muted/50 px-4 py-3 text-sm font-medium">
          Endpoints
        </p>
        <ul className="divide-y">
          {endpoints.map((ep) => (
            <li key={ep.id}>
              <button
                onClick={() => setSelected(ep)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-muted/40",
                  selected.id === ep.id && "bg-muted/60"
                )}
                aria-pressed={selected.id === ep.id}
              >
                <MethodBadge method={ep.method} />
                <code className="flex-1 truncate font-mono text-xs">
                  {ep.path}
                </code>
                <span
                  className={cn(
                    "mono text-xs font-semibold",
                    ep.status === 200 ? "text-success" : "text-destructive"
                  )}
                >
                  {ep.status}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-lg border bg-card">
        <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
          <span className="mono text-sm font-semibold">
            {selected.method} <span className="text-accent">{selected.path}</span>
          </span>
          <span className="mono text-xs text-muted-foreground">{selected.scenario}</span>
        </div>
        <div className="grid grid-cols-2 gap-px bg-border">
          <Stat label="Status" value={`${selected.status} ${selected.status === 200 ? "OK" : ""}`} tone={selected.status === 200 ? "success" : "destructive"} />
          <Stat label="Response Time" value={`${selected.responseTimeMs} ms`} />
          <Stat label="Assertions" value={`${selected.assertions}`} />
          <Stat label="Passed" value={`${selected.passed} / ${selected.assertions}`} tone="success" />
        </div>
        <div className="border-t p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="mono uppercase tracking-wide text-muted-foreground">Assertion Pass Rate</span>
            <span className="mono font-semibold text-success">
              {Math.round((selected.passed / selected.assertions) * 100)}%
            </span>
          </div>
          <div
            className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={Math.round((selected.passed / selected.assertions) * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-success"
              style={{ width: `${(selected.passed / selected.assertions) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "success" | "destructive";
}) {
  return (
    <div className="bg-card p-4">
      <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p
        className={cn(
          "mono mt-1 text-lg font-semibold",
          tone === "success" && "text-success",
          tone === "destructive" && "text-destructive"
        )}
      >
        {value}
      </p>
    </div>
  );
}
