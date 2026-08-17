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
- One accent, used deliberately: a single violet accent tied to the hero's own fluid palette carries emphasis (active nav state, hover, key CTAs). It does not multiply into a rainbow.
- Motion signals, it doesn't decorate: the fluid hero, word-by-word reveal, and route transition all exist to communicate state (loading, navigating, arriving), not to perform for their own sake.
- Show the work, don't summarize it: real project descriptions, real dates, real numbers. No lorem ipsum, no placeholder metrics.

## Accessibility & Inclusion

Respect `prefers-reduced-motion`: the WebGL fluid simulation, the word-by-word hero reveal, and the route-transition burst should fall back to a static or minimal-motion state for users who've requested reduced motion at the OS level. Standard WCAG AA contrast and keyboard/focus-visible support apply across all interactive elements.
