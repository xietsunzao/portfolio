import Link from "next/link"

type BoxProps = {
  x: number
  y: number
  width?: number
  title: string
  note: string
  heavy?: boolean
  // Suffix of the lit-* class whose keyframes outline the box in vermilion while the reading is inside.
  lit?: string
  // Suffix of the note-* and value-* classes that swap the note for the reading's value.
  swap?: string
  labelClass?: string
}

type Label = {
  x: number
  y: number
  text: string
  anchor?: "middle" | "end"
}

type Beat = {
  lead: string
  text: string
  list?: readonly string[]
}

const reading = "bed 4: HR 96"

const beats: readonly Beat[] = [
  { lead: "Level 1, context.", text: "Stenella sits between the bedside and the hospital's records." },
  { lead: "Level 2, containers.", text: "Five containers run on the hospital's own servers." },
  { lead: "Level 2, one reading.", text: "Bed 4's heart rate takes the legacy route in five hops." },
  { lead: "The new route.", text: "A device can send its readings to the backend as webhooks instead." },
  {
    lead: "Level 3, components.",
    text: "I built this route, from webhook inbox to a feed per bed.",
    list: [
      "Webhook receiver, with retry and backoff and alarm deduplication.",
      "Transactional inbox, claimed with FOR UPDATE SKIP LOCKED.",
      "Vitals writer, storing per-minute vitals in TimescaleDB.",
      "WebSocket gateway, one feed of live vitals and alarms per bed.",
    ],
  },
  { lead: "Level 2, both routes.", text: "Each device moves to the new route without downtime." },
]

// Level 1 shows only the edges that cross the system boundary.
const stubEdges: readonly string[] = ["M198,144 H230", "M966,144 H996", "M966,288 H996", "M966,432 H996"]
const stubLabels: readonly Label[] = [
  { x: 226, y: 100, text: "vitals", anchor: "end" },
  { x: 1000, y: 100, text: "live view" },
  { x: 958, y: 280, text: "license check", anchor: "end" },
  { x: 958, y: 424, text: "FHIR", anchor: "end" },
]

const legacyEdges: readonly string[] = [
  "M198,144 H258",
  "M458,144 H498",
  "M698,144 H738",
  "M600,176 V252",
  "M938,144 H996",
]
const legacyLabels: readonly Label[] = [
  { x: 226, y: 100, text: "vitals", anchor: "end" },
  { x: 480, y: 100, text: "queue", anchor: "middle" },
  { x: 720, y: 100, text: "WebSocket", anchor: "middle" },
  { x: 632, y: 222, text: "history" },
  { x: 1000, y: 100, text: "live view" },
]

const otherEdges: readonly string[] = ["M790,176 V396", "M938,432 H996", "M938,412 H980 V288 H996"]
const otherLabels: readonly Label[] = [
  { x: 798, y: 300, text: "API calls" },
  { x: 998, y: 372, text: "license check" },
]

// Numbered in order of interaction, as in a C4 dynamic diagram, left of each edge label.
const hops: readonly { x: number; y: number }[] = [
  { x: 153, y: 96 },
  { x: 440, y: 96 },
  { x: 617, y: 218 },
  { x: 661, y: 96 },
  { x: 984, y: 96 },
]

const components: readonly { x: number; title: string; notes: readonly [string, string] }[] = [
  { x: 108, title: "Webhook receiver", notes: ["retry with backoff", "alarm deduplication"] },
  { x: 556, title: "Transactional inbox", notes: ["FOR UPDATE", "SKIP LOCKED"] },
  { x: 1004, title: "Vitals writer", notes: ["per minute, into", "TimescaleDB"] },
  { x: 1452, title: "WebSocket gateway", notes: ["live vitals, alarms", "one feed per bed"] },
]

function classes(...names: readonly (string | false | undefined)[]): string {
  return names.filter(Boolean).join(" ")
}

