import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { RoutingSwitch } from "@/components/RoutingSwitch"
import { SystemsScene } from "@/components/SystemsScene"
import "@/components/systems-scene.css"
import { experience } from "@/data/experience"
import { projects, type Project } from "@/data/projects"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

function pick(title: string): Project {
  const project = projects.find((p) => p.title === title)
  if (!project) throw new Error(`Unknown project: ${title}`)
  return project
}

const featured = pick("Dalfin Stenella Intelligent Care")
const more = ["SIMBG - Building Management System", "Ximpli-Me API Documentation", "MyStarguard"].map(pick)
const currentRole = experience.find((role) => role.company === "Dalfin HealthCare")
const github = "https://github.com/xietsunzao"
const linkedin = "https://linkedin.com/in/jefri-maruli"

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jefri Maruli",
  url: siteUrl,
  jobTitle: currentRole?.title,
  worksFor: currentRole && { "@type": "Organization", name: currentRole.company },
  sameAs: [github, linkedin],
}

const tools = [
  "NestJS",
  "Node.js",
  "TypeScript",
  "Go",
  "Rust",
  "gRPC",
  "PostgreSQL",
  "Prisma",
  "MySQL",
  "MongoDB",
  "Redis",
  "Laravel",
  "Docker",
  "React",
  "Next.js",
]

const sectionHeading = "spine-node section-heading"
const sectionSpacing = "pt-[clamp(48px,7vw,104px)]"

export default function Home(): React.JSX.Element {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        // Escaping "<" stops a string in the data from closing the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <section className="page-column pb-[clamp(48px,6vw,88px)] pt-[clamp(40px,7vw,112px)]">
        <h1 className="hero-heading">I build the backends hospitals run on.</h1>
        <div className="mt-[clamp(28px,3vw,44px)] flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <p className="max-w-[46ch] text-[clamp(1.125rem,1.5vw,1.35rem)] leading-[1.5]">
            Jefri Maruli, senior backend developer at Dalfin HealthCare. Below, one heart-rate
            reading crosses the ICU platform I work on.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/projects/dalfin-stenella"
              className="inline-flex min-h-12 items-center bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Read the case study
            </Link>
            <Link href="/projects" className="pencil-link">
              All work
            </Link>
          </div>
        </div>
      </section>

      <div className="page-column">
        <div className="spine">
          <SystemsScene />
          <RoutingSwitch />
          <section id="work" className={sectionSpacing}>
            <h2 className={sectionHeading}>Work</h2>

            <article className="grid gap-[clamp(24px,4vw,56px)] lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-start">
              <div>
                {currentRole && (
                  <p className="mono-label">
                    {[currentRole.company, currentRole.period].filter(Boolean).join(" · ")}
                  </p>
                )}
                <h3 className="mt-2 text-[clamp(1.4rem,2.4vw,2.1rem)] font-bold leading-[1.1] tracking-[-0.015em]">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-[60ch] leading-[1.65]">{featured.description}</p>
                {featured.facts && (
                  <ul className="mt-5 grid max-w-[60ch] gap-2.5">
                    {featured.facts.map((fact) => (
                      <li
                        key={fact}
                        className="relative pl-[22px] leading-[1.55] before:absolute before:left-0 before:top-[0.55em] before:h-2 before:w-2 before:border-[1.5px] before:border-foreground before:content-['']"
                      >
                        {fact}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mono-label mt-5">{featured.stack.join(" · ")}</p>
                {featured.caseStudy && (
                  <Link href={featured.caseStudy} className="pencil-link mt-4">
                    Read the full case study
                  </Link>
                )}
              </div>
              <Image
                src={featured.image}
                alt={featured.imageAlt ?? featured.title}
                width={704}
                height={928}
                sizes="(min-width: 1024px) 26rem, 100vw"
                className="h-auto w-full max-w-[26rem] border border-border"
              />
            </article>

            <ul className="mt-14">
              {more.map((project) => (
                <li
                  key={project.title}
                  className="grid gap-[clamp(18px,3vw,40px)] border-t border-border py-[26px] sm:grid-cols-[220px_minmax(0,1fr)]"
                >
                  <div className="relative aspect-[16/10] border border-border">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      fill
                      sizes="(min-width: 640px) 220px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-[clamp(1.15rem,1.7vw,1.45rem)] font-bold leading-[1.15] tracking-[-0.015em]">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] leading-[1.65]">{project.description}</p>
                    <p className="mono-label mt-3">{project.stack.join(" · ")}</p>
                    <div className="mt-2 flex flex-wrap gap-x-6">
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
            <Link href="/projects" className="pencil-link mt-4">
              All projects
            </Link>
          </section>

          <section id="about" className={sectionSpacing}>
            <h2 className={sectionHeading}>About</h2>
            <div className="grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-2">
              <ol className="grid content-start gap-[22px]">
                {experience.map((role) => (
                  <li key={`${role.company} ${role.title}`} className="spine-tick leading-[1.55]">
                    {role.period && <span className="mono-label block">{role.period}</span>}
                    <b className="font-bold">{role.title}</b>, {role.company}
                  </li>
                ))}
              </ol>
              <div className="max-w-[60ch] space-y-4 leading-[1.65]">
                <p>
                  I&apos;m a full-stack developer, strongest on the backend. Since February 2025
                  I&apos;ve led backend work at Dalfin HealthCare on Stenella, an ICU monitoring
                  platform. From August 2025 to July 2026 I also worked on contract for Not Boring
                  Company in Singapore, building the Go microservices and Rust wallet bots behind a
                  real-time multiplayer Web3 game.
                </p>
                <p>
                  Before that I spent three years at the Ministry of Public Works and Housing
                  building the APIs behind its building-permit licensing, and a year at Melkhior
                  Teknologi shipping NestJS and Laravel services. I&apos;ve also mentored backend
                  students on REST API design and databases.
                </p>
                <p className="text-muted-foreground">
                  Tools: <span className="font-mono text-[0.85em]">{tools.join(", ")}</span>
                </p>
              </div>
            </div>
          </section>

          <section id="contact" className={`${sectionSpacing} pb-[clamp(56px,8vw,104px)]`}>
            <h2 className={sectionHeading}>Contact</h2>
            <p className="text-muted-foreground">Email is the fastest way to reach me.</p>
            <a
              href="mailto:jefrimaruli@gmail.com"
              className="mt-3 inline-block border-b-[3px] border-brand text-[clamp(1.5rem,4vw,3.4rem)] font-bold leading-[1.15] tracking-[-0.02em] [overflow-wrap:anywhere] hover:border-foreground"
            >
              jefrimaruli@gmail.com
            </a>
            <div className="mt-6 flex flex-wrap gap-x-6">
              <a href={github} className="pencil-link">
                GitHub
              </a>
              <a href={linkedin} className="pencil-link">
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
