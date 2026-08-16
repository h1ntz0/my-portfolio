"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { site } from "@/lib/site";
import { useLang } from "@/components/lang-provider";
import { Container } from "@/components/layout/container";
import { BrowserVisual } from "@/components/qa/browser-visual";

const currentlyLearning = ["Playwright", "API automation", "CI/CD"];

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <p className="mono text-xs text-muted-foreground">
            {site.name} · {t("hero_role")} · {t("hero_based")} {site.location}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t("hero_hi").replace("{name}", site.name)}
            <br />
            <span className="text-foreground">{t("hero_break")}</span>
            <br />
            <span className="text-accent">{t("hero_so")}</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            {t("hero_desc")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {t("hero_see")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-md border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("hero_github")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-9 flex items-start gap-2.5 text-sm text-muted-foreground">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p>
              <span className="font-medium text-foreground">{t("hero_learning")}</span>
              <span> · </span>
              {currentlyLearning.join(" · ")}
            </p>
          </div>
        </div>

        {/* Human-led visual: a real project in a browser frame, not a dashboard */}
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <BrowserVisual
            accent
            url="e-commerce-platform.app"
            subtitle={t("hero_selected")}
            title="E-Commerce testing"
            tags={["Manual testing", "API", "Playwright"]}
          />
          <p className="mt-3 text-center text-xs text-muted-foreground lg:text-left">
            {t("hero_one_of")}{" "}
            <Link href="/projects" className="font-medium text-accent hover:underline">
              {t("work_read")}
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
