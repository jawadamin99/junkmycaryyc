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

const heroBullets = ["We cover both the former Black Diamond and Turner Valley sides", "Ranch and gravel access included", "Multi-vehicle clearouts quoted as a group"];
const trustItems = [{ title: "Both sides of the river", icon: "◎" }, { title: "Ranch and acreage pickup", icon: "↗" }, { title: "Heavy trucks welcome", icon: "$" }, { title: "Group clearouts", icon: "✓" }];
const historyItems = [
  { title: "A century of oilfield vehicles", copy: "Turner Valley's oil and gas history left generations of work trucks, service rigs, and ranch vehicles scattered through the foothills." },
  { title: "Those vehicles are worth real money", copy: "Heavy old oilfield and ranch trucks still carry serious scrap steel value." },
  { title: "They are also a liability where they sit", copy: "Leaking oil, coolant, and fuel eventually drain toward the Sheep, Highwood, and Bow systems." },
  { title: "Group clearouts matter", copy: "If there are two, four, or ten derelicts, one organized visit nearly always beats separate calls." },
];
const wearItems = [
  { title: "Cowboy Trail and gravel mileage", copy: "Highway 22 and local range roads bring chip damage, dust, suspension wear, and pitted glass." },
  { title: "Ranch and towing duty", copy: "Horse trailers, hay, and stock haulers wear out transmissions, brakes, and rear ends early." },
  { title: "Chinook freeze-thaw", copy: "Foothills temperature swings plus road de-icer rot frames and brake lines from below." },
  { title: "Hail and wildlife", copy: "Foothills storms and deer on Highways 22 and 7 create regular write-offs." },
  { title: "Distance", copy: "Residents cover real kilometres southwest of Calgary, and mileage retires vehicles before the body gives out." },
];
const serviceAreas = [
  { label: "Across Diamond Valley", areas: "The former Black Diamond side east of the Sheep River, the former Turner Valley side west of it, the downtown and Centre Avenue area, the Sunset Boulevard area, the Friendship Trail corridor, and the industrial and shop districts." },
  { label: "Throughout Foothills County And Nearby", areas: "Longview, Millarville, Priddis, Okotoks, High River, Bragg Creek, Kew, Hartell, Naphtha, Cayley, and ranch and acreage properties along Highways 22, 7, 543, and 546." },
];
const vehicleTypes = ["Legacy oilfield and service trucks", "Ranch and farm vehicles", "Scrap and junk cars", "Non-runners", "Hail and wildlife write-offs", "High-mileage rural commuters", "Project and abandoned vehicles", "Estate and missing-paperwork files"];
const steps = [
  { title: "Call or text", copy: `${siteConfig.phoneDisplay} with the year, make, model, condition, and how many vehicles.` },
  { title: "Free pickup", copy: "We schedule ranch, acreage, and gravel access with the right truck and equipment." },
  { title: "Paid at pickup", copy: "Cash or e-transfer, signed bill of sale, vehicles hauled." },
];
const oilfieldItems = [
  { title: "Straightforward for us", copy: "Crew cabs, welding trucks, service half-tons and one-tons, picker trucks, flat decks, and ranch trucks." },
  { title: "Tell us in advance", copy: "Mounted tanks or anything that carried drilling fluids, produced water, chemicals, or fuel changes the plan." },
  { title: "What we cannot take", copy: "Anything where ownership cannot be established first." },
  { title: "Bring us the whole list", copy: "If there are six vehicles in a windbreak, we would rather quote all six in one pass." },
];
const faqItems = [
  { question: 'I searched "Black Diamond" — do you cover that?', answer: "Yes. Black Diamond and Turner Valley are now the Town of Diamond Valley, and we serve all of it." },
  { question: "Will you buy a truck that has not run since the eighties?", answer: "Yes. Old and heavy is still valuable." },
  { question: "Do you come out to ranches?", answer: "Yes, throughout Foothills County." },
  { question: "Can you clear multiple vehicles at once?", answer: "Yes, and it is usually worth more per vehicle." },
  { question: "No title on an old oilfield truck?", answer: "Take ID to an Alberta Registry to establish ownership, then call us." },
  { question: "Payment?", answer: "Cash or e-transfer at pickup." },
];

export const metadata: Metadata = buildMetadata({
  title: "Scrap Car Removal Diamond Valley | Cash For Cars, Towed",
  description: "Scrap car removal in Diamond Valley — formerly Black Diamond and Turner Valley. Cash at pickup, free towing, any condition. Call (403) 837-1550 for a free quote.",
  path: "/junk-my-car-diamond-valley",
});

