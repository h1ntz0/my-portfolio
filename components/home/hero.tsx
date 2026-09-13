"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown, ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { audit } from "@/content/audit";
import { useLang } from "@/components/lang-provider";
import { Container } from "@/components/layout/container";
import { Portrait } from "@/components/home/portrait";
import { Scramble } from "@/components/qa/scramble";

/**
 * The type is the hero. Three lines, two sizes, the third indented so the block
 * steps out of the left margin instead of stacking square. The lines decode
 * into place, and the strip underneath carries live numbers from the real audit
 * rather than a slogan.
 */
export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="grid-field pointer-events-none absolute inset-0 opacity-60"
      />
      <span aria-hidden className="crosshair left-6 top-28 hidden sm:block" />
      <span aria-hidden className="crosshair right-6 top-28 hidden sm:block" />

      <Container className="relative pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-14">
          <div>
            <p className="label text-muted-foreground">
              {site.name} · {t("hero_role")} · {site.location}
            </p>

            <h1 className="mt-7">
              <span className="lead block text-muted-foreground">
                {t("hero_hi").replace("{name}", site.firstName)}
              </span>
              <span className="hero-display mt-3 block">
                <Scramble text={t("hero_break")} startDelay={80} />
              </span>
              <span className="display mt-1 block text-accent sm:pl-[7%]">
                <Scramble text={t("hero_so")} startDelay={420} />
              </span>
            </h1>

            <p className="body-text mt-9 max-w-lg text-muted-foreground">
              {t("hero_desc")}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {t("hero_see")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex h-11 items-center rounded-md border border-border bg-secondary/50 px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
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
          </div>

          <div className="w-full max-w-[15rem] lg:justify-self-end">
            <Portrait alt={`${site.name}, ${site.role}`} priority />
            <p className="mono mt-3 text-[11px] leading-relaxed text-muted-foreground">
              {site.firstName} · {t("hero_role")} · {site.location}
            </p>
          </div>
        </div>

        <a
          href="#audit"
          className="group mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 transition-colors hover:border-accent/50"
        >
          <span className="label text-accent">{t("audit_title")}</span>
          <span className="mono text-xs text-muted-foreground">
            axe-core {audit.axeVersion} · {audit.checks} {t("audit_checks")} ·{" "}
            {audit.blocking} {t("audit_blocking")} · {audit.captured}
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors group-hover:text-accent">
            {t("audit_reproduce")}
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </span>
        </a>
      </Container>
    </section>
  );
}
