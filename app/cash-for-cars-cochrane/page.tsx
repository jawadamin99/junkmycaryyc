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
  "Running or dead, keys or no keys, we buy vehicles across Cochrane",
  "Free towing to every community with same-day or next-day pickup",
  "Cash or e-transfer at pickup with bill of sale included",
];

const trustItems = [
  { title: "Cochrane pickup coverage", icon: "◎" },
  { title: "Free towing included", icon: "↗" },
  { title: "Cash at pickup", icon: "$" },
  { title: "Licensed and compliant", icon: "✓" },
];

const whyItems = [
  {
    title: "Cash at pickup, every time",
    copy: "Cash or e-transfer before the flatbed loads. No cheques and no delays.",
  },
  {
    title: "Free towing throughout Cochrane",
    copy: "From Sunset Ridge to Fireside to acreages past Horse Creek Road, pickup is included.",
  },
  {
    title: "Dead vehicles welcome",
    copy: "Won't turn over, seized engine, blown transmission, or no keys, we load with flatbeds and winches.",
  },
  {
    title: "Straight pricing",
    copy: "Your number reflects scrap value, vehicle weight, and reusable parts, not a number meant to be negotiated down.",
  },
];

const mountainWearItems = [
  {
    title: "Gravel and chip damage",
    copy: "Years of gravel roads and chip-sealed highway runs sandblast paint, pit windshields, and start rust where the stone chips landed.",
  },
  {
    title: "Towing and hauling wear",
    copy: "Boats, quads, sled decks, and horse trailers eat transmissions, differentials, and brakes faster than city driving ever will.",
  },
  {
    title: "Road salt and freeze-thaw",
    copy: "Chinooks swing Cochrane temperatures hard, and that cycle plus de-icer quietly rots frames and brake lines underneath.",
  },
  {
    title: "Wildlife and highway collisions",
    copy: "Deer and elk on Highway 1A and 22 write off a lot of vehicles here, and we buy the salvage if you kept it.",
  },
  {
    title: "Deep-cold no-starts",
    copy: "Cracked block, dead battery, and gelled diesel files are common after a hard cold snap. We take them exactly as they sit.",
  },
];

const serviceAreas = [
  {
    label: "North And The Ridge",
    areas: "Sunset Ridge, Heritage Hills, Heartland, Greystone, Cochrane Heights, and Rolling Range Estates.",
  },
  {
    label: "Central And The Older Core",
    areas: "Downtown Cochrane, Glenbow, Bow Meadows, West Terrace, West Valley, West Pointe, and Towers Trail.",
  },
  {
    label: "South Of The Bow",
    areas: "Fireside, Riversong, Rivercrest, Riverview, River Heights, Riviera, Precedence, Southbow Landing, and The Willows.",
  },
  {
    label: "East Hillside",
    areas: "Gleneagles and Jumping Pound Ridge.",
  },
  {
    label: "Industrial And Rural",
    areas: "The Industrial area, Bearspaw, Springbank, Ghost Lake, and the acreages along Horse Creek and Highway 22.",
  },
];

const nearbyAreas = ["Airdrie", "Calgary", "Canmore", "Bragg Creek", "Cremona", "Water Valley"];

const vehicleTypes = [
  "Junk and scrap cars",
  "Non-running vehicles",
  "Hail and insurance write-offs",
  "Collision-damaged vehicles",
  "High-mileage trucks and SUVs",
  "Farm and acreage vehicles",
  "Quads-hauling work trucks",
  "Estate, abandoned, and paperwork-heavy files",
];

const steps = [
  {
    title: "Call or text your vehicle details",
    copy: `Call or text ${siteConfig.phoneDisplay} with the year, make, model, and rough condition. You get a firm offer in minutes.`,
  },
  {
    title: "We book a free pickup",
    copy: "Same day, tomorrow, or the weekend, wherever the car sits in Cochrane or the surrounding county.",
  },
  {
    title: "You get paid and it is gone",
    copy: "Cash or e-transfer, signed bill of sale, then loaded and hauled away.",
  },
];

