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

const heroBullets = ["Cash for any vehicle, student car or farm truck", "Free towing across Olds and Mountain View County", "Remote student-owner situations workable"];
const trustItems = [{ title: "Olds and county coverage", icon: "◎" }, { title: "Student and farm files", icon: "↗" }, { title: "Cash or e-transfer", icon: "$" }, { title: "Multi-vehicle groups", icon: "✓" }];
const whyItems = [
  { title: "A college town's spring turnover", copy: "Olds College brings in older student vehicles, and some get left behind when the term ends." },
  { title: "Agricultural duty", copy: "Farm and ranch trucks run hard until something expensive fails, then get retired to a fence line." },
  { title: "Highway 2A and 27 mileage", copy: "Residents cover real distances to Calgary, Red Deer, Sundre, and Didsbury." },
  { title: "Winter and chinook cycling", copy: "Freeze-thaw plus de-icer rots frames, brake lines, and exhaust from underneath." },
  { title: "Hail and collisions", copy: "Storms and fast rural traffic create write-offs, and retained salvage still has value." },
];
const serviceAreas = [
  { label: "In Olds", areas: "Downtown, Westhill, Imperial Estates, Vista Heights, Highland Green, Sunset Ridge, Aspen Ridge, Willow Springs, the Olds College area, the Uptowne district, and the industrial park along Highway 2A." },
  { label: "Across Mountain View County And Nearby", areas: "Didsbury, Carstairs, Sundre, Bowden, Innisfail, Cremona, Torrington, Eagle Hill, Water Valley, Three Hills, Trochu, and rural properties throughout the county." },
];
const vehicleTypes = ["Junk and scrap cars", "Non-runners", "Abandoned student vehicles", "Farm and grain trucks", "Ranch half-tons", "Hail and collision write-offs", "Project cars", "Estate and missing-paperwork files"];
const steps = [
  { title: "Call or text", copy: `${siteConfig.phoneDisplay} with the year, make, model, condition, and how many vehicles.` },
  { title: "Free pickup", copy: "In town, on an acreage, or at a farm." },
  { title: "Paid at pickup", copy: "Cash or e-transfer, signed bill of sale, vehicle gone." },
];
const outOfTownItems = [
  { title: "The situation", copy: "A student leaves Olds, but the vehicle stays in a driveway, lot, or friend's yard." },
  { title: "What you need", copy: "You must be the registered owner with valid photo ID and proof of ownership." },
  { title: "How we handle the distance", copy: "We coordinate access locally and settle payment with you remotely by e-transfer if needed." },
  { title: "Final steps", copy: "Return the plates and cancel the insurance so your liability ends cleanly." },
];
const faqItems = [
  { question: "Do you buy cars in Olds that do not run?", answer: "Yes. Most of what we take has not run in a long time." },
  { question: "Do you come out to farms and acreages?", answer: "Yes, throughout Mountain View County." },
  { question: "I am a student who left a car in Olds. Can I sell it remotely?", answer: "Usually yes, if it is registered in your name." },
  { question: "Do you buy several vehicles at once?", answer: "Yes, and the group price is generally better than one at a time." },
  { question: "Payment?", answer: "Cash or e-transfer at pickup." },
];

export const metadata: Metadata = buildMetadata({
  title: "Junk Car Removal Olds AB | Cash For Cars, Free Towing",
  description: "Junk car removal in Olds and Mountain View County — cash at pickup for any vehicle, running or not. Free towing. Call (403) 837-1550 for a free quote today.",
  path: "/cash-for-cars-olds",
});

export default function OldsPage() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero-section"><div className="hero-media"><Image src="/jmc-imgs/purchase-26.jpeg" alt="Junk car removal service for Olds vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div><div className="hero-overlay" /><div className="site-shell hero-shell"><div className="hero-copy"><p className="eyebrow">Junk Car Removal Olds</p><h1>Junk Car Removal Olds — Cash for Any Vehicle, Towing Included</h1><p className="hero-support">Olds produces two classic dead-vehicle files: abandoned student cars and farm trucks parked behind a shop since the eighties. We remove both.</p><ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a></div><div className="hero-form-wrap"><HeroQuoteForm /></div></div></section>
      <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
      <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">Why Vehicles End Up Dead In Olds</p><h2>College turnover, rural duty, real mileage, and central Alberta winters.</h2><p className="section-body-copy">This town sits between Calgary and Red Deer but also serves a broad rural area, and that combination shows up in the vehicles people need gone.</p><ul className="promo-banner-points">{whyItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Olds junk car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
      <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local junk car pickup example for an Olds vehicle owner" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Where We Pick Up</p><h2>Olds, Mountain View County, and the surrounding rural ring.</h2><p className="section-body-copy">Olds is also a common remote-sale situation for students or owners who no longer live in town.</p><ul className="promo-banner-points"><li>Olds College area, town lots, farms, and acreages</li><li>Nearby places like Didsbury, Carstairs, Sundre, and Bowden</li><li>Out-of-town owner coordination handled regularly</li></ul></div></div></section>
      <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Community Coverage" title="Pickup across Olds and Mountain View County." description="In-town and rural removals follow the same documented process." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
      <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Remove And Buy" title="Student cars, ranch trucks, grain units, and long-sitters." description="Every make, gas and diesel, if it is done for you, we want to hear about it." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
        {item === "Junk and scrap cars" && "Old vehicles beyond repair or no longer worth fixing."}
        {item === "Non-runners" && "Dead engine, flat tires, or no keys are standard for us."}
        {item === "Abandoned student vehicles" && "Cars left behind after the term ends or after a move out of town."}
        {item === "Farm and grain trucks" && "Heavy old trucks still carry meaningful scrap value."}
        {item === "Ranch half-tons" && "County property pickups handled where they sit."}
        {item === "Hail and collision write-offs" && "Retained salvage and total-loss files accepted."}
        {item === "Project cars" && "Vehicles that never got finished and quietly stopped moving."}
        {item === "Estate and missing-paperwork files" && "Authorization and ownership issues handled case by case."}
      </p></article>)}</div></div></section>
      <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Quote, pickup, paid." description="Short process whether you live in Olds, on a farm, or somewhere else entirely." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
      <section className="section"><div className="site-shell"><SectionIntro eyebrow="Selling From Out Of Town" title="This comes up constantly in a college town." description="A vehicle sitting in Olds does not become someone else's problem just because you moved away." /><div className="vehicle-grid">{outOfTownItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
      <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for Olds sellers." description="Farm access, student situations, remote selling, and payment handled clearly." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
      <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your Olds Quote</p><h2>Olds and Mountain View County covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
    </main>
    <SiteFooter />
    <MobileActionBar />
  </>;
}
