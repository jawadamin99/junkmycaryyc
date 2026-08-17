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

function StepBadge({ type }: { type: "phone" | "file" | "truck" }) {
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
      {type === "file" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path
            d="M8 4.5h6l3 3v12H8a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 4.5v3h3"
            stroke="currentColor"
            strokeWidth="1.9"
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
  "Any condition, any access",
  "Parkades, alleys, garages, no wheels",
  "Free towing, paid at pickup",
];

const trustItems = [
  { title: "Same-day removals", icon: "◎" },
  { title: "Any access handled", icon: "↗" },
  { title: "Paid at pickup", icon: "$" },
  { title: "No towing fee", icon: "✓" },
];

const bylawItems = [
  {
    title: "Dilapidated vehicles are prohibited outdoors on private property",
    copy: "Inside a garage is fine. On the driveway, side yard, or back pad is not.",
  },
  {
    title: "Automobile parts must be stored so they are not visible from outside the property",
    copy: "The stack of takeoffs beside the car counts.",
  },
  {
    title: "Open or exposed storage of industrial fluid is prohibited",
    copy: "Engine oil, brake fluid, antifreeze, and other hazardous materials count here.",
  },
  {
    title: "Untidy property violations carry fines",
    copy: "They are often in the range of $100 to $500, depending on the violation.",
  },
  {
    title: "Nuisance and remedial-order penalties stack up",
    copy: "Causing or permitting a nuisance can mean a $500 penalty, and failing to comply with a remedial order can mean another $500.",
  },
  {
    title: "Front-yard parking offences can bring separate penalties",
    copy: "These are commonly around $400 each.",
  },
  {
    title: "On a City street or lane, 72 hours is the limit",
    copy: "A vehicle must be operable and moved within 72 consecutive hours or it may be treated as abandoned and removed.",
  },
];

const junkVehicleTypes = [
  "Won't start, no keys, cracked block, seized engine, or blown transmission",
  "Failed a safety or out-of-province inspection",
  "Rusted through the frame or rockers",
  "Hail write-off, collision write-off, flood or water damage",
  "Missing wheels, engine, or interior",
  "Partly disassembled project",
  "Parked so long the tires are flat and the brakes are seized",
  "Registration lapsed years ago or nobody in the family knows whose name it is in",
];

const accessItems = [
  {
    title: "Underground parkade",
    copy: "Common downtown, in the Beltline, and in East Village. Tell us the ceiling height and stall location.",
  },
  {
    title: "Back alley or narrow lane",
    copy: "Common in Inglewood, Ramsay, Bridgeland, Renfrew, Killarney, and older inner-city communities. We use trucks that fit.",
  },
  {
    title: "Inside a detached garage",
    copy: "If it will not roll or steer, we bring dollies and winch it out. Measure the door width if it is tight.",
  },
  {
    title: "No wheels, on blocks, or on jack stands",
    copy: "Routine. Mention it so we bring the right gear.",
  },
  {
    title: "Buried in snow or grown into the grass",
    copy: "Also routine. We just need to know so we allow time to dig or free it.",
  },
  {
    title: "Soft ground, lawns, acreage fields, locked yards, condos, rentals, or multi-vehicle sites",
    copy: "We plan the approach around the property and access so the job gets done in one visit.",
  },
];

const steps = [
  {
    title: "We arrive in the agreed window",
    copy: "You get a call or text when the operator is on the way.",
  },
  {
    title: "We confirm the vehicle",
    copy: "Year, make, model, and VIN are matched to the quote and your registration.",
  },
  {
    title: "Paperwork",
    copy: "We check your photo ID and proof of ownership, then complete a bill of sale. Both parties sign and you keep a copy.",
  },
  {
    title: "You get paid",
    copy: "Payment happens at pickup, by e-transfer, before the vehicle is loaded.",
  },
  {
    title: "We load and go",
    copy: "Flatbed, wheel-lift, winch, or dollies depending on the situation.",
  },
  {
    title: "Your plates stay with you",
    copy: "Take them off before we arrive. In Alberta, plates belong to you, not the vehicle.",
  },
];

const whatYouNeed = [
  "Proof of ownership — your Alberta registration or title, in your name",
  "Valid government-issued photo ID — registered owner, 18 or older",
];

const noCostItems = [
  "No towing fee. Pickup anywhere in Calgary is included.",
  "No admin, paperwork, or disposal fee.",
  "No fee if you decline after a justified quote change.",
  "If the vehicle is not as described, you are free to walk away at no cost.",
];

const faqItems = [
  {
    question: "How fast can you remove it?",
    answer: "Often the same day, usually within 24 hours.",
  },
  {
    question: "Do I need to be home?",
    answer: "Yes, normally. The registered owner signs the bill of sale and shows ID.",
  },
  {
    question: "Will you remove a car that's not in my name?",
    answer: "No. Nobody can legally buy that from you.",
  },
  {
    question: "Can you get into an underground parkade?",
    answer: "Usually. Tell us the ceiling height and whether it rolls and steers.",
  },
  {
    question: "What if it's been sitting for fifteen years and has no wheels?",
    answer: "Completely normal for us.",
  },
  {
    question: "Will you damage my driveway or lawn?",
    answer: "We take reasonable care, but winching an immobile vehicle can mark a surface. Tell us your concerns and we'll agree an approach first.",
  },
  {
    question: "Do I have to clean it out?",
    answer: "Yes. Remove everything before we arrive. Once a vehicle goes for processing, contents cannot be recovered.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Junk Car Removal Calgary | Off Your Property Today",
  description:
    "Junk car removal in Calgary — any condition, any access. Parkades, alleys, garages, no wheels. Free towing, paid at pickup. Call (403) 837-1550 for a quote.",
  path: "/services/junk-car-removal-calgary",
});

export default function JunkCarRemovalCalgaryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-19.jpeg"
              alt="Junk car removal service in Calgary"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Junk Car Removal Calgary</p>
              <h1>Junk Car Removal Calgary — Off Your Property, Often the Same Day</h1>
              <p className="hero-support">
                Most people do not call because they want money. They call because they want the
                thing gone. It is blocking a garage, filling a stall, sinking into a lawn, or
                drawing looks from neighbours. We remove junk vehicles anywhere in Calgary and pay
                you at pickup instead of charging you, whether you started on <a className="content-link" href="/">cash for cars Calgary</a> or want to <a className="content-link" href="/services/cash-for-junk-cars-calgary">get cash for your junk car</a>.
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
                <p className="eyebrow">Calgary Bylaw Reality</p>
                <h2>In Calgary, a derelict vehicle is a bylaw problem, not just an eyesore.</h2>
                <p className="section-body-copy">
                  This is the part most Calgarians do not know, and it is the reason to act sooner
                  rather than later. Once a file opens, you still have to arrange removal
                  yourself, only now under pressure.
                </p>
                <ul className="promo-banner-points">
                  {bylawItems.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}.</strong> {item.copy}
                    </li>
                  ))}
                </ul>
                <p className="section-body-copy">
                  How enforcement usually starts: a neighbour calls 311. Calgary does not accept
                  anonymous bylaw complaints, but that rarely stops anyone once they have decided.
                  This is a plain-English summary, not legal advice. Confirm current requirements
                  with 311 or the bylaws themselves.
                </p>
              </div>

              <div className="promo-banner-frame">
                <Image
                  src="/images/junkmycar-banner.png"
                  alt="Junk My Car YYC promotional banner for Calgary junk car removal"
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
              eyebrow="What Counts As A Junk Car"
              title="If any of these describe your vehicle, we'll take it."
              description="Cars, trucks, SUVs, vans, minivans, and one-tons. Domestic or import. Gas, diesel, or hybrid. Complete or stripped."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {junkVehicleTypes.map((item) => (
                <article key={item} className="vehicle-card">
                  <div className="vehicle-card-top">
                    <IconBadge>◈</IconBadge>
                    <h3>{item}</h3>
                  </div>
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
                alt="Local junk car pickup example for Calgary vehicle removal"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">Every Access Situation We Handle</p>
              <h2>Access is the actual problem in most removals, not the vehicle.</h2>
              <p className="section-body-copy">
                Tell us the situation on the phone and we bring the right equipment the first
                time.
              </p>
              <ul className="promo-banner-points">
                {accessItems.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}.</strong> {item.copy}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell">
            <SectionIntro
              eyebrow="What Happens On Removal Day"
              title="No mystery, no surprises."
              description="Typical time on site is 15 to 30 minutes for a straightforward pickup."
            />
            <div className="steps-grid">
              {steps.map((step, index) => (
                <article key={step.title} className="step-card">
                  <div className="step-card-top">
                    <span className="step-card-number">{String(index + 1).padStart(2, "0")}</span>
                    <StepBadge
                      type={index === 0 ? "phone" : index === 1 || index === 2 ? "file" : "truck"}
                    />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
            <div className="region-note">
              <p>
                We prepare and provide the bill of sale. That document is what formally ends your
                responsibility for the vehicle.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="site-shell worth-section">
            <div>
              <p className="eyebrow">What You Need</p>
              <h2>Two things.</h2>
              <div className="value-ladder">
                {whatYouNeed.map((item) => (
                  <div key={item} className="value-ladder-row">
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="worth-panel">
              <p>Common edge cases</p>
              <ul>
                <li>Lost the registration? A registry agent can generally sort ownership using the VIN and your ID.</li>
                <li>Estate vehicle? You will need executor documentation.</li>
                <li>Loan still on it? The lien must be cleared through Alberta&apos;s Personal Property Registry first.</li>
                <li>If the vehicle is not registered to you, we cannot legally buy it.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section comparison-section">
          <div className="site-shell comparison-shell">
            <div className="comparison-copy">
              <p className="eyebrow">Removal Costs You Nothing</p>
              <h2>No towing fee. No admin fee. No disposal fee.</h2>
              <p>
                Any operator who quotes you a removal price, then deducts towing on arrival, is
                not doing you a favour. You should be paid for a junk car, not billed for it.
              </p>
            </div>
            <div className="comparison-list">
              {noCostItems.map((item) => (
                <div key={item} className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="FAQ"
              title="The removal-specific questions people usually ask first."
              description="Access, timing, ownership, and surface concerns handled up front."
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
              <p className="eyebrow">Book A Removal</p>
              <h2>All quadrants of Calgary and surrounding towns.</h2>
              <p className="cta-band-copy">
                Call or text {siteConfig.phoneDisplay} · Open 24/7 · Related: Scrap car removal ·
                How scrap value is calculated · Free towing
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
