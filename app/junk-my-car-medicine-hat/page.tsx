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
  "Any make, running or not, we buy it",
  "Pickup across Medicine Hat, Redcliff, Dunmore, and Cypress County",
  "Cash or e-transfer at pickup with no surprise fee",
];

const trustItems = [
  { title: "City and county coverage", icon: "◎" },
  { title: "Non-runners welcome", icon: "↗" },
  { title: "Paid at pickup", icon: "$" },
  { title: "Any condition", icon: "✓" },
];

const sunItems = [
  {
    title: "UV damage runs deep",
    copy: "Clearcoat, dashboards, seals, vacuum lines, and wiring insulation all cook in relentless sun.",
  },
  {
    title: "Heat cycling",
    copy: "Hot dry summers and prairie winters punish cooling systems, gaskets, and A/C.",
  },
  {
    title: "Dry wind and dust",
    copy: "Prairie grit hazes glass, dulls paint, and gets into everything.",
  },
  {
    title: "Distance",
    copy: "Trans-Canada and Highway 3 driving add serious mileage long before the body gives out.",
  },
  {
    title: "Hail",
    copy: "Retained salvage after a southern Alberta hail write-off is exactly the kind of file we buy.",
  },
];

const serviceAreas = [
  {
    label: "North Of The River",
    areas: "Crescent Heights, Northlands, North Flats, Ranchlands, Riverside, River Heights, Box Springs, and Brier Park.",
  },
  {
    label: "Central And The Hill",
    areas: "Downtown, SE Hill, South Flats, Norwood, Crestwood, Parkview, and Park Meadows.",
  },
  {
    label: "South And Southeast",
    areas: "Ross Glen, Southview, Southridge, Southlands, Hamptons, and newer south-end developments.",
  },
  {
    label: "Nearby Areas",
    areas: "Redcliff, Dunmore, Desert Blume, and rural properties throughout Cypress County.",
  },
];

const nearbyAreas = ["Brooks", "Bow Island", "Taber", "Vauxhall", "Foremost", "Maple Creek-area Alberta properties"];

const vehicleTypes = [
  "Sun-damaged cars",
  "Non-runners",
  "Seized engines and blown transmissions",
  "Hail and collision write-offs",
  "High-mileage highway vehicles",
  "Farm, ranch, and service trucks",
  "Abandoned cars",
  "Estate and paperwork-heavy files",
];

const steps = [
  {
    title: "Quote",
    copy: `${siteConfig.phoneDisplay} with the year, make, model, and condition. Firm number in minutes.`,
  },
  {
    title: "Pickup",
    copy: "Scheduled at your convenience, wherever the vehicle sits.",
  },
  {
    title: "Paid",
    copy: "Cash or e-transfer at pickup, plus your bill of sale.",
  },
];

const worthFactors = [
  { label: "Live scrap steel price", note: "The market sets the floor." },
  { label: "Vehicle weight", note: "A heavy truck can be worth more than a tidy small car." },
  { label: "Reusable parts", note: "Converters, wheels, and good drivetrains matter." },
  { label: "Condition", note: "Complete mechanical value still matters even with cosmetic sun damage." },
  { label: "Parts demand", note: "Some models carry better salvage demand than others." },
];

const repairItems = [
  {
    title: "Cracked dashboard",
    copy: "Replacement usually means removing the full dash assembly and can easily become a four-figure job.",
  },
  {
    title: "Air conditioning",
    copy: "Heat-cycled hoses and seals turn A/C repair into an expensive system-wide problem.",
  },
  {
    title: "Perished rubber everywhere",
    copy: "Hoses, seals, boots, bushings, and trim all fail on the same UV timeline.",
  },
  {
    title: "Brittle wiring insulation",
    copy: "Intermittent electrical faults are expensive to diagnose and often never truly resolved.",
  },
  {
    title: "Faded clearcoat",
    copy: "Once the clear has chalked and peeled, repainting an older vehicle exceeds its value outright.",
  },
];

const commonSituations = [
  {
    title: "A rust-free body but a dead engine",
    copy: "Ideal for us. Dry-climate shells are clean scrap and the mechanical value can still be meaningful.",
  },
  {
    title: "A vehicle that sat in the sun for years",
    copy: "Standard Medicine Hat file. No keys needed, flatbed pickup.",
  },
  {
    title: "A farm or ranch truck in Cypress County",
    copy: "We come out, gravel access included, and heavier trucks usually bring more.",
  },
  {
    title: "A hail write-off you retained",
    copy: "If you kept the salvage after payout, it is yours to sell.",
  },
];

const faqItems = [
  {
    question: "Will you buy a car that is mechanically dead but looks fine?",
    answer: "Absolutely. That describes a lot of Medicine Hat vehicles.",
  },
  {
    question: "Do you buy non-runners?",
    answer: "Yes. Flatbed pickup, no keys needed.",
  },
  {
    question: "Do you service Redcliff and Dunmore?",
    answer: "Yes, along with Cypress County acreages.",
  },
  {
    question: "Is there a towing charge given the distance?",
    answer: "We confirm the towing arrangement when you call, before you commit. You will not be surprised at pickup.",
  },
  {
    question: "Multiple vehicles on one property?",
    answer: "Tell us how many and we will price them together.",
  },
  {
    question: "Payment?",
    answer: "Cash or e-transfer at pickup.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Cash For Cars Medicine Hat | Fast Quotes, Any Condition",
  description:
    "Cash for cars in Medicine Hat — any make, running or not. Pickup across the city, Redcliff and Dunmore, paid on the spot. Call (403) 837-1550 for a free quote today.",
  path: "/junk-my-car-medicine-hat",
});

