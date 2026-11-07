import type { Metadata, Viewport } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { ScrollToTop } from "@/components/scroll-to-top";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { websiteJsonLd } from "@/lib/seo";

// Display font for big headings. next/font downloads it at build time and serves it
// from this site, so visitors never connect to Google. Fallback metrics are adjusted to avoid layout shift.
const displayFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.primaryKeyword} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language} className={displayFont.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={websiteJsonLd()} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
