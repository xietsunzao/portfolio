import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { RouteTransition } from "@/components/RouteTransition";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[200] -translate-y-20 rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
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
