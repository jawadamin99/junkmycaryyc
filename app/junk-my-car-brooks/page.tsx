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
function StepBadge({ type }: { type: "phone" | "arrow" | "check" }) { return <span className="icon-badge step-badge" aria-hidden="true">{type === "phone" ? <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none"><path d="M6.8 4.5h2.5l1.2 3.6-1.6 1.5a14.2 14.2 0 0 0 5.5 5.5l1.5-1.6 3.6 1.2v2.5c0 .8-.6 1.4-1.4 1.4A14.8 14.8 0 0 1 4.5 5.9c0-.8.6-1.4 1.4-1.4Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}{type === "arrow" ? <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}{type === "check" ? <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none"><path d="M5 12.5 9.2 17 19 7.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}</span>; }

const heroBullets = ["Cash for cars, trucks, and work vehicles across Brooks and Newell County", "Free towing with gravel and field access included", "Simple documented process with cash at pickup"];
const trustItems = [{ title: "County of Newell coverage", icon: "◎" }, { title: "Farm and feedlot pickup", icon: "↗" }, { title: "Heavy trucks welcome", icon: "$" }, { title: "No-surprises process", icon: "✓" }];
const whyItems = [
  { title: "A workforce that moves", copy: "People arrive for work, buy a cheap car, then face an unfamiliar disposal process when it dies." },
  { title: "Irrigation and farm country", copy: "Old vehicles leaking fluids near canals, Lake Newell, and cropland are a contamination risk, not just clutter." },
  { title: "Feedlot and processing duty", copy: "Vehicles in corrosive, heavy-duty work environments wear out fast and hard." },
  { title: "Wind and open prairie", copy: "Grit hazes glass, dulls paint, and helps create collision conditions." },
  { title: "Trans-Canada distance", copy: "Long highway kilometres retire vehicles while the body can still look fine." },
  { title: "Hail", copy: "Retained salvage from write-offs still carries real value." },
];
const serviceAreas = [
  { label: "In Brooks", areas: "Downtown, Uptown, Southview, Meadowbrook, Sunrise, Grasslands, Spring Park, Lakeside, Cassils, the Aquaduct area, and the industrial and highway commercial districts." },
  { label: "Across The County Of Newell And Nearby", areas: "Rosemary, Duchess, Bassano, Patricia, Millicent, Tilley, Rainier, Scandia, Gem, Rolling Hills, Lake Newell Resort, Kinbrook, Bow City, and rural properties throughout the county, plus Medicine Hat, Bow Island, Vauxhall, Taber, Strathmore, and Calgary." },
];
const vehicleTypes = ["Junk and scrap cars", "Non-runners", "Work and fleet trucks", "Farm and grain trucks", "Irrigation and service vehicles", "Feedlot vehicles", "Hail and collision write-offs", "Estate and missing-paperwork files"];
const steps = [
  { title: "Call or text", copy: `${siteConfig.phoneDisplay} with the year, make, model, condition, and number of vehicles.` },
  { title: "Free pickup", copy: "Home, farm, or work yard pickup scheduled to fit the site." },
  { title: "Paid at pickup", copy: "Cash or e-transfer, signed bill of sale, vehicle hauled away." },
];
const paperworkItems = [
  { title: "Proof that it is yours", copy: "Alberta registration or title in your name." },
  { title: "Government-issued photo ID", copy: "Driver's licence, passport, PR card, or provincial ID. Registered owner, 18+." },
  { title: "What we give you", copy: "A signed bill of sale that proves the vehicle was sold and ends your responsibility." },
  { title: "If the paperwork is missing", copy: "An Alberta Registry can sort ownership with your ID before the sale." },
];
const faqItems = [
  { question: "Do you buy cars in Brooks that will not start?", answer: "Yes. Most of what we buy does not run." },
  { question: "Do you come out to farms and feedlots?", answer: "Yes, throughout the County of Newell." },
  { question: "I do not have the registration anymore. What do I do?", answer: "Take your photo ID to an Alberta Registry office. They can confirm ownership and reissue what is needed." },
  { question: "Can you take several vehicles at once?", answer: "Yes, and it usually means a better price per vehicle." },
  { question: "Is there a towing fee because Brooks is far from Calgary?", answer: "We confirm the towing arrangement when you call, before you commit." },
  { question: "Payment?", answer: "Cash or e-transfer at pickup." },
];

