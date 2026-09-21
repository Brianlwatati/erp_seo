import { Mail, ArrowRight } from "lucide-react";
export const metadata = {
  title: "Contact ERPKE",
  description:
    "Contact ERPKE about business management software for your Kenyan business.",
};
export default function Page() {
  return (
    <section className="pageHero">
      <div className="container narrow">
        <div className="eyebrow">CONTACT ERPKE</div>
        <h1>Let's talk about how you manage your business.</h1>
        <p>
          Tell us what you currently use for inventory, sales, purchasing or
          reporting and we can discuss how ERPKE could fit your workflow.
        </p>
        <div className="pricingNote">
          <Mail />
          <span>
            <b>Email</b>
            <br />
            <a href="mailto:brians@erpke.co.ke">brians@erpke.co.ke</a>
          </span>
        </div>
        <div className="heroActions">
          <a
            className="button"
            href="mailto:brians@erpke.co.ke?subject=ERPKE%20Enquiry"
          >
            Send an enquiry <ArrowRight />
          </a>
          <a className="button secondary" href="https://app.erpke.co.ke/">
            Open ERPKE
          </a>
        </div>
      </div>
    </section>
  );
}
