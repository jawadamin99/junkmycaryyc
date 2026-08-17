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

const heroBullets = ["Flood and water-damaged vehicles welcome", "Free towing across High River and Foothills County", "Cash or e-transfer at pickup"];
const trustItems = [{ title: "Water-damage accepted", icon: "◎" }, { title: "County and ranch pickup", icon: "↗" }, { title: "Cash at pickup", icon: "$" }, { title: "No keys needed", icon: "✓" }];
const floodItems = [
  { title: "Electronics do not recover", copy: "Once water reaches the cabin, corrosion starts inside connectors and continues for months or years." },
  { title: "Corrosion and mould keep working", copy: "Water wicks into seat foam, carpet underlay, sound deadening, and body cavities." },
  { title: "That is why insurers total them", copy: "Repair cost plus long-term electrical risk usually exceeds the vehicle's value." },
  { title: "That is also why private resale is a bad idea", copy: "Flood history is a material fact, and scrapping through a licensed recycler ends the story cleanly." },
];
const beyondFloodItems = [
  { title: "Highwood River flood risk", copy: "Flood vehicles still turn up from basements, low garages, and riverside lots." },
  { title: "Foothills weather", copy: "Chinooks and de-icer rot frames and brake lines." },
  { title: "Hail", copy: "Storms off the foothills total vehicles in minutes." },
  { title: "Agricultural and ranch vehicles", copy: "Service trucks and grain haulers get parked for years in shelterbelts." },
  { title: "Commuter mileage", copy: "Highway 2 into Calgary retires plenty of cars while the body still looks fine." },
];
const serviceAreas = [
  { label: "High River Communities", areas: "Downtown and the Macleod Trail corridor, Sunrise Meadows, Montrose, Hampton Hills, Vista Mirage, Emerson Lake Estates, Highwood Village, Sunshine Lake, Wallaceville, Riverside, Spitzee, Cayley-area properties, and the industrial areas." },
  { label: "Foothills County And Nearby", areas: "Acreages and ranches throughout Foothills County, plus Okotoks, Diamond Valley, Nanton, Cayley, Blackie, Aldersyde, Longview, and Claresholm." },
];
const vehicleTypes = ["Flood and water-damaged vehicles", "Insurance write-offs of every category", "Junk and scrap cars", "Non-runners", "Hail and collision damage", "Farm and ranch trucks", "Grain and feed haulers", "Estate, project, and missing-paperwork files"];
const steps = [
  { title: "Call or text", copy: `Share the year, make, model, and condition with ${siteConfig.phoneDisplay}. Mention water damage if it applies.` },
  { title: "Free pickup", copy: "We schedule towing at your home, farm, or storage lot." },
  { title: "Paid", copy: "Cash or e-transfer at pickup, bill of sale provided, vehicle hauled away." },
];
const worthFactors = [
  { label: "Live scrap steel price", note: "The market still sets the floor." },
  { label: "Vehicle weight", note: "Flood files are often valued mostly for steel and surviving mechanicals." },
  { label: "Reusable parts", note: "Mechanicals, glass, and body panels may still carry value." },
  { label: "Condition", note: "Water in the cabin changes the whole valuation." },
];
const processItems = [
  { title: "Contaminated fluids and silt", copy: "Flood vehicles hold more than their own fluids. All of it needs proper handling." },
  { title: "Depollution is more involved", copy: "Fuel, water-fouled oil, coolant, the battery, and refrigerant all need controlled removal." },
  { title: "Limited parts recovery", copy: "Electrical components are written off entirely, while some mechanical and body parts may still be recoverable." },
  { title: "Then steel", copy: "The shell is shredded and recycled, which is where most flood-vehicle value often sits." },
];
const faqItems = [
  { question: "Do you really buy flood-damaged cars?", answer: "Yes. Water damage changes the valuation, but it does not scare us off." },
  { question: "My car was written off but I kept it. Can I sell it to you?", answer: "Yes, if you retained the salvage and it is in your name." },
  { question: "Do you buy vehicles that have sat for years?", answer: "Yes, including ones with flat tires or sunk into the ground." },
  { question: "Do you come out to ranches and acreages?", answer: "Yes, throughout Foothills County, gravel access included." },
  { question: "Can you take several at once?", answer: "Yes. Give us a count and we will quote the group." },
  { question: "Payment?", answer: "Cash or e-transfer at pickup." },
];

export const metadata: Metadata = buildMetadata({
  title: "Junk Car Removal High River | Cash For Cars, Any State",
  description: "Junk car removal in High River — cash paid on the spot for any vehicle, including flood and water-damaged cars. Free towing. Call (403) 837-1550 for a free quote.",
  path: "/cash-for-cars-high-river",
});

