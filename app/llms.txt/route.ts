import { getAllBlogSlugs } from "../lib/blog";
import { siteConfig } from "../lib/site";

const blogUrls = ["/blog", ...getAllBlogSlugs().map((slug) => `/blog/${slug}`)].map(
  (path) => `${siteConfig.url}${path}`,
);

const lines = [
  `# ${siteConfig.name}`,
  "",
  `> ${siteConfig.name} buys junk and scrap vehicles in Calgary and surrounding Alberta communities, with free towing and payment at pickup.`,
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
