import type { Metadata } from "next";
import SectionIntro from "../components/section-intro";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { buildMetadata } from "../lib/metadata";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Bill of Sale Alberta | What It Must Say & Free Template",
  description:
    "The one document that proves you no longer own a vehicle. What an Alberta bill of sale must contain, the five mistakes people make, and a free template.",
  path: "/bill-of-sale-alberta",
});

const mistakes = [
  {
    title: "Not getting one at all",
    copy: "Private sales get done on a handshake constantly, especially for cheap or non-running vehicles. If a buyer says they do not bother with paperwork, stop the sale.",
  },
  {
    title: "Getting the VIN wrong",
    copy: "One transposed character makes the document describe a different vehicle. Photograph the VIN from the windshield plate, the driver-door jamb, or your registration.",
  },
  {
    title: "Writing $1 or leaving the price blank",
    copy: "There is no provincial sales tax on private vehicle sales in Alberta, so a false figure creates risk for no benefit.",
  },
  {
    title: "Forgetting the as-is language",
    copy: "Without a clear statement that the vehicle is sold as is, without warranty, you leave room for the buyer to come back later.",
  },
  {
    title: "Handing over the plates with the car",
    copy: "In Alberta, plates belong to you, not the vehicle. Remove them before it goes and return them to a registry agent.",
  },
];

const requiredRows = [
  ["Transaction", "Date of sale, price actually paid, method of payment"],
  ["Seller", "Full legal name, address, signature"],
  ["Buyer", "Full legal name or business name, address, signature"],
  ["Vehicle", "Year, make, model, body type, colour, VIN, odometer reading, plate number if still attached"],
  ["Condition", 'Sold "as is, where is," without warranty of any kind'],
  ["Purpose", "For an end-of-life vehicle: sold for dismantling and recycling, not for road use"],
  ["Copies", "One signed copy to each party"],
];

const complications = [
  {
    title: "Someone died and the car is theirs",
    copy: "A family member cannot simply sell an estate vehicle. You need executor or administrator documentation proving authority to act.",
  },
  {
    title: "The registration is lost",
    copy: "Take photo ID to a registry agent. They can generally confirm ownership using the VIN and reissue what is needed.",
  },
  {
    title: "There is still a loan on it",
    copy: "The lien must be discharged through Alberta's Personal Property Registry before the vehicle can be sold.",
  },
  {
    title: "It is in a company name",
    copy: "You need authorization from a signing authority matching the corporate records.",
  },
  {
    title: "It is not registered to you",
    copy: "Then you cannot sell it, and no legitimate buyer can purchase it from you regardless of how long it has been on your property.",
  },
];

const faqItems = [
  {
    question: "Is a bill of sale legally required in Alberta?",
    answer:
      "There is no single mandated government form, but you need one to cancel or transfer registration at a registry agent, and it is your best evidence that the sale happened.",
  },
  {
    question: "Does it need to be notarized or witnessed?",
    answer: "For an ordinary private vehicle sale in Alberta, both parties' signatures are normally sufficient.",
  },
  {
    question: "Do I need one even if the car is going straight to a wrecker?",
    answer: "Yes, arguably especially then, because that is when the vehicle disappears and you need proof it left lawfully.",
  },
  {
    question: "Handwritten or typed?",
    answer: "Either is fine. Legible and complete matters more than formatting.",
  },
  {
    question: "What if the odometer is broken?",
    answer: 'Record what it shows and note "odometer inoperative." Never estimate a number.',
  },
  {
    question: "Do you provide one?",
    answer: "Yes. We prepare it, both parties sign, and you keep a copy.",
  },
];

export default function BillOfSaleAlbertaPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="section section-light">
          <div className="site-shell legal-shell">
            <p className="eyebrow">Alberta Bill of Sale</p>
            <h1>The document that ends your liability.</h1>
            <p className="section-body-copy">
              Here&apos;s why this piece of paper matters more than people think.
            </p>
            <p className="section-body-copy">
              You sell a car. Six months later it is found abandoned in a lane in Forest Lawn,
              racks up parking tickets in the Beltline, or is towed and stored at $40 a day. The
              plate search comes back to the last registered owner. That is you, unless you can
              produce a signed bill of sale showing the date you sold it and to whom.
            </p>
            <p className="section-body-copy">
              That is the job this document does. Not tax, not formality, proof that the vehicle
              stopped being your problem on a specific date. Selling to us? We prepare it, both
              parties sign, and you keep a copy. Every vehicle, no exceptions.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="site-shell legal-shell">
            <SectionIntro
              eyebrow="The Five Mistakes People Make"
              title="Most bill-of-sale problems are simple, avoidable mistakes."
              description="These are the ones that create trouble later, especially when the vehicle is cheap, non-running, or sold casually."
            />
            <div className="check-list">
              {mistakes.map((item, index) => (
                <div key={item.title} className="comparison-row">
                  <span className="icon-badge">{index + 1}</span>
                  <p>
                    <strong>{item.title}.</strong> {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell legal-shell">
            <SectionIntro
              eyebrow="What Yours Needs To Say"
              title="If these fields are present, the document does its job."
              description="Complete beats fancy. The goal is a readable record that identifies the vehicle, the parties, the date, and the terms."
            />
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>What to include</th>
                  </tr>
                </thead>
                <tbody>
                  {requiredRows.map(([section, details]) => (
                    <tr key={section}>
                      <td>{section}</td>
                      <td>{details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell comparison-shell">
            <div className="comparison-copy">
              <p className="eyebrow">Then Do These Two Things</p>
              <h2>Plates and insurance are the steps people forget after the signature.</h2>
              <p>
                Returning plates and cancelling insurance closes the loop in the records that can
                still point at you after the vehicle is gone.
              </p>
            </div>
            <div className="comparison-list">
              <div className="comparison-row">
                <span className="icon-badge">1</span>
                <p>
                  Return your plates to an Alberta registry agent. This cancels the registration,
                  may refund unused fees, and closes the record tied to those plates.
                </p>
              </div>
              <div className="comparison-row">
                <span className="icon-badge">2</span>
                <p>
                  Cancel your insurance the same day using the bill of sale as proof of sale. Ask
                  about a refund on the unused portion of the premium.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="site-shell legal-shell">
            <SectionIntro
              eyebrow="When It Is Not Straightforward"
              title="Most complications are solvable, but they change what paperwork you need."
              description="Do not wait until the truck is outside to discover there is an estate, lien, or corporate signing problem."
            />
            <div className="legal-card-grid">
              {complications.map((item) => (
                <article key={item.title} className="legal-card">
                  <h2>{item.title}</h2>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="site-shell legal-shell">
            <SectionIntro
              eyebrow="Free Template"
              title="Copy this, print it, or rewrite it neatly by hand."
              description="Typed or handwritten is fine. What matters is that it is complete, legible, and signed by both parties."
            />
            <div className="legal-template">
              <div className="legal-template-doc">
                <div className="legal-template-header">
                  <p>Alberta Motor Vehicle Bill of Sale</p>
                  <span>Seller and buyer keep one signed copy each</span>
                </div>

                <div className="legal-template-grid legal-template-grid-3">
                  <div className="legal-template-field">
                    <label>Date of Sale</label>
                    <span />
                  </div>
                  <div className="legal-template-field">
                    <label>Purchase Price</label>
                    <span />
                  </div>
                  <div className="legal-template-field">
                    <label>Method of Payment</label>
                    <span />
                  </div>
                </div>

                <div className="legal-template-grid legal-template-grid-2">
                  <div className="legal-template-block">
                    <h3>Seller</h3>
                    <div className="legal-template-field">
                      <label>Full Legal Name</label>
                      <span />
                    </div>
                    <div className="legal-template-field">
                      <label>Address</label>
                      <span />
                    </div>
                    <div className="legal-template-field">
                      <label>Signature</label>
                      <span />
                    </div>
                  </div>

                  <div className="legal-template-block">
                    <h3>Buyer</h3>
                    <div className="legal-template-field">
                      <label>Full Legal Name / Business Name</label>
                      <span />
                    </div>
                    <div className="legal-template-field">
                      <label>Address</label>
                      <span />
                    </div>
                    <div className="legal-template-field">
                      <label>Signature</label>
                      <span />
                    </div>
                  </div>
                </div>

                <div className="legal-template-block">
                  <h3>Vehicle Details</h3>
                  <div className="legal-template-grid legal-template-grid-3">
                    <div className="legal-template-field">
                      <label>Year</label>
                      <span />
                    </div>
                    <div className="legal-template-field">
                      <label>Make</label>
                      <span />
                    </div>
                    <div className="legal-template-field">
                      <label>Model</label>
                      <span />
                    </div>
                  </div>
                  <div className="legal-template-grid legal-template-grid-3">
                    <div className="legal-template-field">
                      <label>Body Type</label>
                      <span />
                    </div>
                    <div className="legal-template-field">
                      <label>Colour</label>
                      <span />
                    </div>
                    <div className="legal-template-field">
                      <label>Plate Number if Attached</label>
                      <span />
                    </div>
                  </div>
                  <div className="legal-template-field">
                    <label>VIN</label>
                    <span />
                  </div>
                  <div className="legal-template-field">
                    <label>Odometer Reading</label>
                    <span />
                  </div>
                </div>

                <div className="legal-template-note">
                  <p>Condition: Sold "as is, where is," without warranty of any kind.</p>
                  <p>Purpose: Sold for dismantling and recycling, not for road use.</p>
                </div>
              </div>
            </div>
            <div className="legal-template-actions">
              <a
                href="https://formsmgmt.gov.ab.ca/Public/REG3126.xdp"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Download Alberta Bill of Sale Form
              </a>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell">
            <SectionIntro
              eyebrow="FAQ"
              title="The questions people ask after the sale is already half arranged."
              description="This is the practical end of the paperwork, not a theory exercise."
            />
            <div className="faq-grid">
              {faqItems.map((item) => (
                <article key={item.question} className="faq-card">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="site-shell cta-band-shell">
            <div>
              <p className="eyebrow">Selling To Junk My Car YYC</p>
              <h2>Bring your Alberta registration or title in your name and valid photo ID.</h2>
              <p className="cta-band-copy">
                You must be the registered owner and at least 18. We handle the document. Free
                quote: {siteConfig.phoneDisplay}
              </p>
            </div>
            <a href={siteConfig.phoneHref} className="primary-button primary-button-light">
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
