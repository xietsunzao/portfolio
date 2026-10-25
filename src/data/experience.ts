export type Role = {
  title: string
  company: string
  // Left out when unknown, never guessed.
  period?: string
  description: string
  stack: readonly string[]
}

export const experience: readonly Role[] = [
  {
    title: "Senior Back End Developer",
    company: "Dalfin HealthCare",
    period: "Feb 2025 - Present",
    description:
      "Built the API MVP for Stenella, Dalfin's ICU monitoring platform, including the FHIR REST APIs that let hospitals pull patient data into their own SIMRS. Leads the backend team.",
    stack: [
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
    title: "Back End Engineer (Contract)",
    company: "Not Boring Company",
    period: "Aug 2025 - Jul 2026",
    description:
      "Designed and built the Go microservices behind a real-time multiplayer game, with gRPC and Protocol Buffers between services. Built Rust automation bots that manage wallets with secp256k1 keys and BIP39/BIP32 derivation, and Redis caching that cut database reads during peak gameplay.",
    stack: ["Go", "gRPC", "Protocol Buffers", "Rust", "Tokio", "SQLx", "PostgreSQL", "Redis", "TypeScript"],
  },
  {
    title: "Full Stack Engineer",
    company: "Melkhior Teknologi",
    period: "Jan 2024 - Dec 2024",
    description:
      "Built web apps and backend services with NestJS, Laravel and Next.js, deployed with Docker through CI/CD.",
    stack: [
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
    company: "Ministry of Public Works and Housing",
    period: "Aug 2020 - Dec 2023",
    description:
      "Developed and maintained the APIs that receive licensing requests from the national OSS system and send processed results back to it.",
    stack: ["PHP", "CodeIgniter", "OOP", "REST API", "MySQL", "Git", "GitLab"],
  },
  {
    title: "Mentor Back End Developer",
    company: "STMIK Mardira Indonesia",
    description:
      "Mentored students in the backend developer program on REST API design, databases and server-side code.",
    stack: ["MySQL", "PHP", "OOP", "REST API", "Git", "GitHub", "Slack"],
  },
  {
    title: "Mentor Programming",
    company: "Creative Student Association",
    period: "Sep 2019 - Dec 2020",
    description:
      "Mentored a student team building an IoT smart presence system, and wrote project-based learning modules.",
    stack: ["HTML/CSS", "JavaScript", "Node.js", "PHP", "MySQL", "Laravel", "Git", "GitHub"],
  },
]
