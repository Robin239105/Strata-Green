# Strata Green

Marketing website for **Strata Green** — an institutional ESG energy platform connecting capital with gigawatt-scale solar, wind, and green hydrogen infrastructure.

A fully static, server-rendered site built with the Next.js App Router. No backend, database, or authentication — every page is pre-rendered to HTML at build time.

## Highlights

- **Interactive hero** with a live operations console (toggle Solar / Wind / Hydrogen, streaming sparkline, live metrics)
- **Custom brand identity** — SVG logo mark, floating glass navigation, cohesive design system
- **13+ pages** — Projects, Technology, ESG Strategy, Investors, Impact, Case Studies, Innovation Lab, Leadership, Careers, Media Center, plus Privacy / Terms / Cookies
- **Fully responsive** across mobile, tablet, and desktop
- **Production SEO** — per-page metadata, `sitemap.xml`, `robots.txt`, dynamic OpenGraph image, branded favicon + Apple touch icon

## Tech Stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide](https://lucide.dev) |
| Fonts | Montserrat, Inter, Geist Mono |

## Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm run dev

# create a production build
npm run build

# run the production build locally
npm start
```

Requires Node.js 20 or newer.

## Project Structure

```
src/
├── app/                 # routes (one folder per page) + sitemap, robots, icons
│   ├── layout.tsx       # root layout, global metadata
│   ├── page.tsx         # home page
│   └── <page>/          # interior pages (page.tsx + metadata layout.tsx)
├── components/          # Navbar, Footer, Logo, LiveOpsConsole, PageHeader, …
└── lib/
    └── site.ts          # central site config (name, description, domain)
```

## Configuration

The only thing to set before going live is your domain, used to build absolute
URLs for SEO (sitemap, canonical tags, social link previews). Edit one line in
[`src/lib/site.ts`](src/lib/site.ts):

```ts
const PRODUCTION_URL = "https://strata-green-six.vercel.app";
```

## Deployment

Optimised for [Vercel](https://vercel.com): import the repository, and it
auto-detects Next.js — no build configuration required. Add your custom domain
under **Settings → Domains** after the first deploy.

---

© Strata Green. All rights reserved.
