# Wanderlust — Next.js + shadcn/ui-inspired UI

A responsive, UI-only travel discovery website created from the supplied Wanderlust design reference. Built with Next.js App Router, TypeScript, Tailwind CSS v4, Lucide icons, and reusable shadcn-style UI components.

## Pages
- `/` — landing page with hero, trip-search UI, experience categories, destination cards, brand story, and CTA
- `/destinations` — destination discovery grid with search/filter presentation
- `/experiences` — experience category cards
- `/about` — brand story
- `/sign-in` — sign-in form UI
- `/sign-up` — sign-up form UI

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Notes
- UI only: forms, search, filters, save buttons, and account actions are visual placeholders and are not connected to an API or authentication system.
- Local image assets are included in `public/images`.
- Reusable shadcn-style components live in `components/ui`.
