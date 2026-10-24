# Product

## Register

brand

## Users

Recruiters and hiring managers skimming fast, deciding in seconds whether to keep reading. They land from a resume link or LinkedIn, on both desktop and mobile, with no patience for friction. The job to be done: quickly judge whether this person can build and ship real, working software, and whether their taste matches the kind of team they'd fit into.

## Product Purpose

A personal portfolio for Jefri Maruli, a full-stack developer. The site itself is part of the pitch: the craft of the interface demonstrates the craft of the code. It showcases real shipped projects, real experience, and a point of view on design, not just a resume in HTML.

## Brand Personality

Precise, technical, confident. Sharp corners (zero border-radius throughout), exacting motion timing, one considered accent color rather than a rainbow of them. Confidence shows as restraint, not decoration for its own sake.

## Anti-references

Generic SaaS template look: no hero-metric cards (big number, small label, supporting stats), no purple-gradient-on-black "AI startup" aesthetic, no identical three-card feature grids, no gradient text. Also avoid the polished-but-soulless corporate agency portfolio feel.

## Design Principles

- Sharp over soft: zero border-radius is a deliberate, load-bearing choice, not an oversight. Every new component respects it.
- One accent, used deliberately: a single vermilion accent, like red pencil on a drawing, marks emphasis (map packets, link underlines, active nav state, the focus ring). It never sets body text, because in light mode it measures 4.0:1 against the paper ground. It does not multiply into a rainbow.
- Light first: the reader is a recruiter on a laptop in daylight or on a phone between meetings, so the paper theme is designed first. Dark follows the OS setting and has a toggle.
- Motion signals, it doesn't decorate: packets on the hero's systems map show data moving through a real system, and the route line shows that navigation started. Neither performs for its own sake.
- Show the work, don't summarize it: real project descriptions, real dates, real numbers. No lorem ipsum, no placeholder metrics.

## Accessibility & Inclusion

Respect `prefers-reduced-motion`: the map's packets are hidden and the route line is skipped for users who've requested reduced motion at the OS level. The map itself is static, so it loses nothing. Standard WCAG AA contrast and keyboard/focus-visible support apply across all interactive elements.
