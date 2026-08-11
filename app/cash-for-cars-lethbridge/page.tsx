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
  "Running or not, we buy vehicles across North, West, and South Lethbridge",
  "Quick pickup with real money at the tow",
  "Farm, shop, storage lot, or driveway pickup",
];

const trustItems = [
  { title: "North, West, South coverage", icon: "◎" },
  { title: "Farm and acreage pickup", icon: "↗" },
  { title: "Cash or e-transfer", icon: "$" },
  { title: "Any condition welcome", icon: "✓" },
];

const lethbridgeItems = [
  {
    title: "The wind",
    copy: "Prairie grit acts like a slow sandblaster on paint, glass, and trim, while blowing snow and dust contribute to write-offs.",
  },
  {
    title: "Hail",
    copy: "Lethbridge sits in hailstorm alley, and retained salvage after an insurance payout is exactly the kind of file we buy.",
  },
  {
    title: "The coulees and river valley",
    copy: "Steep grades like Whoop-Up Drive are hard on brakes and transmissions, especially on older vehicles.",
  },
  {
    title: "Agricultural country",
    copy: "Farm trucks, service vehicles, and grain haulers rack up brutal kilometres before getting parked and forgotten.",
  },
  {
    title: "A university town",
    copy: "Cheap student cars are often abandoned in driveways and rental lots when school ends.",
  },
  {
    title: "Border-corridor mileage",
    copy: "Highway 4, Highway 3, and Highway 5 mean serious distance driving and high-kilometre vehicles.",
  },
];

const serviceAreas = [
  {
    label: "South Lethbridge",
    areas: "Victoria Park, Tudor Estates, Southgate, Coulee Creek, Fairmont, Park Royal, London Road, Sixmile, Southbrook, Henderson, Lakeview, Redwood, Fleetwood, Glendale, Sandstone, Southridge, and Downtown.",
  },
  {
    label: "West Lethbridge",
    areas: "Heritage Heights, Indian Battle Heights, Mountain Heights, Ridgewood, Paradise Canyon, Copperwood, Riverstone, Varsity Village, Sunridge, and the University area.",
  },
  {
    label: "North Lethbridge",
    areas: "Uplands, Legacy Ridge, Blackwolf, Hardieville, Stafford, Winston Churchill, Westminster, Senator Buchanan, and the industrial districts.",
  },
];

const nearbyAreas = ["Coaldale", "Coalhurst", "Taber", "Picture Butte", "Raymond", "Magrath", "Cardston", "Fort Macleod", "Claresholm", "Vauxhall", "Milk River"];

const vehicleTypes = [
  "Junk and scrap cars",
  "Non-runners",
  "Hail and insurance write-offs",
  "Collision-damaged vehicles",
  "Farm and ranch vehicles",
  "Grain and service trucks",
  "Abandoned student vehicles",
  "Estate and paperwork-heavy files",
];

const steps = [
  {
    title: "Call or text",
    copy: `Send the year, make, model, and condition to ${siteConfig.phoneDisplay}. You get a firm offer in minutes.`,
  },
  {
    title: "We schedule pickup",
    copy: "Home, farm, shop, or storage lot, we set a pickup window that works.",
  },
  {
    title: "Paid at pickup",
    copy: "Cash or e-transfer, bill of sale provided, vehicle hauled away.",
  },
];

const worthFactors = [
  { label: "Live scrap steel price", note: "The market moves weekly." },
  { label: "Vehicle weight", note: "Heavier trucks and diesels generally bring more." },
  { label: "Reusable parts", note: "Converters, metals, and good driveline components add value." },
  { label: "Condition", note: "Complete vehicles are worth more than stripped ones." },
  { label: "Parts demand", note: "Some models simply have stronger salvage demand." },
];

const compareOptions = [
  {
    title: "Private sale",
    copy: "Best if the car runs, drives, and is roadworthy. If it does not, you usually waste weeks on lowballs and no-shows.",
  },
  {
    title: "Dealership trade-in",
    copy: "Convenient if the vehicle has real market value. Older, high-kilometre, or non-running vehicles are often declined or token-valued.",
  },
  {
    title: "Licensed recycler",
    copy: "The right fit when the car is finished: non-running, uneconomic to repair, hail-written-off, or rusted through.",
  },
];

const commonSituations = [
  {
    title: "A student car left behind",
    copy: "You are still the registered owner and still liable, even if the school year is over.",
  },
  {
    title: "A hail write-off you kept",
    copy: "If you retained the salvage after your payout, it is yours to sell.",
  },
  {
    title: "A farm vehicle in a shelterbelt for twenty years",
    copy: "Perfectly normal. Weight is what drives value, and old trucks are heavy.",
  },
  {
    title: "A vehicle you inherited",
    copy: "Executor or administrator documentation is needed before sale.",
  },
];

const faqItems = [
  {
    question: "Do you buy cars that do not run in Lethbridge?",
    answer: "Yes. Flatbed and winch, no keys required.",
  },
  {
    question: "Do you come out to farms and acreages?",
    answer: "Yes, throughout Lethbridge County and the surrounding region.",
  },
  {
    question: "Do you buy hail write-offs?",
    answer: "Regularly. If you kept the salvage, we will pay for it.",
  },
  {
    question: "Can you take multiple vehicles at once?",
    answer: "Yes. Tell us how many and we will price them together and plan the haul.",
  },
  {
    question: "How am I paid?",
    answer: "Cash or e-transfer at pickup, before the vehicle is loaded.",
  },
  {
    question: "What if there is a lien on the vehicle?",
    answer: "It must be cleared through Alberta's Personal Property Registry first.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Cash For Cars Lethbridge | Any Condition, Fast Pickup",
  description:
    "Cash for cars in Lethbridge — running or not, any condition. Pickup across North, West and South Lethbridge, paid on the spot. Call (403) 837-1550 for a free quote.",
  path: "/cash-for-cars-lethbridge",
});

