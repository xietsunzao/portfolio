"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/ThemeToggle"

const links = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
] as const

export function Navbar(): React.JSX.Element {
  const pathname = usePathname()
  // No scroll-spy on the home page; Work is marked only while inside the projects pages.
  const inProjects = pathname.startsWith("/projects")

  return (
    <header className="border-b border-border">
      <div className="page-column flex items-center justify-between gap-4 py-1.5">
        <Link href="/" className="flex items-center gap-2.5 py-2.5 font-bold">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="hidden h-6 w-6 min-[400px]:block">
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
          <span>Jefri Maruli</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-x-4 sm:gap-x-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.name === "Work" && inProjects ? "true" : undefined}
                  className="nav-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
