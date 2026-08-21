import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/json-ld";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { getAllBlogPosts } from "../lib/blog";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Blog | Junk My Car YYC",
  description:
    "Helpful Alberta car-selling guides from Junk My Car YYC, including taxes, paperwork, and private vehicle sale questions.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Junk My Car YYC",
    description:
      "Helpful Alberta car-selling guides from Junk My Car YYC, including taxes, paperwork, and private vehicle sale questions.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1600,
        height: 900,
        alt: `${siteConfig.name} blog`,
      },
    ],
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteConfig.url}/blog/${post.slug}`,
      description: post.metaDescription,
    })),
  };

  return (
    <>
      <JsonLd data={blogSchema} />
      <SiteHeader />
      <main>
        <section className="blog-hero">
          <div className="site-shell blog-shell">
            <div className="blog-hub-header">
              <p className="blog-kicker">Blog</p>
              <h1>Alberta vehicle selling guides, taxes, paperwork, and junk car advice.</h1>
              <p className="blog-dek">
                Plain-language articles for Alberta drivers who want to understand the
                rules before they sell, trade in, scrap, or sign anything.
              </p>
            </div>
          </div>
        </section>

        <section className="blog-hub-section">
          <div className="site-shell blog-grid">
            <div className="blog-card-grid">
              {posts.map((post) => (
                <article key={post.slug} className="blog-card">
                  {post.coverImage ? (
                    <div className="blog-card-cover">
                      <Image
                        src={post.coverImage}
                        alt={post.coverImageAlt ?? post.title}
                        width={1600}
                        height={900}
                        className="blog-card-image"
                      />
                    </div>
                  ) : null}
                  <p className="blog-card-meta">{post.primaryKeyword ?? "Alberta vehicle guide"}</p>
                  <h2>
                    <Link href={`/blog/${post.slug}`} className="content-link">
                      {post.title}
                    </Link>
                  </h2>
                  <p>{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-card-link">
                    Read the guide
                  </Link>
                </article>
              ))}
            </div>

            <aside className="blog-sidebar">
              <div className="blog-sidebar-card">
                <h2>Need a fast offer?</h2>
                <p>
                  If you want to sell a car, truck, SUV, or van in Alberta, we can quote
                  it quickly and tow it for free.
                </p>
                <a className="blog-card-link" href="/contact">
                  Request a Quote
                </a>
              </div>

              <div className="blog-sidebar-card">
                <h2>Popular pages</h2>
                <p><Link href="/bill-of-sale-alberta" className="content-link">Bill of Sale Alberta</Link></p>
                <p><Link href="/services/junk-car-removal-calgary" className="content-link">Junk Car Removal Calgary</Link></p>
                <p><Link href="/services/cash-for-scrap-cars-calgary" className="content-link">Cash For Scrap Cars Calgary</Link></p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
