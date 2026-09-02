"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { site } from "@/lib/site";
import { useLang } from "@/components/lang-provider";
import { Container } from "@/components/layout/container";
import { Typewriter } from "@/components/home/typewriter";
import { CommandPipeline3D } from "@/components/qa/command-pipeline-3d";

const currentlyLearning = ["Playwright", "API automation", "CI/CD"];

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <p className="mono animate-fade-in-up text-xs text-muted-foreground">
            {site.name} · {t("hero_role")} · {t("hero_based")} {site.location}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl min-h-[140px] sm:min-h-[160px] lg:min-h-[190px]">
            <Typewriter
              segments={[
                { text: t("hero_hi").replace("{name}", site.firstName) },
                { text: t("hero_break"), className: "text-foreground" },
                { text: t("hero_so"), className: "text-accent" },
              ]}
            />
          </h1>
          <p
            className="animate-fade-in-up mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.3s" }}
          >
            {t("hero_desc")}
          </p>

          <div
            className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              href="/projects"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {t("hero_see")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex h-11 items-center gap-1.5 rounded-md border border-border bg-secondary/50 px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("nav_resume")}
            </Link>
            <Link
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-md border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("hero_github")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div
            className="animate-fade-in-up mt-9 flex items-start gap-2.5 text-sm text-muted-foreground"
            style={{ animationDelay: "0.7s" }}
          >
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p>
              <span className="font-medium text-foreground">{t("hero_learning")}</span>
              <span> · </span>
              {currentlyLearning.join(" · ")}
            </p>
          </div>
        </div>

        {/* Tactical 3D HUD & Portrait */}
        <div
          className="animate-fade-in-up mx-auto w-full max-w-lg lg:mx-0 space-y-6"
          style={{ animationDelay: "0.2s" }}
        >
          <CommandPipeline3D />
        </div>
      </Container>
    </section>
  );
}
