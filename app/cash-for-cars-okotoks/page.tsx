import Image from "next/image";
import type { Metadata } from "next";
import HeroQuoteForm from "../components/hero-quote-form";
import MobileActionBar from "../components/mobile-action-bar";
import SectionIntro from "../components/section-intro";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";
import { siteConfig } from "../lib/site";

function IconBadge({ children }: { children: React.ReactNode }) { return <span className="icon-badge">{children}</span>; }
function StepBadge({ type }: { type: "phone" | "arrow" | "check" }) {
  return <span className="icon-badge step-badge" aria-hidden="true">{type === "phone" ? <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none"><path d="M6.8 4.5h2.5l1.2 3.6-1.6 1.5a14.2 14.2 0 0 0 5.5 5.5l1.5-1.6 3.6 1.2v2.5c0 .8-.6 1.4-1.4 1.4A14.8 14.8 0 0 1 4.5 5.9c0-.8.6-1.4 1.4-1.4Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}{type === "arrow" ? <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}{type === "check" ? <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none"><path d="M5 12.5 9.2 17 19 7.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}</span>;
}

const heroBullets = ["Running or not, we remove junk cars across Okotoks and Foothills County", "Free towing with cash paid on the spot", "Acreage and multi-vehicle clearouts welcome"];
const trustItems = [{ title: "Okotoks and Foothills coverage", icon: "◎" }, { title: "Acreage clearouts", icon: "↗" }, { title: "Cash or e-transfer", icon: "$" }, { title: "No keys needed", icon: "✓" }];
const problemItems = [
  { title: "Third-vehicle buildup", copy: "Households often run two, three, or four vehicles. When one gets replaced, the old one just gets parked." },
  { title: "Acreage accumulation", copy: "Foothills County properties hold derelicts for years, and we often clear them as a group." },
  { title: "Community covenants", copy: "A dead vehicle on the pad or street draws complaints and bylaw attention fast in newer areas." },
  { title: "Winter storage that becomes permanent", copy: "A vehicle parked for one winter often refuses to restart in spring, then sits for years." },
  { title: "Hail and highway write-offs", copy: "Foothills storms and Highway 2A collisions create plenty of salvage files." },
];
const serviceAreas = [
  { label: "Okotoks Communities", areas: "Cimarron, Cimarron Vista, Cimarron Grove, Cimarron Meadows, Drake Landing, Air Ranch, Crystal Shores, Crystal Green, Sheep River Ridge, Suntree, Westmount, Woodhaven, Tower Hill, D'Arcy Ranch, Wedderburn, Downey Ridge, Mountainview, Westridge, Rosemont, Central Heights, and Downtown Okotoks." },
  { label: "Foothills County And Nearby", areas: "Acreages and rural properties across Foothills County, plus Calgary, High River, Diamond Valley, Priddis, Millarville, De Winton, Heritage Pointe, and Aldersyde." },
];
const vehicleTypes = ["Junk and scrap cars", "Non-running vehicles", "Blown engines and transmissions", "Hail and collision write-offs", "High-kilometre commuter cars", "Half-tons and work trucks", "Acreage and hobby-farm vehicles", "Project, estate, and missing-paperwork files"];
const steps = [
  { title: "Quote", copy: `Call or text ${siteConfig.phoneDisplay} with the year, make, model, and rough condition. Firm number in minutes.` },
  { title: "Pickup", copy: "Free towing scheduled at a time that suits you, same day if needed." },
  { title: "Paid", copy: "Cash or e-transfer at pickup, signed bill of sale, vehicle gone." },
];
const worthFactors = [
  { label: "Live scrap steel market", note: "The market changes constantly." },
  { label: "Vehicle weight", note: "A heavy old truck can beat a tidy compact." },
  { label: "Reusable parts", note: "Converters, wheels, and working driveline parts add value." },
  { label: "Overall condition", note: "Complete vehicles are worth more than stripped ones." },
  { label: "Model demand", note: "Some vehicles simply have stronger salvage demand." },
];
const acreageItems = [
  { title: "Inventory call", copy: "Tell us how many vehicles, what they are, whether they roll, and what the access looks like." },
  { title: "Group quote", copy: "We price the lot rather than each vehicle, which nearly always beats individual pickups." },
  { title: "Paperwork check", copy: "We tell you up front what is needed for each vehicle so you make one registry trip, not four." },
  { title: "One organized visit", copy: "We bring equipment for the ground conditions and clear everything in a single trip." },
];
const faqItems = [
  { question: "Do you remove junk cars that do not run?", answer: "Yes. Most of what we haul has not run in years." },
  { question: "Is removal and towing free?", answer: "Always, across Okotoks and Foothills County." },
  { question: "I have three derelicts on my acreage. Can you take them all?", answer: "Yes. Tell us the count and we will quote the group and do it in one trip." },
  { question: "What if it is sunk into the ground or has no wheels?", answer: "Tell us when you call and we will bring a winch." },
  { question: "How soon can you come?", answer: "Often same-day, usually within 24 hours." },
  { question: "How am I paid?", answer: "Cash or e-transfer at pickup, before loading." },
];

export const metadata: Metadata = buildMetadata({
  title: "Junk Car Removal Okotoks | Cash For Cars, Free Towing",
  description: "Junk car removal in Okotoks with cash paid on the spot. Any condition, running or not, free towing to every community. Call (403) 837-1550 for a free quote today.",
  path: "/cash-for-cars-okotoks",
});

