"use client"

import { projects } from "@/components/Projects"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const [featured, ...rest] = [
  "Dalfin Stenella Intelligent Care",
  "SIMBG - Building Management System",
  "Ximpli-Me API Documentation",
].map((title) => {
  const project = projects.find((p) => p.title === title)
  if (!project) throw new Error(`Unknown project: ${title}`)
  return project
})

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-16 py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Selected work</h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            All projects
          </Link>
        </div>

        <article className="grid gap-8 md:grid-cols-[3fr_2fr] md:items-center">
          <div className="relative aspect-[16/10] border border-border">
            <Image
              src={featured.image}
              alt={`${featured.title} dashboard`}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-brand">
              Current role, Senior Back End Developer at Dalfin HealthCare
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{featured.title}</h3>
            <p className="mt-3 text-muted-foreground">{featured.description}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {featured.tech.map((t) => t.label).join(" · ")}
            </p>
            {featured.caseStudy && (
              <Button asChild className="mt-6">
                <Link href={featured.caseStudy}>Read the case study</Link>
              </Button>
            )}
          </div>
        </article>

        <ul className="mt-16 border-t border-border">
          {rest.map((project) => {
            const href = project.demo ?? project.github
            return (
              <li
                key={project.title}
                className="grid gap-2 border-b border-border py-6 md:grid-cols-[1fr_2fr_auto] md:gap-8"
              >
                <h3 className="font-semibold">{project.title}</h3>
                <div>
                  <p className="text-muted-foreground">{project.description}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.tech.map((t) => t.label).join(" · ")}
                  </p>
                </div>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline-offset-4 hover:text-brand hover:underline"
                  >
                    {project.demo ? "Live site" : "Code"}
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in touch</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Email is the fastest way to reach me. Code lives on GitHub, work history on LinkedIn.
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-lg sm:flex-row sm:gap-8">
            <li>
              <a
                href="mailto:jefrimaruli@gmail.com"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                jefrimaruli@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/xietsunzao"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/jefri-maruli"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
