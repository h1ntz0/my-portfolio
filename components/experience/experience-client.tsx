"use client";

import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { ExperienceTimeline } from "@/components/sections/experience";
import { learningNext, learningNextId } from "@/content/profile";
import { useLang } from "@/components/lang-provider";

export function ExperienceClient() {
  const { t, lang } = useLang();
  const learning = lang === "id" ? learningNextId : learningNext;

  return (
    <>
      <PageHeader title={t("experience_title")} description={t("experience_desc")} />

      <Section>
        <ExperienceTimeline />
      </Section>

      <Section className="bg-card">
        <h2 className="h2">{t("experience_path")}</h2>
        <p className="lead measure mt-4 text-muted-foreground">
          {t("experience_path_note")}
        </p>
        <p className="mono mt-6 text-sm">{learning.join("  ·  ")}</p>
      </Section>
    </>
  );
}
