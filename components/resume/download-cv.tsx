"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DownloadCV() {
  return (
    <Button
      variant="accent"
      size="lg"
      onClick={() => window.print()}
      aria-label="Download CV as PDF"
    >
      <Download className="h-4 w-4" />
      Download CV
    </Button>
  );
}