const worthFactors = [
  { label: "Live scrap steel price", note: "It moves with the market." },
  { label: "Vehicle weight", note: "Heavier trucks and SUVs usually bring more." },
  { label: "Reusable parts", note: "Converters, alloy wheels, and a working drivetrain add value." },
  { label: "Overall condition", note: "Repairable vehicles are worth more than stripped shells." },
  { label: "Parts demand", note: "Some models simply carry better salvage demand." },
];

const faqItems = [
  {
    question: "Do you buy cars in Cochrane that do not run?",
    answer: "Yes. That is most of our business. Flatbed and winch, no keys needed.",
  },
  {
    question: "Is towing free?",
    answer: "Always, throughout Cochrane and the surrounding county.",
  },
  {
    question: "How fast is pickup?",
    answer: "Often same-day, usually within 24 hours.",
  },
  {
    question: "Will you come out to an acreage?",
    answer: "Yes. Rocky View County properties are included, gravel access too.",
  },
  {
    question: "What if the car is behind a locked gate or buried in snow?",
    answer: "Tell us when you call and we will bring the right equipment.",
  },
  {
    question: "How am I paid?",
    answer: "Cash or e-transfer at pickup, before loading.",
  },
  {
    question: "My vehicle is registered in another province but sits in Cochrane.",
    answer: "Usually workable. You need to be the registered owner with matching photo ID and proof of ownership.",
  },
  {
    question: "Can I sell a car that is still insured?",
    answer: "Yes. Cancel the insurance the same day we pick it up and use the bill of sale as proof of sale.",
  },
  {
    question: "Do I need to remove the plates myself?",
    answer: "Yes. Take them off before we arrive. They belong to you and you will want them for the registry.",
  },
  {
    question: "Is there any cost to me at all?",
    answer: "No. Quote, towing, and paperwork are free, and you are paid at pickup.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Cash For Cars Cochrane | Free Towing, Same-Day Pickup",
  description:
    "Sell your car for cash in Cochrane — running or not. Free towing to every community, no hidden fees, paid at pickup. Call (403) 837-1550 for a fast quote today.",
  path: "/cash-for-cars-cochrane",
});

