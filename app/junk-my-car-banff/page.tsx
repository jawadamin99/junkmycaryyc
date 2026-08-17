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

const heroBullets = ["We haul dead vehicles out of the national park", "Tight staff-lot and townsite access handled case by case", "Cash or e-transfer at pickup with legal transfer documentation"];
const trustItems = [{ title: "Out-of-park haul-out", icon: "◎" }, { title: "Townsite and staff-lot access", icon: "↗" }, { title: "Cash at pickup", icon: "$" }, { title: "No-start vehicles welcome", icon: "✓" }];
const problemItems = [
  { title: "There is nowhere to put it", copy: "Banff has limited parking, no storage lots, and no wrecking yard inside the park." },
  { title: "You cannot just leave it", copy: "Town of Banff bylaws and Parks Canada rules mean the owner stays liable for the vehicle." },
  { title: "Fluid leaks matter more here", copy: "Inside a protected watershed and wildlife corridor, a leaking derelict is an environmental issue." },
  { title: "The workforce turns over constantly", copy: "Seasonal workers leave, but cheap staff-lot vehicles often do not." },
  { title: "Car ownership is optional here", copy: "Transit and car-share mean many residents decide they no longer need the vehicle at all." },
];
const serviceAreas = [
  { label: "Banff Townsite", areas: "Banff Avenue corridor, Downtown, Beaver Street, Muskrat Street, Glen Avenue, Spray Avenue, Middle Springs, Tunnel Mountain, Cave Avenue area, Banff Trail, and staff-accommodation and hotel employee lots throughout town." },
  { label: "Elsewhere In The Corridor", areas: "Lake Louise, Harvie Heights, Canmore, Cochrane, and Calgary." },
];
const wearItems = [
  { title: "Grades and engine braking", copy: "Transmissions, brakes, and cooling systems take punishment flat-country driving never delivers." },
  { title: "Long winters and heavy salt", copy: "Months of de-icer and sanding rot frames and brake lines and sandblast paint into rust-ready chips." },
  { title: "Wildlife collisions", copy: "Elk and deer around the townsite and the Trans-Canada regularly total vehicles." },
  { title: "Vehicles that sit", copy: "Cars parked for months develop seized brakes, dead batteries, and gummed fuel, then never start again." },
];
const vehicleTypes = ["Scrap and junk cars", "Non-runners", "Seized engines and blown transmissions", "Wildlife-collision and insurance write-offs", "Long-parked cars", "Abandoned staff-accommodation vehicles", "Hail damage", "Estate and missing-paperwork files"];
const steps = [
  { title: "Call or text", copy: `${siteConfig.phoneDisplay} with the year, make, model, condition, and exactly where it is parked.` },
  { title: "We schedule pickup", copy: "We bring the right truck for the lane, lot, or access point." },
  { title: "Paid at pickup", copy: "Cash or e-transfer, signed bill of sale, vehicle hauled out of the park." },
];
const checklistItems = [
  { title: "Sell or dispose of it while you are still here", copy: "Everything else is easier if you have not already left Banff or Alberta." },
  { title: "Keep the bill of sale", copy: "This is the document proving you no longer own the vehicle." },
  { title: "Remove your plates", copy: "They belong to you, not the car." },
  { title: "Return the plates and cancel the insurance", copy: "Do both the same day so the liability actually ends." },
];
const faqItems = [
  { question: "Will you really come all the way to Banff?", answer: "Yes. We haul vehicles out of the park through the corridor." },
  { question: "My car has been in a staff lot for a year and will not start.", answer: "That is one of the most common Banff calls we get. No keys needed." },
  { question: "I am leaving the country next week.", answer: "Call now. Selling before you go is the clean way to end the liability." },
  { question: "Can I leave it and deal with it later?", answer: "Not advisable. As registered owner you remain responsible for towing, storage, and bylaw costs." },
  { question: "Do you buy elk-collision write-offs?", answer: "Yes, if you retained the salvage." },
  { question: "Payment?", answer: "Cash or e-transfer at pickup." },
];

