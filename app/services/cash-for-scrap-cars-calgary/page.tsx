import Image from "next/image";
import type { Metadata } from "next";
import HeroQuoteForm from "../../components/hero-quote-form";
import MobileActionBar from "../../components/mobile-action-bar";
import SectionIntro from "../../components/section-intro";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import { buildMetadata } from "../../lib/metadata";
import { siteConfig } from "../../lib/site";

function IconBadge({ children }: { children: React.ReactNode }) {
  return <span className="icon-badge">{children}</span>;
}

function StepBadge({ type }: { type: "scale" | "market" | "truck" }) {
  return (
    <span className="icon-badge step-badge" aria-hidden="true">
      {type === "scale" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path
            d="M5 8.5h14v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8.5a4 4 0 0 1 8 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="m12 12 2-1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
      {type === "market" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path
            d="M5 16.5 10 11l3 3 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 8h4v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 5.5v13h14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {type === "truck" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path
            d="M3.5 7.5h10v8h-10zM13.5 10h3l2 2v3h-5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="17.5" r="1.7" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17" cy="17.5" r="1.7" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ) : null}
    </span>
  );
}

const heroBullets = [
  "Weight of steel drives the number",
  "Converter, parts, and access affect the quote",
  "Paid at pickup, no renegotiation games",
];

const trustItems = [
  { title: "Live quote", icon: "◎" },
  { title: "Market-based pricing", icon: "↗" },
  { title: "Phone quote holds", icon: "✓" },
  { title: "Paid by e-transfer", icon: "$" },
];

const pricingFactors = [
  {
    title: "Weight of recoverable steel",
    copy: "This is the dominant factor. A heavier rusted-out three-quarter-ton pickup is usually worth more than a tidy compact car.",
  },
  {
    title: "The current scrap steel market",
    copy: "Steel prices move with demand, mill activity, and export markets, so the same vehicle can price differently across the year.",
  },
  {
    title: "The catalytic converter",
    copy: "This is often the most valuable single component because of the metals inside it. If it is missing, say so before pickup.",
  },
  {
    title: "Non-ferrous metals",
    copy: "Aluminium wheels, radiators, condensers, and copper wiring all add value above plain steel weight.",
  },
  {
    title: "Completeness and condition",
    copy: "A whole vehicle beats a shell. Missing drivetrain, doors, interior, or fire damage all reduce what can be recovered.",
  },
];

const noPriceListItems = [
  {
    title: "Generic price lists are not honest pricing",
    copy: "A 2005 Honda Civic and a 2005 Ford F-250 are both vehicles and not remotely worth the same as scrap.",
  },
  {
    title: "Completeness changes the answer",
    copy: "A complete car and one missing the engine or converter are not in the same category, even before access is considered.",
  },
  {
    title: "The market moves",
    copy: "A fixed price list is usually either a very low floor or a setup for a renegotiation at pickup.",
  },
  {
    title: "A real quote needs five facts",
    copy: "Year, make, model, whether it is complete, and where it is. Give us that and we can price it properly in a couple of minutes.",
  },
];

const increaseItems = [
  "Be accurate about what is missing. An accurate description makes the phone quote the pickup number.",
  "Do not part it out first unless you know the parts are worth more than the whole.",
  "Sell it sooner rather than later. Outdoor corrosion reduces recoverable material over time.",
  "Sell multiple vehicles together. Group pricing beats separate trips when the cost is the visit itself.",
  "Keep the vehicle complete and secure. A stolen converter comes straight off your offer.",
  "Mention heavy extras such as service bodies, decks, cranes, tool boxes, or spare drivetrains.",
  "Have your paperwork ready so the transfer completes on the first visit.",
];

const reduceItems = [
  "Missing engine, transmission, or drivetrain",
  "Missing or already-stolen catalytic converter",
  "Stripped interior, missing doors, hood, or panels",
  "Steel wheels instead of alloys, or no wheels at all",
  "Fire damage",
  "Years of outdoor corrosion",
  "Difficult access requiring specialised recovery",
  "Long distance outside our normal service area",
];

const quoteCommitmentItems = [
  {
    title: "The phone number is the pickup number",
    copy: "That holds provided the vehicle is materially as described.",
  },
  {
    title: "We only revise for major differences",
    copy: "A missing engine, stripped interior, different vehicle, or ownership issue changes the quote because it changes the job.",
  },
  {
    title: "You can decline at no cost",
    copy: "If the vehicle is significantly different and you do not like the revision, the truck leaves and you owe nothing.",
  },
];

