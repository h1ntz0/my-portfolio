"use client";

import { useLang } from "@/components/lang-provider";

export const testInterests = [
  "Web applications",
  "API behaviour",
  "Authentication flows",
  "Forms & validation",
  "Edge cases",
  "Responsive layouts",
  "Database behaviour",
  "Regression",
];

export function WhatITest() {
  const { t } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">{t("what_num")}</span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t("what_title")}
        </h2>
        <p className="mt-3 text-muted-foreground">{t("what_desc")}</p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {testInterests.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
