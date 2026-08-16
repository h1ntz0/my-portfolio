"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItems, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/layout/container";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="mono text-sm font-semibold tracking-tight"
          aria-label={`${site.name} home`}
        >
          {site.name}
          <span className="text-accent">.qa</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
                isActive(item.href)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="default" size="sm" className="hidden sm:inline-flex">
            <Link href="/resume">
              <FileDown className="h-4 w-4" />
              Resume
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      {open && (
        <div className="border-t bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary",
                  isActive(item.href)
                    ? "text-accent"
                    : "text-muted-foreground"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" size="sm" className="mt-2">
              <Link href="/resume">
                <FileDown className="h-4 w-4" />
                Resume
              </Link>
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