export default function CochranePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-19.jpeg"
              alt="Cash for cars pickup service for Cochrane vehicles"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Cash For Cars Cochrane</p>
              <h1>Cash for Cars Cochrane — Fast Offers, Free Towing, Cash at Pickup</h1>
              <p className="hero-support">
                Cochrane has grown fast, and growth leaves old vehicles behind. Running
                or dead, keys or no keys, we buy cars across Cochrane and tow them away
                at no charge through our <a className="content-link" href="/">cash for cars Calgary</a> network and nearby <a className="content-link" href="/junk-my-car-canmore">Canmore junk car pickup</a> coverage.
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
                <p className="eyebrow">Why Cochrane Drivers Call Us First</p>
                <h2>One call, a firm number, and cash in hand.</h2>
                <p className="section-body-copy">
                  Cochrane sits at a crossroads between Calgary, the Cowboy Trail, and
                  the mountains. Vehicles here work hard, and when they are finished,
                  private sale is usually a slow grind of lowball texts and no-shows.
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
                    <span>In the Calgary region</span>
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
                  alt="Junk My Car YYC promotional banner for Cochrane cash for cars service"
                  width={1024}
                  height={1536}
                  className="promo-banner-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section weather-section">
          <div className="site-shell weather-shell">
            <div className="weather-copy weather-heading-block">
              <p className="eyebrow">The Cochrane Angle</p>
              <h2>Mountain roads are hard on vehicles.</h2>
            </div>
            <div className="weather-grid">
              {mountainWearItems.map((item) => (
                <article key={item.title}>
                  <IconBadge>◉</IconBadge>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
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
                alt="Local junk car pickup example for a Cochrane vehicle owner"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">Every Community In Cochrane</p>
              <h2>We pick up where the vehicle is.</h2>
              <p className="section-body-copy">
                No driving required, which matters when the vehicle does not run. We
                also handle industrial yards, rural properties, and gravel access.
              </p>
              <ul className="promo-banner-points">
                <li>North and the ridge, central core, south of the Bow, and east hillside coverage</li>
                <li>Bearspaw, Springbank, Ghost Lake, and Rocky View County acreages included</li>
                <li>Fast scheduling because Cochrane is a short run for us off the 1A</li>
              </ul>
              <a href={siteConfig.phoneHref} className="text-link-arrow">
                Free quote, no obligation
              </a>
            </div>
          </div>
        </section>

        <section className="section service-area-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Community Coverage"
              title="Pickup across Cochrane and the surrounding county."
              description="We meet you where the car sits, from the older core to the newer subdivisions and the acreages around town."
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
              <p>We also buy in {nearbyAreas.join(", ")}.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="What We Buy"
              title="Any make, any model, any condition."
              description="Domestic or import, gas or diesel, if it is finished for you, we want to hear about it."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {vehicleTypes.map((item) => (
                <article key={item} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◈</IconBadge>
                    <h3>{item}</h3>
                  </div>
                  <p>
                    {item === "Junk and scrap cars" && "Old vehicles beyond repair, rusted out, or simply not worth fixing."}
                    {item === "Non-running vehicles" && "Flatbed and winch files are common here, with or without keys."}
                    {item === "Hail and insurance write-offs" && "Southern Alberta storm damage and retained salvage accepted."}
                    {item === "Collision-damaged vehicles" && "Wildlife strikes, highway collisions, and body damage files."}
                    {item === "High-mileage trucks and SUVs" && "Work-worn, commuter-worn, and towing-worn vehicles still have value."}
                    {item === "Farm and acreage vehicles" && "Rural property pickups around Cochrane and Rocky View County."}
                    {item === "Quads-hauling work trucks" && "Hard-working trucks used for trailers, toys, and mountain access."}
                    {item === "Estate, abandoned, and paperwork-heavy files" && "Authorization, missing paperwork, and unusual situations guided properly."}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell">
            <SectionIntro
              eyebrow="How It Works"
              title="Three simple steps."
              description="Get the offer, book the pickup, get paid, and let us handle the tow."
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

        <section className="section section-dark">
          <div className="site-shell worth-section">
            <div>
              <p className="eyebrow">What&apos;s My Car Worth?</p>
              <h2>Honest offers come down to five things.</h2>
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
                <li>The only accurate number is a live quote on your specific vehicle</li>
                <li>Our on-site number matches the quote unless the car is very different from described</li>
                <li>Working parts can increase the offer meaningfully</li>
                <li>Free quote, no obligation, no pressure</li>
              </ul>
              <a href={siteConfig.phoneHref} className="text-link-light">
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="section section-light compliance-section">
          <div className="site-shell compliance-shell">
            <div className="compliance-copy">
              <p className="eyebrow">The Alberta Paperwork, Made Simple</p>
              <h2>Bring the registration and ID, then handle two quick jobs after pickup.</h2>
              <div className="compliance-list">
                <div className="comparison-row">
                  <IconBadge>ID</IconBadge>
                  <p>Bring your Alberta registration or title in your name, plus valid photo ID. You must be 18 or older.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>We supply the bill of sale when we pick the vehicle up.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>AB</IconBadge>
                  <p>After pickup, return the plates and cancel the insurance the same day.</p>
                </div>
              </div>
            </div>
            <div className="worth-panel compliance-panel">
              <p>Handled properly</p>
              <ul>
                <li>Registry ownership issues and estate situations are workable</li>
                <li>Scrap Metal Dealers and Recyclers Regulation followed properly</li>
                <li>Fluids handled under the Environmental Protection and Enhancement Act</li>
                <li>Vehicles are drained, dismantled, and recycled at certified Alberta facilities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="FAQ"
              title="Straight answers for Cochrane sellers."
              description="This covers the common timing, towing, access, paperwork, and payment questions up front."
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
              <p className="eyebrow">Get Your Cochrane Quote</p>
              <h2>Stop insuring and registering a vehicle you never drive.</h2>
              <p className="cta-band-copy">
                Call or text {siteConfig.phoneDisplay} · Open 24/7
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
