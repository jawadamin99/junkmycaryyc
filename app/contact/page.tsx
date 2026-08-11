import type { Metadata } from "next";
import HeroQuoteForm from "../components/hero-quote-form";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Junk My Car YYC | Free Calgary Quote",
  description:
    "Call or text for a free quote on any vehicle in Calgary — running or not. Same-day pickup available. Reach us at (403) 837-1550.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="section contact-hero-section">
          <div className="site-shell contact-hero-shell">
            <div className="contact-hero-copy">
              <p className="eyebrow">Contact Junk My Car YYC</p>
              <h1>Free Calgary quote. Fast response. Clear pickup plan.</h1>
              <p className="hero-support">
                Phone or text is fastest, and most quotes take two minutes. No obligation
                either way.
              </p>

              <div className="contact-highlight-grid">
                <div className="contact-highlight-card">
                  <span>Call or text</span>
                  <strong>{siteConfig.phoneDisplay}</strong>
                </div>
                <div className="contact-highlight-card">
                  <span>Email</span>
                  <strong>{siteConfig.email}</strong>
                </div>
                <div className="contact-highlight-card">
                  <span>Hours</span>
                  <strong>Open 24/7</strong>
                </div>
                <div className="contact-highlight-card">
                  <span>Coverage</span>
                  <strong>Calgary + surrounding towns</strong>
                </div>
              </div>

              <div className="contact-callout">
                <h2>Tell us five things.</h2>
                <ul className="promo-banner-points">
                  <li>Year, make, and model</li>
                  <li>Where it is, address or at least the community</li>
                  <li>Does it run, roll, and steer, and do you have keys?</li>
                  <li>Is it complete, or is anything missing?</li>
                  <li>How do we get to it?</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-panel">
              <HeroQuoteForm />
              <p className="contact-form-note">
                We&apos;ll reply within 1 business hour. No obligation.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell contact-access-shell">
            <div>
              <p className="eyebrow">Access Details</p>
              <h2>These details change the truck we send.</h2>
              <p className="section-body-copy">
                A few specifics can prevent a reschedule or the wrong recovery setup.
              </p>
              <div className="contact-access-list">
                <div className="comparison-row"><span className="icon-badge">P</span><p>Underground parkade, including ceiling height and stall location.</p></div>
                <div className="comparison-row"><span className="icon-badge">L</span><p>Back alley or narrow lane, common in older inner-city neighbourhoods.</p></div>
                <div className="comparison-row"><span className="icon-badge">G</span><p>Inside a detached garage, especially if the door width is tight.</p></div>
                <div className="comparison-row"><span className="icon-badge">W</span><p>No wheels, on blocks, on jack stands, or buried into soft ground.</p></div>
                <div className="comparison-row"><span className="icon-badge">S</span><p>Snowed in, grown into the grass, or sitting on a lawn or field.</p></div>
                <div className="comparison-row"><span className="icon-badge">M</span><p>Several vehicles, or a commercial unit with mounted tanks or residual contents.</p></div>
              </div>
            </div>

            <div className="contact-photo-card">
              <p className="eyebrow">Photos Help</p>
              <h2>Send a walk-around and VIN shot.</h2>
              <p className="section-body-copy">
                Text a walk-around plus a shot of the VIN plate to {siteConfig.phoneDisplay}.
                It shortens the quote call and helps us plan the right pickup.
              </p>
              <div className="contact-mini-grid">
                <div className="contact-mini-card">
                  <span>Fastest</span>
                  <strong>Text photos</strong>
                </div>
                <div className="contact-mini-card">
                  <span>Best detail</span>
                  <strong>VIN plate</strong>
                </div>
                <div className="contact-mini-card">
                  <span>Helpful</span>
                  <strong>Access shot</strong>
                </div>
                <div className="contact-mini-card">
                  <span>Useful</span>
                  <strong>Damage close-up</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell contact-coverage-shell">
            <div>
              <p className="eyebrow">What To Have Ready At Pickup</p>
              <h2>A short checklist before the truck arrives.</h2>
              <div className="legal-card-grid">
                <article className="legal-card"><h2>Proof of ownership</h2><p>Alberta registration or title in your name.</p></article>
                <article className="legal-card"><h2>Photo ID</h2><p>Valid government-issued photo ID. Registered owner, 18 or older.</p></article>
                <article className="legal-card"><h2>Bill of sale</h2><p>We prepare it, both parties sign it, and you keep a copy.</p></article>
                <article className="legal-card"><h2>Before we arrive</h2><p>Empty the vehicle and remove your licence plates. Contents cannot be recovered once it goes for processing.</p></article>
              </div>
            </div>

            <div className="contact-faq-card">
              <p className="eyebrow">Quick Answers</p>
              <h2>Common contact questions.</h2>
              <div className="contact-faq-list">
                <p><strong>How fast can you pick up?</strong> Often same-day, usually within 24 hours in Calgary.</p>
                <p><strong>Is the quote free?</strong> Yes, with no obligation. Quotes, towing, and paperwork cost you nothing.</p>
                <p><strong>Do I need to be there?</strong> Normally yes. The registered owner signs and provides ID.</p>
                <p><strong>Can you buy a car that isn&apos;t in my name?</strong> No, and neither can anyone else legally.</p>
                <p><strong>I&apos;m not ready to sell, just asking.</strong> Call anyway. If selling privately is better for your vehicle, we will tell you.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell legal-shell">
            <p className="eyebrow">Where We Come To</p>
            <h2>All four quadrants of Calgary and the surrounding town ring.</h2>
            <p className="section-body-copy">
              If you are unsure whether you are in range, call with your postal code and
              we will tell you straight before you commit.
            </p>
            <div className="service-area-grid">
              <article className="area-card"><p className="area-card-label">Northwest</p><p>Kensington, Bowness, Montgomery, Varsity, Brentwood, Dalhousie, Tuscany, Arbour Lake, Silver Springs, Royal Oak, Sage Hill, Evanston, Panorama Hills.</p></article>
              <article className="area-card"><p className="area-card-label">Northeast</p><p>Bridgeland, Renfrew, Marlborough, Forest Lawn, Saddle Ridge, Martindale, Taradale, Coventry Hills, Skyview Ranch, Redstone, Cityscape.</p></article>
              <article className="area-card"><p className="area-card-label">Southwest</p><p>Beltline, Mission, Killarney, Marda Loop, Bankview, Lakeview, Signal Hill, Aspen Woods, Springbank Hill, Woodbine, Millrise, Evergreen, Shawnessy.</p></article>
              <article className="area-card"><p className="area-card-label">Southeast</p><p>Inglewood, Ramsay, Ogden, McKenzie Towne, Cranston, Auburn Bay, Mahogany, Seton, Legacy, Walden, Copperfield, Quarry Park.</p></article>
            </div>
            <div className="region-note">
              <p>Surrounding towns — Airdrie, Cochrane, Chestermere, Okotoks, High River, Strathmore, Olds, Didsbury, Diamond Valley, Canmore, Banff, Drumheller, and acreages in Rocky View and Foothills counties.</p>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell contact-fleet-shell">
            <div>
              <p className="eyebrow">Fleet, Farm And Multi-Vehicle Enquiries</p>
              <h2>Send a list instead of calling about them one at a time.</h2>
              <p className="section-body-copy">
                Include make, rough year, whether each rolls and steers, whether the VIN
                is readable, and how many. A phone walk-around video of the yard is the
                most useful thing you can send.
              </p>
            </div>
            <div className="contact-fleet-callout">
              <strong>Fleet and farm enquiries:</strong>
              <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
