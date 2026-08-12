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
  "Sell privately, trade in, or recycle: know the difference",
  "Bill of sale, ID check, and payment before loading",
  "No towing, admin, paperwork, or disposal fees",
];

const trustItems = [
  { title: "Free quote", icon: "◎" },
  { title: "No hidden fees", icon: "↗" },
  { title: "Paid before loading", icon: "✓" },
  { title: "Traceable payment", icon: "$" },
];

const optionsItems = [
  {
    title: "Sell it privately",
    copy: "Usually the most money if the vehicle runs, drives, and would pass a safety or out-of-province inspection.",
  },
  {
    title: "Trade it in",
    copy: "Convenient if the vehicle still has retail life, but older, high-kilometre, or non-running units often get a token number.",
  },
  {
    title: "Sell to a licensed recycler",
    copy: "The right option when it is non-running, uneconomic to repair, written off, or rusted through.",
  },
];

const processSteps = [
  {
    title: "Step 1 — The quote",
    copy: "Call or text with year, make, model, condition, whether it is complete, and where it is. You get a firm number in minutes.",
  },
  {
    title: "Step 2 — Booking",
    copy: "Pick a window and tell us about access: parkade clearance, alley width, whether it rolls and steers, and whether it is snowed in.",
  },
  {
    title: "Step 3 — Prepare",
    copy: "Remove personal items, take off your plates, and have your registration and photo ID ready.",
  },
  {
    title: "Step 4 — Pickup",
    copy: "We confirm the vehicle and VIN, check ID, and complete the bill of sale. Both parties sign and you keep a copy.",
  },
  {
    title: "Step 5 — Payment",
    copy: "Paid before the vehicle is loaded. Not after. Not once it is weighed.",
  },
  {
    title: "Step 6 — Loaded and gone",
    copy: "Typical time on site is 15 to 30 minutes.",
  },
  {
    title: "Step 7 — Your two follow-ups",
    copy: "Return your plates to cancel the registration and cancel your insurance the same day using the bill of sale as proof.",
  },
];

const whatYouNeed = [
  "Proof of ownership — Alberta registration or title in your name",
  "Valid government-issued photo ID — registered owner, 18 or older",
];

const complicationItems = [
  "Lost registration: a registry agent can establish ownership from the VIN.",
  "Estate vehicle: executor documentation is required.",
  "Company-owned vehicle: signing authority is required.",
  "Outstanding lien: it must be discharged through Alberta's Personal Property Registry first.",
  "If it is not registered to you at all, no one can lawfully buy it from you.",
];

const paymentItems = [
  "At pickup, before loading, by e-transfer.",
  "Traceable payment is a legal requirement in this industry and better for you because it is timestamped and provable.",
  "You should never pay towing, admin, paperwork, disposal, or environmental fees.",
];

const warningSigns = [
  {
    title: "A quote noticeably higher than everyone else",
    copy: "This is often the setup for a much lower take-it-or-leave-it number once the truck is already in your driveway.",
  },
  {
    title: "Reluctance to quote by phone",
    copy: "We will have to see it often means we will price it once you are committed.",
  },
  {
    title: "A towing or admin fee appearing at pickup",
    copy: "If it was not disclosed upfront, it is not legitimate.",
  },
  {
    title: "No bill of sale",
    copy: "Without it, you have no proof the vehicle left your hands.",
  },
  {
    title: "No interest in your ID or ownership",
    copy: "A licensed Alberta buyer is legally required to verify both.",
  },
  {
    title: "Pressure to accept cash",
    copy: "Beyond the legal issue, untraceable payment leaves you with no proof of what you were paid.",
  },
  {
    title: "No verifiable business identity",
    copy: "No legal name, no address, no profile, and no reviews usually means avoid them.",
  },
];

