import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { site } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { BrowserVisual } from "@/components/qa/browser-visual";

const currentlyLearning = ["Playwright", "API automation", "CI/CD"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <p className="mono text-xs text-muted-foreground">
            {site.name} · QA tester · based in {site.location}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Hey, I&apos;m {site.name}.
            <br />
            <span className="text-foreground">
              I break software
            </span>
            <br />
            <span className="text-accent">so users don&apos;t have to.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            QA tester focused on web testing, API validation, SQL, and
            automation. I like finding the edge cases, breaking the happy path,
            and turning bugs into test cases.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              See my work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-md border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-9 flex items-start gap-2.5 text-sm text-muted-foreground">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p>
              <span className="font-medium text-foreground">Currently learning</span>
              {" — "}
              {currentlyLearning.join(" · ")}
            </p>
          </div>
        </div>

        {/* Human-led visual: a real project in a browser frame, not a dashboard */}
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <BrowserVisual
            accent
            url="e-commerce-platform.app"
            subtitle="Selected work"
            title="E-Commerce testing"
            tags={["Manual testing", "API", "Playwright"]}
          />
          <p className="mt-3 text-center text-xs text-muted-foreground lg:text-left">
            One of the apps I&apos;ve tested. More in{" "}
            <Link href="/projects" className="font-medium text-accent hover:underline">
              selected work
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
