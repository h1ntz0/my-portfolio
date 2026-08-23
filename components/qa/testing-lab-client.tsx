"use client";

import * as React from "react";
import {
  Play,
  CheckCircle2,
  AlertCircle,
  Clock,
  RotateCcw,
  SlidersHorizontal,
  Send,
  Code2,
  Bug,
  Cpu,
  Layers,
} from "lucide-react";

import {
  showcaseTestCases,
  showcaseBugScenarios,
  interactiveApiEndpoints,
  type InteractiveBugScenario,
} from "@/content/qa-lab-data";
import { useLang } from "@/components/lang-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TestingLabClient() {
  const { lang } = useLang();
  const isId = lang === "id";

  const [activeTab, setActiveTab] = React.useState<"matrix" | "api" | "bugs">("matrix");

  return (
    <div className="space-y-12">
      {/* Interactive Tabs Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab("matrix")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              activeTab === "matrix"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <Layers className="h-4 w-4" />
            <span>{isId ? "Matriks Test Case" : "Test Case Matrix"}</span>
            <Badge variant="outline" className="ml-1 text-[11px] bg-background/20 border-white/20">
              {showcaseTestCases.length}
            </Badge>
          </button>

          <button
            onClick={() => setActiveTab("api")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              activeTab === "api"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <Cpu className="h-4 w-4" />
            <span>{isId ? "Simulator API Validation" : "Live API Simulator"}</span>
            <Badge variant="outline" className="ml-1 text-[11px] bg-background/20 border-white/20">
              {interactiveApiEndpoints.length}
            </Badge>
          </button>

          <button
            onClick={() => setActiveTab("bugs")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              activeTab === "bugs"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <Bug className="h-4 w-4" />
            <span>{isId ? "Analisis Defect & Root Cause" : "Defect Root Cause Lab"}</span>
            <Badge variant="outline" className="ml-1 text-[11px] bg-background/20 border-white/20">
              {showcaseBugScenarios.length}
            </Badge>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="mono">INTERACTIVE EVIDENCE ENGINE</span>
        </div>
      </div>

      {/* Tab Panels */}
      {activeTab === "matrix" && <TestCaseMatrixTab isId={isId} />}
      {activeTab === "api" && <ApiSimulatorTab isId={isId} />}
      {activeTab === "bugs" && <BugRootCauseTab isId={isId} />}
    </div>
  );
}

/* =========================================================================
   1. TEST CASE MATRIX WITH LIVE EXECUTION SIMULATION
   ========================================================================= */
