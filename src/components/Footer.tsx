"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const pathname = usePathname()

  if (pathname === "/") return null

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© 2026 Jefri Maruli. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/xietsunzao"
            target="_blank"
            className="transition-colors hover:text-brand"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/jefri-maruli"
            target="_blank"
            className="transition-colors hover:text-brand"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:jefrimaruli@gmail.com"
            className="transition-colors hover:text-brand"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
