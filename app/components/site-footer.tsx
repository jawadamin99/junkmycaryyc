import Link from "next/link";
import { mainNav, siteConfig } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer-shell">
        <div className="site-footer-top">
          <div>
            <p className="eyebrow">Junk My Car YYC</p>
            <h2>Built for fast Calgary junk car pickups.</h2>
            <p className="site-footer-copy">
              Replace the temporary logo treatment with your supplied brand asset in
              `public/brand/` when ready. The structure and spacing are already set up
              for it.
            </p>
          </div>

          <div className="site-footer-links">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="site-footer-contact">
            <p>{siteConfig.streetAddress}, Calgary AB</p>
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            <a href="/contact">Request a vehicle quote</a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <div>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
