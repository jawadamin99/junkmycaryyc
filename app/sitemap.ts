import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";
import { cityPages } from "./lib/city-pages";

const pages = [
  "/",
  "/about",
  "/bill-of-sale-alberta",
  "/services/cash-for-junk-cars-calgary",
  "/contact",
  "/services/cash-for-scrap-cars-calgary",
  "/services/junk-car-removal-calgary",
  "/privacy-policy",
  "/services/scrap-car-removal-calgary",
  "/terms-of-use",
];

const cityPagePaths = cityPages.map((page) => `/${page.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [...pages, ...cityPagePaths].map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "/" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/cash-for-cars-") || path.startsWith("/junk-my-car-")
          ? 0.75
          : 0.7,
  }));
}
