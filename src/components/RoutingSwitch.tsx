type Mode = {
  id: "off" | "shadow" | "primary"
  label: string
  sentence: string
}

const modes: readonly Mode[] = [
  { id: "off", label: "Off", sentence: "Off. Bed 4's readings go only through the legacy telemetry service." },
  {
    id: "shadow",
    label: "Shadow",
    sentence: "Shadow. Both routes receive bed 4's readings, and the nurses still see the legacy one.",
  },
  {
    id: "primary",
    label: "Primary",
    sentence: "Primary. The new route serves bed 4, and the legacy service drops out of its path.",
  },
]

// The radios and :has() rules in systems-scene.css pick the route, so the switch ships no client JS.
export function RoutingSwitch(): React.JSX.Element {
  return (
    <section className="routing-switch" aria-labelledby="routing-title">
      <div>
        <h2 id="routing-title" className="spine-node section-heading">
          Moving off the legacy service
        </h2>
        <p>
          Routing is set per device, so a hospital moves one bed at a time and the nurses never
          lose the screen. Pick a setting for bed 4.
        </p>
        <fieldset className="switch">
          <legend>Bed 4 routing</legend>
          {modes.map((mode) => (
            <label key={mode.id}>
              <input
                type="radio"
                name="route"
                id={`route-${mode.id}`}
                value={mode.id}
                defaultChecked={mode.id === "shadow"}
                aria-describedby={`mode-${mode.id}`}
              />
              {mode.label}
            </label>
          ))}
        </fieldset>
        {modes.map((mode) => (
          <p key={mode.id} id={`mode-${mode.id}`} className={`mode mode-${mode.id}`}>
            {mode.sentence}
          </p>
        ))}
        <label className="pause">
          <input type="checkbox" id="pause-flow" />
          Pause the moving dots
        </label>
      </div>

      <svg className="switch-map" viewBox="0 0 360 404" aria-hidden="true" focusable="false">
        <defs>
          <marker
            id="switch-arrow"
            viewBox="0 0 8 8"
            refX="7.2"
            refY="4"
            markerWidth="9"
            markerHeight="9"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path className="arrowhead" d="M0 0 L8 4 L0 8 z" />
          </marker>
        </defs>
        <path className="seg" d="M180,68 V116" />
        <path className="seg seg-legacy-in" d="M180,116 H84 V166" markerEnd="url(#switch-arrow)" />
        <path className="seg seg-new-in" d="M180,116 H276 V166" markerEnd="url(#switch-arrow)" />
        <path className="seg seg-legacy-out" d="M84,230 V286 H180" />
        <path className="seg seg-new-out" d="M276,230 V286 H180" />
        <path className="seg" d="M180,286 V336" markerEnd="url(#switch-arrow)" />

        <path className="flow flow-legacy" d="M180,68 V116 H84 V286 H180 V340" />
        <path className="flow flow-new" d="M180,68 V116 H276 V286 H180 V340" />
        <path className="flow flow-shadow" d="M180,68 V116 H276 V200" />

        <rect className="node" x={90} y={8} width={180} height={60} />
        <text className="node-title" x={102} y={34}>
          Bed 4 monitor
        </text>
        <text className="node-note" x={102} y={55}>
          vitals, alarms
        </text>
        <g className="route-box box-legacy">
          <rect className="node" x={0} y={170} width={168} height={60} />
          <text className="node-title" x={10} y={196}>
            Legacy service
          </text>
          <text className="node-note" x={10} y={217}>
            old telemetry
          </text>
        </g>
        <g className="route-box box-new">
          <rect className="node" x={192} y={170} width={168} height={60} />
          <text className="node-title" x={202} y={196}>
            New route
          </text>
          <text className="node-note" x={202} y={217}>
            webhook inbox
          </text>
        </g>
        <rect className="node" x={90} y={340} width={180} height={60} />
        <text className="node-title" x={102} y={366}>
          Nurses&apos; screen
        </text>
        <text className="node-note" x={102} y={387}>
          bed 4 tile
        </text>
      </svg>
    </section>
  )
}
