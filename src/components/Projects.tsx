"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  SiTypescript,
  SiCodeigniter,
  SiMysql,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiNestjs,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
  SiReact,
  SiDocusaurus,
  SiMarkdown,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiWebpack,
} from "react-icons/si"
import { useEffect, useRef } from "react"
import gsap from "gsap"

type TechIcon = {
  icon: React.ReactNode
  label: string
}

type Project = {
  title: string
  description: string
  image: string
  github?: string
  demo?: string
  tech: TechIcon[]
}

const projects: Project[] = [
  {
    title: "SIMBG - Building Management System",
    description: "A comprehensive building management system for the Ministry of Public Works and Housing, featuring user authentication, real-time monitoring, and detailed reporting.",
    image: "/projects/project-1.png",
    demo: "https://simbg.pu.go.id",
    tech: [
      { icon: <SiPhp className="h-5 w-5" />, label: "PHP" },
      { icon: <SiCodeigniter className="h-5 w-5" />, label: "CodeIgniter" },
      { icon: <SiMysql className="h-5 w-5" />, label: "MySQL" },
      { icon: <SiBootstrap className="h-5 w-5" />, label: "Bootstrap" },
    ]
  },
  {
    title: "DBSS - Digital Banking Support System",
    description: "Internal system for the Bank Indonesia to support the implementation of the Digital Banking System",
    image: "/projects/project-2.png",
    tech: [
      { icon: <SiPhp className="h-5 w-5" />, label: "PHP" },
      { icon: <SiCodeigniter className="h-5 w-5" />, label: "CodeIgniter" },
      { icon: <SiMysql className="h-5 w-5" />, label: "MySQL" },
      { icon: <SiBootstrap className="h-5 w-5" />, label: "Bootstrap" },
    ]
  },
  {
    title: "Ximpli-Me",
    description: "Ximpli-Me is the ultimate solution for professionals seeking to streamline their workflows and enhance collaboration. Our platform offers a comprehensive suite of features designed to seamlessly integrate instant messaging, project management, and much more",
    image: "/projects/project-3.png",
    demo: "https://app.ximpli-me.com",
    tech: [
      { icon: <SiLaravel className="h-5 w-5" />, label: "Laravel" },
      { icon: <SiNestjs className="h-5 w-5" />, label: "NestJS" },
      { icon: <SiMongodb className="h-5 w-5" />, label: "MongoDB" },
      { icon: <SiNodedotjs className="h-5 w-5" />, label: "NodeJS" },
      { icon: <SiTypescript className="h-5 w-5" />, label: "TypeScript" },
    ]
  },
  {
    title: "Smart Presence Doorlock",
    description: "A smart doorlock system that uses RFID technology to verify the presence of a person before granting access to a room or space.",
    image: "/projects/project-4.png",
    tech: [
      { icon: <SiNodedotjs className="h-5 w-5" />, label: "NodeJS" },
      { icon: <SiMysql className="h-5 w-5" />, label: "MySQL" },
      { icon: <SiLaravel className="h-5 w-5" />, label: "Laravel" },
      { icon: <SiJavascript className="h-5 w-5" />, label: "JavaScript" },
      { icon: <SiBootstrap className="h-5 w-5" />, label: "Bootstrap" },
    ]
  },
  {
    title: "Ximpli-Me API Documentation",
    description: "Comprehensive API documentation for the Ximpli-Me platform, built with Docusaurus and React. Features interactive examples, authentication guides, and detailed endpoint references.",
    image: "/projects/project-5.png",
    demo: "https://docs.ximpli-me.com",
    tech: [
      { icon: <SiReact className="h-5 w-5" />, label: "React" },
      { icon: <SiTypescript className="h-5 w-5" />, label: "TypeScript" },
      { icon: <SiDocusaurus className="h-5 w-5" />, label: "Docusaurus" },
      { icon: <SiMarkdown className="h-5 w-5" />, label: "MDX" },
      { icon: <SiCss3 className="h-5 w-5" />, label: "CSS" },
      { icon: <SiWebpack className="h-5 w-5" />, label: "Webpack" },
    ]
  }
]

export function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

    // Animation sequence (will start after PageTransition completes)
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power4.inOut"
      }
    )
      .fromTo(
        cardsRef.current,
        { 
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.inOut",
        },
        "-=0.5"
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
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl text-center mb-12"
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
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        title={tech.label}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
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