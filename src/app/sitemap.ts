import type { MetadataRoute } from "next";
import { siteConfig, siteRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return siteRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.priority >= 0.8 ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
