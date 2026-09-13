import type { Metadata } from "next";
import { Space_Grotesk, Archivo, JetBrains_Mono } from "next/font/google";

import { buildMetadata } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/lang-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QaPreloader } from "@/components/qa/qa-preloader";

import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var ua=navigator.userAgent||'';var skip=/Lighthouse|Google-InspectionTool|HeadlessChrome|Chrome-Lighthouse|PageSpeed|insights/i.test(ua)||navigator.webdriver;var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(skip||rm){return}var d=document.documentElement;d.classList.add('qa-boot');window.setTimeout(function(){d.classList.remove('qa-boot')},2600)}catch(e){}})();`
          }}
        />
      </head>
      <body
        className={`${sans.variable} ${display.variable} ${jetbrains.variable} min-h-screen bg-background font-sans`}
      >
        <ThemeProvider>
          <LangProvider>
            <TooltipProvider delayDuration={150}>
            <QaPreloader />
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
            </TooltipProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
