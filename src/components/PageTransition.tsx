"use client"

import { useEffect, useRef, ReactNode } from "react"
import gsap from "gsap"
import { usePathname } from "next/navigation"

type TransitionDirection = "up" | "down"

interface PageTransitionProps {
  children: ReactNode
  direction?: TransitionDirection
}

export function PageTransition({ children, direction = "up" }: PageTransitionProps) {
  const transitionRef = useRef<HTMLDivElement>(null)
  const transitionRef2 = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial state
    gsap.set([transitionRef.current, transitionRef2.current], {
      scaleY: 1,
      transformOrigin: direction === "up" ? "top" : "bottom",
    })
    gsap.set(contentRef.current, {
      opacity: 0,
      y: direction === "up" ? 20 : -20,
    })

    // Animation sequence
    tl.to(transitionRef.current, {
      scaleY: 0,
      duration: 1,
      ease: "power4.inOut",
    })
      .to(
        transitionRef2.current,
        {
          scaleY: 0,
          duration: 1,
          ease: "power4.inOut",
        },
        "-=0.9"
      )
      .to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )

    return () => {
      tl.kill()
    }
  }, [pathname, direction])

  const handleTransitionOut = () => {
    const tl = gsap.timeline()

    tl.to(contentRef.current, {
      opacity: 0,
      y: direction === "up" ? 20 : -20,
      duration: 0.5,
      ease: "power4.in",
    })
      .fromTo(
        [transitionRef.current, transitionRef2.current],
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          duration: 1,
          ease: "power4.inOut",
          stagger: 0.1,
        }
      )
  }

  useEffect(() => {
    window.addEventListener("beforeunload", handleTransitionOut)
    return () => {
      window.removeEventListener("beforeunload", handleTransitionOut)
    }
  }, [handleTransitionOut])

  return (
    <>
      <div
        ref={transitionRef}
        className="fixed inset-0 bg-background z-[60]"
      />
      <div
        ref={transitionRef2}
        className="fixed inset-0 bg-primary z-[50]"
      />
      <div ref={contentRef} className="min-h-[calc(100vh-4rem)]">
        {children}
      </div>
    </>
  )
} 