const stack = [
  {
    name: "NestJS",
    role: "Structures the backend API, covering auth, business logic and the license and contract validation flow, as modules a team can extend.",
  },
  {
    name: "TypeScript",
    role: "Type safety across the backend and the telemetry pipeline's data contracts, so a device-payload shape mismatch fails at compile time instead of silently corrupting a patient's vitals record.",
  },
  {
    name: "PostgreSQL + TimescaleDB",
    role: "The core database, extended with TimescaleDB for the vitals time series. Hypertables handle the sustained write-and-query pattern of continuous ICU monitoring far better than plain relational tables.",
  },
  {
    name: "Prisma",
    role: "One schema and migration history shared between the backend and telemetry service, so the two can't silently drift apart on what a table looks like.",
  },
  {
    name: "Redis",
    role: "Caches the license/contract check so every request doesn't re-validate against the cloud API, keeping the dashboard responsive even on a slow hospital network.",
  },
  {
    name: "RabbitMQ",
    role: "Decouples medical devices from the app. Devices publish vitals to a queue, and the telemetry service consumes at its own pace instead of every device call blocking on a live database write.",
  },
  {
    name: "MinIO",
    role: "S3-compatible object storage for uploaded documents and images, running on the same on-premises box as everything else, since patient files can't leave the hospital network.",
  },
  {
    name: "FastAPI",
    role: "Powers the telemetry microservice on its own. Python's data-processing ecosystem was the better fit there, kept as a separate service instead of forcing the NestJS backend to do both jobs.",
  },
  {
    name: "Docker Compose",
    role: "All nine services ship as one Compose bundle, so hospital IT installs the stack with a single command instead of provisioning each service by hand.",
  },
  {
    name: "Tauri",
    role: "The desktop installer that wraps the Compose bundle into a native app hospital IT can double-click. It is far lighter than Electron for a tool that only runs a handful of install steps.",
  },
] as const

export function DalfinStenellaTechStack(): React.JSX.Element {
  return (
    <dl className="border-b border-border">
      {stack.map(({ name, role }) => (
        <div
          key={name}
          className="grid gap-x-[clamp(18px,3vw,40px)] gap-y-1 border-t border-border py-4 md:grid-cols-[minmax(0,2fr)_minmax(0,5fr)]"
        >
          <dt className="font-mono text-[0.85rem] font-semibold leading-[1.65]">{name}</dt>
          <dd className="max-w-[60ch] leading-[1.65] text-muted-foreground">{role}</dd>
        </div>
      ))}
    </dl>
  )
}
