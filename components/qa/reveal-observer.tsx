"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * One observer for the whole document. Any element carrying `data-reveal` or
 * `data-rule` gets `is-in` when it scrolls into view. Re-scans after client
 * navigation so newly mounted routes are covered too.
 *
 * Three fallbacks guarantee nothing stays hidden: no IntersectionObserver, a
 * reduced-motion preference, and a 4s timer that reveals the rest regardless.
 */
export function RevealObserver() {
  const pathname = usePathname();

  React.useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-in), [data-rule]:not(.is-in)"
    );
    if (nodes.length === 0) return;

    const showAll = () => nodes.forEach((n) => n.classList.add("is-in"));

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      showAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    nodes.forEach((node) => io.observe(node));
    const safety = window.setTimeout(showAll, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [pathname]);

  return null;
}
