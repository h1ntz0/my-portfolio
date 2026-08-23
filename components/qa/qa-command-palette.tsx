"use client";

import * as React from "react";
import { Terminal, Moon, Sun, Globe, Play } from "lucide-react";
import { useRouter } from "next/navigation";

import { useTheme } from "@/components/theme-provider";
import { useLang } from "@/components/lang-provider";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function QaCommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();

  const toggleLanguage = () => {
    setLang(lang === "en" ? "id" : "en");
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA")) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runAction = (fn: () => void) => {
    fn();
    setOpen(false);
  };

  return (
    <>
      {/* Floating Shortcut Indicator */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-3.5 py-1.5 text-xs text-muted-foreground shadow-lg backdrop-blur hover:border-accent/60 hover:text-foreground transition-all"
        title="Open QA Command Menu"
      >
        <Terminal className="h-3.5 w-3.5 text-accent" />
        <span className="mono">QA Commands</span>
        <kbd className="mono rounded bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      {/* Command Palette Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden border-border bg-card">
          <DialogHeader className="border-b border-border px-4 py-3">
            <DialogTitle className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Terminal className="h-4 w-4 text-accent" />
              <span>QA Tester Command Palette</span>
            </DialogTitle>
          </DialogHeader>

          <div className="p-2 space-y-1">
            <div className="px-3 py-1.5 text-[11px] font-semibold mono uppercase tracking-wider text-muted-foreground">
              Navigation
            </div>
            <button
              onClick={() => runAction(() => router.push("/"))}
              className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <span>Go to Home</span>
              <span className="mono text-[10px] text-muted-foreground">/</span>
            </button>
            <button
              onClick={() => runAction(() => router.push("/testing-lab"))}
              className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-md text-accent font-medium hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-2">
                <Play className="h-3.5 w-3.5" />
                <span>Launch Interactive Testing Lab</span>
              </div>
              <span className="mono text-[10px] text-accent">/testing-lab</span>
            </button>
            <button
              onClick={() => runAction(() => router.push("/projects"))}
              className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <span>View Projects & GitHub Repos</span>
              <span className="mono text-[10px] text-muted-foreground">/projects</span>
            </button>
            <button
              onClick={() => runAction(() => router.push("/resume"))}
              className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <span>View & Download CV</span>
              <span className="mono text-[10px] text-muted-foreground">/resume</span>
            </button>
            <button
              onClick={() => runAction(() => router.push("/contact"))}
              className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <span>Get in touch</span>
              <span className="mono text-[10px] text-muted-foreground">/contact</span>
            </button>

            <div className="pt-2 px-3 py-1.5 text-[11px] font-semibold mono uppercase tracking-wider text-muted-foreground">
              Preferences & Quality Checks
            </div>
            <button
              onClick={() => runAction(toggleTheme)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-2">
                {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                <span>Toggle Color Theme ({theme === "dark" ? "Light Mode" : "Dark Mode"})</span>
              </div>
              <span className="mono text-[10px] text-muted-foreground">T</span>
            </button>
            <button
              onClick={() => runAction(toggleLanguage)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5" />
                <span>Switch Language ({lang === "en" ? "Bahasa Indonesia" : "English"})</span>
              </div>
              <span className="mono text-[10px] text-muted-foreground">{lang.toUpperCase()}</span>
            </button>
          </div>

          <div className="border-t border-border bg-secondary/30 px-4 py-2 text-[11px] text-muted-foreground mono flex justify-between">
            <span>ESC to close</span>
            <span>Handcrafted for QA Excellence</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