const paymentItems = [
  "Payment is made at pickup, before the vehicle is loaded, by e-transfer.",
  "Traceable payment protects both sides and creates a provable record if there is ever a dispute.",
  "That is a legal requirement in this industry, not a company preference.",
];

export const metadata: Metadata = buildMetadata({
  title: "Cash For Scrap Cars Calgary | How Your Offer Is Priced",
  description:
    "What a scrap car is worth in Calgary and exactly how the number is calculated — weight, steel prices, converter and parts. Call (403) 837-1550 for a live quote.",
  path: "/services/cash-for-scrap-cars-calgary",
});

export default function CashForScrapCarsCalgaryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-18.jpeg"
              alt="Cash for scrap cars service in Calgary"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Cash For Scrap Cars Calgary</p>
              <h1>Cash for Scrap Cars Calgary — How Your Offer Is Actually Calculated</h1>
              <p className="hero-support">
                Every scrap car buyer in Calgary quotes a number and almost none explain it.
                Here is the whole calculation, openly, before you call anyone, whether you started on <a className="content-link" href="/">cash for cars Calgary</a> or want the simpler service view on <a className="content-link" href="/services/scrap-car-removal-calgary">scrap car removal Calgary</a>.
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
                <p className="eyebrow">The Five Things That Set Your Price</p>
                <h2>Weight, market, converter, metals, and condition.</h2>
                <p className="section-body-copy">
                  Scrap pricing is mostly material pricing. If your intuition says the
                  nicer-looking vehicle should be worth more, this is the section that explains
                  why that is often wrong.
                </p>
                <ul className="promo-banner-points">
                  {pricingFactors.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}.</strong> {item.copy}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="promo-banner-frame">
                <Image
                  src="/images/junkmycar-banner.png"
                  alt="Junk My Car YYC pricing banner for Calgary scrap car quotes"
                  width={1024}
                  height={1536}
                  className="promo-banner-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="Why Nobody Can Honestly Publish A Price List"
              title="Treat 'up to' pricing as marketing, not a quote."
              description="A real quote depends on the vehicle, its completeness, the market, and where it sits."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {noPriceListItems.map((item) => (
                <article key={item.title} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◈</IconBadge>
                    <h3>{item.title}</h3>
                  </div>
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
                src="/jmc-imgs/purchase-20.jpeg"
                alt="Scrap car valuation and pickup example in Calgary"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">What Actually Increases Your Offer</p>
              <h2>Practical things that move the number up or keep it from slipping.</h2>
              <p className="section-body-copy">
                The biggest control you have is accuracy. The better the vehicle description, the
                less room there is for quote padding or driveway surprises.
              </p>
              <ul className="promo-banner-points">
                {increaseItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell">
            <SectionIntro
              eyebrow="What Reduces It"
              title="These issues do not stop the sale. They change the number."
              description="We would rather tell you honestly on the phone than discover them on your driveway."
            />
            <div className="steps-grid">
              {reduceItems.map((item, index) => (
                <article key={item} className="step-card">
                  <div className="step-card-top">
                    <span className="step-card-number">{String(index + 1).padStart(2, "0")}</span>
                    <StepBadge
                      type={index < 3 ? "scale" : index < 6 ? "market" : "truck"}
                    />
                  </div>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="site-shell worth-section">
            <div>
              <p className="eyebrow">Our Quote Commitment</p>
              <h2>The number we give you on the phone is the number you get at pickup.</h2>
              <div className="value-ladder">
                {quoteCommitmentItems.map((item) => (
                  <div key={item.title} className="value-ladder-row">
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="worth-panel">
              <p>What to watch for elsewhere</p>
              <ul>
                <li>A quote that is noticeably higher than everyone else.</li>
                <li>"Problems" suddenly found on arrival.</li>
                <li>A much lower take-it-or-leave-it number once the truck is already there.</li>
                <li>If the phone quote seems too good, it usually is.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section comparison-section">
          <div className="site-shell comparison-shell">
            <div className="comparison-copy">
              <p className="eyebrow">How You&apos;re Paid</p>
              <h2>E-transfer at pickup, before the vehicle is loaded.</h2>
              <p>
                Payment is traceable by design. That protects you and fits the legal payment rules
                that govern this industry in Alberta.
              </p>
            </div>
            <div className="comparison-list">
              {paymentItems.map((item) => (
                <div key={item} className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="site-shell cta-band-shell">
            <div>
              <p className="eyebrow">Get A Live Number</p>
              <h2>Tell us the year, make, model, condition, and location.</h2>
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