export default function MedicineHatPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-19.jpeg"
              alt="Cash for cars pickup service for Medicine Hat vehicles"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Cash For Cars Medicine Hat</p>
              <h1>Cash for Cars Medicine Hat — Sun-Faded, Seized, or Scrap, We Buy It</h1>
              <p className="hero-support">
                Medicine Hat gets roughly 2,544 hours of sunshine a year, and that is
                brutal on vehicles. When yours reaches the end, we pay cash for it through our <a className="content-link" href="/">cash for cars Calgary</a> process and nearby <a className="content-link" href="/junk-my-car-brooks">Brooks cash for cars</a> coverage.
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
                <p className="eyebrow">The Sun Is The Story Here</p>
                <h2>Medicine Hat vehicles age differently.</h2>
                <p className="section-body-copy">
                  No other car buyer will tell you this as directly, but the sun is the
                  single biggest difference between a Medicine Hat vehicle and a Calgary one.
                </p>
                <ul className="promo-banner-points">
                  {sunItems.map((item) => (
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
                  alt="Junk My Car YYC promotional banner for Medicine Hat cash for cars service"
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
                alt="Local junk car pickup example for a Medicine Hat vehicle owner"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">Where We Pick Up In Medicine Hat</p>
              <h2>Across the city and the surrounding county.</h2>
              <p className="section-body-copy">
                Free pickup across the city, Redcliff, Dunmore, Desert Blume, and rural
                Cypress County properties.
              </p>
              <ul className="promo-banner-points">
                <li>North of the river, central hill, and south-end coverage</li>
                <li>Nearby areas like {nearbyAreas.join(", ")} included</li>
                <li>Postal code confirmation helps lock in the towing arrangement upfront</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section service-area-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Community Coverage"
              title="Pickup across Medicine Hat, Redcliff, Dunmore, and Cypress County."
              description="No surprise fee at the door. We confirm the pickup window and towing arrangement upfront."
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
              title="Sun-damaged, mechanically dead, or highway-worn."
              description="All makes and models, gas and diesel. If it is finished for you, we want to hear about it."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {vehicleTypes.map((item) => (
                <article key={item} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◈</IconBadge>
                    <h3>{item}</h3>
                  </div>
                  <p>
                    {item === "Sun-damaged cars" && "Chalked paint, cracked dash, ruined seals, and baked interiors still carry scrap value."}
                    {item === "Non-runners" && "No-start files and flatbed pickups are standard."}
                    {item === "Seized engines and blown transmissions" && "Mechanically finished vehicles are exactly what we buy."}
                    {item === "Hail and collision write-offs" && "Insurance-retained salvage and damaged vehicles accepted."}
                    {item === "High-mileage highway vehicles" && "Trans-Canada and Highway 3 commuters rack up serious distance here."}
                    {item === "Farm, ranch, and service trucks" && "County and rural work vehicles handled where they sit."}
                    {item === "Abandoned cars" && "Older property vehicles and long-sitting files are common."}
                    {item === "Estate and paperwork-heavy files" && "Missing keys, lost paperwork, and estate situations guided properly."}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Three Steps"
              title="Fast quote, scheduled pickup, payment at the tow."
              description="Free quote, no obligation, no drawn-out listing process."
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
              <p className="eyebrow">What Determines Your Offer</p>
              <h2>Sun damage hurts cosmetics, but weight and salvageable parts still carry value.</h2>
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
              <p>Worth knowing</p>
              <ul>
                <li>A sun-faded truck can be worth more than a tidy small car</li>
                <li>Rust-free southern Alberta shells are often cleaner scrap</li>
                <li>Sun damage does not erase converter and metal value</li>
                <li>Only a live quote is accurate</li>
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
              <p className="eyebrow">The Alberta Paperwork</p>
              <h2>Bring ownership and photo ID, then finish the registry and insurance steps the same day.</h2>
              <div className="compliance-list">
                <div className="comparison-row">
                  <IconBadge>ID</IconBadge>
                  <p>Bring Alberta registration or title in your name plus photo ID. Registered owner, 18+.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>We supply the signed bill of sale.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>AB</IconBadge>
                  <p>Return your plates and cancel insurance after pickup.</p>
                </div>
              </div>
            </div>
            <div className="worth-panel compliance-panel">
              <p>Handled properly</p>
              <ul>
                <li>Scrap Metal Dealers and Recyclers Regulation followed properly</li>
                <li>Fluids handled under the Environmental Protection and Enhancement Act</li>
                <li>Vehicles are drained and recycled at certified facilities</li>
                <li>Important around the South Saskatchewan River and local groundwater</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Sun Damage"
              title="Why repair almost never pencils out."
              description="The problem with severe sun exposure is not just cosmetics. Several expensive systems tend to fail together."
            />
            <div className="vehicle-grid">
              {repairItems.map((item) => (
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
              eyebrow="Common Medicine Hat Situations"
              title="Files we see all the time in the Hat."
              description="Dry climate, hard sun, and long highway mileage create their own very specific end-of-life vehicle patterns."
            />
            <div className="vehicle-grid">
              {commonSituations.map((item) => (
                <article key={item.title} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◉</IconBadge>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="faq-grid" style={{ marginTop: "2rem" }}>
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
              <p className="eyebrow">Get Your Medicine Hat Quote</p>
              <h2>Medicine Hat, Redcliff, Dunmore, and Cypress County.</h2>
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
