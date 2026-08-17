import Image from "next/image";
import type { Metadata } from "next";
import HeroQuoteForm from "./components/hero-quote-form";
import MobileActionBar from "./components/mobile-action-bar";
import SectionIntro from "./components/section-intro";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { buildMetadata } from "./lib/metadata";
import { siteConfig } from "./lib/site";

function IconBadge({ children }: { children: React.ReactNode }) {
  return <span className="icon-badge">{children}</span>;
}

function StepBadge({ type }: { type: "phone" | "arrow" | "check" }) {
  return (
    <span className="icon-badge step-badge" aria-hidden="true">
      {type === "phone" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path
            d="M6.8 4.5h2.5l1.2 3.6-1.6 1.5a14.2 14.2 0 0 0 5.5 5.5l1.5-1.6 3.6 1.2v2.5c0 .8-.6 1.4-1.4 1.4A14.8 14.8 0 0 1 4.5 5.9c0-.8.6-1.4 1.4-1.4Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {type === "arrow" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {type === "check" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path
            d="M5 12.5 9.2 17 19 7.5"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </span>
  );
}

const bulletPoints = [
  "Top dollar offers for running, non-running, damaged, and scrap vehicles",
  "Free same-day towing across NW, NE, SW, and SE Calgary",
  "Paid on the spot with a bill of sale and no hidden fees",
];

const vehicleTypes = [
  "Junk & scrap cars",
  "Non-running vehicles",
  "Hail-damaged write-offs",
  "Accident & collision-damaged cars",
  "High-mileage trade-in rejects",
  "Trucks, SUVs, vans, and fleet vehicles",
];

const steps = [
  {
    title: "Get your instant quote",
    copy: `Call ${siteConfig.phoneDisplay}, text, or fill out the form. Tell us the year, make, model, and rough condition. We give you a firm cash offer in minutes.`,
  },
  {
    title: "We schedule a free pickup",
    copy: "Pick a time that works. Our tow operator comes to your home, workplace, storage lot, or impound anywhere in Calgary.",
  },
  {
    title: "Get paid, we tow it away",
    copy: "We confirm the vehicle, hand you cash or e-transfer and a bill of sale, and load it onto the flatbed.",
  },
];

const trustItems = [
  {
    title: "Cash for cars Calgary",
    icon: "$",
  },
  {
    title: "Free same-day towing",
    icon: "↗",
  },
  {
    title: "Paid on the spot",
    icon: "✓",
  },
  {
    title: "All four quadrants",
    icon: "◎",
  },
];

const valueFactors = [
  { label: "Current scrap steel price", note: "This fluctuates with the market." },
  { label: "Vehicle weight and size", note: "Heavier trucks and SUVs are worth more as scrap." },
  { label: "Reusable parts", note: "Converters, wheels, engines, transmissions, and panels add value." },
  { label: "Overall condition", note: "A repairable car is worth more than a stripped shell." },
];

const comparisonPoints = [
  "Real cash paid at pickup before the tow truck leaves",
  "Free towing across Calgary without hidden haul-away fees",
  "Licensed, insured, ownership-verified, and bill-of-sale ready",
];

const serviceAreas = {
  nw: ["Kensington", "Hillhurst", "Bowness", "Varsity", "Brentwood", "Dalhousie", "Tuscany", "Arbour Lake", "Royal Oak", "Sage Hill"],
  ne: ["Bridgeland", "Renfrew", "Marlborough", "Forest Lawn", "Saddle Ridge", "Martindale", "Taradale", "Falconridge", "Skyview Ranch", "Redstone"],
  sw: ["Beltline", "Mission", "Killarney", "Marda Loop", "Altadore", "Signal Hill", "Aspen Woods", "Springbank Hill", "Evergreen", "Shawnessy"],
  se: ["Inglewood", "Ramsay", "Ogden", "McKenzie Towne", "Cranston", "Auburn Bay", "Mahogany", "Seton", "Legacy", "Quarry Park"],
};

const regionalAreas = ["Airdrie", "Cochrane", "Chestermere", "Okotoks", "Strathmore", "High River", "Balzac", "Rocky View County", "Foothills County"];
const regionalAreaLinks: Record<string, string> = {
  Airdrie: "/cash-for-cars-airdrie",
  Cochrane: "/cash-for-cars-cochrane",
  Chestermere: "/junk-my-car-chestermere",
  Okotoks: "/cash-for-cars-okotoks",
  HighRiver: "/cash-for-cars-high-river",
  Strathmore: "/junk-my-car-strathmore",
};

const faqItems = [
  {
    question: "Do you really pay cash for cars that do not run?",
    answer: "Yes. Non-running, no keys, won’t start, blown engine, or seized up, we buy them as they sit and load them with a flatbed or winch.",
  },
  {
    question: "Is towing actually free?",
    answer: "Always. Free towing anywhere in Calgary and the surrounding towns is included in our offer.",
  },
  {
    question: "How fast can you pick up my car?",
    answer: "Often the same day you call, and usually within 24 hours.",
  },
  {
    question: "What paperwork do I need?",
    answer: "Proof of ownership in your name and valid government-issued photo ID. We supply the bill of sale.",
  },
  {
    question: "What should I do with my licence plates?",
    answer: "Remove them before pickup and return them to any Alberta Registry office to cancel your registration and protect yourself from future liability.",
  },
  {
    question: "How do I get paid?",
    answer: "Cash on the spot or e-transfer at pickup, before your car is loaded.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Cash For Cars Calgary | Top Dollar, Same-Day Free Towing",
  description:
    "Get instant cash for cars in Calgary — running or not. Free same-day towing across every quadrant, no hidden fees, paid on the spot.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-19.jpeg"
              alt="Junk My Car YYC vehicle pickup example in Calgary"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Calgary Cash For Cars</p>
              <h1>Cash for Cars Calgary — Get Paid Today, We Tow It Free</h1>
              <p className="hero-support">
                Turn the vehicle sitting in your driveway, garage, or parkade into cash.
                Whether it runs or not, we pay cash for cars anywhere in Calgary and haul
                it away free of charge with a fair, upfront offer.
              </p>
              <ul className="hero-bullets">
                {bulletPoints.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a href={siteConfig.phoneHref} className="primary-button">
                Call {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="hero-form-wrap">
              <HeroQuoteForm />
            </div>
          </div>
        </section>

        <section className="value-strip">
          <div className="site-shell value-strip-shell">
            {trustItems.map((item) => (
              <div key={item.title} className="trust-chip">
                <IconBadge>{item.icon}</IconBadge>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="promo-banner-section">
          <div className="site-shell">
            <div className="promo-banner-split">
              <div className="promo-banner-copy">
                <p className="eyebrow">Calgary Pickup Promise</p>
                <h2>Fast quotes, same-day towing, and a clear handoff from call to pickup.</h2>
                <p className="section-body-copy">
                  This visual block gives the homepage a stronger image section without
                  interfering with the hero form or duplicating your main headline.
                </p>
                <ul className="promo-banner-points">
                  <li>Running or not, we buy vehicles across Calgary and nearby towns</li>
                  <li>Free towing with straightforward pickup scheduling</li>
                  <li>Paid on the spot with bill of sale included</li>
                </ul>
                <div className="promo-proof-grid">
                  <div className="promo-proof-card">
                    <strong>20 Years</strong>
                    <span>Years serving Calgary</span>
                  </div>
                  <div className="promo-proof-card">
                    <strong>1000+</strong>
                    <span>Google reviews</span>
                  </div>
                  <div className="promo-proof-card">
                    <strong>5.0★</strong>
                    <span>Average rating</span>
                  </div>
                </div>
                <a href={siteConfig.phoneHref} className="text-link-arrow">
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="promo-banner-frame">
                <Image
                  src="/images/junkmycar-banner.png"
                  alt="Junk My Car YYC cash for cars promotional banner"
                  width={1024}
                  height={1536}
                  className="promo-banner-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell intro-split">
            <div className="intro-copy">
              <SectionIntro
                eyebrow="Why Calgarians Sell Their Car To Us"
                title="No listings, no tire-kickers, no haggling on your doorstep."
                description="Selling a used or junk car privately in Calgary is a headache. We built a faster way with real cash, free towing, and straightforward pickup."
              />
              <p className="section-body-copy">
                We buy every make, every model, every condition, in all four quadrants,
                from the Beltline to the far edge of Stoney Trail.
              </p>
              <a href={siteConfig.phoneHref} className="text-link-arrow">
                Get your no-obligation quote now
              </a>
            </div>

            <div className="intro-panel">
              <div>
                <span>01</span>
                <h3>Real cash, paid on the spot</h3>
                <p>You get your money at pickup, cash or e-transfer, before the tow truck leaves.</p>
              </div>
              <div>
                <span>02</span>
                <h3>Free towing across Calgary</h3>
                <p>From a downtown condo parkade to an acreage past Springbank, our flatbed comes to you at no cost.</p>
              </div>
              <div>
                <span>03</span>
                <h3>Vehicles that will not start</h3>
                <p>No keys, dead battery, blown engine, seized transmission, or frozen solid, none of it stops us.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Vehicle Types We Buy"
              title="Any car, any condition, any situation."
              description="There is no such thing as a vehicle we will not look at. We buy foreign or domestic, gas, diesel, or hybrid."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {vehicleTypes.map((item) => (
                <article key={item} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◈</IconBadge>
                    <h3>{item}</h3>
                  </div>
                  <p>
                    {item === "Junk & scrap cars" && "Rusted, rotted, rolled, or stripped down."}
                    {item === "Non-running vehicles" && <>Blown engines, seized transmissions, electrical failures, and <a className="content-link" href="/services/junk-car-removal-calgary">non-running vehicles</a> with dead batteries.</>}
                    {item === "Hail-damaged write-offs" && <>Calgary <a className="content-link" href="/services/cash-for-junk-cars-calgary">hail-damaged write-offs we buy as-is</a>.</>}
                    {item === "Accident & collision-damaged cars" && "Front-end, rear-end, and rollover damage accepted."}
                    {item === "High-mileage trade-in rejects" && "Older vehicles dealers will not touch on trade."}
                    {item === "Trucks, SUVs, vans, and fleet vehicles" && "From compact sedans to 3/4-ton pickups and idle commercial units."}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="site-shell worth-section">
            <div>
              <p className="eyebrow">What Is My Car Worth?</p>
              <h2>Honest Calgary pricing comes down to a few real factors.</h2>
              <div className="value-ladder">
                {valueFactors.map((factor) => (
                  <div key={factor.label} className="value-ladder-row">
                    <strong>{factor.label}</strong>
                    <span>{factor.note}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="worth-panel">
              <p>What we look at</p>
              <ul>
                <li>Make, model, and demand for salvageable parts</li>
                <li>Repairable condition versus stripped shell value</li>
                <li>Pickup details and access requirements</li>
                <li>A quote that stays consistent with the condition described</li>
              </ul>
              <a href={siteConfig.phoneHref} className="text-link-light">
                Call {siteConfig.phoneDisplay} for a live quote
              </a>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell">
            <SectionIntro
              eyebrow="How It Works"
              title="Three steps to cash."
              description="What used to take weeks of private-sale hassle takes one phone call."
            />
            <div className="steps-grid">
              {steps.map((step, index) => (
                <article key={step.title} className="step-card">
                  <div className="step-card-top">
                    <span className="step-card-number">{String(index + 1).padStart(2, "0")}</span>
                    <StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section comparison-section">
          <div className="site-shell comparison-shell">
            <div className="comparison-copy">
              <p className="eyebrow">Why Sell To Us</p>
              <h2>Top dollar, honest math, and no pickup games.</h2>
              <p>
                Your offer reflects live scrap steel price, vehicle weight, and reusable
                parts value, not a random number designed to be negotiated down.
              </p>
            </div>
            <div className="comparison-list">
              {comparisonPoints.map((item) => (
                <div key={item} className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pickup-photo-section">
          <div className="site-shell pickup-photo-split">
            <div className="pickup-photo-frame">
              <Image
                src="/jmc-imgs/purchase-23.jpeg"
                alt="Vehicle pickup example for Junk My Car YYC in a Calgary residential area"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">Real Local Pickups</p>
              <h2>We show up where the vehicle is, not where it is convenient for us.</h2>
              <p className="section-body-copy">
                From residential driveways to tighter urban access points, the pickup flow
                is built around Calgary owners who just want the car gone without friction.
              </p>
              <ul className="promo-banner-points">
                <li>Home, curbside, condo, storage lot, or workplace pickup</li>
                <li>Running or non-running vehicles handled with the right equipment</li>
                <li>Clear timing, clear payment, and no wasted back-and-forth</li>
              </ul>
              <a href={siteConfig.phoneHref} className="text-link-arrow">
                Book your pickup call
              </a>
            </div>
          </div>
        </section>

        <section className="section service-area-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="We Cover Every Corner Of Calgary"
              title="You do not drive to us. We come to you."
              description="Downtown high-rise or suburban cul-de-sac, we have the equipment for it, including flatbed and winch service for tight-access pickups."
            />
            <div className="service-area-grid">
              <article className="area-card">
                <p className="area-card-label">Northwest</p>
                <h3>NW</h3>
                <p>{serviceAreas.nw.join(", ")}.</p>
              </article>
              <article className="area-card">
                <p className="area-card-label">Northeast</p>
                <h3>NE</h3>
                <p>{serviceAreas.ne.join(", ")}.</p>
              </article>
              <article className="area-card">
                <p className="area-card-label">Southwest</p>
                <h3>SW</h3>
                <p>{serviceAreas.sw.join(", ")}.</p>
              </article>
              <article className="area-card">
                <p className="area-card-label">Southeast</p>
                <h3>SE</h3>
                <p>{serviceAreas.se.join(", ")}.</p>
              </article>
            </div>
            <div className="region-note">
              <p>
                We are also just off Deerfoot Trail, Stoney Trail, Crowchild Trail,
                Glenmore Trail, Macleod Trail, Memorial Drive, and the Trans-Canada,
                so pickup is quick no matter where in the city you are.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light regional-section">
          <div className="site-shell regional-shell">
            <div className="regional-copy">
              <p className="eyebrow">Serving The Calgary Region</p>
              <h2>Beyond city limits, we buy cars across nearby towns and acreages.</h2>
              <p className="section-body-copy">
                If you are within reach of the ring road, we will usually come to you.
              </p>
            </div>
            <div className="region-chip-wrap">
              {regionalAreas.map((area) => (
                regionalAreaLinks[area.replace(/\s+/g, "")] ? (
                  <a key={area} className="region-chip" href={regionalAreaLinks[area.replace(/\s+/g, "")]}>
                    {area}
                  </a>
                ) : (
                  <span key={area} className="region-chip">
                    {area}
                  </span>
                )
              ))}
            </div>
          </div>
        </section>

        <section className="section weather-section">
          <div className="site-shell weather-shell">
            <div className="weather-copy weather-heading-block">
              <p className="eyebrow">Built For Calgary&apos;s Roads And Weather</p>
              <h2>Calgary is hard on vehicles, and that is exactly why so many end up as junk cars.</h2>
            </div>
            <div className="weather-grid">
              <article>
                <IconBadge>⛈</IconBadge>
                <h3>Hail country</h3>
                <p>If your insurer wrote your car off but let you keep it, we can pay you cash for the salvage.</p>
              </article>
              <article>
                <IconBadge>❄</IconBadge>
                <h3>Brutal winters</h3>
                <p>Freeze-thaw cycles, road treatment, and slush accelerate undercarriage rust and frame rot.</p>
              </article>
              <article>
                <IconBadge>⚙</IconBadge>
                <h3>Deep-cold failures</h3>
                <p>Cars that sat through -30°C stretches often do not start again. We take them as they sit.</p>
              </article>
              <article>
                <IconBadge>▣</IconBadge>
                <h3>Idle trucks and fleets</h3>
                <p>Unused work trucks and company vehicles still have value, running or not.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-light compliance-section">
          <div className="site-shell compliance-shell">
            <div className="compliance-copy">
              <p className="eyebrow">Selling A Scrap Car In Alberta</p>
              <h2>We keep the process legal, transparent, and easy to follow.</h2>
              <div className="compliance-list">
                <div className="comparison-row">
                  <IconBadge>ID</IconBadge>
                  <p>Bring proof of ownership and valid government-issued photo ID.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>We provide a signed bill of sale for both parties at pickup.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>AB</IconBadge>
                  <p>Return your licence plates to an Alberta Registry office and cancel insurance the same day.</p>
                </div>
              </div>
            </div>
            <div className="worth-panel compliance-panel">
              <p>Handled the right way</p>
              <ul>
                <li>Ownership and ID verified under Alberta requirements</li>
                <li>Transaction records maintained properly</li>
                <li>Hazardous fluids and materials handled responsibly</li>
                <li>Estate, impound, missing-key, and unusual file situations guided case by case</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Frequently Asked Questions"
              title="Straight answers before you call."
              description="This keeps the page conversion-focused while handling the common objections and logistics upfront."
            />
            <div className="faq-grid">
              {faqItems.map((item) => (
                <article key={item.question} className="faq-card">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="site-shell cta-band-shell">
            <div>
              <p className="eyebrow">Get Your Cash Offer Now</p>
              <h2>Stop letting that car take up space, rack up insurance, or rust away.</h2>
              <p className="cta-band-copy">
                Call or text {siteConfig.phoneDisplay} · Open 24/7 · Serving all of Calgary and area
              </p>
            </div>
            <a href={siteConfig.phoneHref} className="primary-button primary-button-light">
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
