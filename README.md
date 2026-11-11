# thetiny.site — URL Shortener & Link Management Platform

A modern, responsive web application for **thetiny.site**, built with **React 19**, **TypeScript**, **Vite 8**, **React Router**, and **Tailwind CSS v4**. The interface features smooth scroll-triggered animations, animated stat counters, interactive QR code previews, a continuous testimonials marquee, and clean modular TypeScript components.

**Live Demo:** [https://thetiny-website.vercel.app](https://thetiny-website.vercel.app)

---

## Tech Stack

| Category | Technology |
| --- | --- |
| **Framework** | React `19.3.1` + TypeScript `~6.0.3` |
| **Build Tool** | Vite `8.3.6` (`@vitejs/plugin-react`) |
| **Styling** | Tailwind CSS `4.3.5` (`@tailwindcss/vite`) |
| **Routing** | React Router `8.5.1` |
| **Icons** | Lucide React `1.71.0` & React Icons (`fa6`) `5.7.0` |
| **Animations** | React CountUp `6.5.3` + CSS Keyframes & `IntersectionObserver` |
| **Linting** | ESLint `10.14.0` + `typescript-eslint` |

---

## Features & Implemented Pages

### Home Page (`/`)
- **Hero Section (`HeroSection.tsx`)** — Headline, trust badge, entrance fade-up animations, and CTA card linking to `/login` and `/register`.
- **Slanted Stats Ribbon (`StatsSection.tsx`)** — Angled royal-purple (`-skew-y-2`) stats bar with scroll-triggered `AnimatedNumber` counters (`100K+` Links Created, `1M+` Total Clicks, `180+` Countries, `99.9%` Uptime).
- **Most Popular Links (`PopularLinks.tsx`)** — Popular shortened URLs with animated click counts, one-click clipboard copy (`Copied!` feedback), and an interactive **QR Code modal**.
- **Premium Features (`PremiumFeatures.tsx`)** — Feature checklist paired with an animated **Link Analytics Dashboard** featuring scroll-triggered click counters and shimmering progress bars.
- **Pricing Section (`PricingSection.tsx`)** — Three pricing tiers (`FREE`, featured `PRO`, and `BUSINESS`) with smooth card-lift, glow, and button micro-interactions.
- **Testimonials (`Testimonials.tsx`)** — Seamless infinite left-to-right marquee (`animate-marquee-ltr`) that pauses on hover and supports `prefers-reduced-motion`.
- **Why Choose Us (`WhyChooseUs.tsx`)** — Six platform benefit cards with staggered `IntersectionObserver` entrance reveals and hover icon transitions.

### About Page (`/about`)
- **Hero & Mission** — Company introduction, team showcase visual, and mission statement.
- **Our Values** — Six core value cards (`Speed First`, `Trust & Safety`, `Global Reach`, `User-Centric`, `Community`, `Reliability`).
- **The Team** — Team member showcase (`Nadim Majid`) with automatic initials fallback on image load errors.
- **Our Story** — Five-step company timeline spanning `2021` to `2026`.

### Not Found Page (`*`)
- **404 Error Screen (`NotFound.tsx`)** — Displays the unmatched path (`thetiny.site{pathname}`), quick navigation buttons (**Back to Home** and **Go Back**), and broken/expired link recovery tips.

### Shared Layout
- **Navigation Bar (`Navber.tsx`)** — Fixed glassmorphic header with active route underlines and a responsive mobile menu drawer.
- **Footer (`Footer.tsx`)** — Brand tagline, social links, contact info, and Product / Company / Legal links.

---

## Project Structure

```text
Thetiny-website/
├── public/
│   ├── favicon.png
│   ├── favicon.svg
│   ├── icons.svg
│   └── logo.png
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── logo.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   └── AnimatedNumber.tsx
│   ├── Home/
│   │   ├── HeroSection.tsx
│   │   ├── Home.tsx
│   │   ├── PopularLinks.tsx
│   │   ├── PremiumFeatures.tsx
│   │   ├── PricingSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChooseUs.tsx
│   ├── layouts/
│   │   ├── Footer.tsx
│   │   ├── MainLayout.tsx
│   │   └── Navber.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   └── NotFound.tsx
│   ├── router/
│   │   └── router.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Routes

| Path | Component | Description |
| --- | --- | --- |
| `/` | `Home` | Main landing page with all 7 showcase sections |
| `/about` | `About` | Company overview, mission, values, team, and timeline |
| `*` | `NotFound` | Custom 404 page inside `MainLayout` for unmatched routes |

---

## Getting Started

### Prerequisites
- **Node.js** (v20+ recommended)
- **pnpm** (v10+ recommended)

### Installation

```bash
pnpm install
```

### Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the Vite development server with HMR (`http://localhost:5173`) |
| `pnpm run build` | Runs TypeScript type checking (`tsc -b`) and builds production assets into `dist/` |
| `pnpm run lint` | Runs ESLint across the codebase |
| `pnpm run preview` | Previews the production build locally |