export default function LethbridgePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-26.jpeg"
              alt="Cash for cars pickup service for Lethbridge vehicles"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Cash For Cars Lethbridge</p>
              <h1>Cash for Cars Lethbridge — Any Condition, Real Money, Quick Pickup</h1>
              <p className="hero-support">
                Wind, hail, coulees, and long prairie distances wear Lethbridge vehicles
                out fast. When one reaches the end, we pay cash for it running or not.
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
                <p className="eyebrow">What Makes Lethbridge Different</p>
                <h2>Southern Alberta is hard on vehicles in ways most cities are not.</h2>
                <p className="section-body-copy">
                  Lethbridge has its own mix of wind, hail, steep grades, agricultural
                  use, student turnover, and border-corridor mileage.
                </p>
                <ul className="promo-banner-points">
                  {lethbridgeItems.map((item) => (
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
                  alt="Junk My Car YYC promotional banner for Lethbridge cash for cars service"
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
                alt="Local junk car pickup example for a Lethbridge vehicle owner"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">Pickup Across All Three Sides Of The City</p>
              <h2>North, West, and South Lethbridge all covered.</h2>
              <p className="section-body-copy">
                Lethbridge is divided by the Oldman River and the CPR line, but we cover
                each side of the city plus the surrounding southern Alberta communities.
              </p>
              <ul className="promo-banner-points">
                <li>Home, farm, ranch, shop, storage lot, or industrial yard pickup</li>
                <li>Nearby areas like {nearbyAreas.join(", ")} included</li>
                <li>Postal code confirmation helps lock in the pickup window</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section service-area-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Community Coverage"
              title="Pickup across all three sides of Lethbridge."
              description="We meet you where the vehicle sits, in the city, on a farm, or out in the surrounding southern Alberta region."
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
              eyebrow="What We Buy In Lethbridge"
              title="Any make, gas or diesel, any condition."
              description="From farm trucks to abandoned student cars, if it is finished for you, we want to hear about it."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {vehicleTypes.map((item) => (
                <article key={item} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◈</IconBadge>
                    <h3>{item}</h3>
                  </div>
                  <p>
                    {item === "Junk and scrap cars" && "Old vehicles beyond repair, rusted out, or simply finished."}
                    {item === "Non-runners" && "Flatbed and winch files are standard, with or without keys."}
                    {item === "Hail and insurance write-offs" && "Retained salvage and hail damage are common southern Alberta files."}
                    {item === "Collision-damaged vehicles" && "Wind, dust, and low-visibility incidents create plenty of write-offs."}
                    {item === "Farm and ranch vehicles" && "Hard-used agricultural units and property vehicles handled where they sit."}
                    {item === "Grain and service trucks" && "Heavy, work-worn trucks often carry strong scrap value."}
                    {item === "Abandoned student vehicles" && "Rental driveway and parking lot situations guided properly."}
                    {item === "Estate and paperwork-heavy files" && "Authorization, registry questions, and unusual files handled case by case."}
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
              title="Fast quote, planned pickup, money at the tow."
              description="No classifieds, no dealership trade-in insult, just a firm number and a scheduled removal."
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
              <p className="eyebrow">What&apos;s It Worth?</p>
              <h2>Your offer comes from the market and the vehicle, not guesswork.</h2>
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
              <p>Worth noting</p>
              <ul>
                <li>Heavier trucks and diesels generally bring more</li>
                <li>Only a live quote is accurate because markets move</li>
                <li>Free quote with no obligation</li>
                <li>We are direct about whether the car should be sold privately instead</li>
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
              <p className="eyebrow">Selling A Vehicle In Alberta</p>
              <h2>Bring ownership and ID, then finish the registry and insurance steps the same day.</h2>
              <div className="compliance-list">
                <div className="comparison-row">
                  <IconBadge>ID</IconBadge>
                  <p>Bring Alberta registration or title in your name and valid photo ID. Owner must be 18+.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>We provide the signed bill of sale at pickup.</p>
                </div>
                <div className="comparison-row">
                  <IconBadge>AB</IconBadge>
                  <p>Return the plates and cancel insurance after pickup. Liens must be cleared first.</p>
                </div>
              </div>
            </div>
            <div className="worth-panel compliance-panel">
              <p>Handled properly</p>
              <ul>
                <li>Lost title and estate files are workable with registry confirmation</li>
                <li>Scrap Metal Dealers and Recyclers Regulation followed properly</li>
                <li>Hazardous fluids handled under the Environmental Protection and Enhancement Act</li>
                <li>Important in irrigation country and around groundwater</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Your Three Options"
              title="Private sale, trade-in, or recycler."
              description="Most people weigh all three. The right choice depends on whether the vehicle still has real roadworthy market value."
            />
            <div className="vehicle-grid">
              {compareOptions.map((item) => (
                <article key={item.title} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◉</IconBadge>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <p className="section-body-copy">
              Our honest advice: if your car starts, drives, and is roadworthy, list it
              privately first. If it does not, stop wasting weekends and call us.
            </p>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Common Lethbridge Situations"
              title="A few files we see all the time."
              description="These are the kinds of southern Alberta situations that usually end with a licensed recycler rather than a private buyer."
            />
            <div className="vehicle-grid">
              {commonSituations.map((item) => (
                <article key={item.title} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>!</IconBadge>
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
              <p className="eyebrow">Get Your Lethbridge Quote</p>
              <h2>Serving Lethbridge and southern Alberta.</h2>
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
