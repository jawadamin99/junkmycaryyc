import Image from "next/image";
import type { Metadata } from "next";
import HeroQuoteForm from "../components/hero-quote-form";
import MobileActionBar from "../components/mobile-action-bar";
import SectionIntro from "../components/section-intro";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";
import { siteConfig } from "../lib/site";

function IconBadge({ children }: { children: React.ReactNode }) {
  return <span className="icon-badge">{children}</span>;
}

function StepBadge({ type }: { type: "phone" | "arrow" | "check" }) {
  return (
    <span className="icon-badge step-badge" aria-hidden="true">
      {type === "phone" ? <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none"><path d="M6.8 4.5h2.5l1.2 3.6-1.6 1.5a14.2 14.2 0 0 0 5.5 5.5l1.5-1.6 3.6 1.2v2.5c0 .8-.6 1.4-1.4 1.4A14.8 14.8 0 0 1 4.5 5.9c0-.8.6-1.4 1.4-1.4Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}
      {type === "arrow" ? <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}
      {type === "check" ? <svg viewBox="0 0 24 24" className="step-badge-icon" fill="none"><path d="M5 12.5 9.2 17 19 7.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}
    </span>
  );
}

const heroBullets = [
  "We haul non-running vehicles out of the Bow Valley",
  "Parkade, alley, and steep-driveway access handled case by case",
  "Cash or e-transfer at pickup with bill of sale included",
];
const trustItems = [
  { title: "Bow Valley haul-out", icon: "◎" },
  { title: "Tight-access pickups", icon: "↗" },
  { title: "Cash at pickup", icon: "$" },
  { title: "Non-runners welcome", icon: "✓" },
];
const wearItems = [
  { title: "Mountain grades", copy: "Constant climbing and engine braking cook transmissions, brakes, and cooling systems." },
  { title: "Longer winter", copy: "More months of salt, de-icer, and freeze-thaw cycling rot frames and brake lines." },
  { title: "Gravel and sand damage", copy: "Mountain gravel and winter sanding pit glass, sandblast paint, and start rust." },
  { title: "Wildlife collisions", copy: "Elk, deer, and bighorn collisions regularly write vehicles off in the corridor." },
  { title: "Seasonal workforce turnover", copy: "Cheap seasonal-worker cars often get left behind in staff lots and shared driveways." },
  { title: "Recreation duty", copy: "Sleds, bikes, boats, and forestry-road use show up as early drivetrain and suspension failure." },
];
const serviceAreas = [
  { label: "In Canmore", areas: "Cougar Creek, Three Sisters, Teepee Town, South Canmore, Downtown and Main Street, Bow Valley Trail, Larch, Peaks of Grassi, Silvertip, Eagle Terrace, Rundleview, Prospect Heights, Hospital Hill, Palliser, Spring Creek, and the Elk Run industrial area." },
  { label: "Around The Valley", areas: "Harvie Heights, Dead Man's Flats, Exshaw, Lac des Arcs, Kananaskis Village, Seebe, Morley-area properties, Banff, Cochrane, and Calgary." },
];
const vehicleTypes = [
  "Scrap and junk cars",
  "Non-runners",
  "Blown transmissions and seized engines",
  "Overheated and head-gasket failures",
  "Wildlife-collision write-offs",
  "Recreation trucks and SUVs",
  "Abandoned staff-accommodation vehicles",
  "Estate and missing-paperwork files",
];
const steps = [
  { title: "Call or text", copy: `${siteConfig.phoneDisplay} with the year, make, model, condition, and exactly where it is parked.` },
  { title: "We schedule pickup", copy: "We bring the right truck for the parkade, alley, driveway, or staff lot access." },
  { title: "Paid at pickup", copy: "Cash or e-transfer, signed bill of sale, vehicle hauled down the valley." },
];
const accessItems = [
  { title: "Ceiling height", copy: "Underground parkades commonly run 1.9 to 2.1 metres. That decides the truck plan." },
  { title: "Does it roll and steer?", copy: "Flat tires, seized brakes, or a locked wheel just mean dollies and a different setup." },
  { title: "Stall and turns", copy: "A tight corner in a two-level parkade can matter more than the height." },
  { title: "Access logistics", copy: "Tell us about fobs, gate codes, building management, and snow before pickup day." },
];
const faqItems = [
  { question: "Do you actually come to Canmore?", answer: "Yes. We haul out of the Bow Valley regularly." },
  { question: "Can you get a car out of an underground parkade?", answer: "Usually yes. Tell us the ceiling height and access when you call." },
  { question: "My car will not start and sat all winter.", answer: "That is typical of what we buy. No keys needed." },
  { question: "I am leaving Canmore in two weeks. Can you come before then?", answer: "Tell us your deadline and we will work to it." },
  { question: "Do you buy wildlife-collision write-offs?", answer: "Yes, if you retained the salvage." },
  { question: "Payment?", answer: "Cash or e-transfer at pickup." },
];

export const metadata: Metadata = buildMetadata({
  title: "Scrap Car Removal Canmore | Cash For Cars, We Haul It",
  description: "Scrap car removal in Canmore and the Bow Valley — cash paid at pickup, running or not. We haul out of the valley. Call (403) 837-1550 for a free quote today.",
  path: "/junk-my-car-canmore",
});

export default function CanmorePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-media"><Image src="/jmc-imgs/purchase-19.jpeg" alt="Scrap car removal service for Canmore vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div>
          <div className="hero-overlay" />
          <div className="site-shell hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Scrap Car Removal Canmore</p>
              <h1>Scrap Car Removal Canmore — We Come Up the Valley and Take It Away</h1>
              <p className="hero-support">There is nowhere in the Bow Valley to scrap a car locally, so when a vehicle dies in Canmore it eventually has to come down to Calgary. That is exactly what we do.</p>
              <ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a>
            </div>
            <div className="hero-form-wrap"><HeroQuoteForm /></div>
          </div>
        </section>
        <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
        <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">Why Canmore Vehicles Die Early</p><h2>Mountain use destroys older vehicles faster than city driving ever will.</h2><p className="section-body-copy">Grades, winter, wildlife, recreation duty, and seasonal turnover create a very specific kind of scrap vehicle in the Bow Valley.</p><ul className="promo-banner-points">{wearItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Canmore scrap car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
        <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local scrap car pickup example for a Canmore vehicle owner" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Where We Pick Up</p><h2>Condo parkades, steep driveways, staff lots, and valley addresses.</h2><p className="section-body-copy">You do not need to solve the transport problem to Calgary yourself. That is the service.</p><ul className="promo-banner-points"><li>Canmore neighbourhoods and industrial areas covered</li><li>Harvie Heights, Dead Man's Flats, Exshaw, and other valley points included</li><li>Moving out of the valley? We can usually work around your timeline</li></ul></div></div></section>
        <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Bow Valley Coverage" title="Pickup across Canmore and the surrounding valley." description="We confirm the access and bring the right truck for the layout, not a one-size-fits-all setup." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Buy" title="Scrap cars, mountain beaters, write-offs, and tight-access non-runners." description="All makes, gas and diesel, including AWD and 4x4." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
          {item === "Scrap and junk cars" && "Old vehicles beyond repair or no longer worth fixing."}
          {item === "Non-runners" && "No-start, no-key, dead-battery, and four-flat files are standard."}
          {item === "Blown transmissions and seized engines" && "Mountain-grade failures that cost more than the car is worth."}
          {item === "Overheated and head-gasket failures" && "Hard climbing and cooling-system stress show up here often."}
          {item === "Wildlife-collision write-offs" && "Retained salvage from elk and deer collisions accepted."}
          {item === "Recreation trucks and SUVs" && "Vehicles used for passes, forestry roads, and gear hauling."}
          {item === "Abandoned staff-accommodation vehicles" && "Seasonal-worker cars left behind in staff lots or shared driveways."}
          {item === "Estate and missing-paperwork files" && "Out-of-province or missing-paperwork cases guided before pickup."}
        </p></article>)}</div></div></section>
        <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Quote it, access-plan it, and haul it out." description="The Bow Valley difference is mostly about access and transport, and both get handled up front." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="Parkade And Tight-Access Pickups" title="Two minutes of access detail prevents a wasted trip." description="This is the most common Canmore-specific question, so the pickup plan starts with the right information." /><div className="vehicle-grid">{accessItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
        <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for Canmore sellers." description="Haul-out logistics, parkades, wildlife write-offs, and move-out timing handled clearly." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
        <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your Canmore Quote</p><h2>Canmore and the Bow Valley covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
