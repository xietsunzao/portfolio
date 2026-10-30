import { ImageResponse } from "next/og"

export const alt = "I build the backends hospitals run on. Jefri Maruli, senior backend developer."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Light theme tokens from globals.css, converted from OKLCH to hex for Satori.
const paper = "#f8f7f2"
const ink = "#23211c"
const graphite = "#5d5b55"
const hairline = "#cdcac3"
const vermilion = "#da4620"

// Fixed breaks, because Satori can't balance lines and "run on." would sit alone.
const headline = ["I build the backends", "hospitals run on."]
const label = "Jefri Maruli · Senior backend developer"
const domain = "jefrimaruli.dev"

// Satori reads TTF but not the WOFF2 that next/font serves, so this fetches a TTF subset
// of the same font. The build already depends on Google Fonts through next/font.
async function googleFont(family: string, axes: string, text: string): Promise<ArrayBuffer> {
  const query = `family=${family}:${axes}&text=${encodeURIComponent(text)}`
  const css = await fetch(`https://fonts.googleapis.com/css2?${query}`).then((response) => response.text())
  const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1]
  if (!url) throw new Error(`Google Fonts returned no TTF for ${family}`)
  const font = await fetch(url)
  if (!font.ok) throw new Error(`Downloading ${family} failed with ${font.status}`)
  return font.arrayBuffer()
}

export default async function OpenGraphImage(): Promise<ImageResponse> {
  const [sans, mono] = await Promise.all([
    googleFont("Hanken+Grotesk", "wght@700", headline.join("")),
    googleFont("Martian+Mono", "wdth,wght@87.5,400", label + domain),
  ])

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", padding: "0 96px", background: paper, color: ink }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            padding: "84px 0 76px 56px",
            borderLeft: `2px solid ${hairline}`,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Martian Mono", fontSize: 24, color: graphite }}>{label}</div>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
                fontFamily: "Hanken Grotesk",
                fontSize: 96,
                lineHeight: 1.04,
                letterSpacing: -2.4,
              }}
            >
              {/* Centres the 22px square on the spine line (56px padding, 1px half line, 11px half square). */}
              <div
                style={{
                  position: "absolute",
                  left: -68,
                  top: 38,
                  width: 22,
                  height: 22,
                  background: paper,
                  border: `3px solid ${ink}`,
                }}
              />
              {headline.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ fontFamily: "Martian Mono", fontSize: 26, paddingBottom: 6, borderBottom: `4px solid ${vermilion}` }}>
              {domain}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Hanken Grotesk", data: sans, weight: 700, style: "normal" },
        { name: "Martian Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  )
}
