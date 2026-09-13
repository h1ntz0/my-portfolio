"use client";

import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { SkillGroups, SkillToProjectHint } from "@/components/sections/skills";
import { useLang } from "@/components/lang-provider";

export function SkillsClient() {
  const { t } = useLang();
  return (
    <>
      <PageHeader title={t("skills_title")} description={t("skills_desc")} />
      <Section>
        <SkillGroups />
        <SkillToProjectHint />
      </Section>
    </>
  );
}