const faqItems = [
  {
    question: "How much will I get?",
    answer: "It depends on weight, the steel market, the converter, and completeness.",
  },
  {
    question: "Is the quote free?",
    answer: "Yes, and there is no obligation.",
  },
  {
    question: "Can I sell without the registration?",
    answer: "Not as-is. Take your ID to a registry agent to establish ownership first.",
  },
  {
    question: "Do I need to be there?",
    answer: "Normally yes. The registered owner signs and shows ID.",
  },
  {
    question: "What if I change my mind at pickup?",
    answer: "Decline and we leave. No fee, no argument.",
  },
  {
    question: "How fast?",
    answer: "Often same-day, usually within 24 hours.",
  },
  {
    question: "Do you buy write-offs I kept after an insurance payout?",
    answer: "Yes. If you retained the salvage, it is yours to sell.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Cash For Junk Cars Calgary | How It Works, No Hidden Fees",
  description:
    "How selling a junk car in Calgary actually works — your options compared, what you need, how you're paid, and how to spot a bad buyer. Call (403) 837-1550.",
  path: "/services/cash-for-junk-cars-calgary",
});

export default function CashForJunkCarsCalgaryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-21.jpeg"
              alt="Cash for junk cars service in Calgary"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Cash For Junk Cars Calgary</p>
              <h1>Cash for Junk Cars Calgary — How It Works, Start to Finish</h1>
              <p className="hero-support">
                Before you sell a junk car, it is worth ten minutes understanding the transaction.
                This page covers whether you should sell at all, exactly how the process works,
                what you need, how you are paid, and how to recognise an operator who is going to
                waste your afternoon.
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
                <p className="eyebrow">First: Should You Scrap It At All?</p>
                <h2>Three honest options, and scrapping is not always the right one.</h2>
                <p className="section-body-copy">
                  If the vehicle runs, drives, and would pass inspection, private sale usually
                  beats any recycler offer. When it does not, the tradeoffs change quickly.
                </p>
                <ul className="promo-banner-points">
                  {optionsItems.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}.</strong> {item.copy}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="promo-banner-frame">
                <Image
                  src="/images/junkmycar-banner.png"
                  alt="Junk My Car YYC process banner for Calgary junk car sales"
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
              eyebrow="How The Transaction Works"
              title="From quote to pickup to your two follow-ups."
              description="This is what should happen in a clean, legitimate junk-car sale."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {processSteps.map((item) => (
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
                src="/jmc-imgs/purchase-22.jpeg"
                alt="Junk car pickup example in Calgary"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">What You Need</p>
              <h2>ID, ownership, and a few common edge cases.</h2>
              <p className="section-body-copy">
                We provide the bill of sale. A legitimate licensed buyer does not skip ID and
                ownership verification.
              </p>
              <ul className="promo-banner-points">
                {whatYouNeed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="promo-banner-points">
                {complicationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell">
            <SectionIntro
              eyebrow="How You Get Paid"
              title="At pickup, before loading, by e-transfer."
              description="Traceable payment is not a preference. It is part of doing this properly."
            />
            <div className="steps-grid">
              {paymentItems.map((item, index) => (
                <article key={item} className="step-card">
                  <div className="step-card-top">
                    <span className="step-card-number">{String(index + 1).padStart(2, "0")}</span>
                    <StepBadge type={index === 0 ? "phone" : index === 1 ? "file" : "truck"} />
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
              <p className="eyebrow">How To Spot A Buyer Who&apos;ll Waste Your Day</p>
              <h2>These are the warning signs that usually lead to renegotiation or worse.</h2>
              <div className="value-ladder">
                {warningSigns.map((item) => (
                  <div key={item.title} className="value-ladder-row">
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="worth-panel">
              <p>What a legitimate buyer does instead</p>
              <ul>
                <li>Quotes by phone and honours it.</li>
                <li>Tells you where the vehicle goes.</li>
                <li>Asks for ID and ownership.</li>
                <li>Provides a signed bill of sale.</li>
                <li>Pays before loading.</li>
                <li>Tells you if selling privately would serve you better.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="FAQ"
              title="The common questions before you book."
              description="Quote, speed, registration, and payout handled upfront."
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
              <p className="eyebrow">Get Your Quote</p>
              <h2>All of Calgary and surrounding towns.</h2>
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
