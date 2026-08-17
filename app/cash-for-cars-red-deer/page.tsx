import Image from "next/image";
import type { Metadata } from "next";
import HeroQuoteForm from "../components/hero-quote-form";
import MobileActionBar from "../components/mobile-action-bar";
import SectionIntro from "../components/section-intro";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";
import { siteConfig } from "../lib/site";

function IconBadge({ children }: { children: React.ReactNode }) {
  return <span className="icon-badge">{children}</span>;
}

function StepBadge({ type }: { type: "phone" | "arrow" | "check" }) {
  return (
    <span className="icon-badge step-badge" aria-hidden="true">
      {type === "phone" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path d="M6.8 4.5h2.5l1.2 3.6-1.6 1.5a14.2 14.2 0 0 0 5.5 5.5l1.5-1.6 3.6 1.2v2.5c0 .8-.6 1.4-1.4 1.4A14.8 14.8 0 0 1 4.5 5.9c0-.8.6-1.4 1.4-1.4Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
      {type === "arrow" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
      {type === "check" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path d="M5 12.5 9.2 17 19 7.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
    </span>
  );
}

const heroBullets = [
  "Running or not, we buy vehicles across Red Deer and central Alberta",
  "Free towing to homes, yards, shops, and industrial lots",
  "Paid at pickup with bill of sale included",
];

const trustItems = [
  { title: "Red Deer citywide pickup", icon: "◎" },
  { title: "Fleet and yard clearouts", icon: "↗" },
  { title: "Cash or e-transfer", icon: "$" },
  { title: "Any condition welcome", icon: "✓" },
];

const wearItems = [
  { title: "The QEII corridor", copy: "Red Deer drivers commute it, work it, and haul on it. Mileage, not rust, often ends the vehicle first." },
  { title: "Collisions", copy: "Heavy traffic, winter whiteouts, and blowing snow across open farmland create plenty of write-offs." },
  { title: "Trade and fleet vehicles", copy: "Service vans, construction trucks, oilfield units, and shop vehicles get used until they are finished, then parked." },
  { title: "Freeze-thaw and salt", copy: "Central Alberta winters plus de-icer rot frames, brake lines, and exhaust from underneath." },
  { title: "Deep-cold failures", copy: "After a hard cold stretch, many vehicles never start again. We take them exactly as they sit." },
];

const serviceAreas = [
  { label: "North", areas: "Normandeau, Kentwood East and West, Highland Green, Johnstone Park, Johnstone Crossing, Oriole Park, Riverside Meadows, Glendale, Pines, and Northlands Industrial Park." },
  { label: "Central", areas: "Downtown, Parkvale, Waskasoo, Michener Hill, Grandview, Mountview, West Park, Woodlea, and Riverlands." },
  { label: "South And Southeast", areas: "Sunnybrook, South Hill, Deer Park, Rosedale, Morrisroe, Anders Park, Vanier Woods, Lancaster, College Park, Inglewood, Eastview, Clearview Ridge, Timberlands, Garden Heights, Bower, Fairview, and Devonshire." },
  { label: "Industrial And Commercial", areas: "Edgar Industrial Park, Riverside Light and Heavy Industrial, Chiles Industrial Park, Queens Business Park, Burnt Lake, and Gasoline Alley." },
];

const nearbyAreas = ["Blackfalds", "Lacombe", "Penhold", "Innisfail", "Springbrook", "Sylvan Lake", "Bowden", "Ponoka", "Rimbey", "Stettler", "Eckville"];

const vehicleTypes = [
  "Junk and scrap cars",
  "Non-runners",
  "Blown engines and transmissions",
  "Collision and insurance write-offs",
  "High-mileage highway vehicles",
  "Fleet and commercial trucks and vans",
  "Farm and acreage vehicles",
  "Oilfield, estate, and paperwork-heavy files",
];

const steps = [
  { title: "Call or text", copy: `Share the year, make, model, and condition with ${siteConfig.phoneDisplay}. You get a firm offer in minutes.` },
  { title: "Free pickup", copy: "We schedule towing to your home, shop, yard, or storage lot." },
  { title: "Paid at pickup", copy: "Cash or e-transfer, bill of sale provided, vehicle gone." },
];

const worthFactors = [
  { label: "Live scrap steel price", note: "This changes week to week." },
  { label: "Vehicle weight", note: "Heavier trucks and diesels usually bring the most." },
  { label: "Reusable parts", note: "Converters, wheels, and usable driveline parts add value." },
  { label: "Condition", note: "A complete vehicle is worth more than a stripped shell." },
  { label: "Parts demand", note: "Some makes and models carry stronger salvage demand." },
];

const fleetItems = [
  { title: "Contractors and trades", copy: "Retired vans, service trucks, and highway tractors taking up yard space." },
  { title: "Farms and acreages", copy: "Grain trucks, feed trucks, and ranch half-tons parked in a shelterbelt for decades." },
  { title: "Dealerships and body shops", copy: "Non-repairable trade-ins and unclaimed vehicles." },
  { title: "Property managers and landlords", copy: "Abandoned tenant vehicles need proper legal process before disposal." },
];

const faqItems = [
  { question: "Do you buy cars in Red Deer that will not start?", answer: "Yes. That is the majority of what we buy." },
  { question: "Do you take work vans and fleet trucks?", answer: "Yes, individually or in batches." },
  { question: "Do you cover Blackfalds, Lacombe, and Sylvan Lake?", answer: "Yes, along with much of central Alberta." },
  { question: "Do you buy collision write-offs?", answer: "Regularly. If you kept the salvage after your payout, we will pay for it." },
  { question: "How soon can you pick up?", answer: "Usually within 24 to 48 hours, often sooner." },
  { question: "How do I get paid?", answer: "Cash or e-transfer at pickup, before loading." },
];

export const metadata: Metadata = buildMetadata({
  title: "Cash For Cars Red Deer | Free Towing, Paid On The Spot",
  description: "Cash for cars in Red Deer — running or not, any condition. Pickup across every neighbourhood and central Alberta, paid at pickup. Call (403) 837-1550 for a free quote.",
  path: "/cash-for-cars-red-deer",
});

export default function RedDeerPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image src="/jmc-imgs/purchase-19.jpeg" alt="Cash for cars pickup service for Red Deer vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Cash For Cars Red Deer</p>
              <h1>Cash for Cars Red Deer — Central Alberta&apos;s Straightforward Sell</h1>
              <p className="hero-support">Halfway between Calgary and Edmonton, Red Deer burns through kilometres. When your vehicle is done, we pay cash and haul it away through our <a className="content-link" href="/">cash for cars Calgary</a> service and nearby <a className="content-link" href="/cash-for-cars-olds">Olds cash for cars</a> coverage.</p>
              <ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a>
            </div>
            <div className="hero-form-wrap"><HeroQuoteForm /></div>
          </div>
        </section>

        <section className="value-strip">
          <div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div>
        </section>

        <section className="promo-banner-section">
          <div className="site-shell">
            <div className="promo-banner-split">
              <div className="promo-banner-copy">
                <p className="eyebrow">Why Red Deer Vehicles Wear Out Fast</p>
                <h2>Heavy corridor mileage and work duty finish vehicles early here.</h2>
                <p className="section-body-copy">Red Deer is a commuter city, a trade hub, and a fleet town all at once. That shows up in the kind of end-of-life vehicles people call us about.</p>
                <ul className="promo-banner-points">{wearItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul>
                <div className="promo-proof-grid">
                  <div className="promo-proof-card"><strong>20 Years</strong><span>In the Calgary region</span></div>
                  <div className="promo-proof-card"><strong>1000+</strong><span>Google reviews</span></div>
                  <div className="promo-proof-card"><strong>5.0★</strong><span>Average rating</span></div>
                </div>
              </div>
              <div className="promo-banner-frame">
                <Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Red Deer cash for cars service" width={1024} height={1536} className="promo-banner-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="section pickup-photo-section">
          <div className="site-shell pickup-photo-split">
            <div className="pickup-photo-frame">
              <Image src="/jmc-imgs/purchase-23.jpeg" alt="Local junk car pickup example for a Red Deer vehicle owner" width={1200} height={1600} className="pickup-photo-image" />
            </div>
            <div className="pickup-photo-copy">
              <p className="eyebrow">Every Neighbourhood In Red Deer</p>
              <h2>Citywide pickup plus central Alberta coverage.</h2>
              <p className="section-body-copy">Homes, shops, industrial yards, storage lots, and rural properties all fit the same removal flow.</p>
              <ul className="promo-banner-points">
                <li>North, central, south, and industrial district pickup</li>
                <li>Nearby areas like {nearbyAreas.join(", ")} included</li>
                <li>Confirm your location when you call and we lock in the timing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section service-area-section">
          <div className="site-shell">
            <SectionIntro eyebrow="Community Coverage" title="Pickup across Red Deer and the central Alberta ring around it." description="We meet you where the vehicle sits and confirm towing at no cost before you commit." />
            <div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <SectionIntro eyebrow="What We Buy" title="Single vehicles, whole yards, work units, and highway beaters." description="If it is done for you, we want to hear about it." />
            <div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
              {item === "Junk and scrap cars" && "Old cars beyond repair or no longer worth fixing."}
              {item === "Non-runners" && "Flatbed and winch files are standard."}
              {item === "Blown engines and transmissions" && "Mechanical failures that cost more than the vehicle is worth."}
              {item === "Collision and insurance write-offs" && "Retained salvage and damaged vehicles accepted."}
              {item === "High-mileage highway vehicles" && "QEII commuters that hit the end of their economic life early."}
              {item === "Fleet and commercial trucks and vans" && "Service vehicles, contractor units, and work vans taken singly or in groups."}
              {item === "Farm and acreage vehicles" && "Rural property trucks and old yard units handled where they sit."}
              {item === "Oilfield, estate, and paperwork-heavy files" && "Authorization, missing paperwork, and unusual files handled carefully."}
            </p></article>)}</div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell">
            <SectionIntro eyebrow="How It Works" title="Offer, pickup, payment." description="Short process, firm number, and no drawn-out listing cycle." />
            <div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="site-shell worth-section">
            <div>
              <p className="eyebrow">What&apos;s My Car Worth In Red Deer?</p>
              <h2>Weight, market price, salvageable parts, and condition drive the number.</h2>
              <div className="value-ladder">{worthFactors.map((factor) => <div key={factor.label} className="value-ladder-row"><strong>{factor.label}</strong><span>{factor.note}</span></div>)}</div>
            </div>
            <div className="worth-panel">
              <p>What to expect</p>
              <ul>
                <li>Heavier trucks and diesels usually bring more</li>
                <li>Live quote only, because scrap markets move</li>
                <li>The number holds unless the vehicle is materially different from described</li>
                <li>Free quote, no obligation</li>
              </ul>
              <a href={siteConfig.phoneHref} className="text-link-light">Call {siteConfig.phoneDisplay}</a>
            </div>
          </div>
        </section>

        <section className="section section-light compliance-section">
          <div className="site-shell compliance-shell">
            <div className="compliance-copy">
              <p className="eyebrow">Alberta Requirements</p>
              <h2>Ownership, ID, bill of sale, then finish the registry and insurance steps.</h2>
              <div className="compliance-list">
                <div className="comparison-row"><IconBadge>ID</IconBadge><p>Bring Alberta registration or title in your name, plus valid photo ID. Registered owner, 18 or older.</p></div>
                <div className="comparison-row"><IconBadge>✓</IconBadge><p>We provide the signed bill of sale at pickup.</p></div>
                <div className="comparison-row"><IconBadge>AB</IconBadge><p>Return your plates and cancel insurance after the tow. Liens need to be cleared first.</p></div>
              </div>
            </div>
            <div className="worth-panel compliance-panel">
              <p>Handled properly</p>
              <ul>
                <li>Estate vehicles and lost-title files are workable with registry confirmation</li>
                <li>Scrap Metal Dealers and Recyclers Regulation followed properly</li>
                <li>Hazardous fluids handled under the Environmental Protection and Enhancement Act</li>
                <li>Important around the Red Deer River and Waskasoo Creek</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <SectionIntro eyebrow="Fleet And Multi-Vehicle Pickups" title="If you have several derelicts, quote the lot and clear it in one pass." description="The more organized the haul, the stronger the total number can be." />
            <div className="vehicle-grid">{fleetItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro eyebrow="FAQ" title="Straight answers for Red Deer sellers." description="Timing, fleet questions, outlying communities, and payment handled up front." />
            <p className="section-body-copy">
              Vehicle value in Red Deer depends on condition, access, paperwork, and how quickly it can be picked up.
            </p>
            <div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
          </div>
        </section>

        <section className="cta-band">
          <div className="site-shell cta-band-shell">
            <div>
              <p className="eyebrow">Get Your Red Deer Offer</p>
              <h2>Free quote, cash at pickup, we do the towing.</h2>
              <p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7 · Red Deer &amp; central Alberta</p>
            </div>
            <a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
