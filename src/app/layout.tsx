import type { Metadata } from "next";
import { Hanken_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { RouteTransition } from "@/components/RouteTransition";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/lib/site";

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

// The wdth axis lets the diagram labels in systems-scene.css run condensed.
const mono = Martian_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jefri Maruli, senior backend developer",
    template: "%s | Jefri Maruli",
  },
  description:
    "I build the backends hospitals and ministries run on. Senior backend developer at Dalfin HealthCare, working on the Stenella ICU monitoring platform.",
  // Left without a title or description, which every page would inherit. Next fills in
  // each page's own instead.
  openGraph: { type: "website", siteName: "Jefri Maruli" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Font variables sit on <html> because Tailwind's preflight sets font-family there.
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[200] -translate-y-20 bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <RouteTransition />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
