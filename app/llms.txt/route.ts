import { getAllBlogSlugs } from "../lib/blog";
import { cityPages } from "../lib/city-pages";
import { siteConfig } from "../lib/site";

const blogUrls = ["/blog", ...getAllBlogSlugs().map((slug) => `/blog/${slug}`)].map(
  (path) => `${siteConfig.url}${path}`,
);
const cityUrls = cityPages.map((page) => `${siteConfig.url}/${page.slug}`);

const lines = [
  `# ${siteConfig.name}`,
  "",
  `> ${siteConfig.name} is a licensed Calgary vehicle buyer with 20 years in market, 1000+ 5-star reviews, free towing, same-day pickup, and payment on the spot with a bill of sale.`,
  "",
  "## Main Pages",
  `${siteConfig.url}/`,
  `${siteConfig.url}/about`,
  `${siteConfig.url}/bill-of-sale-alberta`,
  `${siteConfig.url}/contact`,
  "",
  "## Services",
  `${siteConfig.url}/services/junk-car-removal-calgary`,
  `${siteConfig.url}/services/scrap-car-removal-calgary`,
  `${siteConfig.url}/services/cash-for-scrap-cars-calgary`,
  `${siteConfig.url}/services/cash-for-junk-cars-calgary`,
  "",
  "## Cities",
  ...cityUrls,
  "",
  "## Blog",
  ...blogUrls,
  "",
  "## Policies",
  `${siteConfig.url}/privacy-policy`,
  `${siteConfig.url}/terms-of-use`,
  "",
  "## Sitemap",
  `${siteConfig.url}/sitemap.xml`,
  "",
  "## Contact",
  `Phone: ${siteConfig.phoneDisplay}`,
  `Email: ${siteConfig.email}`,
  `Address: ${siteConfig.streetAddress}, ${siteConfig.addressLocality}, ${siteConfig.addressRegion}, ${siteConfig.addressCountry}`,
];

export function GET() {
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
