---
name: Jefri Maruli
description: Portfolio of a backend-strong full-stack developer, drawn as a systems map on paper.
colors:
  paper: "oklch(0.975 0.007 90)"
  ink: "oklch(0.25 0.01 90)"
  graphite: "oklch(0.47 0.01 90)"
  hairline: "oklch(0.84 0.01 90)"
  wash: "oklch(0.94 0.008 90)"
  vermilion: "oklch(0.6 0.19 35)"
  ground-dark: "oklch(0.2 0.008 90)"
  ink-dark: "oklch(0.93 0.008 90)"
  graphite-dark: "oklch(0.72 0.01 90)"
  hairline-dark: "oklch(0.34 0.008 90)"
  wash-dark: "oklch(0.25 0.008 90)"
  vermilion-dark: "oklch(0.7 0.17 38)"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  section: "clamp(48px, 7vw, 104px)"
  row: "26px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "13px 20px"
    height: "48px"
---

# Design System: Jefri Maruli

## 1. Overview

**Creative North Star: "The Systems Map"**

The site reads as one technical drawing. The hero is a live map of the Stenella platform, drawn from the containers in its C4 diagram, and a single line, the spine, carries on down the page so every section hangs off the same drawing. Ink does the work. Vermilion is the red pencil that marks what matters. References: red pencil on tracing paper, Beck's Tube map, C4 container diagrams.

The page is calm and spacious, with wide gutters, paragraphs capped at 60ch, and sections separated by space and hairlines instead of boxes. The anti-references in PRODUCT.md apply in full. No hero-metric cards, no purple-gradient-on-black "AI startup" aesthetic, no identical three-card feature grids, no gradient text, and none of the polished-but-soulless corporate agency portfolio feel.

**Key Characteristics:**
- Light first. Dark follows the OS setting and has a toggle.
- Zero border-radius everywhere.
- Flat. No shadows, no blur, no cards around content.
- Mono only for labels, dates and stacks.
- Antislop dials ENERGY 2, RHYTHM 3, MOTION 2.

## 2. Colors

Warm paper and ink with one red-pencil accent. The values live in `src/app/globals.css` as bare OKLCH triplets. Each entry below gives light, then dark.

Measured contrast against the ground (light / dark): ink 14.99 / 14.78, graphite 6.33 / 7.28, vermilion 4.01 / 6.34, hairline 1.53 / 1.54. On wash, ink measures 13.49 / 13.12 and graphite 5.70 / 6.46.

### Primary
- **Vermilion** (oklch(0.6 0.19 35) / oklch(0.7 0.17 38)): map packets, link underlines, the current-page bar, the focus ring. Tokens `--brand` and `--ring`.

### Neutral
- **Paper** (oklch(0.975 0.007 90) / oklch(0.2 0.008 90)): the page and anything that sits on it. `--background`, `--card`, `--popover`.
- **Ink** (oklch(0.25 0.01 90) / oklch(0.93 0.008 90)): text, map node outlines, the primary button. `--foreground`, `--primary`.
- **Graphite** (oklch(0.47 0.01 90) / oklch(0.72 0.01 90)): secondary text, labels, map connectors. `--muted-foreground`.
- **Wash** (oklch(0.94 0.008 90) / oklch(0.25 0.008 90)): hover and pressed surfaces. `--secondary`, `--muted`, `--accent`.
- **Hairline** (oklch(0.84 0.01 90) / oklch(0.34 0.008 90)): rules, borders, the spine. `--border`, `--input`.

### Named Rules
**The Red Pencil Rule.** Vermilion marks; it never writes. At 4.01:1 on paper it fails the 4.5:1 text minimum, so it never sets text and never sits behind text. As a mark or a focus ring it clears 3:1.

**The Hairline Rule.** Hairline only draws lines that mean nothing on their own. Anything a reader needs to see, such as a map connector, is graphite or ink.

## 3. Typography

**Display Font:** Hanken Grotesk (with system-ui)
**Body Font:** Hanken Grotesk (with system-ui)
**Label/Mono Font:** Martian Mono at 87.5% width (with ui-monospace)

**Character:** A plain grotesk that stays out of the map's way, next to a condensed mono that reads like notes on a drawing.

### Hierarchy
- **Display** (700, clamp(2.2rem, 4.6vw, 4.4rem), 1.03): the hero line.
- **Headline** (700, clamp(1.6rem, 2.8vw, 2.4rem), 1.1): section headings on the spine.
- **Title** (700, clamp(1.4rem, 2.4vw, 2.1rem), 1.1): the featured case. Project rows use clamp(1.15rem, 1.7vw, 1.45rem).
- **Body** (400, 1rem, 1.65): paragraphs, capped at 60ch.
- **Label** (400 or 600, 0.75rem to 0.85rem, Martian Mono): map labels, dates, stacks. Sentence case, no extra tracking.

### Named Rules
**The Annotation Rule.** Mono appears only where the text names a service, a date or a stack. Headings, buttons and body copy are never mono.

## 4. Elevation

Flat. There are no shadows and no blur. Depth comes from ink outlines, hairline rules and the spine. A surface responds to hover by turning wash, never by lifting.

## 5. Components

### Buttons
- **Shape:** square corners (0px).
- **Primary:** ink background, paper text, weight 600, 13px 20px padding, 48px minimum height. At most one per view.
- **Hover / Focus:** hover drops the ink to 90% opacity. Focus is a 2px vermilion outline offset 2px.
- **Secondary:** a text link with a 2px vermilion underline, never a second filled or ghost button.

### Cards / Containers
- **Corner Style:** 0px.
- **Background:** paper. Content sits on the page, not in boxes.
- **Shadow Strategy:** none (see Elevation).
- **Border:** 1px hairline around screenshots. Rows are separated by a top hairline.
- **Internal Padding:** rows use 26px vertical padding.

### Navigation
- Text links in graphite. Hover turns them ink with a vermilion underline offset 6px. The current page carries a 2px vermilion bar. The theme switch is a text button reading Light or Dark, not a sun and moon. Phones keep the same single row.

### Systems Map
- An SVG of the Stenella containers. Nodes are paper rectangles with a 1.4px ink outline (2.8px for the key node). Connectors are 1.2px graphite with arrowheads. Zones are dashed hairline. Labels use Martian Mono at 600; sub-labels are graphite and never render below 10px.
- Packets are vermilion dots that run along the connectors three times with SVG `animateMotion`, then rest. Pointing at the map replays them. They are hidden under `prefers-reduced-motion`.
- Under 768px the map becomes a vertical flow list with square ink-outlined nodes on a graphite line. The list is the text version of the map at every width.

### Spine
- A 1px hairline down the left of the content column. Section headings sit on it as 13px squares (paper fill, 2px ink border) and timeline roles as 7px ink squares.

## 6. Do's and Don'ts

### Do:
- **Do** keep vermilion to packets, underlines, the current-page bar and the focus ring.
- **Do** cap paragraphs at 60ch and separate sections with space and hairlines.
- **Do** design each screen in light first, then check it in dark.
- **Do** leave out a fact the repo doesn't have (a year, a role) instead of showing a placeholder.

### Don't:
- **Don't** use hero-metric cards (big number, small label, supporting stats).
- **Don't** use the purple-gradient-on-black "AI startup" aesthetic or gradient text.
- **Don't** build identical three-card feature grids.
- **Don't** drift into the polished-but-soulless corporate agency portfolio feel.
- **Don't** round a corner. Zero border-radius is load-bearing.
- **Don't** add shadows, glass or blur.
- **Don't** set headings or buttons in mono.
- **Don't** put text on a vermilion background.
