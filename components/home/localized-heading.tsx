"use client";

import type { TranslationKey } from "@/lib/i18n";
import { useLang } from "@/components/lang-provider";

export function LocalizedHeading({
  numKey,
  titleKey,
  descKey,
  children,
}: {
  numKey: TranslationKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  children?: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">{t(numKey)}</span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t(titleKey)}
        </h2>
        <p className="mt-3 text-muted-foreground">{t(descKey)}</p>
        {children}
      </div>
    </div>
  );
}