function Box({ x, y, width = 196, title, note, heavy = false, lit, swap, labelClass }: BoxProps): React.JSX.Element {
  return (
    <>
      <rect
        className={classes("node", heavy && "key", lit && `lit-${lit} timed`)}
        x={x}
        y={y}
        width={width}
        height={64}
      />
      <text className={classes("node-title", labelClass)} x={x + 10} y={y + 27}>
        {title}
      </text>
      <text className={classes("node-note", labelClass, swap && `note-${swap} timed`)} x={x + 10} y={y + 48}>
        {note}
      </text>
      {swap && (
        <text className={`node-value value-${swap} timed`} x={x + 10} y={y + 48}>
          {reading}
        </text>
      )}
    </>
  )
}

function Edges({ paths, labels }: { paths: readonly string[]; labels: readonly Label[] }): React.JSX.Element {
  return (
    <>
      {paths.map((d) => (
        <path key={d} className="edge" d={d} markerEnd="url(#scene-arrow)" />
      ))}
      {labels.map((label) => (
        <text key={label.text} className="edge-label" x={label.x} y={label.y} textAnchor={label.anchor}>
          {label.text}
        </text>
      ))}
    </>
  )
}

// One server-rendered SVG with no client JS: systems-scene.css drives every beat from the scroll position.
export function SystemsScene(): React.JSX.Element {
  return (
    <section className="systems-scene" aria-labelledby="scene-title">
      <div className="stage">
        <div className="stage-head">
          <h2 id="scene-title" className="spine-node section-heading mb-0">
            Follow one heart&#8209;rate reading
          </h2>
          {/* The text version of the drawing at every width. */}
          <ol className="beats">
            {beats.map((beat, i) => (
              <li key={beat.lead} className={`beat beat-${i + 1} timed`}>
                <b>{beat.lead}</b> {beat.text}
                {beat.list && (
                  <ul className="comp-list">
                    {beat.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="frame" role="region" aria-label="Container diagram" tabIndex={0}>
          <svg
            className="map"
            viewBox="0 0 1200 580"
            role="img"
            aria-label="Stenella's containers, with the legacy route and the new webhook route"
            focusable="false"
          >
            <defs>
              <marker
                id="scene-arrow"
                viewBox="0 0 8 8"
                refX="7.2"
                refY="4"
                markerWidth="8"
                markerHeight="8"
                markerUnits="userSpaceOnUse"
                orient="auto-start-reverse"
              >
                <path className="arrowhead" d="M0 0 L8 4 L0 8 z" />
              </marker>
              <marker
                id="scene-arrow-large"
                viewBox="0 0 8 8"
                refX="7.2"
                refY="4"
                markerWidth="20"
                markerHeight="20"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <path className="arrowhead" d="M0 0 L8 4 L0 8 z" />
              </marker>
            </defs>

            <g className="camera timed">
              <rect className="boundary timed" x={234} y={72} width={732} height={440} />
              <text className="edge-label boundary-label timed" x={234} y={60}>
                Hospital site, on-premises
              </text>

              <g className="system-title timed">
                <text className="system-name" x={600} y={292} textAnchor="middle">
                  Stenella
                </text>
                <text className="system-note" x={600} y={330} textAnchor="middle">
                  ICU monitoring, installed in each hospital
                </text>
              </g>

              <g className="stubs timed">
                <Edges paths={stubEdges} labels={stubLabels} />
              </g>
              <g className="edges-legacy timed">
                <Edges paths={legacyEdges} labels={legacyLabels} />
              </g>
              <g className="edges-other timed">
                <Edges paths={otherEdges} labels={otherLabels} />
              </g>

              {hops.map((hop, i) => (
                <g key={hop.x} className={`hop hop-${i + 1} timed`}>
                  <circle cx={hop.x} cy={hop.y} r={10} />
                  <text x={hop.x} y={hop.y + 5} textAnchor="middle">
                    {i + 1}
                  </text>
                </g>
              ))}

              <path className="trail trail-legacy timed" pathLength={100} d="M198,144 H998" />
              <path className="dot dot-legacy timed" pathLength={100} d="M198,144 H998" />
              <path className="trail trail-tsdb timed" pathLength={100} d="M600,176 V252" />
              <path className="dot dot-tsdb timed" pathLength={100} d="M600,176 V252" />

              <g className="new-routes timed">
                <path className="trail route-webhook timed" pathLength={100} d="M100,176 V428 H736" />
                <path className="head head-webhook timed" d="M728,423 L738,428 L728,433 z" />
                <path className="dot dot-webhook timed" pathLength={100} d="M100,176 V428 H742" />
                <path className="trail route-vitals timed" pathLength={100} d="M770,400 V360 H600 V330" />
                <path className="head head-vitals timed" d="M595,330 L600,320 L605,330 z" />
                <path className="trail route-feed timed" pathLength={100} d="M900,400 V186" />
                <path className="head head-feed timed" d="M895,186 L900,176 L905,186 z" />
                <text className="edge-label label-webhook timed" x={420} y={420}>
                  webhooks
                </text>
                <text className="edge-label label-vitals timed" x={610} y={350}>
                  per-minute vitals
                </text>
                <text className="edge-label label-feed timed" x={892} y={240} textAnchor="end">
                  per bed
                </text>
              </g>

              <Box x={2} y={112} title="Medical devices" note="monitors, pumps" swap="devices" />
              <g className="group-nurses timed">
                <Box x={1000} y={112} width={188} title="ICU nurses" note="watch live vitals" lit="nurses" />
              </g>
              <g className="group-external timed">
                <rect className="zone" x={990} y={232} width={208} height={108} />
                <text className="edge-label" x={990} y={222}>
                  Cloud
                </text>
                <Box x={1000} y={256} width={188} title="License API" note="30 days offline" />
                <Box x={1000} y={400} width={188} title="Hospital SIMRS" note="receives FHIR" />
              </g>
              <g className="group-legacy timed">
                <Box x={262} y={112} title="Message broker" note="vitals queue" lit="broker" />
                <Box x={502} y={112} title="Telemetry service" note="FastAPI, ingest" lit="telemetry" />
                <Box x={742} y={112} title="Dashboard" note="React, live view" lit="dashboard" swap="dashboard" />
                <Box x={502} y={256} title="Time-series DB" note="vitals history" lit="tsdb" />
              </g>
              <g className="group-backend timed">
                <Box
                  x={742}
                  y={400}
                  title="Backend API"
                  note="NestJS, auth, FHIR"
                  heavy
                  lit="backend"
                  labelClass="backend-label timed"
                />
              </g>

              {/* Drawn ten times larger and scaled down, so their type sizes stay real when the camera zooms in. */}
              <g className="components timed">
                <g transform="translate(742 407) scale(0.1)">
                  <text className="comp-heading" x={108} y={100}>
                    Backend API, NestJS
                  </text>
                  <path className="comp-edge comp-arrow-1 timed" d="M-110,280 H100" markerEnd="url(#scene-arrow-large)" />
                  <text className="comp-label" x={-110} y={250}>
                    bed 4
                  </text>
                  {components.map((component, i) => (
                    <g key={component.title}>
                      <rect className={`comp-box comp-${i + 1} timed`} x={component.x} y={150} width={400} height={260} />
                      <text className="comp-title" x={component.x + 24} y={212}>
                        {component.title}
                      </text>
                      <text className="comp-note" x={component.x + 24} y={272}>
                        {component.notes[0]}
                      </text>
                      <text className="comp-note" x={component.x + 24} y={314}>
                        {component.notes[1]}
                      </text>
                    </g>
                  ))}
                  <path className="comp-edge comp-arrow-2 timed" d="M508,280 H548" markerEnd="url(#scene-arrow-large)" />
                  <path className="comp-edge comp-arrow-3 timed" d="M956,280 H996" markerEnd="url(#scene-arrow-large)" />
                  <path className="comp-edge comp-arrow-4 timed" d="M1404,280 H1444" markerEnd="url(#scene-arrow-large)" />
                  <path className="comp-edge comp-arrow-5 timed" d="M1204,410 V682" markerEnd="url(#scene-arrow-large)" />
                  <text className="comp-label" x={1224} y={646}>
                    to TimescaleDB
                  </text>
                  <path className="comp-edge comp-arrow-6 timed" d="M1652,150 V-202" markerEnd="url(#scene-arrow-large)" />
                  <text className="comp-label" x={1672} y={-130}>
                    to the dashboard
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <p className="map-link">
          <Link href="/projects/dalfin-stenella#architecture" className="pencil-link">
            See the container diagram
          </Link>
        </p>
      </div>
    </section>
  )
}
