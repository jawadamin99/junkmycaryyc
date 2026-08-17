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

const heroBullets = [
  "Running or dead, we buy cars across every Airdrie community",
  "Free same-day or next-day towing with no hidden fees",
  "Paid on the spot with bill of sale included",
];

const trustItems = [
  { title: "Airdrie pickup coverage", icon: "◎" },
  { title: "Free towing included", icon: "↗" },
  { title: "Cash or e-transfer", icon: "$" },
  { title: "Licensed and compliant", icon: "✓" },
];

const whyItems = [
  {
    title: "Cash on the spot",
    copy: "You are paid at pickup, cash or e-transfer, before the flatbed leaves.",
  },
  {
    title: "Free towing anywhere in Airdrie",
    copy: "From Bayside to Kings Heights, from Cooper's Crossing to nearby acreages, pickup is included at zero cost.",
  },
  {
    title: "We take non-running cars",
    copy: "Won't start, no keys, seized engine, transmission gone, or frozen solid, we load with flatbeds and winches.",
  },
  {
    title: "Same-day and next-day pickup",
    copy: "Because Airdrie is right off Highway 2, we are often able to reach you the same day you call.",
  },
];

const steps = [
  {
    title: "Tell us about your car",
    copy: `Call or text ${siteConfig.phoneDisplay} with the year, make, model, and general condition. In minutes, you will have a firm cash offer.`,
  },
  {
    title: "We book a free pickup",
    copy: "Choose a time that suits you: same day, tomorrow, or the weekend. We meet you where the vehicle sits in Airdrie.",
  },
  {
    title: "Get paid, and it is gone",
    copy: "We confirm the vehicle, pay you in cash or e-transfer, provide your bill of sale, and haul it away.",
  },
];

const vehicleTypes = [
  "Junk and scrap cars",
  "Non-running vehicles",
  "Hail-damaged write-offs",
  "Accident-damaged vehicles",
  "High-kilometre commuter cars",
  "Trucks, SUVs, vans, and sedans",
  "Farm and acreage vehicles",
  "Estate and paperwork-heavy files",
];

const weatherItems = [
  {
    title: "Hail season",
    copy: "Airdrie and the corridor north of Calgary get hit hard by summer hailstorms, and we buy the salvage after insurance write-offs.",
  },
  {
    title: "Prairie winters",
    copy: "Wind-driven snow, freeze-thaw cycles, and highway de-icer wear down undercarriages and frames quickly.",
  },
  {
    title: "Deep-cold no-starts",
    copy: "Dead batteries, cracked blocks, and gelled diesel still have value. We take the vehicle exactly as it sits.",
  },
  {
    title: "Commuter burnout",
    copy: "Long daily QEII runs into Calgary pile on kilometres fast, and repairs often outpace the car's value.",
  },
];

const worthFactors = [
  { label: "Live scrap steel price", note: "This moves with the market." },
  { label: "Vehicle weight", note: "Heavier trucks and SUVs usually bring more." },
  { label: "Reusable parts", note: "Catalytic converters, alloy wheels, and working drivetrains add value." },
  { label: "Overall condition", note: "A repairable car is worth more than a stripped shell." },
  { label: "Make and model demand", note: "Some salvageable components are simply worth more." },
];

const serviceAreas = [
  {
    label: "West Side & The Lakes",
    areas: "Bayside, Baysprings, Bayview, Canals, Waterstone, and Willow Brook.",
  },
  {
    label: "Central & Downtown",
    areas: "Downtown Airdrie, Old Town, Midtown, The Village, Fairways, Meadowbrook, Big Springs, and Jensen.",
  },
  {
    label: "Southwest",
    areas: "Cooper's Crossing, Prairie Springs, Williamstown, and Luxstone.",
  },
  {
    label: "Southeast & East",
    areas: "Kings Heights, Ravenswood, Hillcrest, Sagewood, Windsong, South Windsong, Chinook Gate, and Reunion.",
  },
  {
    label: "North & Newer Builds",
    areas: "Morningside, Silver Creek, Stonegate, Summerhill, Sunridge, Ridgegate, Thorburn, Edgewater, and Sierra Springs.",
  },
];

const nearbyAreas = ["Crossfield", "Balzac", "Beiseker", "Irricana", "Rocky View County acreages"];

