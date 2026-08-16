"use client";

import { useLang } from "@/components/lang-provider";

const learning = ["Playwright", "API automation", "CI/CD", "Advanced SQL", "Test architecture"];

export function CurrentlyLearning() {
  const { t } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">{t("learn_num")}</span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t("learn_title")}
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">{t("learn_desc")}</p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {learning.map((item) => (
            <span
              key={item}
              className="mono rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
