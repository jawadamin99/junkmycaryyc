import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "../../components/json-ld";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import { getAllBlogSlugs, getBlogPostBySlug, renderMdxContent } from "../../lib/blog";
import { siteConfig } from "../../lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${slug}`,
      type: "article",
      images: [
        {
          url: `${siteConfig.url}${post.coverImage ?? "/brand/junkmycaryyc-new-logo.png"}`,
          width: 1600,
          height: 900,
          alt: post.coverImageAlt ?? post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
    image: [`${siteConfig.url}${post.coverImage ?? "/brand/junkmycaryyc-new-logo.png"}`],
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/junkmycaryyc-new-logo.png`,
      },
    },
    keywords: post.primaryKeyword,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <SiteHeader />
      <main>
        <section className="blog-hero">
          <div className="site-shell blog-shell">
            <div className="blog-header">
              <p className="blog-kicker">Alberta Car Selling Guide</p>
              <h1>{post.title}</h1>
              <p className="blog-dek">{post.description}</p>
            </div>
          </div>
        </section>

        <section className="blog-content-section">
          <div className="site-shell blog-grid">
            <article className="blog-card">
              {post.coverImage ? (
                <div className="blog-card-cover">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt ?? post.title}
                    width={1600}
                    height={900}
                    className="blog-card-image"
                    priority
                  />
                </div>
              ) : null}
              <div className="blog-prose">{renderMdxContent(post.content)}</div>
            </article>

            <aside className="blog-sidebar">
              <div className="blog-sidebar-card">
                <h2>Need to sell the vehicle instead?</h2>
                <p>
                  If the car is being sold for cash, junked, or towed away, we can quote
                  it quickly and handle the pickup.
                </p>
                <a className="blog-card-link" href="/contact">
                  Request a Quote
                </a>
              </div>

              <div className="blog-sidebar-card">
                <h2>Who we Are?</h2>
                <p>{siteConfig.name}</p>
                <p>{siteConfig.streetAddress}, Calgary, AB</p>
                <p><a className="content-link" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></p>
                <p><a className="content-link" href="/bill-of-sale-alberta">Bill of Sale Alberta</a></p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
