"use client";

import * as React from "react";
import { CheckCircle2, Terminal } from "lucide-react";

export function QaPreloader() {
  const [mounted, setMounted] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [logIndex, setLogIndex] = React.useState(0);
  const [done, setDone] = React.useState(false);

  const logs = [
    { text: "Initializing QA Test Runner...", status: "ok" },
    { text: "Verifying API & GraphQL endpoints...", status: "ok" },
    { text: "Validating PostgreSQL schema & constraints...", status: "ok" },
    { text: "Executing Playwright E2E suites...", status: "ok" },
    { text: "Zero critical regressions found.", status: "ok" },
  ];

  React.useEffect(() => {
    // Only run on first load in session
    const hasLoaded = sessionStorage.getItem("qa_loaded");
    if (hasLoaded) {
      setDone(true);
      return;
    }

    setMounted(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            sessionStorage.setItem("qa_loaded", "true");
          }, 400);
          return 100;
        }
        const next = prev + 25;
        setLogIndex(Math.min(Math.floor((next / 100) * logs.length), logs.length - 1));
        return next;
      });
    }, 280);

    return () => clearInterval(interval);
  }, [logs.length]);

  if (!mounted || done) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md mx-4 rounded-xl border border-border bg-card p-6 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-warning/80" />
            <span className="h-3 w-3 rounded-full bg-success/80" />
          </div>
          <div className="mono flex items-center gap-1.5 text-xs text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-accent" />
            qa-runner --suite=all
          </div>
        </div>

        {/* Live log messages */}
        <div className="mt-4 space-y-2 font-mono text-xs min-h-[90px]">
          {logs.slice(0, logIndex + 1).map((log) => (
            <div key={log.text} className="flex items-center gap-2 text-foreground/90 animate-fade-in-up">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" />
              <span>{log.text}</span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-5 space-y-1.5">
          <div className="flex justify-between text-xs font-mono text-muted-foreground">
            <span>RUNNING SUITES</span>
            <span className="text-accent font-semibold">{progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
