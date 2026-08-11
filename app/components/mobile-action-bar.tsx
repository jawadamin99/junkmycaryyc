import Link from "next/link";
import { siteConfig } from "../lib/site";

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <a href={siteConfig.phoneHref}>Call Now</a>
      <Link href="/contact">Get Quote</Link>
    </div>
  );
}