export const metadata: Metadata = buildMetadata({
  title: "Junk Car Removal Brooks AB | Cash For Cars, Any State",
  description: "Junk car removal in Brooks and Newell County — cash paid for any vehicle, running or not. Farm and work trucks welcome. Call (403) 837-1550 for a free quote today.",
  path: "/junk-my-car-brooks",
});

export default function BrooksPage() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero-section"><div className="hero-media"><Image src="/jmc-imgs/purchase-19.jpeg" alt="Junk car removal service for Brooks vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div><div className="hero-overlay" /><div className="site-shell hero-shell"><div className="hero-copy"><p className="eyebrow">Junk Car Removal Brooks</p><h1>Junk Car Removal Brooks — Cash for Cars, Trucks, and Work Vehicles</h1><p className="hero-support">Brooks is a working city in irrigation country. When cheap commuters, farm trucks, or feedlot work vehicles die, we buy and remove them.</p><ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a></div><div className="hero-form-wrap"><HeroQuoteForm /></div></div></section>
      <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
      <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">What Makes Brooks Different</p><h2>Mobility, irrigation country, and hard work all meet here.</h2><p className="section-body-copy">Brooks has a unique mix of transient workforce vehicles, farm units, feedlot duty, and long prairie mileage.</p><ul className="promo-banner-points">{whyItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Brooks junk car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
      <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local junk car pickup example for a Brooks vehicle owner" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Where We Pick Up</p><h2>Brooks, County of Newell, feedlots, farms, and work yards.</h2><p className="section-body-copy">Gravel and field access are normal for us, not a special request.</p><ul className="promo-banner-points"><li>Brooks city districts plus county and resort-area pickup</li><li>Nearby communities and agricultural properties included</li><li>Postal code confirmation locks in the towing plan up front</li></ul></div></div></section>
      <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Community Coverage" title="Pickup across Brooks and the County of Newell." description="Town, field, feedlot, work yard, or rural property, we come where the vehicle sits." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
      <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Remove And Buy" title="Commuter cars, work trucks, grain units, and long-sitters." description="All makes, gas and diesel, if it is done for you, we want to hear about it." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
        {item === "Junk and scrap cars" && "Old vehicles beyond repair or not worth fixing anymore."}
        {item === "Non-runners" && "No-start and no-keys files are standard."}
        {item === "Work and fleet trucks" && "Service and employment vehicles taken singly or in groups."}
        {item === "Farm and grain trucks" && "Heavy old trucks still carry serious scrap weight."}
        {item === "Irrigation and service vehicles" && "County work units handled where they sit."}
        {item === "Feedlot vehicles" && "Harsh-duty environments wear these out fast."}
        {item === "Hail and collision write-offs" && "Retained salvage and highway damage accepted."}
        {item === "Estate and missing-paperwork files" && "Ownership issues handled clearly before pickup."}
      </p></article>)}</div></div></section>
      <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Documented, plain process." description="We keep the whole thing short: prove ownership, schedule towing, get paid." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
      <section className="section section-light compliance-section"><div className="site-shell compliance-shell"><div className="compliance-copy"><p className="eyebrow">What You Need</p><h2>Exactly what is required, plainly stated.</h2><div className="compliance-list">{paperworkItems.map((item) => <div key={item.title} className="comparison-row"><IconBadge>{item.title === "Proof that it is yours" ? "ID" : item.title === "Government-issued photo ID" ? "✓" : "AB"}</IconBadge><p><strong>{item.title}.</strong> {item.copy}</p></div>)}</div></div><div className="worth-panel compliance-panel"><p>After pickup</p><ul><li>Return your plates to an Alberta Registry office</li><li>Cancel your insurance the same day with the bill of sale</li><li>Liens must be cleared before sale</li><li>Important in irrigation country where leaks can reach canals, Lake Newell, and groundwater</li></ul></div></div></section>
      <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for Brooks sellers." description="Paperwork, feedlots, county pickup, and payment handled without ambiguity." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
      <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your Brooks Quote</p><h2>Brooks and County of Newell covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
    </main>
    <SiteFooter />
    <MobileActionBar />
  </>;
}