export const metadata: Metadata = buildMetadata({
  title: "Scrap Car Removal Banff | Cash For Cars, Hauled Out",
  description: "Scrap car removal in Banff — cash paid at pickup and your vehicle hauled out of the national park. Running or not. Call (403) 837-1550 for a free quote today.",
  path: "/junk-my-car-banff",
});

export default function BanffPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section"><div className="hero-media"><Image src="/jmc-imgs/purchase-19.jpeg" alt="Scrap car removal service for Banff vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div><div className="hero-overlay" /><div className="site-shell hero-shell"><div className="hero-copy"><p className="eyebrow">Scrap Car Removal Banff</p><h1>Scrap Car Removal Banff — We Haul It Out of the Park</h1><p className="hero-support">There cannot be a wrecking yard inside Banff National Park, so when a vehicle dies in Banff it has one destination: out. That is what we handle through our <a className="content-link" href="/">cash for cars Calgary</a> service and nearby <a className="content-link" href="/junk-my-car-canmore">Canmore cash for cars</a> coverage.</p><ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a></div><div className="hero-form-wrap"><HeroQuoteForm /></div></div></section>
        <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
        <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">Why A Dead Car In Banff Is A Bigger Problem</p><h2>Inside a national park, a derelict is more than an inconvenience.</h2><p className="section-body-copy">Parking pressure, park rules, mobile staffing, and a protected watershed change the consequences of leaving a dead vehicle here.</p><ul className="promo-banner-points">{problemItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Banff scrap car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
        <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local scrap car pickup example for a Banff vehicle owner" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Where We Pick Up</p><h2>Townsite lots, staff housing, and the wider corridor.</h2><p className="section-body-copy">You do not arrange transport to Calgary yourself. Hauling it out is the service.</p><ul className="promo-banner-points"><li>Banff townsite employee lots and narrow access areas included</li><li>Lake Louise, Harvie Heights, and Canmore corridor coverage</li><li>Leaving at the end of a season? Sell before you go, not after</li></ul></div></div></section>
        <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Corridor Coverage" title="Pickup in Banff and along the Bow Valley corridor." description="We bring the right truck for the access and handle the transfer legally." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="Why Mountain Vehicles Wear Out" title="Grades, long winters, collisions, and long-sitting vehicles finish them early." description="Banff gives a vehicle a very different life than a prairie city does." /><div className="vehicle-grid">{wearItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Buy" title="Dead staff-lot cars, wildlife write-offs, long-parked vehicles, and more." description="All makes, gas and diesel, including AWD and 4x4." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
          {item === "Scrap and junk cars" && "Old vehicles beyond repair or no longer worth fixing."}
          {item === "Non-runners" && "Dead-battery, no-start, no-key, and seized-brake files are standard."}
          {item === "Seized engines and blown transmissions" && "Mountain-grade failures that cost more than the vehicle is worth."}
          {item === "Wildlife-collision and insurance write-offs" && "Retained salvage from elk and deer claims accepted."}
          {item === "Long-parked cars" && "Vehicles that barely moved for months or seasons at a time."}
          {item === "Abandoned staff-accommodation vehicles" && "One of the most common Banff-specific files."}
          {item === "Hail damage" && "Storm-write-off salvage still has value."}
          {item === "Estate and missing-paperwork files" && "Out-of-province and seasonal-worker paperwork situations handled carefully."}
        </p></article>)}</div></div></section>
        <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Quote it, access-plan it, and haul it out." description="The process is simple, but the important part is doing it while you are still here." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="End-Of-Season Checklist" title="If you are leaving Banff, finish the vehicle before you leave too." description="This is the clean sequence that ends the liability instead of carrying it into another province or country." /><div className="vehicle-grid">{checklistItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>✓</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
        <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for Banff sellers." description="Townsite access, seasonal-worker timing, and collision write-offs handled plainly." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
        <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your Banff Quote</p><h2>Banff, Lake Louise, and the Bow Valley corridor covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
