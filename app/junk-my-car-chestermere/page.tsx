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
  "Running or not, we buy vehicles across every Chestermere community",
  "Free same-day towing with no hidden fees",
  "Paid on the spot with bill of sale included",
];

const trustItems = [
  { title: "Chestermere pickup coverage", icon: "◎" },
  { title: "Free towing included", icon: "↗" },
  { title: "Cash at pickup", icon: "$" },
  { title: "Any condition welcome", icon: "✓" },
];

const chestermereItems = [
  {
    title: "Multi-vehicle households",
    copy: "Lake life means boats, trailers, side-by-sides, and the trucks to pull them. Old extras become a driveway problem fast.",
  },
  {
    title: "Trailer and towing wear",
    copy: "Boat launching and mountain hauling are hard duty, and older truck repair bills often outrun the vehicle's value.",
  },
  {
    title: "Trans-Canada commuting",
    copy: "Daily Highway 1 runs into Calgary pile on kilometres fast, even while the body still looks fine.",
  },
  {
    title: "Winter storage that never ends",
    copy: "A second vehicle parked for one winter often becomes a dead battery, seized brake, or gummed-fuel file that never moves again.",
  },
  {
    title: "Hail",
    copy: "Southern Alberta storms move through this corridor regularly. If you kept the salvage after a write-off, we will pay cash for it.",
  },
];

const serviceAreas = [
  {
    label: "Established, Around The Lake",
    areas: "Lakeview Landing, The Cove, Westcreek, Westmere, and East and West Chestermere lakefront.",
  },
  {
    label: "Growing East And South",
    areas: "Kinniburgh, Kinniburgh South, Rainbow Falls, Dawson's Landing, Waterford, Clearwater Park, South Shore, Chelsea, and Bridgeport.",
  },
  {
    label: "Rural And County",
    areas: "Acreages and rural properties throughout Rocky View County.",
  },
];

const nearbyAreas = ["Calgary", "Langdon", "Strathmore", "Conrich", "Indus", "Carseland"];

const vehicleTypes = [
  "Junk and scrap cars",
  "Non-runners",
  "Hail and collision write-offs",
  "High-kilometre commuter vehicles",
  "Tow rigs and work trucks",
  "Retired half-tons",
  "Acreage and farm vehicles",
  "Estate and paperwork-heavy files",
];

const steps = [
  {
    title: "Quote",
    copy: `Call or text ${siteConfig.phoneDisplay} with the year, make, model, and condition. You get a firm number in minutes.`,
  },
  {
    title: "Pickup",
    copy: "We schedule free towing at a time that suits you.",
  },
  {
    title: "Paid",
    copy: "Cash or e-transfer at pickup, bill of sale in hand, vehicle gone.",
  },
];

const worthFactors = [
  { label: "Live scrap steel price", note: "It changes with the market." },
  { label: "Vehicle weight", note: "Heavier trucks and larger vehicles usually bring more." },
  { label: "Reusable components", note: "Converters, wheels, and usable drivetrains still carry value." },
  { label: "Overall condition", note: "A complete vehicle is worth more than a stripped shell." },
  { label: "Parts demand", note: "Some models simply have stronger salvage demand." },
];

const privateSaleProblems = [
  {
    title: "No test drive",
    copy: "When the car does not run, most private buyers stop replying immediately.",
  },
  {
    title: "The buyer still needs a tow",
    copy: "That towing cost comes straight off whatever they were willing to pay you.",
  },
  {
    title: "No-shows are normal",
    copy: "You block out the day and nobody arrives.",
  },
  {
    title: "Strangers at your house",
    copy: "In tight lakefront or shared-access communities, that is an unnecessary hassle.",
  },
  {
    title: "Bylaw and covenant pressure",
    copy: "An unregistered vehicle eventually draws complaints, and complaints become deadlines.",
  },
];

const faqItems = [
  {
    question: "Do you buy non-running cars in Chestermere?",
    answer: "Yes. Flatbed pickup, keys not required.",
  },
  {
    question: "Is towing genuinely free?",
    answer: "Yes, across Chestermere and nearby.",
  },
  {
    question: "How quickly can you come?",
    answer: "Often same-day. We are on Trans-Canada constantly.",
  },
  {
    question: "Can you get into a tight lakefront lot or narrow lane?",
    answer: "Usually yes. Describe the access when you call so we send the right truck.",
  },
  {
    question: "Do you buy trucks and larger vehicles?",
    answer: "Yes, and heavier vehicles typically bring more.",
  },
  {
    question: "Payment method?",
    answer: "Cash or e-transfer at pickup.",
  },
  {
    question: "I live on the lake and access is down a shared lane. Is that a problem?",
    answer: "Usually not. Tell us the lane width, low branches, and turn space. If needed, we can winch the vehicle to a wider point.",
  },
  {
    question: "My vehicle has been sitting unregistered for two years.",
    answer: "Very common. Lapsed registration does not prevent a sale if you have proof of ownership and photo ID.",
  },
  {
    question: "Can you take a vehicle from a storage yard or compound?",
    answer: "Yes, provided you are the owner and can authorize release with the facility.",
  },
  {
    question: "Do you buy boats, trailers, or RVs?",
    answer: "Call and ask. These are handled differently and depend on size, condition, and title status.",
  },
  {
    question: "Will the offer change when you arrive?",
    answer: "No, unless the vehicle is materially different from how it was described.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Cash For Cars Chestermere | Top Dollar & Free Towing",
  description:
    "Get cash for cars in Chestermere — any condition, running or not. Free same-day towing to every community, paid on the spot. Call (403) 837-1550 for your free quote.",
  path: "/junk-my-car-chestermere",
});

