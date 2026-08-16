import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { TestPanel } from "@/components/qa/test-panel";

const credibility = [
  "Manual Testing",
  "API Testing",
  "UI Automation",
  "Database Testing",
  "Bug Analysis",
  "CI/CD",
];

export function Hero() {
  return (
    <section className="border-b bg-card">
      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="mono text-xs font-medium uppercase tracking-wider text-accent">
            {site.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <Link href="/projects">
                Explore My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume">
                <FileDown className="h-4 w-4" />
                View Resume
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {credibility.map((c) => (
              <span
                key={c}
                className="mono rounded-sm border border-border px-2.5 py-1 text-[11px] uppercase tracking-wide text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <TestPanel />
      </Container>
    </section>
  );
}
