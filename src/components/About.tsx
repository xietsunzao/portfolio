"use client";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
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
      { name: "CSS", icon: <SiCss3 className="h-6 w-6" /> },
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
      "Developed API MVP for Dalfin's IoMT ICU hospital digitalization platform, integrating with Indonesia's SATUSEHAT health system. Implemented FHIR-compliant RESTful APIs and led backend team to ensure scalability across microservices architecture.",
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
      "Developed and maintained Developed APIs to receive services from OSS and send processed data back to the OSS system, improving licensing workflow efficiency",
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
    // Bio section animation
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: bioRef.current,
          start: "top 80%",
        },
      }
    );

    // Tech stack title animation
    gsap.fromTo(
      techStackRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 80%",
        },
      }
    );

    // Cards stagger animation
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
        },
      }
    );

    // Experience title animation
    gsap.fromTo(
      experienceRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
        },
      }
    );

    // Timeline items stagger animation
    gsap.fromTo(
      timelineRefs.current,
      {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -50 : 50),
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRefs.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 space-y-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-5xl text-center mb-8">
          About Me
        </h2>

        {/* Bio Section */}
        <div ref={bioRef} className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-xl text-muted-foreground mb-6">
            I&apos;m a passionate full-stack developer with a keen eye for
            design and a love for creating seamless user experiences. With
            expertise in modern web technologies, I build scalable and efficient
            applications that solve real-world problems.
          </p>
          <p className="text-xl text-muted-foreground">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or sharing my
            knowledge with the developer community.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-16">
          <h3
            ref={techStackRef}
            className="text-3xl font-bold text-center mb-8"
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
                        <div className="p-2 rounded-lg bg-secondary group-hover:bg-secondary/70 transition-colors">
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
            className="text-3xl font-bold text-center mb-12"
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
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

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
                            className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
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
