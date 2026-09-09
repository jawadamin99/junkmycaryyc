"use client";

import { usePathname } from "next/navigation";
import { cityPages } from "../lib/city-pages";
import { mainNav, servicesNav, siteConfig } from "../lib/site";

const routeLabels = new Map<string, string>([
  ...mainNav.map((item) => [item.href, item.label] as const),
  ...servicesNav.map((item) => [item.href, item.label] as const),
  ...cityPages.map((page) => [
    `/${page.slug}`,
    `${page.slug.startsWith("junk-my-car-") ? "Junk My Car" : "Cash for Cars"} ${page.city}`,
  ] as const),
  ["/bill-of-sale-alberta", "Bill of Sale Alberta"],
  ["/contact", "Contact"],
  ["/privacy-policy", "Privacy Policy"],
  ["/terms-of-use", "Terms of Use"],
]);

export default function BreadcrumbJsonLd() {
  const pathname = usePathname();
  const pageName = routeLabels.get(pathname);

  if (!pageName || pathname === "/") {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: `${siteConfig.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${siteConfig.url}${pathname}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
