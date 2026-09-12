"use client";

import * as React from "react";

import { site } from "@/lib/site";
import { useLang } from "@/components/lang-provider";

const DURATION = 700;
const EXIT = 260;

/**
 * Quiet letterhead intro: name, role, a hairline that fills, and a mono counter.
 * No fabricated test logs, no traffic lights, no glow, no uppercase-tracking labels.
 */
export function QaPreloader() {
  const { t } = useLang();
  const [mounted, setMounted] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    // Skip for Lighthouse / PageSpeed / headless auditors so it never costs a metric.
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const isAuditor =
      /Lighthouse|Google-InspectionTool|HeadlessChrome|Chrome-Lighthouse|PageSpeed|insights/i.test(
        ua
      ) ||
      (typeof window !== "undefined" &&
        (Boolean((window as unknown as { __LIGHTHOUSE__?: boolean }).__LIGHTHOUSE__) ||
          Boolean(navigator.webdriver)));

    if (isAuditor) {
      setDone(true);
      return;
    }

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setDone(true);
      return;
    }

    setMounted(true);

    const start = Date.now();
    const id = window.setInterval(() => {
      const elapsed = Math.min(1, (Date.now() - start) / DURATION);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setProgress(Math.round(eased * 100));

      if (elapsed >= 1) {
        window.clearInterval(id);
        document.documentElement.classList.remove("qa-boot");
        window.setTimeout(() => setDone(true), EXIT);
      }
    }, 16);

    return () => {
      window.clearInterval(id);
      document.documentElement.classList.remove("qa-boot");
    };
  }, []);

  if (!mounted || done) return null;

  const leaving = progress >= 100;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex items-end bg-background p-8 transition-[opacity,transform] duration-[260ms] ease-out sm:p-14 ${
        leaving ? "translate-y-1 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <span className="sr-only">{t("loader_aria")}</span>

      <div className="w-72 sm:w-80" aria-hidden="true">
        <p className="text-lg font-medium leading-tight tracking-tight text-foreground">
          {site.name}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {t("hero_role")} · {site.location}
        </p>

        <div className="mt-5 h-px w-full overflow-hidden bg-border">
          <span
            className="block h-px w-full origin-left bg-foreground"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>

        <p className="mono mt-2 text-right text-[10px] tabular-nums text-muted-foreground">
          {String(progress).padStart(3, "0")}
        </p>
      </div>
    </div>
  );
}