const faqItems = [
  {
    question: "Do you pay cash for cars in Airdrie that do not run?",
    answer: "Yes. Non-running, no keys, blown engine, or frozen in place, we buy them as they sit and load them with a flatbed.",
  },
  {
    question: "Is towing really free in Airdrie?",
    answer: "Always. Free pickup across Airdrie and nearby towns is built into your offer.",
  },
  {
    question: "How soon can you pick up?",
    answer: "Often the same day, and usually within 24 hours, because Airdrie is minutes off Highway 2 for us.",
  },
  {
    question: "What do I need to sell my car?",
    answer: "Proof of ownership in your name and valid photo ID. We provide the signed bill of sale.",
  },
  {
    question: "What do I do with my plates?",
    answer: "Remove them before pickup and return them to any Alberta Registry office to cancel your registration.",
  },
  {
    question: "How will I be paid?",
    answer: "Cash on the spot or e-transfer at pickup, before the car is loaded.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Cash For Cars Airdrie | Same-Day Pickup & Free Towing",
  description:
    "Sell your car for cash in Airdrie — running or not. Free same-day towing to every community, no hidden fees, paid on the spot. Call (403) 837-1550 for a fast quote.",
  path: "/cash-for-cars-airdrie",
});

export default function AirdriePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-26.jpeg"
              alt="Cash for cars pickup service for Airdrie vehicles"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Cash For Cars Airdrie</p>
              <h1>Cash for Cars Airdrie — Fast Quotes, Free Towing, Paid on the Spot</h1>
              <p className="hero-support">
                That car parked beside your Airdrie home is not going to sell itself, but
                one phone call can turn it into cash today. Running or dead, we buy it and
                tow it away for free through our <a className="content-link" href="/">cash for cars Calgary</a> service and local <a className="content-link" href="/services/junk-car-removal-calgary">junk car removal near Airdrie</a> coverage.
              </p>
              <ul className="hero-bullets">
                {heroBullets.map((bullet) => (
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
                <p className="eyebrow">Why Airdrie Drivers Choose Us</p>
                <h2>One straight phone quote, one scheduled pickup, one clean handoff.</h2>
                <p className="section-body-copy">
                  Airdrie is a commuter town, and commuter towns are tough on vehicles.
                  When the daily Calgary run finally wears a car out, we make it easy to
                  turn it into cash without listings, strangers, or lowball trade-in offers.
                </p>
                <ul className="promo-banner-points">
                  {whyItems.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}.</strong> {item.copy}
                    </li>
                  ))}
                </ul>
                <div className="promo-proof-grid">
                  <div className="promo-proof-card">
                    <strong>20 Years</strong>
                    <span>Serving Airdrie and the Calgary region</span>
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
              </div>

              <div className="promo-banner-frame">
                <Image
                  src="/images/junkmycar-banner.png"
                  alt="Junk My Car YYC promotional banner for Airdrie cash for cars service"
                  width={1024}
                  height={1536}
                  className="promo-banner-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell">
            <SectionIntro
              eyebrow="How It Works"
              title="Three simple steps."
              description="Tell us about the vehicle, book the pickup, get paid, and reclaim the space."
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

        <section className="section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="What We Buy In Airdrie"
              title="Any vehicle, any shape."
              description="If it has four wheels, we want to hear about it. We buy gas or diesel, domestic or import."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {vehicleTypes.map((item) => (
                <article key={item} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◈</IconBadge>
                    <h3>{item}</h3>
                  </div>
                  <p>
                    {item === "Junk and scrap cars" && "Rusted, rotted, beyond repair, or simply no longer worth fixing."}
                    {item === "Non-running vehicles" && "Dead engines, blown transmissions, electrical failures, and hard no-starts."}
                    {item === "Hail-damaged write-offs" && "A common southern Alberta file that we buy exactly as-is."}
                    {item === "Accident-damaged vehicles" && "Front-end, rear-end, and collision damage accepted."}
                    {item === "High-kilometre commuter cars" && "Used up by years of QEII runs into Calgary and back."}
                    {item === "Trucks, SUVs, vans, and sedans" && "From compact cars to larger family vehicles and work units."}
                    {item === "Farm and acreage vehicles" && "Vehicles sitting on rural land around Airdrie and Rocky View County."}
                    {item === "Estate and paperwork-heavy files" && "Missing keys, title issues, and deceased-owner situations guided properly."}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pickup-photo-section">
          <div className="site-shell pickup-photo-split">
            <div className="pickup-photo-frame">
              <Image
                src="/jmc-imgs/purchase-23.jpeg"
                alt="Local junk car pickup example for an Airdrie seller"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">We Come To Every Community In Airdrie</p>
              <h2>You never have to drive the car to us.</h2>
              <p className="section-body-copy">
                Near Genesis Place, Nose Creek Park, Chinook Winds Regional Park,
                Kingsview Market, Sierra Springs Shopping Centre, or Cooper&apos;s Town
                Promenade, wherever you are in Airdrie, we come to the vehicle.
              </p>
              <ul className="promo-banner-points">
                <li>Home, garage, side yard, curbside, workplace, storage lot, or acreage pickup</li>
                <li>Non-runners handled where they sit with the right towing equipment</li>
                <li>Short drive up or down the QEII means fast scheduling windows</li>
              </ul>
              <a href={siteConfig.phoneHref} className="text-link-arrow">
                Get your free, no-obligation quote
              </a>
            </div>
          </div>
        </section>

        <section className="section service-area-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Community Coverage"
              title="Pickup across every corner of Airdrie."
              description="You do not drive to us. We meet you where the vehicle sits, in every major pocket of the city."
            />
            <div className="service-area-grid">
              {serviceAreas.map((group) => (
                <article key={group.label} className="area-card">
                  <p className="area-card-label">{group.label}</p>
                  <p>{group.areas}</p>
                </article>
              ))}
            </div>
            <div className="region-note">
              <p>
                Just outside town, too: we also buy cars in {nearbyAreas.join(", ")}.
              </p>
            </div>
          </div>
        </section>

        <section className="section weather-section">
          <div className="site-shell weather-shell">
            <div className="weather-copy weather-heading-block">
              <p className="eyebrow">Airdrie Weather Is Hard On Cars</p>
              <h2>We still buy the vehicles that southern Alberta roads and weather wear out.</h2>
            </div>
            <div className="weather-grid">
              {weatherItems.map((item) => (
                <article key={item.title}>
                  <IconBadge>◉</IconBadge>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="site-shell worth-section">
            <div>
              <p className="eyebrow">What&apos;s My Car Worth In Airdrie?</p>
              <h2>A real cash offer comes down to a handful of honest factors.</h2>
              <div className="value-ladder">
                {worthFactors.map((factor) => (
                  <div key={factor.label} className="value-ladder-row">
                    <strong>{factor.label}</strong>
                    <span>{factor.note}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="worth-panel">
              <p>What to expect</p>
              <ul>
                <li>The quote reflects the vehicle you described, not a bait-and-switch number</li>
                <li>Heavier trucks and SUVs usually carry more scrap value</li>
                <li>Reusable parts can increase the offer</li>
                <li>The fastest way to know is a live quote by phone</li>
              </ul>
              <a href={siteConfig.phoneHref} className="text-link-light">
                Call {siteConfig.phoneDisplay} for a live quote
              </a>
            </div>
          </div>
        </section>

        <section className="section section-light compliance-section">
          <div className="site-shell compliance-shell">
            <div className="compliance-copy">
              <p className="eyebrow">Selling A Car In Airdrie</p>
              <h2>We keep everything above-board and walk you through it.</h2>
              <div className="compliance-list">
                <div className="comparison-row">
                  <IconBadge>ID</IconBadge>
                  <p>Have your Alberta vehicle registration or title in your name, plus valid photo ID.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>We provide the signed bill of sale at pickup for both parties.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>AB</IconBadge>
                  <p>After pickup, return your plates and cancel your insurance the same day.</p>
                </div>
              </div>
            </div>
            <div className="worth-panel compliance-panel">
              <p>Handled the right way</p>
              <ul>
                <li>Ownership verified under Alberta requirements</li>
                <li>Scrap Metal Dealers and Recyclers Regulation followed properly</li>
                <li>Fluids handled under Alberta environmental rules</li>
                <li>Missing paperwork, estates, and unusual files guided case by case</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Frequently Asked Questions"
              title="Straight answers for Airdrie sellers."
              description="This covers the common towing, timing, payment, and paperwork questions up front."
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
              <p className="eyebrow">Get Your Airdrie Cash Offer Today</p>
              <h2>Stop paying insurance and registration on a car you do not drive.</h2>
              <p className="cta-band-copy">
                Call or text {siteConfig.phoneDisplay} · Open 24/7 · Serving all of Airdrie and area
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
