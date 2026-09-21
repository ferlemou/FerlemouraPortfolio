# FerlemouraPortfolio

Modern developer portfolio and personal systems showcase built with Next.js App Router, TypeScript, and Tailwind CSS.

- Production: https://ferlemoura.vercel.app/
- GitHub Repository: https://github.com/ferlemou/FerlemouraPortfolio

---

## Architecture and Technical Highlights

### 1. CLI-First Route Handler (`src/app/cv/route.ts`)

The application implements a terminal-first Route Handler accessible at `/cv`. This endpoint performs runtime HTTP `User-Agent` header inspection to serve differential content according to client capabilities:

- Command-Line Clients (`curl`, `wget`, `httpie`): When the incoming `User-Agent` matches standard command-line HTTP clients, the handler returns an unbuffered, plain text mono-spaced ASCII curriculum vitae (`Content-Type: text/plain; charset=utf-8`) with cache directives (`max-age=3600`).
- Web Browsers: Standard user agents that do not match the CLI pattern receive an HTTP 307 Temporary Redirect pointing directly to the static PDF document at `/curriculo.pdf`.

Execution example via terminal:

```bash
curl -sL ferlemoura.vercel.app/cv
```

Handler logic summary:

```typescript
export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCli = /curl|wget|httpie/i.test(userAgent);

  if (isCli) {
    return new NextResponse(ASCII_CV, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  }

  const redirectUrl = new URL("/curriculo.pdf", request.url);
  return NextResponse.redirect(redirectUrl, 307);
}
```

### 2. Centralized Typed Configuration (`src/data/portfolio.ts`)

All portfolio content, engineering milestones, technical toolkits, and project metadata are decoupled from presentation components and consolidated in `src/data/portfolio.ts`.

- Enforces strict TypeScript contracts through interfaces (`ProjectItem`, `PortfolioData`, `HeroMetric`, `MilestoneItem`).
- Eliminates hardcoded inline strings across JSX components.
- Guarantees compile-time validation for URLs, asset paths, and technical badges.

### 3. Rendering Pipeline and Performance

- Static Site Generation (SSG): Core portfolio pages are compiled to static HTML and JSON manifests at build time using Next.js App Router and Turbopack.
- Dynamic Route Isolation: The `/cv` route handler operates dynamically on demand (`server-rendered on demand`), while root and not-found routes remain static assets served via edge cache.
- Typography Optimization: Pure Geist system loaded via `next/font/google` (`Geist` for sans-serif hierarchies and `JetBrains_Mono` for monospaced telemetry, shell commands, and code badges). Zero client-side font layout shifts (CLS).
- Responsive Media: Project cards utilize Next.js `<Image />` with WebP formatting, responsive sizes, inner vignettes, and graceful fallback states upon loading failure.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Runtime and Language | Node.js 20+, TypeScript 5 (Strict Mode) |
| UI and Styling | React 19, Tailwind CSS v4, Lucide React |
| Component Primitives | Radix UI, shadcn/ui |
| Hosting and Edge CDN | Vercel Platform |
| CLI and Operating System | Linux, Bash, POSIX Utilities |

---

## Project Directory Tree

```text
FerlemouraPortfolio/
|-- AGENTS.md
|-- CLAUDE.md
|-- README.md
|-- components.json
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
|-- tsconfig.json
|-- public/
|   |-- curriculo.pdf
|   `-- projects/
|       |-- project-1.webp
|       |-- project-2.webp
|       `-- rico-atraves-do-tempo.webp
|-- src/
|   |-- app/
|   |   |-- cv/
|   |   |   `-- route.ts
|   |   |-- favicon.ico
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components/
|   |   |-- portfolio/
|   |   |   |-- contact.tsx
|   |   |   |-- education.tsx
|   |   |   |-- footer.tsx
|   |   |   |-- hero.tsx
|   |   |   |-- icons.tsx
|   |   |   |-- navbar.tsx
|   |   |   |-- projects.tsx
|   |   |   `-- tech-stack.tsx
|   |   `-- ui/
|   |       |-- badge.tsx
|   |       |-- button.tsx
|   |       |-- card.tsx
|   |       |-- separator.tsx
|   |       `-- sheet.tsx
|   |-- data/
|   |   `-- portfolio.ts
|   `-- lib/
|       `-- utils.ts
`-- stitch/
    |-- DESIGN.MD
    |-- raw-webmobile.html
    `-- raw-webpc.html
```

---

## Local Development Setup

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher
- Git

### Installation and Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/ferlemou/FerlemouraPortfolio.git
   cd FerlemouraPortfolio
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   The local application will be accessible at `http://localhost:3000`.

4. Execute code quality checks and static build verification:
   ```bash
   # Run ESLint validation
   npm run lint

   # Execute Next.js production build
   npm run build
   ```

---

## Featured Project: Através do Tempo

The portfolio highlights *Através do Tempo*, a multi-genre 2D digital game engineered as a Capstone Project (TCC) at FIEB by team Aphronesia:

- Technology: Unity 2022.3.62f3 LTS, C#, Universal Render Pipeline (URP 2D).
- Engineering Role: Lead Programmer (Felipe Moura). Responsible for system architecture, physics collision logic, dynamic minigame mechanics, and data persistence.
- Architectural Patterns:
  - Observer Pattern: Utilizes `public static event Action` instances to decouple gameplay logic from HUD indicators and audio channels.
  - Finite State Machine (FSM): Manages boss phases (`Attacking`, `Tired`, `Damaged`, `Die`) with deterministic transition windows.
  - Data-Driven Rhythm Engine: Serializes rhythm map timings via JSON (`RitmoJson.cs`) with custom Unity Editor inspector extensions for level calibration.
  - Persistence Pipeline: JSON serialization through `Application.persistentDataPath` storing world map coordinates and level completion states.
- Project Links:
  - Source Code: https://github.com/Aphronesia/RicoAtravesdoTempo
  - Playable Version (Itch.io): https://ferlemou.itch.io/atravesdotempo

---

## Author and Contact

- Author: Felipe Roberto de Moura
- Role: Software Engineering Intern | Computer Science Undergraduate (Universidade Presbiteriana Mackenzie)
- GitHub: https://github.com/ferlemou
- LinkedIn: https://linkedin.com/in/ferlemoura
- Email: ferlemoura@outlook.com
