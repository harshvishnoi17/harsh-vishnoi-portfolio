# Harsh Vishnoi — Portfolio (Next.js, Editorial/Awwwards-style)

A bold, typography-driven personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Design direction takes cues from Awwwards-style portfolio sites — big display type, a fullscreen overlay menu, marquee tickers, a physics-based "hanging" profile photo, and a contextual custom cursor — rebuilt from scratch as original components (not a copy of any reference site).

## Getting started

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy
Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero config needed.

## What's inside

- **Four themes** (`ThemeSwitcher.tsx`) — Spider (black + red, default), Light, Aurora (pink/cyan/violet), and Iron (black/red/gold with a glowing cyan "arc" accent) — switchable from the top-right of the header, powered by `next-themes`. Colors live entirely in CSS variables in `globals.css` (`--bg`, `--fg`, `--accent`, etc.) so every component adapts automatically.
- **Working contact form** (`Contact.tsx` + `app/api/contact/route.ts`) — sends real emails to your inbox via [Resend](https://resend.com). See **Setting up the contact form** below — you need to add one free API key for this to actually deliver mail.
- **Iron-theme skill card face** (`icons/ArmoredVisor.tsx`) — when the Iron theme is active, skill cards show an original glowing-eyed armored visor icon on the front; hover still flips to the normal skill list on the back. This is an original abstract design (not a reproduction of any copyrighted character) — see note below.
- **Big name masthead** — "Harsh Vishnoi" renders as a large gradient headline at the top of the hero, above "Building Intelligent Software."
- **Animated spider-web graphic** (`SpiderWeb.tsx`) — canvas animation of swaying "legs" radiating from a center node with pulsing data-packet particles, re-colored per active theme
- **Expandable project rows** (`Projects.tsx`) — click a project to expand an animated detail panel with full description, highlights, and stack
- **Fullscreen overlay menu**, **percentage-counter preloader**, **contextual custom cursor**, **smooth scroll (Lenis)**, **hanging profile photo physics**, **rotating badge**, **marquee tickers**, **flip skill cards** — see component names below

### A note on the Iron theme
I built the color palette (black/red/gold + glowing cyan accent) and an original abstract "armored visor" icon inspired by that aesthetic, rather than reproducing Marvel's Iron Man helmet design — that specific character design is copyrighted IP. The theme captures the vibe (glowing eyes, red/gold armor tones) without copying the trademarked likeness.

## Setting up the contact form

The form is wired to a Next.js API route (`/api/contact`) that sends mail through Resend. Without an API key it will still validate input correctly but shows a friendly "not configured yet" error instead of sending — nothing crashes, but no email arrives until you set this up:

1. Sign up free at [resend.com](https://resend.com) — **use vishnoiharsh793@gmail.com (or whichever address you want to receive messages at) as the signup email.** Resend's free tier lets you send to your own account email using their default `onboarding@resend.dev` sender with zero extra setup (no domain verification needed).
2. Create an API key in the Resend dashboard.
3. Copy `.env.local.example` to `.env.local` and paste your key:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
4. Restart `npm run dev` — the form will now actually deliver to your inbox.
5. **When you deploy to Vercel**, add the same `RESEND_API_KEY` under Project Settings → Environment Variables (env vars in `.env.local` are never uploaded — you have to add them again in Vercel's dashboard).

Want to skip API keys entirely? An easier zero-code alternative is [Formspree](https://formspree.io) — sign up, get a form endpoint, and change the `fetch("/api/contact", ...)` call in `Contact.tsx` to POST straight to your Formspree URL instead. Happy to wire that in for you if you'd rather go that route.



## Project structure

```
src/
  app/
    layout.tsx        # fonts, providers, cursor, preloader, header
    page.tsx           # assembles all sections
    globals.css         # design tokens (light/dark colors, fonts) + base styles
  components/
    Hero.tsx, RotatingBadge.tsx
    About.tsx, HangingProfile.tsx
    Skills.tsx, SkillCard.tsx
    Experience.tsx
    Projects.tsx
    AILab.tsx
    Contact.tsx, Footer.tsx
    SiteHeader.tsx, ThemeToggle.tsx, Providers.tsx
    Preloader.tsx, CustomCursor.tsx
    Marquee.tsx, MagneticButton.tsx, NetworkCanvas.tsx, Reveal.tsx
    icons/BrandIcons.tsx
  data/
    portfolio.ts        # ALL content lives here — edit this file to update copy, links, and projects
public/
  portrait.png           # profile photo
  resume.pdf              # downloadable resume
```

## Editing content
Everything — name, links, bio, skills, experience, projects, resume path — is centralized in `src/data/portfolio.ts`. You won't need to touch component files to update text or links.

To swap the resume or photo, replace `public/resume.pdf` / `public/portrait.png` (keep the same filenames, or update the paths in `portfolio.ts`).

Contact is a direct `mailto:` CTA rather than a form — swap in a form + Formspree/Resend if you'd rather collect messages in-app.

## Stack
Next.js (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis (smooth scroll) · next-themes (dark/light) · Lucide React icons
