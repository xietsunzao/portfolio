"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { prefersReducedMotion } from "@/lib/utils"

type Phase = "idle" | "loading" | "done"

// Transform and opacity only, so the line never triggers layout.
const phaseStyle: Record<Phase, React.CSSProperties> = {
  idle: { transform: "scaleX(0)", opacity: 0 },
  loading: {
    transform: "scaleX(0.8)",
    opacity: 1,
    transition: "transform 2s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  done: {
    transform: "scaleX(1)",
    opacity: 0,
    transition: "transform 200ms cubic-bezier(0.25, 1, 0.5, 1), opacity 250ms ease-out 150ms",
  },
}

// A 2px vermilion line across the top while an internal navigation is in flight.
export function RouteTransition(): React.JSX.Element {
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>("idle")

  useEffect(() => {
    const onClick = (event: MouseEvent): void => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = event.target instanceof Element ? event.target.closest("a") : null
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank") return
      const url = new URL(anchor.href)
      // A same-page hash link never changes the pathname, so the line would never finish.
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return
      if (prefersReducedMotion()) return
      setPhase("loading")
    }

    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  useEffect(() => {
    setPhase((current) => (current === "loading" ? "done" : current))
  }, [pathname])

  useEffect(() => {
    if (phase === "idle") return
    // "done" clears after its fade; "loading" clears after 10s in case the navigation never lands.
    const timer = setTimeout(() => setPhase("idle"), phase === "done" ? 400 : 10_000)
    return () => clearTimeout(timer)
  }, [phase])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-brand"
      style={phaseStyle[phase]}
    />
  )
}
