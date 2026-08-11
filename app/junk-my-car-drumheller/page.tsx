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

const heroBullets = ["We come down into the valley hamlets, not just the townsite", "Water-damaged and long-dead vehicles welcome", "Cash or e-transfer at pickup with valley access planned up front"];
const trustItems = [{ title: "Hamlet and coulee access", icon: "◎" }, { title: "Water-damage accepted", icon: "↗" }, { title: "Heavy trucks welcome", icon: "$" }, { title: "Group clearouts", icon: "✓" }];
const hardOnVehiclesItems = [
  { title: "The valley walls", copy: "Every drive means serious grades, and that cooks transmissions, brakes, and cooling systems." },
  { title: "Extreme temperature swings", copy: "The valley floor and rim can behave very differently, which is brutal on seals, hoses, and batteries." },
  { title: "Dust, gravel, and badlands roads", copy: "Fine badlands dust gets into everything and coulee roads are hard on paint, glass, and suspension." },
  { title: "Flood risk", copy: "River flooding and low-lying yards create water-damaged vehicles that are usually mechanically finished." },
  { title: "A century of industrial leftovers", copy: "Coal-era work trucks and inherited property vehicles are still scattered through the valley." },
  { title: "Highway distance", copy: "Calgary, Strathmore, Three Hills, and Hanna mileage retires vehicles even when the body still looks fine." },
];
const serviceAreas = [
  { label: "Drumheller Townsite", areas: "Downtown, North Drumheller, Bankview, Riverside, Willow Estates, Greentree, the Highway 9 and 10 commercial corridors, and the industrial areas." },
  { label: "Valley Hamlets", areas: "Nacmine, Midland, Newcastle, Rosedale, Cambria, Wayne, Lehigh, East Coulee, and Willow Creek." },
  { label: "Around The Region", areas: "Rosebud, Carbon, Morrin, Munson, Delia, Hanna, Three Hills, Trochu, Beiseker, Standard, Rockyford, Hussar, Strathmore, and rural properties throughout Kneehill and Starland counties and the surrounding area." },
];
const vehicleTypes = ["Scrap and junk cars", "Non-runners", "Seized engines and blown transmissions", "Overheating and head-gasket failures", "Water and flood-damaged vehicles", "Legacy coal-era work trucks", "Project and abandoned vehicles", "Estate and missing-paperwork files"];
const steps = [
  { title: "Call or text", copy: `${siteConfig.phoneDisplay} with the year, make, model, condition, how many, and exactly which hamlet or street.` },
  { title: "Free pickup", copy: "We schedule the right truck for valley, hamlet, bridge, and coulee access." },
  { title: "Paid at pickup", copy: "Cash or e-transfer, signed bill of sale, vehicle hauled out." },
];
const accessItems = [
  { title: "Which hamlet, and where in it", copy: "A street name and a landmark beat a postal code in the valley." },
  { title: "Bridge and grade constraints", copy: "Wayne's bridges, steep coulee roads, and switchbacks matter for a loaded truck." },
  { title: "Ground conditions", copy: "Badlands soil turns greasy after rain and snowmelt, so tell us about the surface." },
  { title: "Whether it rolls", copy: "Flat tires, seized brakes, buried silt, or no wheels are fine, but we need to know." },
  { title: "Distance from hard surface", copy: "A vehicle deep into a coulee may need a longer winch pull and a different plan." },
];
const faqItems = [
  { question: "Do you come down into the valley, or only to town?", answer: "Into the valley. Rosedale, Wayne, East Coulee, and the rest." },
  { question: "Will you buy a truck that sat in a coulee for forty years?", answer: "Yes. Old and heavy is still worth money." },
  { question: "My car took water in a flood.", answer: "We buy water-damaged vehicles. Mention it when you call and we will price it accordingly." },
  { question: "Multiple vehicles on an inherited property?", answer: "Yes. Call and we will plan the paperwork and the haul together." },
  { question: "Can you get into a narrow hamlet lane or a coulee yard?", answer: "Describe the access and we will bring suitable equipment." },
  { question: "Payment?", answer: "Cash or e-transfer at pickup." },
];

