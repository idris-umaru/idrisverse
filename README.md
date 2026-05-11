# NeonForge

An immersive SvelteKit developer portfolio built for Frontend Wizards Stage 5b. It presents projects, skills, animated storytelling, a terminal-inspired creative feature, theme support, and accessible contact validation.

## Setup

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Architecture

- `src/lib/components/ui` contains reusable primitives such as buttons, badges, cards, and sections.
- `src/components` contains page-specific interactive components such as the hero, project grid, terminal, navigation, footer, and cursor effect.
- `src/lib/data` stores project and profile content so the showcase is dynamic.
- `src/lib/stores` handles theme persistence, scroll progress, and cursor state.
- `src/routes` uses SvelteKit routing for landing, project index, dynamic project details, about, lab, and contact pages.

## Animation Decisions

The portfolio uses native Svelte transitions, CSS keyframes, and the Web Animations API through a lightweight `reveal` action. Animations are primarily transform and opacity based to avoid layout thrash. Reduced-motion preferences disable decorative movement.

## Performance Optimizations

- Static prerendering is enabled through SvelteKit.
- Project data is local and route-level code splitting is provided by SvelteKit.
- Visual effects use CSS instead of heavy runtime animation libraries.
- The lab feature avoids canvas/WebGL dependencies while still feeling interactive.

## Accessibility

- Semantic routes, landmarks, headings, and form labels are used throughout.
- A skip link and visible focus states support keyboard users.
- The terminal announces output with `aria-live`.
- Contact fields include validation messages and sanitized input handling.
- Motion is reduced when `prefers-reduced-motion` is active.

## Trade-offs

This version simulates email sending to avoid exposing secrets in the client. In production, connect the contact form to a SvelteKit server action, transactional email provider, or scheduling integration.

## Deployment

Deploy to Vercel, Netlify, Cloudflare Pages, or any SvelteKit-compatible host. Set `PUBLIC_SITE_URL` and `PUBLIC_CONTACT_EMAIL` from `.env.example` as needed.
