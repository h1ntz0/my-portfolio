import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { buildMetadata } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/lang-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QaPreloader } from "@/components/qa/qa-preloader";

import "./globals.css";

const inter = Inter({
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
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} min-h-screen bg-background font-sans`}
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
