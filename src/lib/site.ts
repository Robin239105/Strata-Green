// 👇 Your live domain. Change this one line when you have your real domain.
//    Only used to build absolute URLs for SEO (sitemap, canonical, social
//    link previews). No env vars, no backend required.
const PRODUCTION_URL = "https://strata-green-six.vercel.app";

/**
 * Central site configuration.
 */
export const siteConfig = {
  name: "Strata Green",
  title: "Strata Green | Institutional ESG Energy Platform",
  description:
    "Bespoke clean energy infrastructure investments connecting institutional ESG capital with gigawatt-scale solar, wind, and green hydrogen systems.",
  url: PRODUCTION_URL.replace(/\/$/, ""),
  locale: "en_US",
  twitter: "@stratagreen",
  keywords: [
    "renewable energy",
    "ESG investment",
    "green infrastructure",
    "solar power",
    "offshore wind",
    "green hydrogen",
    "carbon neutral",
    "sustainable investment",
    "clean energy platform",
    "institutional ESG",
  ],
} as const;

/** Routes included in the sitemap, with relative crawl priority. */
export const siteRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/projects", priority: 0.9 },
  { path: "/technology", priority: 0.9 },
  { path: "/esg-strategy", priority: 0.8 },
  { path: "/investors", priority: 0.9 },
  { path: "/impact", priority: 0.8 },
  { path: "/case-studies", priority: 0.7 },
  { path: "/innovation-lab", priority: 0.7 },
  { path: "/leadership", priority: 0.6 },
  { path: "/careers", priority: 0.6 },
  { path: "/media-center", priority: 0.6 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/cookies", priority: 0.3 },
];
