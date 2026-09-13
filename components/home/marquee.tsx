"use client";

import { useLang } from "@/components/lang-provider";

const items = [
  "Manual testing",
  "API validation",
  "SQL checks",
  "Playwright",
  "Regression",
  "Edge cases",
  "Bug reports",
  "Accessibility",
  "Exploratory",
];

const itemsId = [
  "Pengujian manual",
  "Validasi API",
  "Pengecekan SQL",
  "Playwright",
  "Regresi",
  "Edge case",
  "Laporan bug",
  "Aksesibilitas",
  "Eksploratori",
];

/**
 * One kinetic strip. Duplicated once so the loop is seamless; the copy is
 * aria-hidden and the real list is exposed to screen readers as a plain list.
 */
export function Marquee() {
  const { lang } = useLang();
  const list = lang === "id" ? itemsId : items;

  return (
    <div className="relative overflow-hidden border-y border-border py-4">
      <ul className="sr-only">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div aria-hidden className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {list.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="label flex items-center whitespace-nowrap text-muted-foreground"
              >
                {item}
                <span className="mx-5 h-1 w-1 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
