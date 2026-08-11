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

const heroBullets = ["We really do come to Didsbury and the county around it", "Farm clearouts quoted as a group", "Cash or e-transfer at pickup with gravel access included"];
const trustItems = [{ title: "Didsbury and county pickup", icon: "◎" }, { title: "Farm clearouts", icon: "↗" }, { title: "Heavy vehicles welcome", icon: "$" }, { title: "No keys needed", icon: "✓" }];
const farmProblemItems = [
  { title: "Multi-generational land", copy: "Vehicles get pushed into the trees or behind the bins and sit there for decades because there is room." },
  { title: "Then ownership becomes the hard part", copy: "When land sells or an estate is settled, each old vehicle becomes its own paperwork question." },
  { title: "We handle exactly this", copy: "Tell us how many, what they are, whether they roll, and what the access is, and we quote the whole group." },
  { title: "Leaving them is not free", copy: "Old vehicles leak oil, coolant, gear oil, and fuel into cropland and groundwater." },
];
const wearItems = [
  { title: "Gravel roads", copy: "Range and township roads sandblast paint, pit glass, and wear out bushings and suspension." },
  { title: "Grain and stock hauling", copy: "Loaded trucks on gravel destroy transmissions, brakes, and rear ends." },
  { title: "Distance", copy: "Residents drive to Olds, Carstairs, Airdrie, Calgary, and Red Deer, so mileage retires vehicles early." },
  { title: "Freeze-thaw and de-icer", copy: "Central Alberta winters plus salt rot frames and brake lines from beneath." },
  { title: "Hail and collisions", copy: "The corridor takes hail and fast rural traffic write-offs still have salvage value." },
];
const serviceAreas = [
  { label: "In Didsbury", areas: "Downtown and the Main Street area, Westhill, Valarosa, Shantz Village, Southridge, Rosebud Valley, and the industrial area along Highway 2A." },
  { label: "Across Mountain View County And Nearby", areas: "Olds, Carstairs, Crossfield, Cremona, Sundre, Water Valley, Bergen, Eagle Hill, Torrington, Bowden, Innisfail, Madden, and rural properties throughout the county." },
];
const vehicleTypes = ["Farm and grain trucks", "Ranch half-tons", "Scrap and junk cars", "Non-runners", "Blown engines and transmissions", "Hail and collision write-offs", "Service and equipment trucks", "Estate and missing-paperwork files"];
const steps = [
  { title: "Call or text", copy: `${siteConfig.phoneDisplay} with what you have, how many there are, and what the access is like.` },
  { title: "Free pickup", copy: "Field and gravel access included, with one organized visit for the whole group if needed." },
  { title: "Paid at pickup", copy: "Cash or e-transfer, signed bill of sale, everything hauled." },
];
const paperworkItems = [
  { title: "Make a written list", copy: "For each vehicle note the make, rough year, any paperwork, and whose name you think it is in." },
  { title: "Use VIN photos", copy: "Photos of the VIN plate usually save time at the registry." },
  { title: "Call us before the registry", copy: "We can tell you what each category of vehicle will need so you make one trip instead of several." },
  { title: "One clearout visit", copy: "Once ownership is established, we clear the whole lot and issue a bill of sale per vehicle." },
];
const faqItems = [
  { question: "Will you actually drive out to Didsbury?", answer: "Yes, and to the county around it." },
  { question: "Six old vehicles on a farm. Can you take them all?", answer: "Yes. That is a specialty, and the group price beats individual pickups." },
  { question: "They have no plates, no keys, no papers.", answer: "Very common. Bring ID to an Alberta Registry to establish ownership and call us first." },
  { question: "Can you get into a soft field or treed windbreak?", answer: "Tell us the access and we will bring the right equipment." },
  { question: "Payment?", answer: "Cash or e-transfer at pickup." },
];

export const metadata: Metadata = buildMetadata({
  title: "Scrap Car Removal Didsbury | Cash For Cars, Free Towing",
  description: "Scrap car removal in Didsbury and Mountain View County — cash at pickup for any vehicle. Farm clearouts welcome. Call (403) 837-1550 for a free quote today.",
  path: "/junk-my-car-didsbury",
});

export default function DidsburyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section"><div className="hero-media"><Image src="/jmc-imgs/purchase-26.jpeg" alt="Scrap car removal service for Didsbury vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div><div className="hero-overlay" /><div className="site-shell hero-shell"><div className="hero-copy"><p className="eyebrow">Scrap Car Removal Didsbury</p><h1>Scrap Car Removal Didsbury — Including the Ones Out Back</h1><p className="hero-support">Old farming country holds onto vehicles for decades. We buy and remove them from Didsbury and Mountain View County in one organized pass.</p><ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a></div><div className="hero-form-wrap"><HeroQuoteForm /></div></div></section>
        <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
        <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">The Multi-Generational Farm Problem</p><h2>This is the most common Didsbury call for a reason.</h2><p className="section-body-copy">Families keep dead vehicles because there is room, until a sale, estate, or cleanup suddenly turns the whole windbreak into a paperwork and hauling job.</p><ul className="promo-banner-points">{farmProblemItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Didsbury scrap car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
        <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local scrap car pickup example for a Didsbury farm or acreage" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Why Vehicles Wear Out Here</p><h2>Gravel, hauling, mileage, winter, hail.</h2><p className="section-body-copy">The mix of farm use and central Alberta distance driving creates exactly the kind of vehicles that end up as scrap.</p><ul className="promo-banner-points">{wearItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div></div></section>
        <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Where We Pick Up" title="Didsbury, the county, and the surrounding rural grid." description="Town, field, farmyard, windbreak, or acreage, we come where the vehicles sit." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Buy" title="Farm trucks, service units, non-runners, and inherited yard vehicles." description="All makes, gas and diesel, if it is done for you, we want to hear about it." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
          {item === "Farm and grain trucks" && "Heavy old trucks still carry strong scrap weight."}
          {item === "Ranch half-tons" && "County property pickups handled where they sit."}
          {item === "Scrap and junk cars" && "Old vehicles beyond repair or no longer worth fixing."}
          {item === "Non-runners" && "No keys, dead engine, missing wheels, or grass-grown files."}
          {item === "Blown engines and transmissions" && "Expensive failures that end the vehicle's economic life."}
          {item === "Hail and collision write-offs" && "Retained salvage still has value."}
          {item === "Service and equipment trucks" && "Farm and work units taken singly or in groups."}
          {item === "Estate and missing-paperwork files" && "Executor and old-registration situations handled carefully."}
        </p></article>)}</div></div></section>
        <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Count it, document it, clear it." description="The hard part is usually not the towing. It is establishing ownership once and doing the haul once." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="Estate And Farm Clearouts" title="The paperwork, plainly." description="This is where most people get stuck, so the goal is one registry trip and one organized clearout." /><div className="vehicle-grid">{paperworkItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
        <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for Didsbury sellers." description="Farm access, multi-vehicle clearouts, and no-paperwork files handled directly." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
        <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your Didsbury Quote</p><h2>Didsbury and Mountain View County covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
