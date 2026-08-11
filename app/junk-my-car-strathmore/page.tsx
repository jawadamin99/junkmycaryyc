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

const heroBullets = ["Cash for cars and trucks across Strathmore and Wheatland County", "Farm and grain trucks welcome", "Free towing with cash paid at pickup"];
const trustItems = [{ title: "Farm and field access", icon: "◎" }, { title: "Heavy vehicles welcome", icon: "↗" }, { title: "Group clearouts", icon: "$" }, { title: "No keys needed", icon: "✓" }];
const countyItems = [
  { title: "Vehicles never leave the farm", copy: "On a quarter section, a dead truck gets pushed behind the bins and can sit there for decades." },
  { title: "Gravel roads are brutal", copy: "Range roads sandblast paint, pit glass, wreck bushings, and pack dust into everything." },
  { title: "Grain hauling is hard duty", copy: "Loaded trucks on gravel and grades destroy transmissions, brakes, and rear ends." },
  { title: "Trans-Canada mileage and collisions", copy: "Highway 1 through Strathmore is busy, fast, and rough in whiteout conditions." },
  { title: "Leaking derelicts are an environmental problem", copy: "Old vehicles in fields slowly release fuel and fluids into soil and irrigation country." },
];
const serviceAreas = [
  { label: "In Strathmore", areas: "Downtown, Lambert Village, Brentwood, Hillview Estates, Westmount, Aspen Creek, Edgefield, The Ranch, Strathmore Lakes Estates, Crystal Ridge, Wildflower, Green Meadow, Thorncliffe, Silver Creek, and the industrial areas along the Trans-Canada." },
  { label: "Across Wheatland County And Nearby", areas: "Carseland, Cheadle, Gleichen, Standard, Rockyford, Hussar, Nightingale, Dalum, Namaka, Cluny, Bassano, Langdon, Indus, Chestermere, and Calgary." },
];
const vehicleTypes = ["Farm and grain trucks", "Half-tons through one-tons", "Junk and scrap cars", "Non-runners", "Hail and collision write-offs", "Irrigation and service vehicles", "Project cars and abandoned vehicles", "Estate and missing-paperwork files"];
const steps = [
  { title: "Call or text", copy: `${siteConfig.phoneDisplay} with the year, make, model, condition, and how many vehicles.` },
  { title: "Free pickup", copy: "Field, gravel, farmyard, or in-town pickup scheduled at a workable time." },
  { title: "Paid at pickup", copy: "Cash or e-transfer, signed bill of sale, vehicles hauled." },
];
const clearoutItems = [
  { title: "Inventory call", copy: "How many vehicles, rough years, whether they roll, and what the access is like." },
  { title: "Group quote", copy: "We price the whole lot rather than each unit one at a time." },
  { title: "Paperwork conversation", copy: "We tell you what is needed for each vehicle before you make the registry trip." },
  { title: "The clearout", copy: "We arrive with the right equipment, winch what will not roll, and load everything." },
  { title: "Payment and documentation", copy: "Cash or e-transfer with a signed bill of sale covering each vehicle." },
];
const faqItems = [
  { question: "Do you come out to farms?", answer: "Yes. That is a large part of what we do here, gravel and field access included." },
  { question: "Will you buy a grain truck that has not run since the nineties?", answer: "Yes. Heavy and old is still valuable." },
  { question: "Several vehicles at once?", answer: "Yes, and it is usually worth more per vehicle that way." },
  { question: "What if there is no title on an old farm truck?", answer: "Bring ID to an Alberta Registry to sort ownership. We deal with this constantly." },
  { question: "Payment?", answer: "Cash or e-transfer at pickup." },
];

export const metadata: Metadata = buildMetadata({
  title: "Junk Car Removal Strathmore | Cash For Cars & Trucks",
  description: "Junk car removal in Strathmore and Wheatland County — cash paid at pickup for any vehicle, farm trucks included. Free towing. Call (403) 837-1550 for a free quote.",
  path: "/junk-my-car-strathmore",
});

export default function StrathmorePage() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero-section"><div className="hero-media"><Image src="/jmc-imgs/purchase-26.jpeg" alt="Junk car removal service for Strathmore vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div><div className="hero-overlay" /><div className="site-shell hero-shell"><div className="hero-copy"><p className="eyebrow">Junk Car Removal Strathmore</p><h1>Junk Car Removal Strathmore — Cars, Trucks, and Farm Vehicles</h1><p className="hero-support">Farm country accumulates dead vehicles like nowhere else. We remove them throughout Strathmore and Wheatland County and pay cash on the spot.</p><ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a></div><div className="hero-form-wrap"><HeroQuoteForm /></div></div></section>
      <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
      <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">The Wheatland County Reality</p><h2>Farm country stores vehicles for decades, until somebody finally deals with them.</h2><p className="section-body-copy">The same conditions that make this productive farmland also make derelict vehicles a real operational and environmental problem.</p><ul className="promo-banner-points">{countyItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Strathmore junk car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
      <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local junk car pickup example for a Strathmore property owner" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Where We Pick Up</p><h2>Town driveways, farmyards, field edges, and gravel roads included.</h2><p className="section-body-copy">Access details help, but none of the common rural situations are dealbreakers for us.</p><ul className="promo-banner-points"><li>In-town industrial and residential pickup</li><li>Field and gravel access throughout Wheatland County</li><li>Nearby places like Langdon, Chestermere, and Bassano included</li></ul></div></div></section>
      <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Community Coverage" title="Pickup across Strathmore and Wheatland County." description="No need to move the vehicle first. We come where it sits." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
      <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Remove And Buy" title="Farm trucks, junk cars, irrigation units, and long-sitting derelicts." description="All makes, gas and diesel, if it is done for you, we want to hear about it." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
        {item === "Farm and grain trucks" && "Heavy old trucks often carry the strongest scrap value."}
        {item === "Half-tons through one-tons" && "Work-worn pickups and farm units handled where they sit."}
        {item === "Junk and scrap cars" && "Old cars beyond repair or no longer worth fixing."}
        {item === "Non-runners" && "No keys, seized, half-buried in sod, or stuck in place."}
        {item === "Hail and collision write-offs" && "Insurance-retained salvage accepted."}
        {item === "Irrigation and service vehicles" && "County work units and support vehicles taken singly or in groups."}
        {item === "Project cars and abandoned vehicles" && "Long-sitting units that finally need to leave the property."}
        {item === "Estate and missing-paperwork files" && "Ownership issues guided carefully before the haul."}
      </p></article>)}</div></div></section>
      <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Inventory, pickup, payment." description="Tell us what is there, we plan the haul, and you get paid on site." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
      <section className="section"><div className="site-shell"><SectionIntro eyebrow="Farm And Multi-Vehicle Clearouts" title="This is where one organized trip matters." description="Five or six derelicts in one visit is more efficient for us and usually worth more to you than separate pickups." /><div className="vehicle-grid">{clearoutItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
      <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for Strathmore and Wheatland County sellers." description="Farm access, old trucks, group pickups, and paperwork handled plainly." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
      <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your Strathmore Quote</p><h2>Strathmore and Wheatland County covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
    </main>
    <SiteFooter />
    <MobileActionBar />
  </>;
}
