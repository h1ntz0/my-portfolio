"use client";

import Link from "next/link";
import { FlaskConical, ArrowRight, CheckCircle, ShieldAlert, Cpu } from "lucide-react";

import { useLang } from "@/components/lang-provider";
import { Button } from "@/components/ui/button";

export function InteractiveLabTeaser() {
  const { lang } = useLang();
  const isId = lang === "id";

  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">02.5</span>
      <div>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-accent animate-pulse" />
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {isId ? "Interactive QA Testing Lab" : "Interactive QA Testing Lab"}
              </h2>
            </div>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              {isId
                ? "Bukan sekadar screenshot statis. Uji langsung skenario test case, simulasikan response API live, dan periksa analisis root cause defect langsung di browser Anda."
                : "Not just static screenshots. Execute live test case assertions, trigger real API simulator endpoints, and explore in-depth defect root causes right in your browser."}
            </p>
          </div>

          <Link href="/testing-lab">
            <Button className="gap-2 shrink-0">
              <span>{isId ? "Buka Testing Lab" : "Launch Testing Lab"}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* 3 Interactive Teaser Pillars */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-accent/50">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="h-4 w-4" />
              <span className="mono text-xs font-semibold uppercase tracking-wider">
                {isId ? "Live Test Matrix" : "Live Test Matrix"}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {isId
                ? "Eksekusi simulasi unit & regression test dengan latency timing presisi."
                : "Execute simulated unit & regression suites with real-time latency measurements."}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-accent/50">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
              <Cpu className="h-4 w-4" />
              <span className="mono text-xs font-semibold uppercase tracking-wider">
                {isId ? "API Workbench" : "API Workbench"}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {isId
                ? "Kirim request GET, POST, DELETE dan inspeksi checklist response assertions."
                : "Send live GET, POST, DELETE payloads and inspect validated response assertions."}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-accent/50">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <ShieldAlert className="h-4 w-4" />
              <span className="mono text-xs font-semibold uppercase tracking-wider">
                {isId ? "Defect Root Cause" : "Defect Root Cause"}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {isId
                ? "Inspeksi diff kode penyebab bug dan verifikasi patch testing teruji."
                : "Examine code-level bug origins, reproducible steps, and verified patch fixes."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
