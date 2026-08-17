"use client"

import { motion } from "framer-motion"
import { Activity, LayoutDashboard, NotebookPen, User, Waves } from "lucide-react"
import type { LucideIcon } from "lucide-react"

function Step({
  x,
  y,
  icon: Icon,
  label,
  muted = false,
}: {
  x: number
  y: number
  icon: LucideIcon
  label: string
  muted?: boolean
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={28} className={muted ? "fill-secondary stroke-border" : "fill-brand/10 stroke-brand"} strokeWidth={1.5} />
      <foreignObject x={x - 12} y={y - 12} width={24} height={24}>
        <Icon className={muted ? "h-6 w-6 text-muted-foreground" : "h-6 w-6 text-brand"} strokeWidth={1.75} />
      </foreignObject>
      <text x={x} y={y + 46} textAnchor="middle" className="fill-foreground text-[12px] font-medium">
        {label}
      </text>
    </g>
  )
}

function Row({
  y,
  tag,
  tagMuted,
  note,
  steps,
}: {
  y: number
  tag: string
  tagMuted: boolean
  note: string
  steps: { icon: LucideIcon; label: string }[]
}) {
  const startX = 130
  const gap = 220
  return (
    <g>
      <text x={30} y={y - 44} className={tagMuted ? "fill-muted-foreground text-[11px] font-semibold uppercase tracking-wide" : "fill-brand text-[11px] font-semibold uppercase tracking-wide"}>
        {tag}
      </text>
      {steps.map((step, i) => (
        <g key={step.label}>
          <Step x={startX + i * gap} y={y} icon={step.icon} label={step.label} muted={tagMuted} />
          {i < steps.length - 1 && (
            <path
              d={`M${startX + i * gap + 32},${y} H${startX + (i + 1) * gap - 32}`}
              className="stroke-muted-foreground"
              strokeWidth={1.5}
              markerEnd="url(#ba-arrowhead)"
              fill="none"
            />
          )}
        </g>
      ))}
      <text x={startX + steps.length * gap - gap + 90} y={y + 78} textAnchor="middle" className="fill-muted-foreground text-[11px]">
        {note}
      </text>
    </g>
  )
}

export function DalfinStenellaBeforeAfter() {
  return (
    <motion.svg
      viewBox="0 0 800 300"
      className="h-auto w-full"
      role="img"
      aria-label="Before and after comparison: manual paper charting versus automated device integration"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <defs>
        <marker id="ba-arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-muted-foreground" />
        </marker>
      </defs>

      <Row
        y={90}
        tag="Before"
        tagMuted
        note="checked and handwritten roughly once an hour, per bedside"
        steps={[
          { icon: Activity, label: "Monitor / ventilator" },
          { icon: User, label: "Nurse walks & reads" },
          { icon: NotebookPen, label: "Paper chart" },
        ]}
      />

      <line x1={30} y1={190} x2={770} y2={190} className="stroke-border" strokeWidth={1} />

      <Row
        y={240}
        tag="After"
        tagMuted={false}
        note="streamed automatically, continuously, to every bedside at once"
        steps={[
          { icon: Activity, label: "Monitor / ventilator" },
          { icon: Waves, label: "Telemetry service" },
          { icon: LayoutDashboard, label: "Dashboard" },
        ]}
      />
    </motion.svg>
  )
}
