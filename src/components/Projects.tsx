"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { prefersReducedMotion } from "@/lib/utils"
import { projects } from "@/data/projects"

export function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (prefersReducedMotion()) return
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.5 } })

    // Kept under ~1s total so a skimming visitor never waits on hidden cards.
    tl.fromTo(titleRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        cardsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.05 },
        "-=0.3"
      )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-balance text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl text-center mb-12"
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden"
              ref={(el: HTMLDivElement | null) => {
                if (el) cardsRef.current[index] = el
              }}
            >
              <div className="relative w-full h-[250px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <CardHeader>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex justify-between items-center gap-4">
                  <p className="font-mono text-sm text-muted-foreground">
                    {project.stack.join(" · ")}
                  </p>
                  <div className="flex gap-3">
                    {project.caseStudy && (
                      <Button size="sm" asChild>
                        <Link href={project.caseStudy}>Case Study</Link>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <Link href={project.demo} target="_blank">
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
