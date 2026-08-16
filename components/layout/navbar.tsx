"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/layout/container";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/testing-lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight"
          aria-label={`${site.name} home`}
        >
          {site.name}
          <span className="text-accent">.qa</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm transition-colors",
                isActive(item.href)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-accent transition-all",
                  isActive(item.href) ? "w-full" : "w-0"
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-secondary sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2.5 text-base transition-colors hover:bg-secondary",
                  isActive(item.href) ? "font-medium text-accent" : "text-muted-foreground"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-1 inline-flex items-center gap-1 rounded-md bg-accent px-3 py-2.5 text-base font-medium text-accent-foreground"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
