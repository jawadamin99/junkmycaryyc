import Link from "next/link";
import { cityPages } from "../lib/city-pages";
import { mainNav, servicesNav, siteConfig } from "../lib/site";

export default function SiteFooter() {
  const featuredCities = cityPages.slice(0, 8);

  return (
    <footer className="site-footer">
      <div className="site-shell site-footer-shell">
        <div className="site-footer-panel">
          <div className="site-footer-top">
            <div className="site-footer-brand">
              <h2>Junk My Car YYC</h2>
              <p className="site-footer-copy">
                We buy end-of-life vehicles across Calgary and the surrounding region,
                from tight condo parkades to acreage clearouts and long-sitting farm units.
              </p>
              <div className="site-footer-badges">
                <span>Open 24/7</span>
                <span>Paid on the spot</span>
                <span>Free towing</span>
              </div>
            </div>

            <div className="site-footer-links">
              <p className="site-footer-heading">Company</p>
              {mainNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-use">Terms of Use</Link>
            </div>

            <div className="site-footer-links">
              <p className="site-footer-heading">Services</p>
              {servicesNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="site-footer-links">
              <p className="site-footer-heading">Top Locations</p>
              <Link href="/">
                Calgary
              </Link>
              {featuredCities.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`}>
                  {page.city}
                </Link>
              ))}
            </div>

            <div className="site-footer-contact">
              <p className="site-footer-heading">Contact</p>
              <a href={siteConfig.phoneHref} className="site-footer-phone">
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <p>{siteConfig.streetAddress}, Calgary AB</p>
              <p>Serving Calgary and surrounding towns</p>
              <Link href="/contact" className="site-footer-cta">
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="site-footer-bottom">
            <span>© {new Date().getFullYear()} {siteConfig.name}</span>
            <div>
              <span>Licensed Alberta vehicle buyer</span>
              <span>Bill of sale on every transaction</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
