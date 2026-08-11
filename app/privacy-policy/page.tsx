import type { Metadata } from "next";
import SectionIntro from "../components/section-intro";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Junk My Car YYC",
  description:
    "How Junk My Car YYC collects, uses, protects and discloses personal information, and your rights under Alberta's privacy legislation.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="section section-light">
          <div className="site-shell legal-shell">
            <p className="eyebrow">Privacy Policy</p>
            <h1>How we collect, use, protect, and disclose personal information.</h1>
            <p className="section-body-copy">
              This page is structured around your supplied policy content. Unknown legal
              or vendor-specific placeholders are intentionally preserved for you to finalize.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="site-shell legal-shell">
            <SectionIntro
              eyebrow="A. The Short Version"
              title="What we collect, what the law requires, and what we do not do with your data."
              description="This is the practical version a seller should understand before sharing information or completing a transaction."
            />
            <div className="check-list">
              <div className="comparison-row"><span className="icon-badge">✓</span><p>We collect what we need to quote, pick up, pay you, and comply with the law.</p></div>
              <div className="comparison-row"><span className="icon-badge">✓</span><p>We are legally required to collect your government photo ID and to report transaction details to law enforcement. This applies to every licensed scrap metal buyer in Alberta, not only us.</p></div>
              <div className="comparison-row"><span className="icon-badge">✓</span><p>We never sell your information.</p></div>
              <div className="comparison-row"><span className="icon-badge">✓</span><p>You can ask what we hold, ask us to correct it, and complain to Alberta&apos;s privacy commissioner if we get it wrong.</p></div>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell legal-card-grid">
            <article className="legal-card">
              <h2>B. What We Collect</h2>
              <p><strong>Enquiries and quotes:</strong> name, phone, email, vehicle location, vehicle details (year, make, model, VIN, odometer, condition), photos you send, and anything you tell us in conversation.</p>
              <p><strong>At purchase — legally mandated:</strong> your legal name and current address; valid government-issued photo identification including its unique identification number; your business name if selling as a business; the date, time, location, dollar value and payment method of the transaction; the vehicle&apos;s VIN and proof of ownership; and details of any vehicle used to deliver property, including plate, make, model and colour.</p>
              <p><strong>Payment:</strong> the email address or account details needed to send a traceable payment.</p>
              <p><strong>Website:</strong> IP address, browser and device, pages viewed, referrer, approximate location, and cookie data via GA4.</p>
              <p>We do not knowingly collect information from anyone under 18.</p>
            </article>
            <article className="legal-card">
              <h2>C. Why We Collect It</h2>
              <p>To quote your vehicle; to schedule and complete pickup; to verify you are the registered owner and legally able to sell; to prepare a bill of sale; to pay you; to meet our legal obligations under Alberta&apos;s scrap metal legislation and Calgary&apos;s municipal requirements; for tax, accounting and audit records; to handle complaints and disputes; to improve our website; and to send marketing only where you&apos;ve consented.</p>
              <p>We do not sell, rent or trade your personal information.</p>
            </article>
            <article className="legal-card">
              <h2>D. Consent, And Its Limits</h2>
              <p>Providing information to us constitutes consent to the uses described here. You may withdraw consent at any time by contacting our Privacy Officer, subject to legal and contractual restrictions and reasonable notice.</p>
              <p>We cannot complete a vehicle purchase without the information Alberta law requires us to collect and report, and withdrawing consent does not require us to delete records we are legally obliged to retain.</p>
            </article>
            <article className="legal-card">
              <h2>E. Who We Disclose It To</h2>
              <p><strong>Law enforcement and government:</strong> Alberta legislation requires businesses in our industry to report prescribed seller and transaction information to law enforcement through a centralized database. Dealers operating in Calgary are also subject to municipal transaction-recording requirements.</p>
              <p><strong>Service providers:</strong> towing and transport operators; certified recycling and dismantling facilities; payment processors and our financial institution; website hosting, form and analytics providers; accountants and legal advisors.</p>
              <p><strong>Registry agents and insurers:</strong> only where you ask us to assist.</p>
              <p><strong>Outside Alberta or Canada:</strong> some hosting and analytics providers may store or process data outside Canada. Contact our Privacy Officer for details.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="site-shell legal-shell">
            <SectionIntro
              eyebrow="F. Retention"
              title="We keep records only as long as law, operations, or dispute windows require."
              description="These placeholders should be finalized with your real provider names and retention settings."
            />
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>How long</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Transaction and identification records</td>
                    <td>The minimum required by Alberta legislation — currently at least 2 years — and generally 30 months for tax and limitation purposes</td>
                  </tr>
                  <tr>
                    <td>Quote enquiries that do not proceed</td>
                    <td>30 months, then deleted</td>
                  </tr>
                  <tr>
                    <td>Marketing contact details</td>
                    <td>Until you unsubscribe or ask for removal</td>
                  </tr>
                  <tr>
                    <td>Website analytics</td>
                    <td>Per the retention settings in GA4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="section-body-copy">When information is no longer needed and no longer subject to a legal retention requirement, we securely destroy, erase or anonymise it.</p>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell legal-card-grid">
            <article className="legal-card">
              <h2>G. Marketing Messages</h2>
              <p>We send commercial email or SMS only in accordance with CASL, with consent or an existing business relationship as CASL defines it, identifying us, and including a working unsubscribe in every message.</p>
              <p>Requesting a quote is not consent to marketing. Messages about a vehicle you asked us to quote or collect are transactional, not marketing.</p>
            </article>
            <article className="legal-card">
              <h2>H. Cookies And Analytics</h2>
              <p>Our site uses cookies and similar technologies to function, remember preferences, and measure usage, via GA4. You can control or block cookies in your browser; blocking some may affect site functionality.</p>
            </article>
            <article className="legal-card">
              <h2>I. Safeguards</h2>
              <p>We maintain reasonable physical, organisational and technological safeguards proportionate to the sensitivity of the information.</p>
              <p>If we become aware of a breach involving a real risk of significant harm, we will report and notify as required by applicable privacy legislation, including to the Office of the Information and Privacy Commissioner of Alberta.</p>
            </article>
            <article className="legal-card">
              <h2>J. Your Rights</h2>
              <p>Under PIPA you may access the personal information we hold about you, request correction of inaccurate or incomplete information, ask how we collect, use and disclose it, and withdraw consent subject to section D.</p>
              <p>Write to info@junkmycaryyc.ca. We may verify your identity. We respond within the period PIPA requires — generally 45 days.</p>
            </article>
            <article className="legal-card">
              <h2>K. Complaints</h2>
              <p>Contact our Privacy Officer first — info@junkmycaryyc.ca or {siteConfig.phoneDisplay}. If you are not satisfied with our response:</p>
              <p>Office of the Information and Privacy Commissioner of Alberta — oipc.ab.ca</p>
            </article>
            <article className="legal-card">
              <h2>L. Changes</h2>
              <p>We may update this policy; the current version with its effective date is always on this page. Material changes will be noted here.</p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
