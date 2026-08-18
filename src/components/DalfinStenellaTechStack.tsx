import {
  SiDocker,
  SiFastapi,
  SiMinio,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiRabbitmq,
  SiRedis,
  SiTauri,
  SiTypescript,
} from "react-icons/si"

const stack = [
  {
    icon: SiNestjs,
    name: "NestJS",
    role: "Structures the backend API — auth, business logic, and the license/contract validation flow — with a modular architecture built for a team to extend, not just one person to remember.",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    role: "Type safety across the backend and the telemetry pipeline's data contracts, so a device-payload shape mismatch fails at compile time instead of silently corrupting a patient's vitals record.",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL + TimescaleDB",
    role: "The core database, extended with TimescaleDB for the vitals time-series — hypertables handle the sustained write-and-query pattern of continuous ICU monitoring far better than plain relational tables.",
  },
  {
    icon: SiPrisma,
    name: "Prisma",
    role: "One schema and migration history shared between the backend and telemetry service, so the two can't silently drift apart on what a table looks like.",
  },
  {
    icon: SiRedis,
    name: "Redis",
    role: "Caches the license/contract check so every request doesn't re-validate against the cloud API, keeping the dashboard responsive even on a slow hospital network.",
  },
  {
    icon: SiRabbitmq,
    name: "RabbitMQ",
    role: "Decouples medical devices from the app — devices publish vitals to a queue, and the telemetry service consumes at its own pace instead of every device call blocking on a live database write.",
  },
  {
    icon: SiMinio,
    name: "MinIO",
    role: "S3-compatible object storage for uploaded documents and images, running on the same on-premises box as everything else, since patient files can't leave the hospital network.",
  },
  {
    icon: SiFastapi,
    name: "FastAPI",
    role: "Powers the telemetry microservice on its own. Python's data-processing ecosystem was the better fit there, kept as a separate service instead of forcing the NestJS backend to do both jobs.",
  },
  {
    icon: SiDocker,
    name: "Docker Compose",
    role: "The entire stack — nine services — ships as one Compose bundle, so hospital IT installs it with a single command instead of provisioning each service by hand.",
  },
  {
    icon: SiTauri,
    name: "Tauri",
    role: "The desktop installer that wraps the Compose bundle into a native app hospital IT can double-click — far lighter than Electron for a tool that only needs to run a handful of install steps.",
  },
]

export function DalfinStenellaTechStack() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stack.map(({ icon: Icon, name, role }) => (
        <div
          key={name}
          className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-brand/40"
        >
          <div className="flex items-center gap-2.5">
            <Icon className="h-5 w-5 text-brand" />
            <span className="font-medium">{name}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{role}</p>
        </div>
      ))}
    </div>
  )
}