export default function HighRiverPage() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero-section">
        <div className="hero-media"><Image src="/jmc-imgs/purchase-19.jpeg" alt="Junk car removal service for High River vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div>
        <div className="hero-overlay" />
        <div className="site-shell hero-shell">
          <div className="hero-copy">
            <p className="eyebrow">Junk Car Removal High River</p>
            <h1>Junk Car Removal High River — Including Water-Damaged Vehicles</h1>
            <p className="hero-support">High River knows flood vehicles better than most towns. We buy them, along with every other kind of junk or written-off vehicle, through the same <a className="content-link" href="/">cash for cars Calgary</a> process and nearby <a className="content-link" href="/cash-for-cars-okotoks">Okotoks cash for cars</a> coverage.</p>
            <ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a>
          </div>
          <div className="hero-form-wrap"><HeroQuoteForm /></div>
        </div>
      </section>
      <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
      <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">Flood And Water Damage</p><h2>Why insurers write these cars off.</h2><p className="section-body-copy">This matters because it explains why scrapping is usually the right answer for a water-damaged vehicle.</p><ul className="promo-banner-points">{floodItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for High River junk car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
      <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local junk car pickup example for a High River vehicle owner" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Beyond Floods</p><h2>What else retires vehicles here.</h2><p className="section-body-copy">High River has flood history, but hail, foothills weather, ranch duty, and commuter mileage all play a role too.</p><ul className="promo-banner-points">{beyondFloodItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div></div></section>
      <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Where We Pick Up" title="Across High River, Foothills County, and nearby ranch country." description="Town properties, county acreages, and multi-vehicle sites all fit the same removal flow." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
      <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Remove And Buy" title="Flood vehicles, ranch trucks, hail write-offs, and long-sitters." description="All makes, gas and diesel, if it is finished for you, we want to hear about it." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
        {item === "Flood and water-damaged vehicles" && "Vehicles other buyers avoid are exactly the files we know how to price."}
        {item === "Insurance write-offs of every category" && "Retained salvage from flood, hail, and collision claims accepted."}
        {item === "Junk and scrap cars" && "Old cars beyond repair or no longer worth fixing."}
        {item === "Non-runners" && "No-start, no-keys, flat-tire, or sunken-in-place files."}
        {item === "Hail and collision damage" && "Foothills storms and highway write-offs are common."}
        {item === "Farm and ranch trucks" && "Rural property units handled where they sit."}
        {item === "Grain and feed haulers" && "Heavy old trucks still carry real scrap value."}
        {item === "Estate, project, and missing-paperwork files" && "Unusual ownership and paperwork situations handled case by case."}
      </p></article>)}</div></div></section>
      <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Mention the water damage, book the tow, get paid." description="Short process, straightforward pricing, and no problem if the vehicle does not run." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
      <section className="section section-dark"><div className="site-shell worth-section"><div><p className="eyebrow">What&apos;s It Worth?</p><h2>Flood vehicles still have real value, but for different reasons than a normal runner.</h2><div className="value-ladder">{worthFactors.map((factor) => <div key={factor.label} className="value-ladder-row"><strong>{factor.label}</strong><span>{factor.note}</span></div>)}</div></div><div className="worth-panel"><p>Water-damage reality</p><ul><li>Cabin water usually wipes out interior and electronics value</li><li>Scrap weight plus surviving mechanical value still matters</li><li>It is worth more sold now than left where it sits</li><li>Live quote only</li></ul><a href={siteConfig.phoneHref} className="text-link-light">Call {siteConfig.phoneDisplay}</a></div></div></section>
      <section className="section section-light compliance-section"><div className="site-shell compliance-shell"><div className="compliance-copy"><p className="eyebrow">Alberta Requirements</p><h2>Normal ownership paperwork still applies, and insurance-owned salvage is its own file.</h2><div className="compliance-list"><div className="comparison-row"><IconBadge>ID</IconBadge><p>Bring Alberta registration or title in your name, plus valid photo ID. Registered owner, 18+.</p></div><div className="comparison-row"><IconBadge>✓</IconBadge><p>We provide the signed bill of sale.</p></div><div className="comparison-row"><IconBadge>AB</IconBadge><p>After pickup, return the plates and cancel insurance. Retained salvage is sellable, insurer-owned salvage is not yours to sell.</p></div></div></div><div className="worth-panel compliance-panel"><p>Handled properly</p><ul><li>Water-damaged vehicles need more careful depollution than ordinary scrap</li><li>Scrap Metal Dealers and Recyclers Regulation followed properly</li><li>Environmental Protection and Enhancement Act handling matters especially for contaminated flood vehicles</li><li>Licensed disposal avoids a flood vehicle being quietly resold</li></ul></div></div></section>
      <section className="section"><div className="site-shell"><SectionIntro eyebrow="How A Water-Damaged Vehicle Is Processed" title="Flood cars are not ordinary scrap." description="The handling standard is different because contaminated water, silt, and damaged electronics change the whole disposal flow." /><div className="vehicle-grid">{processItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
      <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for High River sellers." description="Flood questions, salvage questions, ranch access, and payment handled up front." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
      <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your High River Quote</p><h2>High River and Foothills County covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
    </main>
    <SiteFooter />
    <MobileActionBar />
  </>;
}
