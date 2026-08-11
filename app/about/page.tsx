import Image from "next/image";
import type { Metadata } from "next";
import SectionIntro from "../components/section-intro";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";
import { siteConfig } from "../lib/site";

function IconBadge({ children }: { children: React.ReactNode }) {
  return <span className="icon-badge">{children}</span>;
}

export const metadata: Metadata = buildMetadata({
  title: "About Junk My Car YYC | Calgary Car Buyers",
  description:
    "Who we are, how we price vehicles, where they go, and what we won't do. Licensed Calgary car buyers serving all four quadrants since 1998.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="section section-light">
          <div className="site-shell legal-shell">
            <p className="eyebrow">About Junk My Car YYC</p>
            <h1>Calgary car buyers focused on end-of-life vehicles and straightforward payouts.</h1>
            <p className="section-body-copy">
              We buy vehicles that have reached the end of their life, remove them from
              anywhere in Calgary, and make sure they are recycled properly. No showroom,
              no consignment, and no number that mysteriously drops when the tow truck arrives.
            </p>
            <p className="section-body-copy">
              Junk My Car YYC has operated in Calgary since 1998. We work all four quadrants
              and the surrounding towns, from Beltline parkades and Bowness back alleys to
              Foothills County shelterbelts and Bow Valley condo lots.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="site-shell about-grid">
            <div>
              <SectionIntro
                eyebrow="Why This Business Exists"
                title="Use your real story here, or delete the section entirely."
                description="[Replace with your real story in two or three sentences. What you did before, what you saw going wrong, why you set up differently. True and specific beats polished and generic. If you'd rather not tell a story publicly, delete this section.]"
              />
            </div>
            <div className="legal-card">
              <h2>Structure example only, do not publish verbatim.</h2>
              <p>
                We spent [X] years in [towing / auto recycling / the trades] around Calgary
                and kept hearing the same story: a good phone quote, then half that once the
                truck was in the driveway. We built [BUSINESS NAME] to quote honestly and
                stand behind it.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="site-shell worth-section">
            <div>
              <p className="eyebrow">How We Price A Vehicle</p>
              <h2>Openly, because opacity is how this industry earned its reputation.</h2>
              <div className="value-ladder">
                <div className="value-ladder-row">
                  <strong>Weight of recoverable steel</strong>
                  <span>It does most of the work, which is why a rusted 3/4-ton can beat a clean compact.</span>
                </div>
                <div className="value-ladder-row">
                  <strong>Scrap steel market</strong>
                  <span>It moves week to week with global demand, which is why fixed price lists are misleading.</span>
                </div>
                <div className="value-ladder-row">
                  <strong>Catalytic converter</strong>
                  <span>Usually the most valuable single component, and it varies hugely by vehicle.</span>
                </div>
                <div className="value-ladder-row">
                  <strong>Non-ferrous content</strong>
                  <span>Alloy wheels, aluminum radiators, and copper wiring add real money.</span>
                </div>
                <div className="value-ladder-row">
                  <strong>Completeness</strong>
                  <span>A whole vehicle beats a shell, which is why we ask what is missing up front.</span>
                </div>
              </div>
            </div>
            <div className="worth-panel">
              <p>Our commitment</p>
              <ul>
                <li>The phone quote is what you are paid unless the vehicle is materially different from described.</li>
                <li>If we ever revise an offer we explain exactly why.</li>
                <li>You can decline at no cost.</li>
                <li>We would rather ask three more questions up front than have an awkward driveway conversation later.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell legal-shell">
            <SectionIntro
              eyebrow="Licensed And Accountable"
              title="Buying and disposing of end-of-life vehicles in Alberta is regulated."
              description="We work inside those rules and only want real licences, real memberships, and real business identifiers shown here."
            />
            <div className="legal-card-grid">
              <article className="legal-card">
                <h2>Business identity</h2>
                <p>Junk My Car YYC, [corporation / sole proprietorship] registered in Alberta[, business number [BN]]</p>
              </article>
              <article className="legal-card">
                <h2>Operating rules</h2>
                <p>Operating in compliance with Alberta&apos;s Scrap Metal Dealers and Recyclers Identification Act and its regulation.</p>
              </article>
              <article className="legal-card">
                <h2>Calgary requirements</h2>
                <p>Subject to the City of Calgary&apos;s transaction-recording requirements for scrap metal dealers.</p>
              </article>
              <article className="legal-card">
                <h2>Environmental handling</h2>
                <p>Fluids and hazardous materials handled under Alberta&apos;s Environmental Protection and Enhancement Act at certified facilities.</p>
              </article>
              <article className="legal-card">
                <h2>Insurance</h2>
                <p>[State the insurance you actually carry — liability, cargo]</p>
              </article>
              <article className="legal-card">
                <h2>Licences and memberships</h2>
                <p>[List real licences, municipal business licence numbers, or association memberships only]</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section pickup-photo-section">
          <div className="site-shell pickup-photo-split">
            <div className="pickup-photo-frame">
              <Image
                src="/jmc-imgs/purchase-23.jpeg"
                alt="Vehicle pickup example for Junk My Car YYC in Calgary"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>
            <div className="pickup-photo-copy">
              <p className="eyebrow">Where Your Vehicle Goes</p>
              <h2>Certified Alberta facilities, in four stages.</h2>
              <ul className="promo-banner-points">
                <li>Depollution: fuel, oils, coolant, brake fluid and refrigerant drained and captured, battery and mercury switches removed.</li>
                <li>Parts recovery: components with genuine reuse life recovered rather than shredded.</li>
                <li>Metals separation: catalytic converter and non-ferrous metals handled separately.</li>
                <li>Shredding: the remaining shell shredded and steel returned to the supply chain.</li>
              </ul>
              <p className="section-body-copy">
                A single end-of-life vehicle holds several litres of hazardous fluid. In a city
                whose drainage runs to the Bow and Elbow, and where municipal bylaws prohibit
                exposed storage of engine oil, brake fluid and antifreeze, that is the real
                argument for using a licensed buyer rather than whoever quotes highest.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell legal-shell">
            <SectionIntro
              eyebrow="Where We Work"
              title="Calgary first, then the surrounding towns and clearout jobs."
              description="This page should state your genuine service radius and real towing terms for distant markets."
            />
            <div className="legal-card-grid">
              <article className="legal-card">
                <h2>Calgary</h2>
                <p>All four quadrants, NW, NE, SW, and SE, including downtown parkades, inner-city back alleys, and acreages inside and outside the ring road.</p>
              </article>
              <article className="legal-card">
                <h2>Surrounding towns</h2>
                <p>Airdrie, Cochrane, Chestermere, Okotoks, High River, Strathmore, Olds, Didsbury, Diamond Valley, Canmore, Banff, Drumheller, Red Deer, Lethbridge, Medicine Hat, and Brooks. [Confirm your genuine radius and towing terms for the distant ones.]</p>
              </article>
              <article className="legal-card">
                <h2>Clearouts</h2>
                <p>Fleet, farm, and multi-vehicle clearouts for contractors, dealerships, body shops, property managers, and farm yards with several derelicts to move at once.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell legal-shell">
            <SectionIntro
              eyebrow="What We Won&apos;t Do"
              title="The rules we keep because they matter to the seller."
              description="These are the behaviours that separate a serious buyer from a driveway bait-and-switch operator."
            />
            <div className="check-list">
              <div className="comparison-row">
                <IconBadge>✓</IconBadge>
                <p>Quote high to win the job and cut it on arrival. If a number changes, we explain why and you can walk.</p>
              </div>
              <div className="comparison-row">
                <IconBadge>✓</IconBadge>
                <p>Charge you for towing. Within our service area, pickup is included.</p>
              </div>
              <div className="comparison-row">
                <IconBadge>✓</IconBadge>
                <p>Buy a vehicle you do not own. If it is not registered to you, no legitimate buyer can.</p>
              </div>
              <div className="comparison-row">
                <IconBadge>✓</IconBadge>
                <p>Skip the paperwork. You get a signed bill of sale every time.</p>
              </div>
              <div className="comparison-row">
                <IconBadge>✓</IconBadge>
                <p>Tell you to scrap a car that should be sold privately instead. If it runs, drives, and would pass inspection, we will say so.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="site-shell cta-band-shell">
            <div>
              <p className="eyebrow">Get In Touch</p>
              <h2>Phone or text is still the fastest way to get a real number.</h2>
              <p className="cta-band-copy">
                {siteConfig.phoneDisplay} · {siteConfig.email} · Open 24/7
              </p>
            </div>
            <a href={siteConfig.phoneHref} className="primary-button primary-button-light">
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
