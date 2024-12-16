"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const transitionRef = useRef<HTMLDivElement>(null)
  const waveRef = useRef<SVGPathElement>(null)

  // Handle hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    const isToLight = newTheme === "light"
    
    const paths = {
      start: isToLight 
        ? "M 1100 -100 L 1100 1100 L 1000 1100 L 1000 -100 Z"
        : "M 0 -100 L 0 1100 L -100 1100 L -100 -100 Z",
      end: isToLight 
        ? "M 0 -100 L 0 1100 L 1000 1100 L 1000 -100 Z" 
        : "M 1100 -100 L 1100 1100 L 0 1100 L 0 -100 Z"
    }

    // Add transition class
    document.documentElement.classList.add('changing-theme')

    // Create and execute animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.classList[isToLight ? 'remove' : 'add']('dark')
        setTheme(newTheme)
        document.documentElement.classList.remove('changing-theme')
      }
    })

    tl.set(transitionRef.current, {
      display: "block",
    })
      .set(waveRef.current, {
        attr: { d: paths.start }
      })
      .to(waveRef.current, {
        attr: { d: paths.end },
        duration: 0.7,
        ease: "power1.inOut",
      })
      .set(transitionRef.current, {
        display: "none",
      })
  }

  // Add theme transition styles
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .changing-theme * {
        transition: none !important;
      }
      
      :root.changing-theme:not(.dark) .fill-background {
        fill: hsl(222.2 84% 4.9%);
      }

      :root.changing-theme.dark .fill-background {
        fill: hsl(0 0% 100%);
      }
    `
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  // Prevent hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <>
      <div
        ref={transitionRef}
        className="fixed inset-0 z-[100] hidden pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            ref={waveRef}
            className="fill-background"
            d="M 1000 0 L 1000 1000 L 1000 1000 L 1000 0 Z"
          />
        </svg>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleThemeChange}
        className="h-9 w-9 relative z-[101]"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  )
} 