import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <div className="eyebrow">SALES MANAGEMENT</div>
          <h1>Keep your sales process organised from customer to payment.</h1>
          <p>
            Bring customer information, sales activity, invoices and outstanding
            balances into one workflow.
          </p>
          <div className="heroActions">
            <a className="button" href="https://app.erpke.co.ke/">
              Open ERPKE <ArrowRight />
            </a>
            <Link className="button secondary" href="/contact">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <div>
              <div className="eyebrow">WHAT YOU CAN DO</div>
              <h2>Practical workflows for growing businesses.</h2>
            </div>
            <p>
              Keep the records behind your day-to-day operations connected and
              easier to review.
            </p>
          </div>
          <div className="detailGrid">
            <Link href="/features" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Sales activity</h3>
              <p>Record and manage day-to-day sales transactions.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/features" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Customers</h3>
              <p>Keep customer details connected to sales records.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/finance" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Invoices & balances</h3>
              <p>Follow invoices and outstanding customer balances.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/reports" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Sales reporting</h3>
              <p>Understand sales value and order activity through reports.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container split">
          <div>
            <div className="eyebrow">CONNECTED OPERATIONS</div>
            <h2>Keep your records connected.</h2>
            <p className="lead">
              ERPKE gives business owners and teams one place to work with
              operational information and understand what is happening in the
              business.
            </p>
          </div>
          <div className="checkList">
            <div>
              <CheckCircle2 /> Centralised business records
            </div>
            <div>
              <CheckCircle2 /> Clear operational visibility
            </div>
            <div>
              <CheckCircle2 /> Useful business reports
            </div>
            <div>
              <CheckCircle2 /> Accessible from the ERP application
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
