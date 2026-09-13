"use client";

import { useLang } from "@/components/lang-provider";

/**
 * Prose section. One measure, no label, no counter. It reads as the opening
 * paragraph of an article rather than another card in a stack.
 */
export function Intro() {
  const { t } = useLang();
  return (
    <div className="measure" data-reveal>
      <h2 className="h2">{t("intro_title")}</h2>
      <p className="lead mt-5 text-foreground">{t("intro_lead")}</p>
      <p className="body-text mt-5 text-muted-foreground">{t("intro_body")}</p>
    </div>
  );
}
