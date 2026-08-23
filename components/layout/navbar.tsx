"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import type { TranslationKey } from "@/lib/i18n";
import { useLang } from "@/components/lang-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { Container } from "@/components/layout/container";

const links: { href: string; labelKey: TranslationKey; exact?: boolean }[] = [
  { href: "/", labelKey: "nav_home", exact: true },
  { href: "/projects", labelKey: "nav_work" },
  { href: "/testing-lab", labelKey: "nav_lab" },
  { href: "/about", labelKey: "nav_about" },
  { href: "/resume", labelKey: "nav_resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLang();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight"
          aria-label={`${site.name} home`}
        >
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {links.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm transition-colors",
                  active
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={active ? "page" : undefined}
              >
                {t(item.labelKey)}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-accent transition-all",
                    active ? "w-full" : "w-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <LangToggle />
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium text-accent transition-colors hover:bg-secondary lg:inline-flex"
          >
            {t("nav_talk")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("nav_close") : t("nav_open")}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base transition-colors hover:bg-secondary",
                    active ? "font-medium text-accent" : "text-muted-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-1 inline-flex items-center gap-1 rounded-md bg-accent px-3 py-2.5 text-base font-medium text-accent-foreground"
            >
              {t("nav_talk")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
