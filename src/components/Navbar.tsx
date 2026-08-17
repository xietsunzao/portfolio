"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // The homepage hero is a full-bleed, always-dark WebGL canvas the nav floats
  // over (no solid backing) until scrolled past it — everywhere else the nav
  // sits on the site's own light/dark themed background.
  const overDarkHero = pathname === "/" && !isScrolled

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
        isScrolled
          ? "border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container relative mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 font-medium tracking-tight transition-opacity hover:opacity-80",
            overDarkHero ? "text-white" : "text-foreground"
          )}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-5 w-5 sm:h-6 sm:w-6"
          >
            <path
              d="M2.5 9c2.5 0 2.5 4.2 5 4.2S10 9 12 9s2.5 4.2 5 4.2S19.5 9 21.5 9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M2.5 15c2.5 0 2.5 4.2 5 4.2S10 15 12 15s2.5 4.2 5 4.2S19.5 15 21.5 15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
          <span className="text-sm sm:text-base">Jefri Maruli</span>
        </Link>

        {/* Center glass pill nav */}
        <nav
          className={cn(
            "absolute left-1/2 hidden h-11 -translate-x-1/2 items-center gap-6 rounded-full border px-6 backdrop-blur-md sm:flex sm:h-12 sm:gap-8 sm:px-7",
            overDarkHero
              ? "border-white/[0.16] bg-white/[0.08]"
              : "border-border bg-foreground/[0.04]"
          )}
        >
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative whitespace-nowrap text-sm transition-colors",
                  isActive
                    ? overDarkHero
                      ? "text-white"
                      : "text-foreground"
                    : overDarkHero
                      ? "text-white/70 hover:text-white"
                      : "text-muted-foreground hover:text-foreground",
                  isActive &&
                    "after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-brand after:content-['']"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            asChild
            className={cn(
              "h-9 rounded-full px-4 text-xs shadow-sm sm:h-10 sm:px-5 sm:text-sm",
              overDarkHero && "bg-white text-[#2f2f33] hover:bg-white/85"
            )}
          >
            <Link href="mailto:jefrimaruli@gmail.com">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
