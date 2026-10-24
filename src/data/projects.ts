export type Project = {
  title: string
  description: string
  image: string
  imageAlt?: string
  stack: readonly string[]
  facts?: readonly string[]
  demo?: string
  github?: string
  caseStudy?: string
}

export const projects: readonly Project[] = [
  {
    title: "Dalfin Stenella Intelligent Care",
    description:
      "Real-time ICU patient monitoring, installed on-premises in each hospital. Bedside devices stream vitals to a live dashboard for ICU staff, and FHIR APIs hand the data to the hospital's own SIMRS.",
    image: "/projects/project-9.png",
    imageAlt: "Dalfin ICU dashboard graphic with SATUSEHAT and BPJS Kesehatan integration labels",
    caseStudy: "/projects/dalfin-stenella",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma"],
    facts: [
      "Designed the on-premises deployment, a Docker Compose bundle of the NestJS backend, React dashboard and FastAPI telemetry service.",
      "Hospital IT staff install it themselves through a desktop installer, since patient data stays on site and no engineer is there to help.",
      "Licensing checks a cloud API with a 30-day offline grace period, so a network outage never stops monitoring.",
    ],
  },
  {
    title: "SIMBG - Building Management System",
    description:
      "Building permit system for Indonesia's Ministry of Public Works and Housing, including the APIs that exchange licensing requests and results with the national OSS system.",
    image: "/projects/project-1.png",
    imageAlt: "SIMBG landing page, Sistem Informasi Manajemen Bangunan Gedung",
    demo: "https://simbg.pu.go.id",
    stack: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
  },
  {
    title: "DBSS - Digital Banking Support System",
    description:
      "Internal system for Bank Indonesia that supports the implementation of the Digital Banking System.",
    image: "/projects/project-2.png",
    stack: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
  },
  {
    title: "Ximpli-Me",
    description: "Work platform that puts team chat and project management in one app.",
    image: "/projects/project-3.png",
    demo: "https://app.ximpli-me.com",
    stack: ["Laravel", "NestJS", "MongoDB", "Node.js", "TypeScript"],
  },
  {
    title: "Smart Presence Doorlock",
    description: "Door lock that checks a person's RFID card before it opens the room.",
    image: "/projects/project-4.png",
    stack: ["Node.js", "MySQL", "Laravel", "JavaScript", "Bootstrap"],
  },
  {
    title: "Ximpli-Me API Documentation",
    description:
      "Docusaurus site documenting the Ximpli-Me API, with authentication guides, endpoint references and interactive examples.",
    image: "/projects/project-5.png",
    imageAlt: "Ximpli-Me API documentation home page",
    demo: "https://docs.ximpli-me.com",
    github: "https://github.com/xietsunzao/ximpli-documentation/",
    stack: ["React", "TypeScript", "Docusaurus", "MDX", "CSS", "Webpack"],
  },
  {
    title: "Ximpli-Me Developer",
    description:
      "Developer portal where Ximpli-Me integrators manage API access and track key usage and integration metrics.",
    image: "/projects/project-6.png",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "MyStarguard",
    description:
      "Staff system for security guard teams. Guards clock in by scanning a QR code, and supervisors see each guard's GPS location live.",
    image: "/projects/project-7.png",
    imageAlt: "MyStarguard admin page assigning guards to a site, with clock-in and clock-out times",
    demo: "https://mystarguard.com/",
    stack: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
  },
  {
    title: "File Explorer",
    description:
      "Web file manager with nested folders and drag-and-drop uploads, built on Nuxt with an Express API.",
    image: "/projects/project-8.png",
    github: "https://github.com/xietsunzao/file-manager",
    stack: ["Vue.js", "Nuxt", "Tailwind CSS", "Express"],
  },
]
