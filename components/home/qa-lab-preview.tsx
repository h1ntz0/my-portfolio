"use client";

import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";

import { testCases, bugs, apiEndpoints } from "@/content/testing";
import { useLang } from "@/components/lang-provider";

export function QaLabPreview() {
  const { t } = useLang();
  const rows = [
    { label: t("lab_testcases"), value: String(testCases.length) },
    { label: t("lab_bugs"), value: String(bugs.length).padStart(2, "0") },
    { label: t("lab_api"), value: String(apiEndpoints.length * 4) },
    { label: t("lab_automation"), value: "Playwright" },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">{t("lab_num")}</span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t("lab_title")}
        </h2>
        <p className="mt-3 text-muted-foreground">{t("lab_sub")}</p>

        <div className="mt-8 max-w-md">
          <Link
            href="/testing-lab"
            className="group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm"
          >
            <div className="flex items-center justify-between border-b bg-muted/40 px-5 py-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <FlaskConical className="h-4 w-4 text-accent" />
                {t("lab_name")}
              </span>
            </div>
            <div className="divide-y">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-5 py-2.5"
                >
                  <span className="text-sm text-muted-foreground">{row.label}</span>
                  <span className="mono text-sm font-medium">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between bg-muted/20 px-5 py-3 text-sm font-medium text-accent">
              {t("lab_explore")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
