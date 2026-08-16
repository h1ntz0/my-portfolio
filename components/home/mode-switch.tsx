"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, UserCheck, Code2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Mode = "recruiter" | "deepdive";

const recruiterPath = [
  { label: "Profile", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Top Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const deepDivePath = [
  { label: "Test Strategy", href: "/about" },
  { label: "Test Cases", href: "/testing-lab" },
  { label: "Defects", href: "/testing-lab" },
  { label: "API", href: "/testing-lab" },
  { label: "Automation", href: "/testing-lab" },
  { label: "CI / Evidence", href: "/projects" },
];

export function ModeSwitch() {
  const [mode, setMode] = React.useState<Mode | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Choose viewing mode"
      >
        <Button
          variant={mode === "recruiter" ? "accent" : "outline"}
          size="sm"
          onClick={() => setMode(mode === "recruiter" ? null : "recruiter")}
          aria-pressed={mode === "recruiter"}
        >
          <UserCheck className="h-4 w-4" />
          I&apos;m a Recruiter
        </Button>
        <Button
          variant={mode === "deepdive" ? "accent" : "outline"}
          size="sm"
          onClick={() => setMode(mode === "deepdive" ? null : "deepdive")}
          aria-pressed={mode === "deepdive"}
        >
          <Code2 className="h-4 w-4" />
          QA Deep Dive
        </Button>
      </div>

      {mode && (
        <div
          className={cn(
            "rounded-lg border p-5",
            mode === "recruiter" ? "border-accent/40 bg-accent/5" : "border-border bg-card"
          )}
        >
          <p className="text-sm font-semibold">
            {mode === "recruiter"
              ? "Recruiter quick path"
              : "QA engineering deep dive"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {mode === "recruiter"
              ? "The essentials in a clear order. No deep-testing noise unless you want it."
              : "The evidence-heavy view for QA leads and engineers."}
          </p>
          <ol className="mt-4 flex flex-wrap items-center gap-2">
            {(mode === "recruiter" ? recruiterPath : deepDivePath).map((item, i) => (
              <li key={item.label} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className="rounded-md border bg-muted/40 px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-accent/40"
                >
                  {item.label}
                </Link>
                {i < (mode === "recruiter" ? recruiterPath : deepDivePath).length - 1 && (
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
