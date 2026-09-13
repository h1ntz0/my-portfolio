"use client";

import type { TranslationKey } from "@/lib/i18n";
import { useLang } from "@/components/lang-provider";

/**
 * Section heading that lives in a client boundary, so the server page can pass
 * translation keys without becoming a client component itself.
 */
export function LocalizedHeading({
  titleKey,
  descKey,
  children,
}: {
  titleKey: TranslationKey;
  descKey?: TranslationKey;
  children?: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <div>
      <h2 className="h2">{t(titleKey)}</h2>
      {descKey && (
        <p className="lead mt-4 max-w-2xl text-muted-foreground">{t(descKey)}</p>
      )}
      {children}
    </div>
  );
}