export default function ChestermerePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-19.jpeg"
              alt="Cash for cars pickup service for Chestermere vehicles"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Cash For Cars Chestermere</p>
              <h1>Cash for Cars Chestermere — Paid on the Spot, Towing Included</h1>
              <p className="hero-support">
                Chestermere households tend to collect more vehicles than they need. We
                buy them running or not, and haul them away for free through our <a className="content-link" href="/">cash for cars Calgary</a> process and direct <a className="content-link" href="/services/junk-car-removal-calgary">junk car removal Calgary</a> coverage.
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
                <p className="eyebrow">The Chestermere Situation</p>
                <h2>Too many vehicles, not enough driveway.</h2>
                <p className="section-body-copy">
                  Chestermere grew fast after becoming Alberta&apos;s 18th city in 2015,
                  and the lake lifestyle shapes what people drive and what gets left
                  sitting when it is no longer useful.
                </p>
                <ul className="promo-banner-points">
                  {chestermereItems.map((item) => (
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
                  alt="Junk My Car YYC promotional banner for Chestermere cash for cars service"
                  width={1024}
                  height={1536}
                  className="promo-banner-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section pickup-photo-section">
          <div className="site-shell pickup-photo-split">
            <div className="pickup-photo-frame">
              <Image
                src="/jmc-imgs/purchase-23.jpeg"
                alt="Local junk car pickup example for a Chestermere vehicle owner"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">Communities We Serve In Chestermere</p>
              <h2>Free pickup to every corner of the city and surrounding county.</h2>
              <p className="section-body-copy">
                From the established lake communities to the newer east and south builds,
                we meet you where the vehicle sits.
              </p>
              <ul className="promo-banner-points">
                <li>Lakefront and tight-lot access handled case by case</li>
                <li>County acreages and rural properties included</li>
                <li>Nearby areas like {nearbyAreas.join(", ")} covered too</li>
              </ul>
              <a href={siteConfig.phoneHref} className="text-link-arrow">
                Free quote
              </a>
            </div>
          </div>
        </section>

        <section className="section service-area-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Community Coverage"
              title="Pickup across Chestermere and nearby county properties."
              description="No driving required. We come to the pad, driveway, acreage, compound, or lane where the vehicle sits."
            />
            <div className="service-area-grid">
              {serviceAreas.map((group) => (
                <article key={group.label} className="area-card">
                  <p className="area-card-label">{group.label}</p>
                  <p>{group.areas}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="What We Buy"
              title="Any make, any model, any condition."
              description="Domestic or import, gas, diesel, or hybrid, if it is finished for you, we want to hear about it."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {vehicleTypes.map((item) => (
                <article key={item} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◈</IconBadge>
                    <h3>{item}</h3>
                  </div>
                  <p>
                    {item === "Junk and scrap cars" && "Old cars beyond repair, rusted through, or simply no longer worth fixing."}
                    {item === "Non-runners" && "Dead batteries, seized engines, blown transmissions, and no-start files."}
                    {item === "Hail and collision write-offs" && "Insurance-retained salvage and damaged vehicles accepted."}
                    {item === "High-kilometre commuter vehicles" && "Highway 1 commuters that reached the end of their economic life."}
                    {item === "Tow rigs and work trucks" && "Hard-used hauling vehicles still carry real scrap and parts value."}
                    {item === "Retired half-tons" && "Old family and lake-life trucks that outlived their usefulness."}
                    {item === "Acreage and farm vehicles" && "County pickups and rural property vehicles handled where they sit."}
                    {item === "Estate and paperwork-heavy files" && "Missing keys, missing paperwork, and estate situations guided properly."}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Three Steps To Cash"
              title="Simple process, no listing, no waiting."
              description="Call, book the towing, get paid, and let us remove the vehicle on the same visit."
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
              <p className="eyebrow">Why We Can&apos;t Quote A Flat Rate</p>
              <h2>Real offers depend on your actual vehicle, not a fake universal price.</h2>
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
              <p>What you should expect</p>
              <ul>
                <li>Free live quote on your specific vehicle</li>
                <li>No flat-rate bait price that gets renegotiated on arrival</li>
                <li>The number holds unless the vehicle is materially different from described</li>
                <li>Free towing is built into the deal</li>
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
              <p className="eyebrow">Alberta Rules</p>
              <h2>What you need and what to do after the tow.</h2>
              <div className="compliance-list">
                <div className="comparison-row">
                  <IconBadge>ID</IconBadge>
                  <p>Have Alberta registration or title in your name, plus valid photo ID. Registered owner, 18+.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>We provide the signed bill of sale at pickup.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>AB</IconBadge>
                  <p>Return your plates and cancel insurance the same day after the vehicle is gone.</p>
                </div>
              </div>
            </div>
            <div className="worth-panel compliance-panel">
              <p>Handled properly</p>
              <ul>
                <li>No title and estate situations are workable with the right registry paperwork</li>
                <li>Scrap Metal Dealers and Recyclers Regulation followed properly</li>
                <li>Fluids handled under the Environmental Protection and Enhancement Act</li>
                <li>Nothing leaks into Chestermere Lake on our watch</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Why Private Sales Rarely Work"
              title="A dead car usually turns Marketplace into a waste of time."
              description="The private-sale route sounds attractive until the towing problem, no-shows, and property headaches show up."
            />
            <div className="vehicle-grid">
              {privateSaleProblems.map((item) => (
                <article key={item.title} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>!</IconBadge>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="FAQ"
              title="Straight answers for Chestermere sellers."
              description="Access, towing, payment, and title questions handled before pickup day."
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
              <p className="eyebrow">Get Your Chestermere Offer</p>
              <h2>Free quote. Free towing. Cash at pickup.</h2>
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