export default function OkotoksPage() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero-section">
        <div className="hero-media"><Image src="/jmc-imgs/purchase-26.jpeg" alt="Junk car removal service for Okotoks vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div>
        <div className="hero-overlay" />
        <div className="site-shell hero-shell">
          <div className="hero-copy">
            <p className="eyebrow">Junk Car Removal Okotoks</p>
            <h1>Junk Car Removal Okotoks — Cash Paid, Towing Included</h1>
            <p className="hero-support">Okotoks households accumulate extra vehicles fast. When one finally becomes a chore nobody wants to start, we remove it and pay cash for it, whether you started on <a className="content-link" href="/">cash for cars Calgary</a> or need <a className="content-link" href="/services/junk-car-removal-calgary">junk car removal south of Calgary</a>.</p>
            <ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a>
          </div>
          <div className="hero-form-wrap"><HeroQuoteForm /></div>
        </div>
      </section>
      <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
      <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">The Okotoks Problem</p><h2>The third vehicle nobody deals with.</h2><p className="section-body-copy">Commuter-town growth creates a specific pattern: replaced vehicles get parked, acreage derelicts accumulate, and winter storage turns permanent.</p><ul className="promo-banner-points">{problemItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul><div className="promo-proof-grid"><div className="promo-proof-card"><strong>20 Years</strong><span>In the region</span></div><div className="promo-proof-card"><strong>1000+</strong><span>Google reviews</span></div><div className="promo-proof-card"><strong>5.0★</strong><span>Average rating</span></div></div></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Okotoks junk car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
      <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local junk car pickup example for an Okotoks vehicle owner" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Every Community In Okotoks</p><h2>In-town pads, county acreages, and group clearouts all covered.</h2><p className="section-body-copy">You do not drive a dead vehicle to us. We come where it sits.</p><ul className="promo-banner-points"><li>Town lots, driveways, side yards, farms, and shelterbelts</li><li>Foothills County access handled case by case</li><li>Nearby areas folded into the same pickup network</li></ul></div></div></section>
      <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Community Coverage" title="Pickup across Okotoks and Foothills County." description="Tight lots, acreage access, and multi-vehicle properties are all workable." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
      <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Remove And Buy" title="Cars, trucks, projects, and acreage vehicles." description="Every make, gas or diesel, if it is done for you, we want to hear about it." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
        {item === "Junk and scrap cars" && "Old vehicles beyond repair or no longer worth fixing."}
        {item === "Non-running vehicles" && "No keys, seized, four flat tires, or sunk into the dirt."}
        {item === "Blown engines and transmissions" && "Mechanical failures that end the vehicle's economic life."}
        {item === "Hail and collision write-offs" && "Retained salvage and total-loss files accepted."}
        {item === "High-kilometre commuter cars" && "Vehicles worn out by Highway 2A and Macleod Trail commuting."}
        {item === "Half-tons and work trucks" && "Heavier vehicles often bring better scrap value."}
        {item === "Acreage and hobby-farm vehicles" && "Rural property units handled where they sit."}
        {item === "Project, estate, and missing-paperwork files" && "Unfinished builds and unusual paperwork situations guided properly."}
      </p></article>)}</div></div></section>
      <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Quote, pickup, paid." description="Short process, firm number, and same-day removal when timing allows." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
      <section className="section section-dark"><div className="site-shell worth-section"><div><p className="eyebrow">What&apos;s My Junk Car Worth?</p><h2>Weight, steel price, salvageable parts, and condition set the number.</h2><div className="value-ladder">{worthFactors.map((factor) => <div key={factor.label} className="value-ladder-row"><strong>{factor.label}</strong><span>{factor.note}</span></div>)}</div></div><div className="worth-panel"><p>What to expect</p><ul><li>Heavy trucks can beat tidy small cars on value</li><li>Live quote only because markets move</li><li>The quote holds unless the vehicle is materially different from described</li><li>Free quote, no obligation</li></ul><a href={siteConfig.phoneHref} className="text-link-light">Call {siteConfig.phoneDisplay}</a></div></div></section>
      <section className="section section-light compliance-section"><div className="site-shell compliance-shell"><div className="compliance-copy"><p className="eyebrow">The Alberta Paperwork</p><h2>Ownership and ID first, then plates and insurance after the pickup.</h2><div className="compliance-list"><div className="comparison-row"><IconBadge>ID</IconBadge><p>Bring Alberta registration or title in your name, plus valid photo ID. Registered owner, at least 18.</p></div><div className="comparison-row"><IconBadge>✓</IconBadge><p>We provide the signed bill of sale.</p></div><div className="comparison-row"><IconBadge>AB</IconBadge><p>After pickup, return the plates and cancel insurance the same day.</p></div></div></div><div className="worth-panel compliance-panel"><p>Handled properly</p><ul><li>Estate files and missing paperwork are routine for us</li><li>Scrap Metal Dealers and Recyclers Regulation followed properly</li><li>Fluids handled under the Environmental Protection and Enhancement Act</li><li>Important around the Sheep River watershed</li></ul></div></div></section>
      <section className="section"><div className="site-shell"><SectionIntro eyebrow="Clearing An Acreage" title="How a multi-vehicle Foothills County call actually goes." description="People put it off because they expect it to be complicated. Usually it is not." /><div className="vehicle-grid">{acreageItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
      <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for Okotoks sellers." description="Timing, access, acreage groups, and payment handled before pickup day." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
      <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your Okotoks Quote</p><h2>Okotoks and Foothills County covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
    </main>
    <SiteFooter />
    <MobileActionBar />
  </>;
}
