# Fitness Coach Landing Page

A modern, high-performance landing page built for a professional fitness coach and athletic trainer.

The project focuses on cinematic visuals, smooth animations, responsive layouts, accessibility, SEO, and optimized web performance while maintaining a clean and modular architecture.

## 🚀 Key Features

* **Cinematic Hero Section:** Video-driven hero experience with layered visuals, custom SVG masking, and animated typography.
* **Scroll-Driven Animations:** Interactive scroll effects powered by **GSAP ScrollTrigger**.
* **Motion & Micro-Interactions:** Component-level animations and UI transitions using **Framer Motion**.
* **Animated Typography:** Custom text animation components for immersive character and blur effects.
* **Coach Showcase:** Dedicated sections for biography, achievements, certifications, and professional background.
* **Responsive Design:** Optimized layouts and interactions across desktop, tablet, and mobile devices.
* **Accessibility:** Semantic HTML, keyboard-friendly interactions, and appropriate accessibility attributes.
* **SEO:** Search-engine-friendly page structure and metadata.
* **Performance Optimization:** Optimized video and image assets, lazy loading, and modern Next.js rendering practices.
* **Modular Architecture:** Feature-based organization with reusable shared components.

## 🛠 Tech Stack

* **Framework:** Next.js 16.2.9 (App Router)
* **Library:** React 19.2.4
* **Language:** TypeScript 5
* **Styling:** Tailwind CSS 4
* **Animations:** GSAP 3.15.0, GSAP ScrollTrigger, `@gsap/react`, Framer Motion 12.42.0
* **Icons:** Lucide React
* **Package Manager:** PNPM
* **Code Quality:** ESLint 9 & TypeScript

## 📂 Project Structure

```text
fitness-coach-landing/
├── public/
│   ├── icons/                  # Icons, logos, and SVG assets
│   ├── images/                 # Images and photography
│   └── videos/                 # Optimized video assets
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── features/               # Feature-specific sections and logic
│   │   ├── hero/
│   │   ├── about/
│   │   ├── achievements/
│   │   ├── navbar/
│   │   └── contact/
│   │
│   ├── providers/              # Application providers
│   │
│   └── shared/                 # Reusable components and types
│       ├── components/
│       └── types/
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── ...
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) 18+
* [pnpm](https://pnpm.io/)

### 1. Clone the repository

```bash
git clone https://github.com/parham-tech/Fitness-Coach.git
cd Fitness-Coach
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

### 4. Build for production

```bash
pnpm build
pnpm start
```

## 🎨 Animation & Interaction

### GSAP & ScrollTrigger

GSAP is used for complex animation sequences and scroll-linked interactions.

**ScrollTrigger** synchronizes animations with the user's scroll position to create controlled section transitions and cinematic visual effects.

### Framer Motion

Framer Motion is used for declarative React animations, including:

* Component entrances
* UI transitions
* Hover interactions
* Micro-interactions

### Custom Components

The project includes reusable components for animation and layout, such as:

* **`SplitText`** — Creates character- or word-based text entrance animations.
* **`BlurText`** — Reveals text through animated blur and opacity transitions.
* **`Container`** — Provides consistent responsive spacing and content widths.
* **`SectionTitle`** — Provides a reusable structure for section headings.

## ⚡ Performance

Performance was considered throughout the implementation.

Key optimization techniques include:

* Optimized video assets
* Optimized image loading
* Lazy loading for non-critical content
* Reduced unnecessary client-side work
* Efficient animation patterns
* Modern Next.js rendering strategies

## 📱 Responsive Design

The interface is designed to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile

Layouts, typography, videos, animations, and interactive elements adapt to different viewport sizes.

## 🌐 Live Demo

https://mahanbalaei.ir

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
