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
  hero:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 9.6vw, 8rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.035em"
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
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "normal"
  diagram:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1
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

The site reads as one technical drawing. The hero is a two-line statement. Below it, a held scroll scene follows one heart-rate reading through the Stenella platform's C4 levels, drawn from its real container diagram. A single line, the spine, carries on down the page so every section hangs off the same drawing. Ink does the work. Vermilion is the red pencil that marks what matters. References: red pencil on tracing paper, Beck's Tube map, C4 container and dynamic diagrams.

The page is calm and spacious, with wide gutters, paragraphs capped at 60ch, and sections separated by space and hairlines instead of boxes. The anti-references in PRODUCT.md apply in full. No hero-metric cards, no purple-gradient-on-black "AI startup" aesthetic, no identical three-card feature grids, no gradient text, and none of the polished-but-soulless corporate agency portfolio feel.

**Key Characteristics:**
- Light first. Dark follows the OS setting and has a toggle.
- Zero border-radius everywhere.
- Flat. No shadows, no blur, no cards around content.
- Mono only inside diagrams.
- Antislop dials ENERGY 2, RHYTHM 3, MOTION 3. Motion went from 2 to 3 when the home page gained its held scene.

## 2. Colors

Warm paper and ink with one red-pencil accent. The values live in `src/app/globals.css` as bare OKLCH triplets. Each entry below gives light, then dark.

Measured contrast against the ground (light / dark): ink 14.99 / 14.78, graphite 6.33 / 7.28, vermilion 4.01 / 6.34, hairline 1.53 / 1.54. On wash, ink measures 13.49 / 13.12 and graphite 5.70 / 6.46.

### Primary
- **Vermilion** (oklch(0.6 0.19 35) / oklch(0.7 0.17 38)): the reading's route, its dots and hop rings, the boxes it lights, link underlines, the current-page bar, the focus ring. Tokens `--brand` and `--ring`.

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
**Diagram Font:** Martian Mono at 87.5% width (with ui-monospace), inside diagrams only

**Character:** A plain grotesk that stays out of the map's way, next to a condensed mono that reads like notes on a drawing.

### Hierarchy
- **Hero** (700, clamp(2.25rem, 9.6vw, 8rem), 0.96, -0.035em): the home page line, which takes two lines at 1440 and at 375. Keep it to 38 characters or fewer.
- **Display** (700, clamp(2.2rem, 4.6vw, 4.4rem), 1.03): page titles off the home page.
- **Headline** (700, clamp(1.6rem, 2.8vw, 2.4rem), 1.1): section headings on the spine.
- **Title** (700, clamp(1.4rem, 2.4vw, 2.1rem), 1.1): the featured case. Project rows use clamp(1.15rem, 1.7vw, 1.45rem).
- **Body** (400, 1rem, 1.65): paragraphs, capped at 60ch.
- **Label** (400, 0.875rem, graphite, `.meta-label`): dates, stacks, the line above a title. Sentence case, no extra tracking.
- **Diagram** (Martian Mono, 600 for names, 400 graphite for notes): 15.5 and 14.5 SVG units in the scene, which render at about 14 and 13px on a 1440 screen. Sentence case, no extra tracking.

### Named Rules
**The Annotation Rule.** Mono appears only inside diagrams, where it names a service or a connection. Dates, stacks, headings, buttons and body copy use the text face.

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

### Systems Scene
- An SVG of the Stenella containers on the home page (`SystemsScene.tsx`, `systems-scene.css`). Nodes are paper rectangles with a 1.4px ink outline (2.6px for the Backend API). Connectors are graphite with arrowheads. Zones are dashed graphite, because they mark where each service runs.
- Six beats over 4.4 screens of scroll, held on a sticky stage: level 1 context, level 2 containers, one reading on the legacy route in five numbered hops, the webhook route, a zoom into the backend's four components, then both routes. CSS scroll timelines drive every beat, so the scene ships no client JS.
- Each beat is a move, then a hold, with one kind of change at a time. Parts outside the current beat drop to 40%, never lower. The zoom follows the van Wijk and Nuij path, and the backend's labels leave before its components arrive.
- It runs only with scroll-timeline support, no reduced-motion preference and a viewport of at least 1260 by 740. Everyone else sees the finished composition with both routes. From 760 to 1259 it keeps a 1120px minimum width and scrolls sideways; under 760 the captions and a link to the case study diagram stand in for it. The six captions are the text version at every width.

### Routing Switch
- Off, Shadow and Primary radios for bed 4, beside a fork from the bed's monitor to the nurses' screen through the legacy service and the new route. The radios and `:has()` pick the route, with no client JS.
- Vermilion dots loop along the live routes, and a "Pause the moving dots" checkbox stops them. Under reduced motion the dots never run and the live route is drawn in vermilion.

### Spine
- A 1px hairline down the left of the content column. Section headings sit on it as 13px squares (paper fill, 2px ink border) and timeline roles as 7px ink squares.

## 6. Do's and Don'ts

### Do:
- **Do** keep vermilion to the reading's route and its marks, underlines, the current-page bar and the focus ring.
- **Do** give any motion that runs longer than 5 s on its own a way to pause it (WCAG 2.2.2).
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
- **Don't** set anything outside a diagram in mono.
- **Don't** put text on a vermilion background.
