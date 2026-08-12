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

function StepBadge({ type }: { type: "file" | "gear" | "truck" }) {
  return (
    <span className="icon-badge step-badge" aria-hidden="true">
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
      {type === "gear" ? (
        <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none">
          <path
            d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m19 12-1.4.8.1 1.6-1.6.9-.9 1.4-1.6-.1L12 19l-1.6-1.4-1.6.1-.9-1.4-1.6-.9.1-1.6L5 12l1.4-.8-.1-1.6 1.6-.9.9-1.4 1.6.1L12 5l1.6 1.4 1.6-.1.9 1.4 1.6.9-.1 1.6Z"
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
  "Licensed buyer using certified Alberta facilities",
  "Bill of sale provided at pickup",
  "Proper depollution and documented disposal",
];

const trustItems = [
  { title: "Licensed buyer", icon: "◎" },
  { title: "Certified facilities", icon: "↗" },
  { title: "Bill of sale provided", icon: "✓" },
  { title: "Proof on request", icon: "$" },
];

const honestTestItems = [
  {
    title: "The repair costs more than the car is worth",
    copy: "Engine, transmission, or major front-end work on a vehicle worth $1,500 is usually the dividing line.",
  },
  {
    title: "The frame or structure is rusted through",
    copy: "Rockers, subframe, or brake lines gone means a shop will not certify it and it is not safe.",
  },
  {
    title: "It is an insurance write-off you kept",
    copy: "Hail, collision, or flood. The insurer already made this calculation.",
  },
  {
    title: "It failed inspection and the list is longer than the value",
    copy: "That is usually the point where repair stops making sense.",
  },
  {
    title: "Water reached the cabin floor or above",
    copy: "Corrosion inside connectors and modules keeps working for years. That is why flood vehicles are often total losses.",
  },
  {
    title: "It has not run in years",
    copy: "If it would need brakes, fuel system work, a battery, and tires before moving on its own, it is usually scrap.",
  },
];

const processStages = [
  {
    title: "Stage 1 — Depollution",
    copy: "Fuel, engine oil, transmission and gear oil, coolant, brake fluid, power steering fluid, refrigerant, battery, and mercury switches are removed first.",
  },
  {
    title: "Stage 2 — Parts recovery",
    copy: "Reusable components are inventoried rather than shredded. A complete vehicle is worth more than a stripped one for this reason.",
  },
  {
    title: "Stage 3 — Metals separation",
    copy: "Catalytic converters and non-ferrous metals such as aluminium, radiators, and copper wiring are handled separately.",
  },
  {
    title: "Stage 4 — Shredding and steel recovery",
    copy: "The remaining shell is shredded and the steel re-enters the supply chain.",
  },
];

const whyItMattersItems = [
  {
    title: "Hazardous fluids are the real issue",
    copy: "A single end-of-life vehicle can hold several litres of oil, coolant, brake fluid, and stale fuel.",
  },
  {
    title: "Calgary bylaws already cover this",
    copy: "Exposed storage of industrial fluid on private property is prohibited, so a leaking derelict is a bylaw problem too.",
  },
  {
    title: "Unlicensed operators skip the expensive step",
    copy: "Proper depollution requires containment, licensed disposal, and records. That cost is invisible once the car is on the trailer.",
  },
  {
    title: "Alberta regulates the industry directly",
    copy: "Scrap metal buyers operate under provincial identification, record, payment, retention, and reporting rules, plus municipal transaction-recording requirements in Calgary.",
  },
];

const writingItems = [
  "A signed bill of sale showing the date, both parties, the vehicle and VIN, the price, and that it is sold for dismantling and recycling",
  "One copy for you and one for us",
  "Disposal documentation on request for business, fleet, property management, or compliance files",
];

const acceptsItems = [
  "Complete and partial vehicles, non-runners, mechanically dead vehicles, and rust write-offs",
  "Hail and collision write-offs, flood and water-damaged vehicles, and failed-inspection vehicles",
  "Abandoned and long-parked vehicles, unfinished projects, stripped shells, and estate vehicles with authorization",
  "Fleet and commercial units, farm vehicles, and acreage vehicles",
];

const afterPickupSteps = [
  {
    title: "Return your plates to an Alberta registry agent",
    copy: "Plates belong to you, not the vehicle. This cancels the registration, may refund unused fees, and protects you if those plates ever surface on another car.",
  },
  {
    title: "Cancel your insurance the same day",
    copy: "Use the bill of sale as proof of sale and ask about a refund on the unused premium.",
  },
  {
    title: "Do not skip either",
    copy: "If you do, the vehicle can remain registered to you in the record with the liability that carries.",
  },
];

const faqItems = [
  {
    question: "Is scrap car removal free?",
    answer: "Yes, and we pay you. Towing, paperwork, and disposal cost you nothing.",
  },
  {
    question: "How is a scrap car different from a junk car?",
    answer: "Practically, they overlap. Scrap emphasizes material value rather than vehicle use. Either way, we buy it.",
  },
  {
    question: "Do you buy vehicles that are already partly stripped?",
    answer: "Yes, though a stripped shell is worth less than a complete vehicle. Tell us what is missing so the quote holds.",
  },
  {
    question: "Will my car definitely be recycled and not resold?",
    answer: "Vehicles we buy for scrapping are dismantled and recycled, not returned to the road.",
  },
  {
    question: "Do you take flood-damaged cars?",
    answer: "Yes. Mention it so we can plan for contaminated fluids and silt.",
  },
  {
    question: "Can you provide proof of disposal?",
    answer: "Yes. Ask when you call.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Scrap Car Removal Calgary | Licensed & Documented",
  description:
    "Scrap car removal in Calgary by a licensed recycler. Proper depollution, certified facilities, bill of sale provided. Call (403) 837-1550 for a free quote.",
  path: "/services/scrap-car-removal-calgary",
});

export default function ScrapCarRemovalCalgaryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/jmc-imgs/purchase-24.jpeg"
              alt="Scrap car removal service in Calgary"
              fill
              priority
              sizes="100vw"
              className="hero-image hero-image-local"
            />
          </div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Scrap Car Removal Calgary</p>
              <h1>Scrap Car Removal Calgary — Recycled Properly, Documented Properly</h1>
              <p className="hero-support">
                Anyone with a trailer can take your car away. Far fewer can tell you what legally
                has to happen to it next. We scrap vehicles across Calgary through certified
                Alberta facilities, hand you a signed bill of sale on the spot, and can document
                the disposal if you need it.
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
                <p className="eyebrow">Is It Actually Scrap?</p>
                <h2>An honest test before you accept a scrap quote.</h2>
                <p className="section-body-copy">
                  We would rather you make the right decision than the fast one. If it starts,
                  drives, and would pass an inspection, list it privately first. You will beat any
                  scrap offer, and we will tell you so on the phone.
                </p>
                <ul className="promo-banner-points">
                  {honestTestItems.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}.</strong> {item.copy}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="promo-banner-frame">
                <Image
                  src="/images/junkmycar-banner.png"
                  alt="Junk My Car YYC promotional banner for Calgary scrap car removal"
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
              eyebrow="What Actually Happens"
              title="Four stages, in this order, at certified Alberta facilities."
              description="The difference between a licensed recycler and a random trailer starts after pickup."
            />
            <div className="vehicle-grid vehicle-grid-staggered">
              {processStages.map((item) => (
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
                src="/jmc-imgs/purchase-23.jpeg"
                alt="Scrap vehicle pickup and recycling example in Calgary"
                width={1200}
                height={1600}
                className="pickup-photo-image"
              />
            </div>

            <div className="pickup-photo-copy">
              <p className="eyebrow">Why Licensed Matters</p>
              <h2>Using a licensed buyer actually matters in Calgary.</h2>
              <p className="section-body-copy">
                Ask any buyer two questions: where does the vehicle go, and will you give me a
                signed bill of sale? A legitimate operator answers both immediately.
              </p>
              <ul className="promo-banner-points">
                {whyItMattersItems.map((item) => (
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
              eyebrow="What You Get In Writing"
              title="Documented properly, not just removed."
              description="Keep the paperwork. It is what proves ownership transferred and your liability ended."
            />
            <div className="steps-grid">
              {writingItems.map((item, index) => (
                <article key={item} className="step-card">
                  <div className="step-card-top">
                    <span className="step-card-number">{String(index + 1).padStart(2, "0")}</span>
                    <StepBadge type={index === 0 ? "file" : index === 1 ? "truck" : "gear"} />
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
              <p className="eyebrow">What We Accept For Scrapping</p>
              <h2>Complete, partial, commercial, estate, and long-parked vehicles.</h2>
              <div className="value-ladder">
                {acceptsItems.map((item) => (
                  <div key={item} className="value-ladder-row">
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="worth-panel">
              <p>Commercial unit note</p>
              <ul>
                <li>Tell us in advance if a commercial unit carried fuel, chemicals, produced water, or drilling fluid.</li>
                <li>Mention mounted tanks or residual contents before dispatch.</li>
                <li>That rarely stops the job. It changes the handling and disposal plan.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section comparison-section">
          <div className="site-shell comparison-shell">
            <div className="comparison-copy">
              <p className="eyebrow">After Pickup</p>
              <h2>Your two remaining jobs are plates and insurance.</h2>
              <p>
                Remove your plates before we arrive, then use the bill of sale to cancel
                insurance the same day.
              </p>
            </div>
            <div className="comparison-list">
              {afterPickupSteps.map((item) => (
                <div key={item.title} className="comparison-row">
                  <IconBadge>✓</IconBadge>
                  <p>
                    <strong>{item.title}.</strong> {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="FAQ"
              title="The questions that matter before you scrap it."
              description="Cost, documentation, partial vehicles, and what happens after pickup."
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
              <p className="eyebrow">Arrange Scrap Car Removal</p>
              <h2>Calgary and surrounding towns.</h2>
              <p className="cta-band-copy">
                Call or text {siteConfig.phoneDisplay} · Open 24/7 · Related: Junk car removal ·
                Cash for scrap cars · Cash for junk cars
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
