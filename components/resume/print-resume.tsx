"use client";

import { Printer } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PrintResume() {
  return (
    <Button
      variant="accent"
      onClick={() => window.print()}
      aria-label="Print or save resume as PDF"
    >
      <Printer className="h-4 w-4" />
      Print / Save as PDF
    </Button>
  );
}
