"use client"

import { motion } from "framer-motion"
import {
  Activity,
  Building2,
  Database,
  Download,
  KeyRound,
  LayoutDashboard,
  Server,
  User,
  Waves,
  Waypoints,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

function Box({
  x,
  y,
  w,
  h,
  icon: Icon,
  label,
  sublabel,
  accent = false,
}: {
  x: number
  y: number
  w: number
  h: number
  icon: LucideIcon
  label: string
  sublabel: string
  accent?: boolean
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        className={accent ? "fill-brand/10 stroke-brand" : "fill-card stroke-border"}
        strokeWidth={1.5}
      />
      <foreignObject x={x + 12} y={y + h / 2 - 11} width={22} height={22}>
        <Icon className={accent ? "h-[22px] w-[22px] text-brand" : "h-[22px] w-[22px] text-muted-foreground"} strokeWidth={1.75} />
      </foreignObject>
      <text x={x + 42} y={y + h / 2 - 3} className="fill-foreground text-[13px] font-medium">
        {label}
      </text>
      <text x={x + 42} y={y + h / 2 + 13} className="fill-muted-foreground text-[10px]">
        {sublabel}
      </text>
    </g>
  )
}

function Person({ cx, cy, label, sublabel }: { cx: number; cy: number; label: string; sublabel: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={22} className="fill-secondary stroke-border" strokeWidth={1.5} />
      <foreignObject x={cx - 11} y={cy - 11} width={22} height={22}>
        <User className="h-[22px] w-[22px] text-foreground" strokeWidth={1.75} />
      </foreignObject>
      <text x={cx} y={cy + 38} textAnchor="middle" className="fill-foreground text-[12px] font-medium">
        {label}
      </text>
      <text x={cx} y={cy + 52} textAnchor="middle" className="fill-muted-foreground text-[10px]">
        {sublabel}
      </text>
    </g>
  )
}

function GroupLabel({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <text x={x} y={y} className="fill-muted-foreground text-[11px] font-medium uppercase tracking-wide">
      {label}
    </text>
  )
}

function FlowDot({ pathId, duration = 2.4, delay = 0 }: { pathId: string; duration?: number; delay?: number }) {
  return (
    <circle r={3} className="fill-brand">
      <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  )
}

function Arrow({
  id,
  d,
  label,
  labelX,
  labelY,
  cloudSync = false,
  live = false,
  liveDelay = 0,
}: {
  id?: string
  d: string
  label?: string
  labelX?: number
  labelY?: number
  cloudSync?: boolean
  live?: boolean
  liveDelay?: number
}) {
  return (
    <g>
      <path
        id={id}
        d={d}
        fill="none"
        className={cloudSync ? "stroke-brand" : "stroke-muted-foreground"}
        strokeWidth={1.5}
        strokeDasharray={cloudSync ? "5 4" : undefined}
        markerEnd="url(#arrowhead)"
        style={cloudSync ? { animation: "dash-flow 1.2s linear infinite" } : undefined}
      />
      {live && id && <FlowDot pathId={id} delay={liveDelay} />}
      {label && (
        <text x={labelX} y={labelY} textAnchor="middle" className={cloudSync ? "fill-brand text-[10px]" : "fill-muted-foreground text-[10px]"}>
          {label}
        </text>
      )}
    </g>
  )
}

function LegendItem({ x, y, children, swatch }: { x: number; y: number; children: string; swatch: React.ReactNode }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {swatch}
      <text x={38} y={4} className="fill-muted-foreground text-[10px]">
        {children}
      </text>
    </g>
  )
}

