"use client";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiVercel,
  SiLaravel,
  SiNestjs,
  SiMysql,
  SiBootstrap,
  SiGitlab,
  SiGithubactions,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/utils";
import { Calendar, Building2 } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type TechGroup = {
  title: string;
  techs: {
    name: string;
    icon: React.ReactNode;
  }[];
};

const techStack: TechGroup[] = [
  {
    title: "Frontend",
    techs: [
      { name: "React", icon: <SiReact className="h-6 w-6" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-6 w-6" /> },
      { name: "JavaScript", icon: <SiJavascript className="h-6 w-6" /> },
      { name: "HTML", icon: <SiHtml5 className="h-6 w-6" /> },
      { name: "CSS", icon: <SiCss className="h-6 w-6" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="h-6 w-6" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="h-6 w-6" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6" /> },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6" /> },
      { name: "Express", icon: <SiExpress className="h-6 w-6" /> },
      { name: "NestJS", icon: <SiNestjs className="h-6 w-6" /> },
      { name: "Laravel", icon: <SiLaravel className="h-6 w-6" /> },
      { name: "Prisma", icon: <SiPrisma className="h-6 w-6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6" /> },
      { name: "MySQL", icon: <SiMysql className="h-6 w-6" /> },
      { name: "MongoDB", icon: <SiMongodb className="h-6 w-6" /> },
    ],
  },
  {
    title: "Tools & Others",
    techs: [
      { name: "Git", icon: <SiGit className="h-6 w-6" /> },
      { name: "GitHub", icon: <SiGithub className="h-6 w-6" /> },
      { name: "GitLab", icon: <SiGitlab className="h-6 w-6" /> },
      { name: "CI/CD", icon: <SiGithubactions className="h-6 w-6" /> },
      { name: "Docker", icon: <SiDocker className="h-6 w-6" /> },
      { name: "Figma", icon: <SiFigma className="h-6 w-6" /> },
      { name: "VS Code", icon: <VscVscode className="h-6 w-6" /> },
      { name: "Vercel", icon: <SiVercel className="h-6 w-6" /> },
    ],
  },
];

const experiences = [
  {
    title: "Senior Back End Developer",
    company: "Dalfin HealthCare",
    period: "Feb 2025 - Present",
    description:
      "Developed API MVP for Dalfin's IoMT ICU hospital digitalization platform, exposing FHIR-compliant RESTful APIs so hospitals can integrate patient data into their own SIMRS. Led backend team to ensure scalability across microservices architecture.",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "FHIR",
      "HL7",
      "Microservices",
      "REST API",
      "Git",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Melkhior Teknologi",
    period: "Jan 2024 - Dec 2024",
    description:
      "Developed scalable web applications and microservices. Enhanced performance and reliability through CI/CD and Docker.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "NestJS",
      "Laravel",
      "Bootstrap",
      "MongoDB",
      "Websocket",
      "Docker",
      "Microservices",
      "Next.js",
      "Tailwind CSS",
      "React",
      "Prisma",
      "MySQL",
      "Git",
      "GitLab",
      "CI/CD",
    ],
  },
  {
    title: "Back End Developer",
    company: "Kementerian Pekerjaan Umum dan Perumahan Rakyat",
    period: "Aug 2020 - Dec 2023",
    description:
      "Developed and maintained the APIs that receive licensing requests from the national OSS system and send processed results back to it.",
    technologies: [
      "PHP",
      "CodeIgniter",
      "OOP",
      "REST API",
      "MySQL",
      "Git",
      "GitLab",
    ],
  },
  {
    title: "Mentor Back End Developer",
    company: "STMIK Mardira Indonesia",
    period: "Oct 2023 - Feb 2023",
    description:
      "Mentor students in the Back End Developer program, helping them understand and implement RESTful APIs, database management, and server-side logic.",
    technologies: [
      "Backend",
      "MySQL",
      "PHP",
      "OOP",
      "REST API",
      "Git",
      "GitHub",
      "Slack",
    ],
  },
  {
    title: "Mentor Programming",
    company: "Creative Student Association",
    period: "Sep 2019 - Dec 2020",
    description:
      "Mentored team in developing IoT-based Smart Presence System, created project-based learning modules for students",
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "NodeJS",
      "PHP",
      "MySQL",
      "Laravel",
      "Git",
      "GitHub",
    ],
  },
];

