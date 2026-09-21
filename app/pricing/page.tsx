import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
export const metadata = {
  title: "ERPKE Pricing",
  description:
    "Learn about ERPKE pricing and discuss the right setup for your business.",
};
export default function Page() {
  return (
    <section className="pageHero">
      <div className="container narrow">
        <div className="eyebrow">PRICING</div>
        <h1>Choose a setup that fits your business.</h1>
        <p>
          ERPKE pricing can depend on the business workflow, users and modules
          you need. Contact us for current pricing and setup options.
        </p>
        <div className="heroActions">
          <Link className="button" href="/contact">
            Request pricing <ArrowRight />
          </Link>
          <a className="button secondary" href="https://app.erpke.co.ke/">
            Open ERPKE
          </a>
        </div>
        <div className="pricingNote">
          <CheckCircle2 />
          <span>
            <b>Need a walkthrough first?</b>
            <br />
            We can show you the system and discuss which modules are relevant to
            your business.
          </span>
        </div>
      </div>
    </section>
  );
}
