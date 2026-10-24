"use client"

import { useTheme } from "next-themes"

// The label switches with the `dark` class that next-themes sets before paint,
// so it is right on first render without waiting for hydration.
export function ThemeToggle(): React.JSX.Element {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="nav-link"
    >
      <span className="sr-only">Switch to </span>
      <span className="dark:hidden">Dark</span>
      <span className="hidden dark:inline">Light</span>
      <span className="sr-only"> theme</span>
    </button>
  )
}
