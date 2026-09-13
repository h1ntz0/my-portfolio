"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { learningNext, learningNextId } from "@/content/profile";
import { useLang } from "@/components/lang-provider";
import { Container } from "@/components/layout/container";
import { Portrait } from "@/components/home/portrait";
import { Typewriter } from "@/components/home/typewriter";

export function Hero() {
  const { t, lang } = useLang();
  const learning = lang === "id" ? learningNextId : learningNext;

  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div>
          <p className="label animate-fade-in-up text-muted-foreground">
            {site.name} · {t("hero_role")} · {site.location}
          </p>

          <h1 className="display animate-fade-in-up mt-6 min-h-[8.5rem] sm:min-h-[10.5rem] lg:min-h-[14rem]">
            <Typewriter
              segments={[
                { text: t("hero_hi").replace("{name}", site.firstName) },
                { text: t("hero_break"), className: "text-foreground" },
                { text: t("hero_so"), className: "text-accent" },
              ]}
            />
          </h1>

          <p
            className="lead animate-fade-in-up mt-7 max-w-lg text-muted-foreground"
            style={{ animationDelay: "0.3s" }}
          >
            {t("hero_desc")}
          </p>

          <div
            className="animate-fade-in-up mt-9 flex flex-wrap items-center gap-3"
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
              className="inline-flex h-11 items-center gap-1.5 rounded-md border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("hero_github")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p
            className="animate-fade-in-up mt-10 text-sm text-muted-foreground"
            style={{ animationDelay: "0.7s" }}
          >
            <span className="text-foreground">{t("hero_learning")}</span>
            <span className="mx-2 text-border">/</span>
            <span className="mono text-xs">{learning.join("  ·  ")}</span>
          </p>
        </div>

        <div
          className="animate-fade-in-up mx-auto w-full max-w-sm lg:mx-0"
          style={{ animationDelay: "0.2s" }}
        >
          <Portrait alt={`${site.name}, ${site.role}`} priority />
          <p className="mt-4 text-xs text-muted-foreground">
            {site.firstName} · {t("hero_role")} · {site.location}
          </p>
        </div>
      </Container>
    </section>
  );
}
