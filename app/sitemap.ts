import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "./lib/blog";
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
const blogPosts = getAllBlogPosts();
const blogPagePaths = ["/blog", ...blogPosts.map((post) => `/blog/${post.slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [...pages, ...cityPagePaths, ...blogPagePaths].map((path) => {
    const publishedDate = blogPosts.find(
      (post) => `/blog/${post.slug}` === path,
    )?.publishedDate;

    return {
      url: `${siteConfig.url}${path === "/" ? "/" : path}`,
      lastModified: publishedDate ? new Date(`${publishedDate}T00:00:00Z`) : now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority:
        path === "/"
          ? 1
          : path.startsWith("/blog/")
            ? 0.6
            : path === "/blog"
              ? 0.7
              : path.startsWith("/cash-for-cars-") || path.startsWith("/junk-my-car-")
                ? 0.75
                : 0.7,
    };
  });
}