export const metadata: Metadata = buildMetadata({
  title: "Scrap Car Removal Drumheller | Cash For Cars, Any Hamlet",
  description: "Scrap car removal in Drumheller and the valley hamlets — cash at pickup, running or not. Rosedale to East Coulee. Call (403) 837-1550 for a free quote today.",
  path: "/junk-my-car-drumheller",
});

export default function DrumhellerPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section"><div className="hero-media"><Image src="/jmc-imgs/purchase-19.jpeg" alt="Scrap car removal service for Drumheller vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div><div className="hero-overlay" /><div className="site-shell hero-shell"><div className="hero-copy"><p className="eyebrow">Scrap Car Removal Drumheller</p><h1>Scrap Car Removal Drumheller — Every Hamlet in the Valley</h1><p className="hero-support">Drumheller is not one town but a string of old valley hamlets, and we come down into them to get the vehicles out.</p><ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a></div><div className="hero-form-wrap"><HeroQuoteForm /></div></div></section>
        <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
        <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">Why The Valley Is Hard On Vehicles</p><h2>Badlands grades, flood risk, dust, and inherited industrial leftovers.</h2><p className="section-body-copy">Drumheller's geography does specific expensive damage, and the old valley hamlets add their own access and paperwork problems.</p><ul className="promo-banner-points">{hardOnVehiclesItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Drumheller scrap car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
        <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local scrap car pickup example for a Drumheller or valley hamlet property" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Where We Pick Up</p><h2>Townsite, hamlets, coulees, and rural approaches all included.</h2><p className="section-body-copy">This is not just a town pickup service. Hamlet and valley access is part of the job.</p><ul className="promo-banner-points"><li>Townsite, hamlet, and county pickup covered</li><li>Inherited property and multiple-vehicle sites handled together</li><li>Tell us the exact valley location before we lock the timing</li></ul></div></div></section>
        <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Where We Pick Up" title="Drumheller townsite, the valley hamlets, and the surrounding region." description="The location matters here, so we confirm access and route details up front." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Buy" title="Water-damaged valley cars, old work trucks, and long-dead hamlet vehicles." description="All makes, gas and diesel, if it is done for you, we want to hear about it." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
          {item === "Scrap and junk cars" && "Old vehicles beyond repair or no longer worth fixing."}
          {item === "Non-runners" && "No-key, no-start, and long-sitting vehicles are standard."}
          {item === "Seized engines and blown transmissions" && "Badlands grade and distance failures that cost more than the vehicle is worth."}
          {item === "Overheating and head-gasket failures" && "Cooling-system strain from climbs in and out of the valley shows up often."}
          {item === "Water and flood-damaged vehicles" && "River and yard flood files accepted if you retained the salvage."}
          {item === "Legacy coal-era work trucks" && "Inherited old industrial vehicles still carry real scrap value."}
          {item === "Project and abandoned vehicles" && "Hamlet and coulee properties often hold these for decades."}
          {item === "Estate and missing-paperwork files" && "Inherited-property and ownership issues handled before the haul."}
        </p></article>)}</div></div></section>
        <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Describe the location, plan the access, get paid." description="This is one of the few markets where the route to the vehicle matters almost as much as the vehicle itself." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="Valley And Hamlet Access" title="Two minutes of location detail saves a wasted trip." description="Drumheller access planning is more specific than a normal city pickup, especially in Wayne, East Coulee, and coulee-bottom properties." /><div className="vehicle-grid">{accessItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
        <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for Drumheller sellers." description="Hamlet access, water-damage files, and inherited-property groups handled directly." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
        <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your Drumheller Quote</p><h2>Drumheller and the valley hamlets covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
