"use client";

import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      className="flex items-center rounded-md border border-border p-0.5"
      role="group"
      aria-label="Language / Bahasa"
    >
      {(["en", "id"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded px-2 py-1 text-xs font-medium uppercase transition-colors",
            lang === l
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-secondary"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
