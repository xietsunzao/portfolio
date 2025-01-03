"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  // Prevent hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange}
      className="h-9 w-9"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
} 