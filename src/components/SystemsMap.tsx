import Link from "next/link"

type MapNode = {
  x: number
  y: number
  title: string
  note: string
  key?: boolean
}

type MapLabel = {
  x: number
  y: number
  text: string
  anchor?: "middle"
}

// Coordinates follow the Stenella C4 container diagram, flattened to one screen.
// Notes stay at 20 characters or fewer; anything wider overflows the 164-unit boxes.
const nodes: readonly MapNode[] = [
  { x: 8, y: 24, title: "Medical devices", note: "monitor, ventilator" },
  { x: 250, y: 24, title: "Message broker", note: "device vitals queue" },
  { x: 492, y: 24, title: "Telemetry service", note: "ingest, broadcast" },
  { x: 250, y: 164, title: "Dashboard", note: "for ICU staff" },
  { x: 492, y: 164, title: "Time-series DB", note: "vitals history" },
  { x: 8, y: 164, title: "Backend API", note: "NestJS, auth, logic", key: true },
  { x: 8, y: 312, title: "Hospital SIMRS", note: "hospital records" },
  { x: 250, y: 312, title: "License API", note: "30-day offline grace" },
]

const edges: readonly string[] = [
  "M168 52 H246",
  "M410 52 H488",
  "M572 80 V160",
  "M520 80 V122 H330 V160",
  "M250 192 H176",
  "M88 220 V308",
  "M130 220 V262 H330 V308",
]

const edgeLabels: readonly MapLabel[] = [
  { x: 207, y: 44, text: "vitals", anchor: "middle" },
  { x: 449, y: 44, text: "queue", anchor: "middle" },
  { x: 580, y: 126, text: "history" },
  { x: 425, y: 116, text: "live, WebSocket", anchor: "middle" },
  { x: 211, y: 184, text: "API calls", anchor: "middle" },
  { x: 96, y: 292, text: "FHIR sync" },
  { x: 232, y: 256, text: "license check", anchor: "middle" },
  { x: 246, y: 306, text: "Cloud" },
]

// Negative begins put packets mid-flight on load instead of all starting at a node.
const packets: readonly { path: string; dur: string; begin: string }[] = [
  { path: "M168 52 H246", dur: "1.6s", begin: "-0.3s" },
  { path: "M410 52 H488", dur: "1.6s", begin: "-1.1s" },
  { path: "M520 80 V122 H330 V160", dur: "2.4s", begin: "-0.6s" },
  { path: "M572 80 V160", dur: "1.8s", begin: "-1.4s" },
  { path: "M88 220 V308", dur: "2s", begin: "-0.9s" },
]

const flow: readonly { title: string; note: string }[] = [
  { title: "Medical devices", note: "monitor, pump, ventilator" },
  { title: "Message broker", note: "device vitals queue" },
  { title: "Telemetry service", note: "ingest, WebSocket broadcast, vitals history" },
  { title: "Dashboard", note: "live view for ICU staff" },
  { title: "Backend API", note: "NestJS, auth, business logic, license check" },
  { title: "Hospital SIMRS", note: "receives vitals through FHIR" },
]

export function SystemsMap(): React.JSX.Element {
  return (
    <figure className="max-w-[760px] xl:max-w-none">
      {/* The list below is the text version at every width, so the drawing stays out of the accessibility tree. */}
      <svg
        id="stenellaMap"
        viewBox="0 0 660 400"
        aria-hidden="true"
        focusable="false"
        className="hidden h-auto w-full md:block"
      >
        <defs>
          <marker
            id="map-arrow"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L8 4 L0 8 z" className="fill-muted-foreground" />
          </marker>
        </defs>

        <rect
          x="238"
          y="290"
          width="184"
          height="96"
          className="fill-none stroke-muted-foreground"
          strokeDasharray="4 4"
        />

        {edges.map((d) => (
          <path
            key={d}
            d={d}
            className="fill-none stroke-muted-foreground"
            strokeWidth="1.2"
            markerEnd="url(#map-arrow)"
          />
        ))}

        {edgeLabels.map((label) => (
          <text
            key={label.text}
            x={label.x}
            y={label.y}
            textAnchor={label.anchor}
            fontSize="11"
            className="fill-muted-foreground font-mono"
          >
            {label.text}
          </text>
        ))}

        {nodes.map((node) => (
          <g key={node.title}>
            <rect
              x={node.x}
              y={node.y}
              width="164"
              height="56"
              className="fill-background stroke-foreground"
              strokeWidth={node.key ? 2.8 : 1.4}
            />
            <text
              x={node.x + 10}
              y={node.y + 23}
              fontSize="13"
              className="fill-foreground font-mono font-semibold"
            >
              {node.title}
            </text>
            <text
              x={node.x + 10}
              y={node.y + 42}
              fontSize="11"
              className="fill-muted-foreground font-mono"
            >
              {node.note}
            </text>
          </g>
        ))}

        {/* Three passes, then rest. Pointing at the map replays any packet that has stopped.
            The svg id has no hyphen because SMIL reads "-" in a begin value as an offset. */}
        {packets.map((packet) => (
          <circle key={packet.path} r="4" className="fill-brand motion-reduce:hidden">
            <animateMotion
              path={packet.path}
              dur={packet.dur}
              begin={`${packet.begin};stenellaMap.mouseover`}
              repeatCount="3"
              restart="whenNotActive"
              fill="freeze"
            />
          </circle>
        ))}
      </svg>

      <ol aria-label="Stenella data flow, simplified" className="flow-list md:sr-only">
        {flow.map((step) => (
          <li key={step.title}>
            <b className="block font-mono text-[0.85rem] font-semibold">{step.title}</b>
            <span className="text-[0.88rem] text-muted-foreground">{step.note}</span>
          </li>
        ))}
      </ol>

      <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1">
        <span className="mono-label">
          Stenella ICU platform, on-premises per hospital. Simplified from its C4 diagram.
        </span>
        <Link href="/projects/dalfin-stenella#architecture" className="pencil-link text-sm">
          See the full architecture
        </Link>
      </figcaption>
    </figure>
  )
}
