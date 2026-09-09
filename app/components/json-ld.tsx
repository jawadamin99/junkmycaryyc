import { siteConfig } from "../lib/site";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export default function JsonLd({ data }: JsonLdProps) {
  const pageUrl =
    typeof data.url === "string"
      ? data.url
      : typeof data.mainEntityOfPage === "string"
        ? data.mainEntityOfPage
        : null;
  const pageName =
    typeof data.name === "string"
      ? data.name
      : typeof data.headline === "string"
        ? data.headline
        : null;
  const normalizedPageUrl = pageUrl?.replace(/\/$/, "");
  const normalizedSiteUrl = siteConfig.url.replace(/\/$/, "");
  const isBlogPage = normalizedPageUrl === `${normalizedSiteUrl}/blog`;
  const isBlogPost = normalizedPageUrl?.startsWith(`${normalizedSiteUrl}/blog/`) ?? false;
  const shouldRenderBreadcrumb = Boolean(pageName && (isBlogPage || isBlogPost));
  const breadcrumbItems = shouldRenderBreadcrumb
    ? [
        { name: siteConfig.name, url: `${normalizedSiteUrl}/` },
        ...(isBlogPost ? [{ name: "Blog", url: `${normalizedSiteUrl}/blog` }] : []),
        { name: isBlogPage ? "Blog" : pageName as string, url: normalizedPageUrl as string },
      ]
    : [];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
      />
      {shouldRenderBreadcrumb ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
    </>
  );
}
