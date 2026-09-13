"use client";

import * as React from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#$%&*+=";

/**
 * Decodes text left to right: each character cycles through GLYPHS for a short
 * stagger before settling on the real one. Renders the final string on the
 * server so there is no layout shift and screen readers read the real words.
 */
export function Scramble({
  text,
  className,
  startDelay = 0,
  stepMs = 46,
  holdMs = 420,
}: {
  text: string;
  className?: string;
  startDelay?: number;
  stepMs?: number;
  holdMs?: number;
}) {
  const [display, setDisplay] = React.useState(text);
  const [armed, setArmed] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setArmed(true);
  }, []);

  React.useEffect(() => {
    if (!armed) return;
    let raf = 0;
    let timer = 0;
    const settleAt = text.split("").map((_, i) => startDelay + i * stepMs + holdMs);
    const startedAt = performance.now();

    const tick = () => {
      const now = performance.now() - startedAt;
      let done = true;
      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return char;
          if (now >= settleAt[i]) return char;
          done = false;
          const seed = Math.floor((now + i * 37) / 42) + i * 13;
          return GLYPHS[seed % GLYPHS.length];
        })
        .join("");
      setDisplay(next);
      if (!done) raf = window.requestAnimationFrame(tick);
    };

    timer = window.setTimeout(() => {
      raf = window.requestAnimationFrame(tick);
    }, Math.max(0, startDelay));

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(raf);
    };
  }, [armed, text, startDelay, stepMs, holdMs]);

  return (
    <span className={className} data-scrambling={armed ? "" : undefined}>
      {display}
    </span>
  );
}
