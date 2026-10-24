import type { Metadata } from "next";
import { Hanken_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { RouteTransition } from "@/components/RouteTransition";
import { Footer } from "@/components/Footer";

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

// The wdth axis lets labels run condensed (fontFamily.mono in tailwind.config.ts).
const mono = Martian_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Jefri Maruli — Full-Stack Developer",
  description:
    "Portfolio of Jefri Maruli, a full-stack developer building fast, thoughtful web experiences from idea to deploy.",
  openGraph: {
    title: "Jefri Maruli — Full-Stack Developer",
    description:
      "Portfolio of Jefri Maruli, a full-stack developer building fast, thoughtful web experiences from idea to deploy.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jefri Maruli — Full-Stack Developer",
    description:
      "Portfolio of Jefri Maruli, a full-stack developer building fast, thoughtful web experiences from idea to deploy.",
  },
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
