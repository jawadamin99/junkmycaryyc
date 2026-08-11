import type { Metadata } from "next";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";

type CityPageShellProps = {
  city: string;
  slug: string;
};

export function buildCityMetadata({ city, slug }: CityPageShellProps): Metadata {
  return buildMetadata({
    title: `Junk My Car ${city}`,
    description: `Junk My Car YYC service page shell for ${city}. Full page content coming soon.`,
    path: `/${slug}`,
  });
}

export default function CityPageShell({ city }: CityPageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="section section-light">
          <div className="site-shell prose-shell">
            <p className="eyebrow">Service Area</p>
            <h1>Junk My Car {city}</h1>
            <p className="section-body-copy">
              Full page content for {city} is coming soon.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
