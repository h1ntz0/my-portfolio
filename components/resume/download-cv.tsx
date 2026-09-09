"use client";

import { Download } from "lucide-react";

import { useLang } from "@/components/lang-provider";
import { Button } from "@/components/ui/button";

export function DownloadCV() {
  const { t, lang } = useLang();
  return (
    <Button
      variant="accent"
      size="lg"
      onClick={() => window.print()}
      aria-label={lang === "id" ? "Unduh CV sebagai PDF" : "Download CV as PDF"}
    >
      <Download className="h-4 w-4" />
      {t("resume_download_btn")}
    </Button>
  );
}
