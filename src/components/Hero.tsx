"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function Hero() {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)

  // Refs for button contents
  const projectsBtnRef = useRef<HTMLDivElement>(null)
  const projectsArrowRef = useRef<SVGSVGElement>(null)
  const githubBtnRef = useRef<HTMLDivElement>(null)
  const githubIconRef = useRef<SVGSVGElement>(null)
  const linkedinBtnRef = useRef<HTMLDivElement>(null)
  const linkedinIconRef = useRef<SVGSVGElement>(null)

  // Initial animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        buttonsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
  }, [])

  // Button hover animations using React handlers
  const handleProjectsEnter = () => {
    gsap.to(projectsBtnRef.current, {
      scale: 1.05,
      duration: 0.2
    })
    gsap.to(projectsArrowRef.current, {
      x: 5,
      duration: 0.2
    })
  }

  const handleProjectsLeave = () => {
    gsap.to(projectsBtnRef.current, {
      scale: 1,
      duration: 0.2
    })
    gsap.to(projectsArrowRef.current, {
      x: 0,
      duration: 0.2
    })
  }

  const handleGithubEnter = () => {
    gsap.to(githubBtnRef.current, {
      scale: 1.05,
      duration: 0.2
    })
    
    gsap.timeline()
      .to(githubIconRef.current, {
        scale: 1.2,
        duration: 0.2,
        ease: "power2.out"
      })
      .to(githubIconRef.current, {
        rotate: -15,
        duration: 0.1,
        ease: "power1.inOut"
      })
      .to(githubIconRef.current, {
        rotate: 15,
        duration: 0.1,
        ease: "power1.inOut"
      })
      .to(githubIconRef.current, {
        rotate: -8,
        duration: 0.1,
        ease: "power1.inOut"
      })
      .to(githubIconRef.current, {
        rotate: 8,
        duration: 0.1,
        ease: "power1.inOut"
      })
      .to(githubIconRef.current, {
        rotate: 0,
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      })
  }

  const handleGithubLeave = () => {
    gsap.to(githubBtnRef.current, {
      scale: 1,
      duration: 0.2
    })
    gsap.to(githubIconRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.2,
      ease: "power2.out"
    })
  }

  const handleLinkedinEnter = () => {
    gsap.to(linkedinBtnRef.current, {
      scale: 1.05,
      duration: 0.2
    })
    gsap.to(linkedinIconRef.current, {
      y: -3,
      duration: 0.2,
      yoyo: true,
      repeat: 1
    })
  }

  const handleLinkedinLeave = () => {
    gsap.to(linkedinBtnRef.current, {
      scale: 1,
      duration: 0.2
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <h1 
        ref={titleRef}
        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Hi, I&apos;m <span className="text-primary">Jefri Maruli</span>
      </h1>
      <p 
        ref={descriptionRef}
        className="mt-4 text-muted-foreground text-lg sm:text-xl max-w-[600px]"
      >
        A passionate developer specializing in web development. I create beautiful and functional websites with modern technologies.
      </p>
      <p className="mt-2 text-muted-foreground text-sm">
        Contact me at: <a href="mailto:jefrimaruli@gmail.com" className="text-primary">jefrimaruli@gmail.com</a>
      </p>
      <div 
        ref={buttonsRef}
        className="flex gap-4 mt-8"
      >
        <div 
          ref={projectsBtnRef}
          onMouseEnter={handleProjectsEnter}
          onMouseLeave={handleProjectsLeave}
        >
          <Button asChild className="flex items-center">
            <Link href="/projects" className="flex items-center">
              <span>View Projects</span>
              <ArrowRight ref={projectsArrowRef} className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div 
          ref={githubBtnRef}
          onMouseEnter={handleGithubEnter}
          onMouseLeave={handleGithubLeave}
        >
          <Button variant="outline" asChild className="flex items-center">
            <Link href="https://github.com/xietsunzao" target="_blank" className="flex items-center">
              <Github ref={githubIconRef} className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </Button>
        </div>

        <div 
          ref={linkedinBtnRef}
          onMouseEnter={handleLinkedinEnter}
          onMouseLeave={handleLinkedinLeave}
        >
          <Button variant="outline" asChild className="flex items-center">
            <Link href="https://linkedin.com/in/jefri-maruli" target="_blank" className="flex items-center">
              <Linkedin ref={linkedinIconRef} className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 