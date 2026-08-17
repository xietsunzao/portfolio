"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { fluidSimulation } from "@/lib/fluidSimulation"
import { cn } from "@/lib/utils"

// Lives once in the root layout (never remounted per page) so it can cover
// the screen the instant a nav link is clicked and only reveal the
// destination once it has actually mounted underneath — rather than
// flashing the new page first and covering it afterward. Reuses the hero's
// own fluid engine/palette so the burst reads as the same effect, not a
// separate theme. Only ever triggers from an intercepted internal link
// click, so a hard reload never plays it. The cover itself fades in and out
// (not an instant pop) — fade-out is guaranteed to wait until the fade-in
// has fully finished, even on a near-instant navigation, so a fast route
// change can never interrupt it mid-fade.
const FADE_DURATION_MS = 450
const REVEAL_HOLD_MS = 150

export function RouteTransition() {
  const pathname = usePathname()
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const destroyRef = useRef<(() => void) | null>(null)
  const prevPathnameRef = useRef(pathname)
  const coverStartRef = useRef(0)
  const [covering, setCovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = (e.target as HTMLElement)?.closest?.("a")
      if (!anchor) return
      if (anchor.target === "_blank") return
      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("/") || href === pathname) return

      e.preventDefault()
      coverStartRef.current = performance.now()
      setCovering(true)
      router.push(href)
    }

    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [pathname, router])

  // Mount/run the fluid burst, then fade the cover smoothly into view
  // (rather than popping straight to full opacity).
  useEffect(() => {
    if (!covering || !canvasRef.current) return
    destroyRef.current = fluidSimulation(canvasRef.current, {
      orbit: false,
      config: { DENSITY_DISSIPATION: 0.93, CURL: 34, SPLAT_RADIUS: 0.28 },
    })
    setVisible(false)
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true))
    })
    return () => {
      cancelAnimationFrame(raf)
      destroyRef.current?.()
      destroyRef.current = null
    }
  }, [covering])

  // Once the new page has actually mounted (pathname changed), fade back
  // out — but never before the fade-in itself has had time to complete.
  useEffect(() => {
    if (prevPathnameRef.current === pathname) return
    prevPathnameRef.current = pathname
    if (!covering) return

    const elapsedSinceCoverStart = performance.now() - coverStartRef.current
    const fadeOutDelay =
      Math.max(0, FADE_DURATION_MS - elapsedSinceCoverStart) + REVEAL_HOLD_MS

    const fadeOutTimer = setTimeout(() => setVisible(false), fadeOutDelay)
    const cleanupTimer = setTimeout(
      () => setCovering(false),
      fadeOutDelay + FADE_DURATION_MS + 50
    )
    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(cleanupTimer)
    }
  }, [pathname, covering])

  if (!covering) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-[100] h-full w-full bg-[#04050c] opacity-0",
        visible && "opacity-100"
      )}
      style={{
        transition: `opacity ${FADE_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    />
  )
}