export default function DiamondValleyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section"><div className="hero-media"><Image src="/jmc-imgs/purchase-26.jpeg" alt="Scrap car removal service for Diamond Valley vehicles" fill priority sizes="100vw" className="hero-image hero-image-local" /></div><div className="hero-overlay" /><div className="site-shell hero-shell"><div className="hero-copy"><p className="eyebrow">Scrap Car Removal Diamond Valley</p><h1>Scrap Car Removal Diamond Valley — Black Diamond and Turner Valley, One Call</h1><p className="hero-support">If you are searching for a scrap car buyer in Black Diamond or Turner Valley, you are in the right place. The name changed, the old vehicles did not, and the same <a className="content-link" href="/">cash for cars Calgary</a> process also covers nearby <a className="content-link" href="/cash-for-cars-high-river">High River vehicle buyers</a>.</p><ul className="hero-bullets">{heroBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href={siteConfig.phoneHref} className="primary-button">Call {siteConfig.phoneDisplay}</a></div><div className="hero-form-wrap"><HeroQuoteForm /></div></div></section>
        <section className="value-strip"><div className="site-shell value-strip-shell">{trustItems.map((item) => <div key={item.title} className="trust-chip"><IconBadge>{item.icon}</IconBadge><p>{item.title}</p></div>)}</div></section>
        <section className="promo-banner-section"><div className="site-shell"><div className="promo-banner-split"><div className="promo-banner-copy"><p className="eyebrow">A Century Of Oilfield Vehicles</p><h2>Historic foothills work trucks do not remove themselves.</h2><p className="section-body-copy">Turner Valley's oil history and Black Diamond's resource past left generations of service vehicles, ranch trucks, and old industrial units on local properties.</p><ul className="promo-banner-points">{historyItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div><div className="promo-banner-frame"><Image src="/images/junkmycar-banner.png" alt="Junk My Car YYC promotional banner for Diamond Valley scrap car removal service" width={1024} height={1536} className="promo-banner-image" /></div></div></div></section>
        <section className="section pickup-photo-section"><div className="site-shell pickup-photo-split"><div className="pickup-photo-frame"><Image src="/jmc-imgs/purchase-23.jpeg" alt="Local scrap car pickup example for a Diamond Valley property owner" width={1200} height={1600} className="pickup-photo-image" /></div><div className="pickup-photo-copy"><p className="eyebrow">Why Vehicles Die Here</p><h2>Ranch duty, gravel roads, hail, wildlife, and foothills weather.</h2><p className="section-body-copy">These are not city-use vehicles. The wear pattern here is pure foothills Alberta.</p><ul className="promo-banner-points">{wearItems.map((item) => <li key={item.title}><strong>{item.title}.</strong> {item.copy}</li>)}</ul></div></div></section>
        <section className="section service-area-section"><div className="site-shell"><SectionIntro eyebrow="Where We Pick Up" title="Both sides of Diamond Valley and the surrounding foothills." description="Town, ranch, acreage, and industrial pickup are all part of the same service area." /><div className="service-area-grid">{serviceAreas.map((group) => <article key={group.label} className="area-card"><p className="area-card-label">{group.label}</p><p>{group.areas}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="What We Buy" title="Legacy oilfield trucks, ranch vehicles, write-offs, and long-sitters." description="All makes, gas and diesel, if it is finished for you, we want to hear about it." /><div className="vehicle-grid vehicle-grid-staggered">{vehicleTypes.map((item) => <article key={item} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>◈</IconBadge><h3>{item}</h3></div><p>
          {item === "Legacy oilfield and service trucks" && "Heavy old industrial vehicles still carry real scrap value."}
          {item === "Ranch and farm vehicles" && "Foothills property units handled where they sit."}
          {item === "Scrap and junk cars" && "Old vehicles beyond repair or no longer worth fixing."}
          {item === "Non-runners" && "No-start, no-key, and sunk-into-the-sod files are standard."}
          {item === "Hail and wildlife write-offs" && "Retained salvage accepted if you kept the vehicle after payout."}
          {item === "High-mileage rural commuters" && "Foothills distance driving retires vehicles before the body gives out."}
          {item === "Project and abandoned vehicles" && "Vehicles that stayed in the windbreak for years."}
          {item === "Estate and missing-paperwork files" && "Old farm and oilfield paperwork situations guided before pickup."}
        </p></article>)}</div></div></section>
        <section className="section section-light"><div className="site-shell"><SectionIntro eyebrow="Three Steps" title="Count the vehicles, schedule the access, get paid." description="If there are several derelicts, tell us up front and we quote the group properly." /><div className="steps-grid">{steps.map((step, index) => <article key={step.title} className="step-card"><div className="step-card-top"><span className="step-card-number">{String(index + 1).padStart(2, "0")}</span><StepBadge type={index === 0 ? "phone" : index === 1 ? "arrow" : "check"} /></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>
        <section className="section"><div className="site-shell"><SectionIntro eyebrow="Old Oilfield Trucks" title="What we can take, what changes the plan, and what must be resolved first." description="Diamond Valley properties often hold industrial vehicles that are not all equally simple." /><div className="vehicle-grid">{oilfieldItems.map((item) => <article key={item.title} className="vehicle-card"><div className="vehicle-card-top"><IconBadge>!</IconBadge><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div></div></section>
        <section className="section faq-section"><div className="site-shell"><SectionIntro eyebrow="FAQ" title="Straight answers for Diamond Valley sellers." description="Old trucks, ranch access, amalgamation-name confusion, and paperwork handled plainly." /><div className="faq-grid">{faqItems.map((item) => <article key={item.question} className="faq-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div></section>
        <section className="cta-band"><div className="site-shell cta-band-shell"><div><p className="eyebrow">Get Your Diamond Valley Quote</p><h2>Diamond Valley and Foothills County covered.</h2><p className="cta-band-copy">Call or text {siteConfig.phoneDisplay} · Open 24/7</p></div><a href={siteConfig.phoneHref} className="primary-button primary-button-light">Call {siteConfig.phoneDisplay}</a></div></section>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
