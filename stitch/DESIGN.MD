---
name: Obsidian Precision
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffffff'
  on-tertiary: '#32302d'
  tertiary-container: '#e7e1dd'
  on-tertiary-container: '#676460'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e7e1dd'
  tertiary-fixed-dim: '#cbc6c1'
  on-tertiary-fixed: '#1d1b19'
  on-tertiary-fixed-variant: '#494643'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-tag:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system embodies a modern, ultra-refined minimalist developer ethos inspired by contemporary engineering tools and precision utility interfaces. It targets senior peers, technical recruiters, engineering leaders, and collaborators who value clarity, deliberate craft, and zero decorative fluff. 

The aesthetic blends high-density technical minimalism with architectural restraint: deep obsidian canvases, hairline borders, meticulous monospaced touches, and tactical emerald indicators. The interface evokes quiet technical confidence, structural clarity, and purposeful performance.

## Colors
The palette is built on a strictly disciplined monochromatic zinc scale accented by an intentional vitality green:

- **Canvas Background (`#09090b`)**: Foundational canvas (zinc-950), grounding the viewport in true dark-mode depth.
- **Surface Layer 1 (`#18181b`)**: Component containers, cards, and elevated shells (zinc-900).
- **Surface Hover / Interactive (`#27272a`)**: Micro-interactions, hover fills, and active states (zinc-800).
- **Border Subtle (`#27272a`)**: Structural hairlines (1px solid) defining spatial boundaries without visual noise.
- **Primary Text (`#f4f4f5`)**: High-contrast, crisp typography for headings and critical metrics (zinc-50).
- **Muted Text (`#a1a1aa`)**: Secondary hierarchy, supporting metadata, and subheaders (zinc-400).
- **Primary Accent (`#fafafa`)**: High-visibility inverted accent used strictly for key CTAs and spotlight states.
- **Status Indicator (`#10b981`)**: Tactical emerald indicator restricted to availability beacons, live status tags, and commit confirmations.

## Typography
Typography combines the geometric precision of Geist for structured hierarchies with JetBrains Mono for contextual engineering data, git hashes, metrics, and command triggers.

- **Tracking**: Headings feature tight negative letter-spacing (`-0.02em` to `-0.03em`) to deliver modern, compact editorial punch.
- **Hierarchy Rules**: Maintain tight relationships between titles and summaries; reserve monospaced labeling for timestamps, file paths, repository tags, and tech stack markers.
- **Balance**: Pair high-contrast primary text headings with zinc-400 body text to prevent visual fatigue on deep dark backgrounds.

## Layout & Spacing
The layout adheres to a centered 12-column grid constrained to `max-w-5xl` (1024px) for optimal legibility and linear storytelling.

- **Desktop (1024px+)**: Max-width `64rem` centered with `2rem` outer margin and `1.5rem` gutters. Project cards and feature breakdowns divide cleanly across 6-column or 4-column spans.
- **Tablet (768px - 1023px)**: 12-column architecture with adaptive reflow to 6-column pairing; margins maintain `1.5rem`.
- **Mobile (<768px)**: Grid collapses into a single-column linear flow with `1rem` lateral page margins and vertical stack gaps pegged to `space-md` and `space-lg`.
- **Vertical Rhythm**: Section blocks maintain generous breathing space (`space-xl` scaled to `4rem` on desktop sections) while card interiors preserve a compact, dense rhythm using `space-md` to `space-lg`.

## Elevation & Depth
Depth is created through tonal layering and razor-thin hairlines rather than multi-layered drop shadows.

- **Surface Stacking**: The background canvas sits at `#09090b`. Primary panels, project tiles, and utility shells sit at `#18181b`.
- **Borders as Edges**: Elevation boundaries rely on `1px solid #27272a`. Floating menus or dropdowns utilize `#27272a` alongside a muted ambient shadow (`0 8px 32px rgba(0, 0, 0, 0.45)`).
- **Hover Transitions**: Transitions rely on tonal lift—interactive surfaces shift seamlessly from `#18181b` to `#27272a` with a duration of 150ms ease-out.

## Shapes
The structural grammar utilizes a restrained roundedness curve (0.25rem to 0.5rem) to evoke precision instrument hardware:

- **Base Radius**: Standard interactive elements, inputs, buttons, and code wrappers use `rounded` (0.25rem / 4px) or `rounded-md` (0.375rem / 6px).
- **Surface Containers**: Cards and modular structural containers use `rounded-lg` (0.5rem / 8px).
- **Status & Badges**: Exclusively pill-shaped (`rounded-full` / 9999px) for availability markers, counter indicators, and technology labels, creating an organic counterpoint to crisp rectilinear containers.

## Components

### Buttons
- **Primary**: Solid white (`#fafafa`) background, deep black (`#09090b`) text, font weight medium. Hover shifts to `#e4e4e7`. 
- **Outline (Secondary)**: 1px border (`#27272a`), transparent background, `#f4f4f5` text. Hover fills with `#27272a` and sharpens border contrast.
- **Ghost**: Zero border, transparent canvas, zinc-400 text transitioning to zinc-50 on hover.

### Badges & Status Chips
- **Status Beacon**: Pill container (`rounded-full`) with a subtle border (`#27272a`), surface `#18181b`, featuring a breathing `#10b981` dot with an animated ping ring for current availability.
- **Tech Stack Chips**: `rounded-full` pill with `#18181b` background, `#27272a` border, `JetBrains Mono` 12px text in zinc-400, shifting to zinc-200 on hover.

### Project & Experience Cards
- **Base Card**: Container with `rounded-lg`, background `#18181b`, border `1px solid #27272a`, and padding `1.5rem`.
- **Hover State**: Border shifts subtly toward `#3f3f46` with background translating smoothly to `#1f1f23`.
- **Card Header**: Displays project role/title alongside monospaced dates or commit hashes pinned right.

### Interactive Inputs
- **Text Inputs**: Inset `#09090b` field with `1px solid #27272a`, radius `0.375rem`, text `#f4f4f5`. Focus state triggers ring-1 white (`#fafafa`) with zero elevation bleed.

### Code & Terminal Blocks
- Compact pre/code elements framed by `#18181b` background, `#27272a` border, inline command prompts styled with `JetBrains Mono`, and subtle clipboard copy triggers pinned top-right.
