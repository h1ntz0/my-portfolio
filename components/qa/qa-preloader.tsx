"use client";

import * as React from "react";
import { CheckCircle2, Terminal } from "lucide-react";

export function QaPreloader() {
  const [mounted, setMounted] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [logIndex, setLogIndex] = React.useState(0);
  const [done, setDone] = React.useState(false);

  const logs = [
    { prefix: "RUN", text: "Initializing QA test runner...", status: "ok" },
    { prefix: "PASS", text: "API & GraphQL contracts valid [200 OK]", status: "ok" },
    { prefix: "PASS", text: "PostgreSQL schema & constraints checked", status: "ok" },
    { prefix: "PASS", text: "Playwright E2E suites passing (0 defects)", status: "ok" },
    { prefix: "DONE", text: "All assertions green. Rendering workspace...", status: "ok" },
  ];

  React.useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
          }, 350);
          return 100;
        }
        const next = prev + 25;
        setLogIndex(Math.min(Math.floor((next / 100) * logs.length), logs.length - 1));
        return next;
      });
    }, 220);

    return () => clearInterval(interval);
  }, [logs.length]);

  if (!mounted || done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-opacity duration-300 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md mx-4 rounded-lg border border-border bg-card p-5 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="mono flex items-center gap-1.5 text-xs text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-accent" />
            qa-runner --suite=all
          </div>
        </div>

        {/* Live log messages */}
        <div className="mt-4 space-y-2 font-mono text-xs min-h-[110px]">
          {logs.slice(0, logIndex + 1).map((log) => (
            <div key={log.text} className="flex items-center gap-2 text-foreground/90 animate-fade-in-up">
              <span className={`px-1 py-0.5 rounded text-[10px] font-bold ${
                log.prefix === "PASS" || log.prefix === "DONE"
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "bg-accent/10 text-accent"
              }`}>
                {log.prefix}
              </span>
              <span className="truncate">{log.text}</span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-5 space-y-1.5">
          <div className="flex justify-between text-xs font-mono text-muted-foreground">
            <span>EXECUTING SUITES</span>
            <span className="text-accent font-semibold">{progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-accent transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