function TestCaseMatrixTab({ isId }: { isId: boolean }) {
  const [filterProject, setFilterProject] = React.useState<string>("ALL");
  const [filterType, setFilterType] = React.useState<string>("ALL");
  const [executingId, setExecutingId] = React.useState<string | null>(null);
  const [testResults, setTestResults] = React.useState<Record<string, { status: string; duration: number }>>({});
  const [isBulkRunning, setIsBulkRunning] = React.useState(false);

  const projects = ["ALL", ...Array.from(new Set(showcaseTestCases.map((tc) => tc.project)))];
  const types = ["ALL", ...Array.from(new Set(showcaseTestCases.map((tc) => tc.type)))];

  const filtered = showcaseTestCases.filter((tc) => {
    if (filterProject !== "ALL" && tc.project !== filterProject) return false;
    if (filterType !== "ALL" && tc.type !== filterType) return false;
    return true;
  });

  const runSingleTest = (id: string, baseTime: number = 45) => {
    setExecutingId(id);
    setTimeout(() => {
      const simulatedTime = Math.floor(baseTime * (0.8 + Math.random() * 0.4));
      setTestResults((prev) => ({
        ...prev,
        [id]: { status: "Passed", duration: simulatedTime },
      }));
      setExecutingId(null);
    }, 400 + Math.random() * 300);
  };

  const runAllTests = () => {
    setIsBulkRunning(true);
    let delay = 0;
    filtered.forEach((tc, idx) => {
      setTimeout(() => {
        setExecutingId(tc.id);
        setTimeout(() => {
          setTestResults((prev) => ({
            ...prev,
            [tc.id]: {
              status: "Passed",
              duration: Math.floor((tc.executionTimeMs || 50) * (0.85 + Math.random() * 0.3)),
            },
          }));
          if (idx === filtered.length - 1) {
            setExecutingId(null);
            setIsBulkRunning(false);
          }
        }, 250);
      }, delay);
      delay += 350;
    });
  };

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>{isId ? "Proyek:" : "Project:"}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {projects.map((p) => (
              <button
                key={p}
                onClick={() => setFilterProject(p)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs transition-colors",
                  filterProject === p
                    ? "bg-accent text-accent-foreground font-medium"
                    : "border border-border text-muted-foreground hover:bg-secondary"
                )}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="hidden h-4 w-px bg-border sm:block" />

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>{isId ? "Tipe:" : "Type:"}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs transition-colors",
                  filterType === t
                    ? "bg-accent text-accent-foreground font-medium"
                    : "border border-border text-muted-foreground hover:bg-secondary"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={runAllTests}
            disabled={isBulkRunning || filtered.length === 0}
            className="gap-1.5 text-xs"
          >
            <Play className="h-3.5 w-3.5" />
            {isBulkRunning
              ? isId
                ? "Menjalankan Test Suite..."
                : "Executing Suite..."
              : isId
              ? "Jalankan Semua Test"
              : "Execute Filtered Suite"}
          </Button>

          {Object.keys(testResults).length > 0 && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setTestResults({})}
              disabled={isBulkRunning}
              className="text-xs"
              title={isId ? "Reset hasil eksekusi" : "Reset execution results"}
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </div>

      {/* Test Cases Table / List */}
      <div className="grid gap-3">
        {filtered.map((tc) => {
          const isRunning = executingId === tc.id;
          const result = testResults[tc.id];
          const displayStatus = result ? result.status : tc.status;
          const duration = result ? result.duration : tc.executionTimeMs;

          return (
            <div
              key={tc.id}
              className={cn(
                "group relative flex flex-col justify-between gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/50 sm:flex-row sm:items-center",
                isRunning && "border-accent ring-1 ring-accent"
              )}
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mono text-xs font-semibold text-accent">{tc.id}</span>
                  <Badge variant="outline" className="text-[11px] font-mono">
                    {tc.project}
                  </Badge>
                  <span className="rounded bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                    {tc.type}
                  </span>
                  <span className="mono rounded bg-destructive/10 px-1.5 py-0.5 text-[10px] font-medium text-destructive">
                    {tc.priority}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{tc.title}</p>
                {tc.expected && (
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground/80">{isId ? "Ekspektasi: " : "Expected: "}</span>
                    {tc.expected}
                  </p>
                )}
              </div>

              <div className="flex shrink-0 items-center justify-between gap-3 border-t border-border/50 pt-3 sm:border-t-0 sm:pt-0">
                <div className="flex items-center gap-2 text-xs">
                  {duration && (
                    <span className="mono flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {duration}ms
                    </span>
                  )}
                  <span
                    className={cn(
                      "flex items-center gap-1 rounded-full px-2.5 py-0.5 font-medium text-xs",
                      displayStatus === "Passed"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : displayStatus === "Fixed"
                        ? "bg-sky-500/10 text-sky-600 dark:text-sky-400"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {displayStatus === "Passed" || displayStatus === "Fixed" ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      <AlertCircle className="h-3.5 w-3.5" />
                    )}
                    {displayStatus}
                  </span>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  disabled={isRunning || isBulkRunning}
                  onClick={() => runSingleTest(tc.id, tc.executionTimeMs)}
                  className="h-8 gap-1 text-xs"
                >
                  <Play className={cn("h-3 w-3", isRunning && "animate-spin")} />
                  {isRunning ? (isId ? "Menguji..." : "Running...") : isId ? "Uji" : "Run"}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   2. LIVE API VALIDATION SIMULATOR
   ========================================================================= */
function ApiSimulatorTab({ isId }: { isId: boolean }) {
  const [selectedEndpoint, setSelectedEndpoint] = React.useState(interactiveApiEndpoints[0]);
  const [isSending, setIsSending] = React.useState(false);
  const [customResponse, setCustomResponse] = React.useState<string | null>(null);
  const [latency, setLatency] = React.useState<number | null>(null);

  const handleSend = () => {
    setIsSending(true);
    setCustomResponse(null);
    setLatency(null);

    const simulatedLatency = Math.floor(selectedEndpoint.responseTimeMs * (0.85 + Math.random() * 0.3));
    setTimeout(() => {
      setIsSending(false);
      setCustomResponse(selectedEndpoint.responseBody);
      setLatency(simulatedLatency);
    }, 350 + Math.random() * 200);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30";
      case "POST":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
      case "DELETE":
        return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30";
      default:
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Left List of Endpoints */}
      <div className="space-y-2 lg:col-span-4">
        <p className="mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {isId ? "Endpoint Terverifikasi" : "Verified Endpoints"}
        </p>
        <div className="space-y-1.5">
          {interactiveApiEndpoints.map((ep) => {
            const isSelected = selectedEndpoint.id === ep.id;
            return (
              <button
                key={ep.id}
                onClick={() => {
                  setSelectedEndpoint(ep);
                  setCustomResponse(null);
                  setLatency(null);
                }}
                className={cn(
                  "w-full text-left rounded-lg border p-3 transition-all",
                  isSelected
                    ? "border-accent bg-accent/5 shadow-sm"
                    : "border-border bg-card hover:bg-secondary/60"
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "mono rounded border px-1.5 py-0.5 text-[10px] font-bold",
                      getMethodColor(ep.method)
                    )}
                  >
                    {ep.method}
                  </span>
                  <span className="mono truncate text-xs font-medium text-foreground">{ep.path}</span>
                </div>
                <p className="mt-1.5 text-[11px] text-muted-foreground line-clamp-1">
                  {isId ? ep.descriptionId : ep.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right API Workbench */}
      <div className="space-y-4 lg:col-span-8">
        <div className="rounded-xl border border-border bg-card p-5">
          {/* Header Request Bar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "mono rounded-md border px-2.5 py-1 text-xs font-bold",
                  getMethodColor(selectedEndpoint.method)
                )}
              >
                {selectedEndpoint.method}
              </span>
              <span className="mono text-xs font-semibold text-foreground sm:text-sm">
                https://api.arrofi.qa{selectedEndpoint.path}
              </span>
            </div>

            <Button
              size="sm"
              onClick={handleSend}
              disabled={isSending}
              className="gap-2 text-xs"
            >
              <Send className={cn("h-3.5 w-3.5", isSending && "animate-pulse")} />
              {isSending ? (isId ? "Mengirim..." : "Sending...") : isId ? "Kirim Request" : "Send Request"}
            </Button>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{isId ? "Skenario QA: " : "QA Scenario: "}</span>
            {selectedEndpoint.scenario}
          </p>

          {/* Request Payload (if present) */}
          {selectedEndpoint.requestBody && (
            <div className="mt-4 space-y-1.5">
              <p className="mono text-[11px] font-semibold text-muted-foreground">
                {isId ? "PAYLOAD REQUEST (JSON)" : "REQUEST PAYLOAD (JSON)"}
              </p>
              <pre className="mono overflow-x-auto rounded-lg bg-background p-3 text-xs text-foreground/90 border border-border">
                {selectedEndpoint.requestBody}
              </pre>
            </div>
          )}

          {/* Response Inspector */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="mono text-[11px] font-semibold text-muted-foreground">
                {isId ? "HASIL VALIDASI RESPONSE" : "RESPONSE VALIDATION OUTPUT"}
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="mono text-[10px] text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
                  HTTP {selectedEndpoint.status} OK
                </Badge>
                <span className="mono text-[11px] text-muted-foreground">
                  {latency ? `${latency}ms` : `${selectedEndpoint.responseTimeMs}ms`}
                </span>
              </div>
            </div>

            <pre className="mono max-h-64 overflow-y-auto rounded-lg bg-background p-3 text-xs text-emerald-600 dark:text-emerald-400 border border-border">
              {customResponse || selectedEndpoint.responseBody}
            </pre>

            {/* QA Assertion Checklist */}
            <div className="mt-3 rounded-lg border border-border/80 bg-secondary/30 p-3">
              <p className="mono text-[11px] font-medium text-muted-foreground">
                {isId ? "ASSERTION CHECKLIST (100% PASSED)" : "ASSERTION CHECKLIST (100% PASSED)"}
              </p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5 text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Status Code matches expected HTTP {selectedEndpoint.status}</span>
                </li>
                <li className="flex items-center gap-1.5 text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Response header content-type: application/json; charset=utf-8</span>
                </li>
                <li className="flex items-center gap-1.5 text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Response time within performance budget (&lt; 350ms SLA)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. DEFECT ANALYSIS & ROOT CAUSE LAB
   ========================================================================= */
function BugRootCauseTab({ isId }: { isId: boolean }) {
  const [selectedBug, setSelectedBug] = React.useState<InteractiveBugScenario>(showcaseBugScenarios[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Bug Selection List */}
      <div className="space-y-2 lg:col-span-4">
        <p className="mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {isId ? "Daftar Kasus Defect" : "Documented Defect Cases"}
        </p>
        <div className="space-y-2">
          {showcaseBugScenarios.map((bug) => {
            const isSelected = selectedBug.id === bug.id;
            return (
              <button
                key={bug.id}
                onClick={() => setSelectedBug(bug)}
                className={cn(
                  "w-full text-left rounded-xl border p-4 transition-all",
                  isSelected
                    ? "border-accent bg-accent/5 shadow-sm"
                    : "border-border bg-card hover:bg-secondary/60"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-xs font-bold text-accent">{bug.id}</span>
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-[10px]",
                      bug.severity === "Critical" || bug.severity === "High"
                        ? "text-destructive border-destructive/30"
                        : "text-muted-foreground"
                    )}
                  >
                    {bug.severity}
                  </Badge>
                </div>
                <p className="mt-1.5 text-xs font-medium text-foreground line-clamp-2">
                  {isId ? bug.titleId : bug.title}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="mono">{bug.project}</span>
                  <span>·</span>
                  <span>{bug.category}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bug Details & Root Cause Code Inspector */}
      <div className="space-y-4 lg:col-span-8">
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="mono text-xs font-semibold text-accent">{selectedBug.id}</span>
                <Badge variant="outline" className="text-xs">
                  {selectedBug.project}
                </Badge>
                <span className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                  {selectedBug.category}
                </span>
                <Badge
                  variant="destructive"
                  className="text-xs"
                >
                  Severity: {selectedBug.severity}
                </Badge>
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                {isId ? selectedBug.titleId : selectedBug.title}
              </h3>
            </div>

            {/* Reproduction Steps */}
            <div>
              <p className="mono text-xs font-semibold uppercase tracking-wider text-accent">
                {isId ? "Langkah Reproduksi Bug" : "Steps to Reproduce"}
              </p>
              <ol className="mt-2 space-y-1.5 pl-4 text-xs text-muted-foreground list-decimal">
                {(isId ? selectedBug.reproStepsId : selectedBug.reproSteps).map((step, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Expected vs Actual */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3">
                <p className="mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  {isId ? "HASIL YANG DIHARAPKAN (EXPECTED)" : "EXPECTED RESULT"}
                </p>
                <p className="mt-1 text-xs text-foreground/90">
                  {isId ? selectedBug.expectedId : selectedBug.expected}
                </p>
              </div>

              <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3">
                <p className="mono text-[11px] font-semibold text-destructive">
                  {isId ? "HASIL SEBENARNYA (ACTUAL BUG)" : "ACTUAL BUG RESULT"}
                </p>
                <p className="mt-1 text-xs text-foreground/90">
                  {isId ? selectedBug.actualId : selectedBug.actual}
                </p>
              </div>
            </div>

            {/* Code Root Cause & Fix Verification */}
            <div>
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-accent" />
                <p className="mono text-xs font-semibold uppercase tracking-wider text-accent">
                  {isId ? "Analisis Root Cause & Patch Verification" : "Root Cause & Patch Verification"}
                </p>
              </div>
              <pre className="mono mt-2 overflow-x-auto rounded-lg bg-background p-3 text-xs text-foreground border border-border">
                {selectedBug.codeSnippet}
              </pre>
              <p className="mt-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{isId ? "Verifikasi Fix: " : "Fix Verification: "}</span>
                {isId ? selectedBug.fixVerificationId : selectedBug.fixVerification}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
