import type { Metadata } from "next";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Scrap Car Removal",
  description: "Scrap car removal Calgary page shell for Junk My Car YYC.",
  path: "/scrap-car-removal",
});

export default function ScrapCarRemovalPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="section">
          <div className="site-shell prose-shell">
            <p className="eyebrow">Scrap Car Removal</p>
            <h1>Service page shell ready for phase two.</h1>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
