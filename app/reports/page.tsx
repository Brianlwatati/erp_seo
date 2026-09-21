import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <div className="eyebrow">BUSINESS REPORTING</div>
          <h1>
            Know what is happening in your business without building every
            report manually.
          </h1>
          <p>
            Review sales, orders, stock and outstanding invoices more easily.
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
            <Link href="/sales-management" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Sales value</h3>
              <p>Monitor the value of sales over your reporting period.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/sales-management" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Orders count</h3>
              <p>Track order activity and business volume.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/finance" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Outstanding invoices</h3>
              <p>Keep an eye on amounts still to be collected.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/inventory-management" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Stock value</h3>
              <p>Monitor the value of inventory recorded in the system.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/inventory-management" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Low-stock items</h3>
              <p>Identify products that may need attention.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/contact" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Scheduled delivery</h3>
              <p>Send selected reports through email or WhatsApp workflows.</p>
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
