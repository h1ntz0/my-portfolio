"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ShieldCheck, Activity, Cpu, Layers, Terminal } from "lucide-react";

interface Step {
  id: string;
  name: string;
  tool: string;
  duration: string;
  status: "pending" | "running" | "passed";
}

export function CommandPipeline3D() {
  const [activeStep, setActiveStep] = useState(0);
  const steps: Step[] = [
    { id: "1", name: "Static AST & Types", tool: "TypeScript 5.7", duration: "120ms", status: "passed" },
    { id: "2", name: "Unit & Security Audit", tool: "Vitest + SAST", duration: "340ms", status: "passed" },
    { id: "3", name: "API Contract Regression", tool: "Newman / REST", duration: "480ms", status: "passed" },
    { id: "4", name: "End-to-End Test Matrix", tool: "Playwright Core", duration: "1.42s", status: "running" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-lg select-none">
      {/* 3D Isometric container with subtle perspective */}
      <div 
        className="relative rounded-2xl border border-border/80 bg-gradient-to-b from-card to-background p-5 shadow-2xl transition-all duration-500 hover:border-accent/40"
        style={{
          transform: "perspective(1000px) rotateX(2deg) rotateY(-2deg)",
        }}
      >
        {/* Glow ambient highlight */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        
        {/* Header HUD */}
        <div className="flex items-center justify-between border-b border-border/60 pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
            </span>
            <span className="mono text-xs font-semibold tracking-wider uppercase text-foreground">
              QA ENGINE // RELIABILITY_HUD
            </span>
          </div>
          <div className="mono flex items-center gap-1.5 rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground">
            <Activity className="h-3 w-3 text-accent" />
            <span>48/48 SPECS PASS</span>
          </div>
        </div>

        {/* Tactical Pipeline Visualization Grid */}
        <div className="mt-4 space-y-2.5">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={step.id}
                className={`group flex items-center justify-between rounded-xl border p-3 transition-all duration-300 ${
                  isCurrent
                    ? "border-accent/60 bg-accent/5 shadow-sm scale-[1.01]"
                    : "border-border/50 bg-card/50 opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                    isCurrent 
                      ? "border-accent bg-accent/10 text-accent" 
                      : "border-border bg-muted/40 text-muted-foreground"
                  }`}>
                    {idx === 0 && <Cpu className="h-4 w-4" />}
                    {idx === 1 && <ShieldCheck className="h-4 w-4" />}
                    {idx === 2 && <Layers className="h-4 w-4" />}
                    {idx === 3 && <Terminal className="h-4 w-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-medium text-foreground">{step.name}</p>
                      {isCurrent && (
                        <span className="mono rounded bg-accent/20 px-1 py-0.2 text-[10px] font-semibold text-accent animate-pulse">
                          RUNNING
                        </span>
                      )}
                    </div>
                    <p className="mono text-[11px] text-muted-foreground">{step.tool}</p>
                  </div>
                </div>

                <div className="mono flex items-center gap-2 text-right">
                  <span className="text-[11px] text-muted-foreground">{step.duration}</span>
                  <CheckCircle2 className={`h-4 w-4 ${isCurrent ? "text-accent animate-spin" : "text-success"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Execution Metric Footer */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/60 pt-3 text-center">
          <div className="rounded-lg bg-muted/30 p-2">
            <p className="mono text-[10px] text-muted-foreground uppercase">Assertion Score</p>
            <p className="mono text-sm font-bold text-foreground">100%</p>
          </div>
          <div className="rounded-lg bg-muted/30 p-2">
            <p className="mono text-[10px] text-muted-foreground uppercase">Flaky Rate</p>
            <p className="mono text-sm font-bold text-success">0.00%</p>
          </div>
          <div className="rounded-lg bg-muted/30 p-2">
            <p className="mono text-[10px] text-muted-foreground uppercase">Cycle Time</p>
            <p className="mono text-sm font-bold text-accent">2.36s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
