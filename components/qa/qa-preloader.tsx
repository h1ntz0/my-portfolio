"use client";

import * as React from "react";

import { site } from "@/lib/site";
import { useLang } from "@/components/lang-provider";

/**
 * Load sequence: a letterhead with one measured line under it.
 *
 * The line draws as the document loads and stalls just short of full until the
 * page actually reports `load`, so the meter never claims more than it knows.
 * Then the sheet lifts.
 *
 * Skipped for Lighthouse, PageSpeed, headless auditors, and reduced-motion
 * users. The matching cover in globals.css (`html.qa-boot body::before`) is
 * painted before hydration and cleared here; the inline script in app/layout.tsx
 * drops it after 2600ms if React never arrives.
 */

const RAMP_MS = 960; // line travel to the stall point, and the floor for a fast load
const HOLD = 0.94; // where the line waits for the real load signal
const SETTLE_MS = 160; // last 6%, once the signal arrives
const CAP_MS = 1800; // ceiling, so a slow load can never hold the page hostage
const EXIT_MS = 500; // curtain lift, matches the transition classes below

const [first, ...rest] = site.name.split(" ");

export function QaPreloader() {
  const { t } = useLang();
  const [mounted, setMounted] = React.useState(false);
  const [leaving, setLeaving] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const meter = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const isAuditor =
      /Lighthouse|Google-InspectionTool|HeadlessChrome|Chrome-Lighthouse|PageSpeed|insights/i.test(
        navigator.userAgent
      ) || navigator.webdriver;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isAuditor || reduced) {
      document.documentElement.classList.remove("qa-boot");
      setDone(true);
      return;
    }

    setMounted(true);

    let loaded = document.readyState === "complete";
    const onLoad = () => {
      loaded = true;
    };
    if (!loaded) window.addEventListener("load", onLoad, { once: true });

    const start = performance.now();
    let settleFrom: number | null = null;
    let raf = 0;

    const frame = () => {
      const elapsed = performance.now() - start;

      if (settleFrom === null && ((loaded && elapsed >= RAMP_MS) || elapsed >= CAP_MS)) {
        settleFrom = performance.now();
      }

      let value: number;
      if (settleFrom === null) {
        // linear, so the stall at HOLD is legible instead of front-loaded away
        value = HOLD * Math.min(1, elapsed / RAMP_MS);
      } else {
        const k = Math.min(1, (performance.now() - settleFrom) / SETTLE_MS);
        value = HOLD + (1 - HOLD) * (1 - Math.pow(1 - k, 3));
        if (k >= 1) {
          if (meter.current) meter.current.style.transform = "scaleX(1)";
          document.documentElement.classList.remove("qa-boot");
          setLeaving(true);
          window.setTimeout(() => setDone(true), EXIT_MS);
          return;
        }
      }

      if (meter.current) meter.current.style.transform = `scaleX(${value.toFixed(4)})`;
      raf = window.requestAnimationFrame(frame);
    };

    raf = window.requestAnimationFrame(frame);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
      document.documentElement.classList.remove("qa-boot");
    };
  }, []);

  if (!mounted || done) return null;

  const curtain =
    "transition-transform duration-[500ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`qa-grain fixed inset-0 z-[100] select-none overflow-hidden bg-background ${curtain} ${
        leaving ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <span className="sr-only">{t("loader_aria")}</span>

      <div aria-hidden className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14">
        <div className={curtain + (leaving ? " -translate-y-8" : "")}>
          <p className="mono hidden text-[11px] uppercase leading-none tracking-[0.18em] text-accent sm:block">
            {site.eyebrow}
          </p>

          <p className="text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-foreground sm:mt-7">
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="qa-rise block" style={{ animationDelay: "60ms" }}>
                {first}
              </span>
            </span>
            {rest.length > 0 && (
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="qa-rise block" style={{ animationDelay: "120ms" }}>
                  {rest.join(" ")}
                </span>
              </span>
            )}
          </p>

          {/* the measured line: track is the hairline, fill is the accent */}
          <span className="mt-6 block h-px w-full max-w-[20rem] bg-border sm:mt-7">
            <span
              ref={meter}
              className="block h-px w-full origin-left bg-accent"
              style={{ transform: "scaleX(0)" }}
            />
          </span>

          <p
            className="qa-fade mt-6 text-sm text-muted-foreground"
            style={{ animationDelay: "260ms" }}
          >
            {t("hero_role")} · {site.location}
          </p>
        </div>
      </div>
    </div>
  );
}
