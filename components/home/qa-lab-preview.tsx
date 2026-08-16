import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";

import { testCases, bugs, apiEndpoints } from "@/content/testing";

export function QaLabPreview() {
  const rows = [
    { label: "Test cases", value: String(testCases.length) },
    { label: "Bug reports", value: String(bugs.length).padStart(2, "0") },
    { label: "API tests", value: String(apiEndpoints.length * 4) },
    { label: "Automation", value: "Playwright" },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">04</span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Want the technical details?
        </h2>
        <p className="mt-3 text-muted-foreground">
          I keep the deeper testing evidence here.
        </p>

        <div className="mt-8 max-w-md">
          <Link
            href="/testing-lab"
            className="group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm"
          >
            <div className="flex items-center justify-between border-b bg-muted/40 px-5 py-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <FlaskConical className="h-4 w-4 text-accent" />
                QA Lab
              </span>
            </div>
            <div className="divide-y">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-5 py-2.5"
                >
                  <span className="text-sm text-muted-foreground">{row.label}</span>
                  <span className="mono text-sm font-medium">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between bg-muted/20 px-5 py-3 text-sm font-medium text-accent">
              Explore the lab
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
