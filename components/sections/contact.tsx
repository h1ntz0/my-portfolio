import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            Let&apos;s Talk About Quality
          </h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Looking for a QA engineer who documents defects with evidence? I&apos;m
            available for QA and automation opportunities.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild variant="accent">
              <a href={`mailto:${site.links.email}`}>
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="shrink-0 rounded-lg border bg-muted/40 p-4">
          <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
            Email
          </p>
          <p className="mono mt-1 text-sm text-accent">{site.email}</p>
        </div>
      </CardContent>
    </Card>
  );
}
