"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { fluidSimulation } from "@/lib/fluidSimulation"
import { Onest } from "next/font/google"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500"],
})

const HEADING_WORDS = ["Jefri", "Maruli"]
const SUBLINE_WORDS =
  "Full-stack developer building fast, thoughtful web experiences from idea to deploy.".split(
    " "
  )

const EASE_ENTRANCE = "cubic-bezier(0.2, 0, 0, 1)"
const EASE_OUT_CUBIC = "cubic-bezier(0.33, 1, 0.68, 1)"

export function HeroFluid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const destroy = fluidSimulation(canvas)
    return () => destroy()
  }, [])

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => setRevealed(true))
    })
    return () => cancelAnimationFrame(raf1)
  }, [])

  return (
    <section
      className={cn(
        onest.className,
        "relative flex flex-col items-center justify-center min-h-[100dvh] w-full overflow-hidden text-center px-5 sm:px-10 bg-[#04050c]"
      )}
    >
      {/* Fluid canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      />

      {/* Scrim for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(115% 95% at 50% 46%, rgba(4,5,12,0.68) 0%, rgba(4,5,12,0.68) 24%, rgba(4,5,12,0.46) 52%, rgba(4,5,12,0.12) 100%)",
        }}
      />

      {/* Center column */}
      <div className="relative z-10 flex w-full max-w-[22rem] flex-col items-center sm:max-w-[40rem] lg:max-w-[52rem]">
        {/* Badge */}
        <p
          className="inline-flex items-center rounded-full border border-white/[0.16] bg-white/[0.08] px-[0.875rem] py-[0.4rem] text-[0.72rem] text-[#b9becf] backdrop-blur-md transition-[opacity,transform] duration-700 sm:text-[0.8rem]"
          style={{
            transitionTimingFunction: EASE_ENTRANCE,
            transitionDelay: "320ms",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(1.25rem)",
          }}
        >
          Full-Stack Developer
        </p>

        {/* Heading, word-by-word */}
        <h1 className="mt-5 max-w-[20rem] text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-[#eef0f6] sm:mt-7 sm:max-w-[34rem] sm:text-[3.5rem] lg:max-w-[46rem] lg:text-[5rem]">
          {HEADING_WORDS.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden">
              <span
                className="inline-block transition-[opacity,transform] duration-[720ms]"
                style={{
                  transitionTimingFunction: EASE_OUT_CUBIC,
                  transitionDelay: `${480 + i * 85}ms`,
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0)" : "translateY(26px)",
                }}
              >
                {word}
              </span>
              {i < HEADING_WORDS.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        {/* Sub-line, word-by-word */}
        <p className="mt-4 max-w-[20rem] text-base leading-relaxed text-[#b9becf] sm:mt-5 sm:max-w-[34rem] sm:text-[1.1rem] lg:max-w-none lg:text-[1.2rem]">
          {SUBLINE_WORDS.map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden">
              <span
                className="inline-block transition-[opacity,transform] duration-[600ms]"
                style={{
                  transitionTimingFunction: EASE_OUT_CUBIC,
                  transitionDelay: `${1150 + i * 22}ms`,
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0)" : "translateY(14px)",
                }}
              >
                {word}
              </span>
              {i < SUBLINE_WORDS.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        {/* CTAs */}
        <div
          className="mt-7 flex flex-col items-center gap-4 transition-[opacity,transform] duration-700 sm:mt-10 sm:flex-row sm:gap-5"
          style={{
            transitionTimingFunction: EASE_ENTRANCE,
            transitionDelay: "1450ms",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(1.25rem)",
          }}
        >
          <Button
            asChild
            className="h-[2.5rem] rounded-full bg-white px-[1.125rem] text-[0.85rem] font-medium text-[#2f2f33] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors hover:bg-white/85 sm:h-[2.75rem] sm:px-[1.375rem] sm:text-[0.95rem]"
          >
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-[2.5rem] rounded-full border-white/[0.16] bg-white/[0.08] px-[1.125rem] text-[0.85rem] font-medium text-[#eef0f6] backdrop-blur-md transition-colors hover:bg-white/[0.14] hover:text-[#eef0f6] sm:h-[2.75rem] sm:px-[1.375rem] sm:text-[0.95rem]"
          >
            <a href="mailto:jefrimaruli@gmail.com">Get In Touch</a>
          </Button>
        </div>
      </div>

      {/* Footer line */}
      <footer
        className="absolute inset-x-0 bottom-0 z-20 flex justify-center px-5 py-5 text-[0.72rem] text-[#b9becf] transition-[opacity,transform] duration-700 sm:px-10 sm:py-6 sm:text-[0.8rem]"
        style={{
          transitionTimingFunction: EASE_ENTRANCE,
          transitionDelay: "1650ms",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(1.25rem)",
        }}
      >
        © 2026 Jefri Maruli — built with care.
      </footer>
    </section>
  )
}
