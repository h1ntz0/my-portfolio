"use client";

import { useLang } from "@/components/lang-provider";

export function Intro() {
  const { t } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">{t("intro_num")}</span>
      <div className="max-w-2xl space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t("intro_title")}
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("intro_lead")}
        </p>
        <p className="leading-relaxed text-muted-foreground">{t("intro_body")}</p>
      </div>
    </div>
  );
}