export function DalfinStenellaArchitecture() {
  return (
    <motion.svg
      viewBox="0 0 1080 730"
      className="h-auto w-full"
      role="img"
      aria-label="Stenella Care platform container diagram, C4 model level 2"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-muted-foreground" />
        </marker>
        <style>{`@keyframes dash-flow { to { stroke-dashoffset: -18; } }`}</style>
      </defs>

      <text x={140} y={26} className="fill-foreground text-[13px] font-semibold">
        Stenella Care Platform — Container diagram (C4, level 2)
      </text>

      {/* Hospital site group */}
      <rect x={140} y={60} width={620} height={430} className="fill-transparent stroke-border" strokeWidth={1} strokeDasharray="3 4" />
      <GroupLabel x={160} y={50} label="Hospital site — on-premises" />

      <Box x={180} y={100} w={230} h={60} icon={Activity} label="Medical devices" sublabel="patient monitor, pump, ventilator" />
      <Box x={180} y={220} w={230} h={50} icon={Waypoints} label="Message broker" sublabel="device vitals queue" />
      <Box x={180} y={330} w={230} h={50} icon={Waves} label="Telemetry service" sublabel="ingest + WebSocket broadcast" />
      <Box x={180} y={425} w={230} h={50} icon={Database} label="Time-series database" sublabel="patient vitals history" />

      <Box x={500} y={100} w={230} h={60} icon={Server} label="Backend API" sublabel="auth, business logic" />
      <Box x={500} y={325} w={230} h={60} icon={LayoutDashboard} label="Dashboard" sublabel="live view for clinicians" />

      {/* Cloud group */}
      <rect x={810} y={60} width={270} height={130} className="fill-transparent stroke-border" strokeWidth={1} strokeDasharray="3 4" />
      <GroupLabel x={830} y={50} label="Cloud" />

      <Box x={840} y={100} w={210} h={60} icon={KeyRound} label="License / contract API" sublabel="30-day offline grace period" accent />

      {/* External system — the hospital's own SIMRS, not ours to run or host */}
      <Box x={840} y={210} w={210} h={60} icon={Building2} label="SIMRS" sublabel="hospital's own management system" />

      {/* Deployment artifact — not part of either running system */}
      <Box x={840} y={380} w={210} h={50} icon={Download} label="Desktop installer" sublabel="ships the stack to hospital IT" />

      {/* On-prem real-time pipeline — animated flow dots */}
      <Arrow id="flow-1" d="M295,160 V220" live liveDelay={0} />
      <Arrow id="flow-2" d="M295,270 V330" live liveDelay={0.5} />
      <Arrow id="flow-3" d="M295,380 V425" live liveDelay={1} />
      <Arrow id="flow-4" d="M410,355 H500" label="live vitals" labelX={455} labelY={345} live liveDelay={1.5} />
      <Arrow d="M615,160 V325" label="auth, API calls" labelX={665} labelY={245} />

      {/* External sync — periodic, not continuous */}
      <Arrow d="M730,130 H840" label="validate license" labelX={785} labelY={120} cloudSync />
      <Arrow d="M730,150 H780 V240 H840" label="patient data sync" labelX={745} labelY={200} cloudSync />

      {/* Deployment */}
      <Arrow d="M840,405 H760" label="installs & runs the stack" labelX={800} labelY={395} />

      {/* Actors */}
      <Person cx={615} cy={590} label="Clinician" sublabel="ICU nursing staff" />
      <Arrow d="M615,568 V385" label="views live vitals" labelX={665} labelY={480} />

      <Person cx={945} cy={590} label="Hospital IT" sublabel="installs per site" />
      <Arrow d="M945,568 V430" label="runs installer" labelX={995} labelY={500} />

      {/* Legend */}
      <line x1={140} y1={672} x2={1050} y2={672} className="stroke-border" strokeWidth={1} />
      <g>
        <LegendItem
          x={160}
          y={700}
          swatch={<line x1={0} y1={0} x2={28} y2={0} className="stroke-muted-foreground" strokeWidth={1.5} />}
        >
          Synchronous call
        </LegendItem>
        <LegendItem
          x={400}
          y={700}
          swatch={<line x1={0} y1={0} x2={28} y2={0} className="stroke-brand" strokeWidth={1.5} strokeDasharray="5 4" />}
        >
          Periodic external sync
        </LegendItem>
        <LegendItem
          x={640}
          y={700}
          swatch={<rect x={0} y={-8} width={28} height={16} className="fill-transparent stroke-border" strokeWidth={1} strokeDasharray="3 3" />}
        >
          Deployment boundary
        </LegendItem>
        <LegendItem
          x={880}
          y={700}
          swatch={<circle cx={14} cy={0} r={9} className="fill-secondary stroke-border" strokeWidth={1.5} />}
        >
          Actor
        </LegendItem>
      </g>
    </motion.svg>
  )
}
