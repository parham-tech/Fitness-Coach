# Elite Fitness Coach Landing Page

An ultra-modern, high-performance landing page for an elite fitness coach and athletic trainer, built using **Next.js 15 (App Router)**, **React 19**, **GSAP**, **Framer Motion**, and **Tailwind CSS**.

This landing page features smooth cinematic video layouts, dynamic scroll-triggered animations, premium typography, custom components, and highly responsive modern UI sections designed to engage and convert potential clients.

---

## 🚀 Key Features

- **Cinematic Hero Video Layering:** Rich video background with custom SVG text mask overlays and high-impact headlines.
- **Scroll-Driven Interactive Animations:** Utilizing **GSAP ScrollTrigger** and **Framer Motion** for state-of-the-art interactive scrolling and viewport effects.
- **Dynamic Text Effects:** Immersive custom text animations including character-by-character `SplitText` and smooth `BlurText` loading transitions.
- **Achievements & Portfolio:** Interactive grids showcasing professional certificates, credentials, and career achievements.
- **Modular & Clean Architecture:** Strongly decoupled features directory (`src/features`) and shareable atomic components (`src/shared`).
- **Fully Responsive Design:** Tailored for a flawless experience across ultra-wide monitors, laptops, tablets, and smartphones.
- **Premium Performance:** Fully optimized assets, lazy loading, and modern layout practices.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15.2.x (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS, PostCSS
- **Animations:**
  - GSAP (GreenSock Animation Platform) & `@gsap/react`
  - Framer Motion
- **Icons:** Lucide React, Custom SVGs
- **Package Manager:** PNPM (Workspace-enabled)
- **Code Quality:** ESLint & TypeScript

---

## 📂 Project Structure

```bash
fitness-coach-landing/
├── public/                  # Static assets
│   ├── icons/               # SVGs, icons, and logo assets
│   ├── images/              # High-res photography & coach portraits
│   └── videos/              # Optimized hero backgrounds & mask videos
├── src/
│   ├── app/                 # Next.js App Router (Layouts, pages, globals.css)
│   ├── features/            # Decoupled business logic & sections
│   │   ├── hero/            # Video-driven hero section
│   │   ├── about/           # Detailed biographical coach info
│   │   ├── achievements/    # Interactive statistics & milestone grid
│   │   ├── navbar/          # Responsive sticky navigation bar
│   │   └── contact/         # Modern conversion form & CTA
│   ├── providers/           # Context APIs (e.g., ScrollContext)
│   └── shared/              # Shared components & types
│       ├── components/      # SplitText, BlurText, Container, SectionTitle, etc.
│       └── types/           # Global TypeScript type definitions
└── configuration files      # tsconfig.json, next.config.ts, tailwind.config.ts, etc.
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/) installed.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/fitness-coach-landing.git
cd fitness-coach-landing
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Run the development server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the live results!

### 4. Build for production
```bash
pnpm build
pnpm start
```

---

## 🎨 Design & Animation Details

### GreenSock (GSAP) & ScrollTrigger
GSAP is leveraged for precise scroll-linked timelines, ensuring animations play fluidly based on the user's viewport position without causing jank or layout shifts.

### Framer Motion
We employ Framer Motion for rapid declarative component-level entries, micro-interactions, hover states, and seamless spring physics on UI buttons.

### Custom Component Highlights
- `<SplitText />`: Automatically splits words/characters to apply delays and directional slides.
- `<BlurText />`: Uses SVG filters and CSS transitions to elegantly reveal text from a blurred state.
- `<Container />`: Enforces standard responsive padding and max-widths across all page sections.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
