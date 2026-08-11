import type { Metadata } from "next";
import SectionIntro from "../components/section-intro";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | Junk My Car YYC",
  description:
    "Terms governing use of junkmycaryyc.ca and the sale of a vehicle to Junk My Car YYC. Please read before selling your vehicle.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="section section-light">
          <div className="site-shell legal-shell">
            <p className="eyebrow">Terms of Use</p>
            <h1>Website terms, quote terms, sale terms, pickup terms, and liability limits.</h1>
            <p className="section-body-copy">
              This page uses your supplied terms content and keeps the unresolved legal
              placeholders visible for later review.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="site-shell legal-card-grid">
            <article className="legal-card">
              <h2>Part 1 — Using This Website</h2>
              <p><strong>1.1 Information only.</strong> Content here is general information, not legal, financial, mechanical or valuation advice.</p>
              <p><strong>1.2 Regulatory information.</strong> We describe Alberta registry, insurance, environmental, municipal bylaw and scrap metal requirements as a general guide. Always confirm current requirements with the relevant authority.</p>
              <p><strong>1.3 Accuracy.</strong> We aim to keep the site accurate and current but do not warrant that it is complete, current or error-free.</p>
              <p><strong>1.4 Intellectual property.</strong> Text, layout, branding and graphics on this site are owned by us or used with permission.</p>
              <p><strong>1.5 Acceptable use.</strong> Do not attempt to disrupt the site, gain unauthorised access, submit false enquiries, or use automated tools to harvest content or contact details.</p>
              <p><strong>1.6 Third-party links.</strong> We are not responsible for the content, accuracy or practices of external sites we link to.</p>
              <p><strong>1.7 Submissions.</strong> Information and photos you send us may be used to quote and complete a transaction, subject to our Privacy Policy.</p>
            </article>
            <article className="legal-card">
              <h2>Part 2 — Quotes And Offers</h2>
              <p><strong>2.1 A quote is an estimate.</strong> It is based entirely on the information you provide.</p>
              <p><strong>2.2 Validity.</strong> Quotes are valid for 2 days and are subject to movement in the scrap metal market.</p>
              <p><strong>2.3</strong> We honour our quote where the vehicle is materially as described.</p>
              <p><strong>2.4 When an offer may be revised.</strong> If the vehicle differs materially from your description, we may revise or withdraw the offer. We will explain the reason, and you may decline at no cost.</p>
              <p><strong>2.5 No contract until signed.</strong> A sale exists only once both parties have signed the bill of sale.</p>
            </article>
            <article className="legal-card">
              <h2>Part 3 — Selling A Vehicle To Us</h2>
              <p><strong>3.1 Your representations.</strong> By selling to us you represent that you are at least 18, are the registered owner or hold documented legal authority, have the legal right to sell, that liens are cleared, the vehicle is not stolen, the description is accurate, residual contents are disclosed, and your ID and information are true and valid.</p>
              <p><strong>3.2 Indemnity.</strong> You agree to indemnify us against losses arising from a breach of clause 3.1.</p>
              <p><strong>3.3 Identification is mandatory.</strong> Alberta legislation requires us to collect and report prescribed information. We cannot complete a purchase without this.</p>
              <p><strong>3.4 Payment.</strong> Payment is made at pickup by traceable method (electronic transfer). [Confirm the application of this requirement with your lawyer and keep all site copy consistent.]</p>
              <p><strong>3.5 As is.</strong> Vehicles are purchased as is, where is, with all faults, for dismantling, salvage and recycling.</p>
            </article>
            <article className="legal-card">
              <h2>Part 4 — Pickup And Towing</h2>
              <p><strong>4.1</strong> No cost within our service area. We confirm the arrangement before you commit.</p>
              <p><strong>4.2</strong> Access is your responsibility. You must ensure safe and lawful access, including codes, fobs, and permission from property owners or building managers.</p>
              <p><strong>4.3</strong> Disclose constraints in advance such as parkade ceiling height, lane width, ground conditions, and whether the vehicle rolls and steers.</p>
              <p><strong>4.4 Recovery risk.</strong> Recovering an immobile vehicle can cause damage to the vehicle and, in some cases, surrounding surfaces. By booking a pickup you accept this risk.</p>
              <p><strong>4.5</strong> We may decline a pickup that cannot be completed safely or lawfully.</p>
              <p><strong>4.6</strong> We may reschedule for weather, road conditions, equipment, or operational reasons.</p>
            </article>
            <article className="legal-card">
              <h2>Part 5 — Your Responsibilities</h2>
              <p><strong>5.1 Empty the vehicle before pickup.</strong> Once collected, a vehicle goes for processing and its contents cannot be recovered.</p>
              <p><strong>5.2</strong> Remove your licence plates before the vehicle is taken and return them to an Alberta registry agent to cancel the registration.</p>
              <p><strong>5.3</strong> Cancel your insurance, using the bill of sale as proof of sale.</p>
              <p><strong>5.4</strong> Keep your copy of the bill of sale as your record that ownership transferred.</p>
            </article>
            <article className="legal-card">
              <h2>Part 6 — Liability</h2>
              <p><strong>6.1</strong> To the fullest extent permitted by law, our total liability arising from any transaction is limited to the purchase price paid or payable for the vehicle concerned.</p>
              <p><strong>6.2</strong> We are not liable for indirect, incidental, consequential, special or punitive damages, or for loss of profit, revenue or data.</p>
              <p><strong>6.3</strong> We are not liable for property left in a vehicle, or for consequences of your failure to cancel registration or insurance.</p>
              <p><strong>6.4</strong> Nothing here excludes liability that cannot lawfully be excluded.</p>
            </article>
            <article className="legal-card">
              <h2>Part 7 — General</h2>
              <p><strong>7.1 Complaints.</strong> Contact us first — most things are resolved by phone. {siteConfig.phoneDisplay} · {siteConfig.email} · {siteConfig.streetAddress}, Calgary AB.</p>
              <p><strong>7.2 Governing law.</strong> These terms are governed by the laws of Alberta and the federal laws of Canada applicable in Alberta, and you agree to the exclusive jurisdiction of the Alberta courts, judicial district of Calgary, Alberta.</p>
              <p><strong>7.3 Severability.</strong> If any provision is unenforceable, the remainder continues in force.</p>
              <p><strong>7.4 Changes.</strong> We may update these terms; the current version with its effective date is always posted here.</p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
