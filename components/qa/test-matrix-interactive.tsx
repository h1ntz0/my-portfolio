"use client";

import { useState } from "react";
import { CheckCircle, Cpu, Play, RotateCcw } from "lucide-react";

interface TestLog {
  time: string;
  suite: string;
  target: string;
  status: "PASS" | "FAIL" | "WARN";
  latency: string;
}

export function TestMatrixInteractive() {
  const [activeTab, setActiveTab] = useState<"e2e" | "api" | "load">("e2e");
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<TestLog[]>([
    { time: "10:42:01", suite: "Auth Workflow", target: "POST /api/v1/auth/login", status: "PASS", latency: "42ms" },
    { time: "10:42:02", suite: "Form Validation", target: "Edge case: SQLi payload string", status: "PASS", latency: "18ms" },
    { time: "10:42:04", suite: "Responsive Grid", target: "Viewport 375px (Mobile-first)", status: "PASS", latency: "128ms" },
    { time: "10:42:05", suite: "E2E Cart Checkout", target: "Playwright chromium headless", status: "PASS", latency: "1.12s" },
  ]);

  const triggerRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setLogs((prev) => [
        {
          time: new Date().toLocaleTimeString(),
          suite: "Ad-hoc Regression",
          target: "Visual DOM Diff: Header Nav",
          status: "PASS",
          latency: "64ms",
        },
        ...prev.slice(0, 4),
      ]);
      setIsRunning(false);
    }, 1200);
  };

  return (
    <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold tracking-tight">Interactive QA Reliability Suite</h3>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Execute dynamic test simulations against target validation endpoints.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={triggerRun}
            disabled={isRunning}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-accent px-4 text-xs font-semibold text-accent-foreground transition-all hover:bg-accent/90 disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <RotateCcw className="h-3.5 w-3.5 animate-spin" />
                <span>Running Specs...</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Execute Matrix</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex gap-2 border-b border-border/40 pb-2">
        {(["e2e", "api", "load"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              activeTab === tab
                ? "bg-secondary text-foreground border border-border/60"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab === "e2e" ? "E2E Automation" : tab === "api" ? "API Contract" : "Chaos / Load"}
          </button>
        ))}
      </div>

      {/* Terminal Live Output Console */}
      <div className="mt-4 overflow-hidden rounded-xl border border-border/70 bg-background/80 p-4 font-mono text-xs">
        <div className="flex items-center justify-between text-muted-foreground border-b border-border/40 pb-2 text-[11px]">
          <span>TIMESTAMP</span>
          <span className="hidden sm:inline">SUITE // RUNTIME</span>
          <span>TARGET SPECS</span>
          <span>RESULT</span>
        </div>

        <div className="mt-3 space-y-2">
          {logs.map((log, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-2 py-1 text-muted-foreground transition-all hover:text-foreground"
            >
              <span className="mono text-[11px] text-muted-foreground/80">{log.time}</span>
              <span className="hidden sm:inline text-foreground/90 font-medium">{log.suite}</span>
              <span className="truncate max-w-[180px] sm:max-w-xs text-muted-foreground">{log.target}</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="mono text-[10px] text-muted-foreground">{log.latency}</span>
                <span className="mono inline-flex items-center gap-1 rounded bg-success/15 px-1.5 py-0.5 text-[10px] font-semibold text-success">
                  <CheckCircle className="h-3 w-3" />
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