export function About() {
  const bioRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const experienceRef = useRef<HTMLHeadingElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Short ease-out reveals; the bio starts in view, so it must not linger hidden.
    const reveal = { opacity: 1, y: 0, x: 0, duration: 0.5, ease: "power3.out" };
    const ctx = gsap.context(() => {
      for (const el of [bioRef.current, techStackRef.current, experienceRef.current]) {
        gsap.fromTo(el, { opacity: 0, y: 16 }, {
          ...reveal,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      }
      gsap.fromTo(cardsRef.current, { opacity: 0, y: 16 }, {
        ...reveal,
        stagger: 0.06,
        scrollTrigger: { trigger: cardsRef.current[0], start: "top 85%" },
      });
      gsap.fromTo(
        timelineRefs.current,
        { opacity: 0, x: (index) => (index % 2 === 0 ? -16 : 16) },
        {
          ...reveal,
          stagger: 0.08,
          scrollTrigger: { trigger: timelineRefs.current[0], start: "top 85%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 space-y-8">
      <div className="container mx-auto px-4">
        <h2 className="text-balance text-3xl font-bold tracking-tighter sm:text-5xl md:text-5xl text-center mb-8">
          About Me
        </h2>

        {/* Bio Section */}
        <div ref={bioRef} className="max-w-2xl mx-auto mb-16 space-y-5 text-lg text-muted-foreground">
          <p>
            I&apos;m a full-stack developer, strongest on the backend. Since February 2025 I&apos;ve led backend work at Dalfin
            HealthCare on Stenella, an ICU monitoring platform: NestJS services
            that stream bedside device vitals to a live dashboard and hand them
            to each hospital&apos;s own system through FHIR APIs.
          </p>
          <p>
            Before that I spent three years at the Ministry of Public Works and
            Housing building the APIs behind its building-permit licensing, and
            a year at Melkhior Teknologi shipping NestJS and Laravel services.
            I&apos;ve also mentored backend students on REST API design and
            databases.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-16">
          <h3
            ref={techStackRef}
            className="text-balance text-3xl font-bold text-center mb-8"
          >
            Tech Stack
          </h3>
          <div className="grid gap-4 md:grid-cols-3 max-w-6xl mx-auto">
            {techStack.map((group, index) => (
              <Card
                key={group.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
              >
                <CardHeader>
                  <h4 className="text-xl font-semibold text-center">
                    {group.title}
                  </h4>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-y-4 -mx-3 w-[95%] mx-auto">
                    {group.techs.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center gap-1.5 group px-3"
                      >
                        <div className="p-2 rounded-lg bg-secondary text-foreground group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                          {tech.icon}
                        </div>
                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-8 py-16">
          <h3
            className="text-balance text-3xl font-bold text-center mb-12"
            ref={experienceRef}
          >
            Experience
          </h3>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

            {/* Experience items */}
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                ref={(el) => {
                  timelineRefs.current[index] = el;
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-brand border-2 border-background" />

                {/* Content */}
                <div
                  className={`md:${
                    index % 2 === 0 ? "text-right" : "text-left"
                  } ${index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}`}
                >
                  <h4
                    className={`text-xl font-semibold ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {experience.title}
                  </h4>
                  <div
                    className={`flex items-center gap-2 text-muted-foreground mt-1 mb-2 ${
                      index % 2 === 0 ? "justify-end" : ""
                    }`}
                  >
                    <Building2 className="h-4 w-4" />
                    <span>{experience.company}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-muted-foreground mb-3 ${
                      index % 2 === 0 ? "justify-end" : ""
                    }`}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 0
                      ? "md:pl-12 md:order-2"
                      : "md:pr-12 md:text-left"
                  }
                >
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
