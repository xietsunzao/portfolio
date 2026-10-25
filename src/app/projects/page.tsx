import type { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "All projects",
  description:
    "Projects by Jefri Maruli, from ICU monitoring for hospitals and building permits for a ministry to tools for Bank Indonesia and security guard teams.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage(): React.JSX.Element {
  return (
    <main id="main-content" className="page-column">
      <div className="spine pb-[clamp(56px,8vw,104px)] pt-[clamp(40px,6vw,96px)]">
        <h1 className="spine-node section-heading">All projects</h1>
        <ul>
          {projects.map((project) => (
            <li
              key={project.title}
              className="grid gap-x-[clamp(18px,3vw,40px)] gap-y-2 border-t border-border py-[26px] md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
            >
              <h2 className="text-[clamp(1.15rem,1.7vw,1.45rem)] font-bold leading-[1.15] tracking-[-0.015em]">
                {project.title}
              </h2>
              <div>
                <p className="max-w-[60ch] leading-[1.65]">{project.description}</p>
                <p className="mono-label mt-3">{project.stack.join(" · ")}</p>
                <div className="mt-2 flex flex-wrap gap-x-6">
                  {project.caseStudy && (
                    <Link href={project.caseStudy} className="pencil-link">
                      Case study
                    </Link>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="pencil-link">
                      Live site
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="pencil-link">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
