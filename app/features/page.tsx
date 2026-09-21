import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <div className="eyebrow">ERPKE FEATURES</div>
          <h1>One platform for the way your business operates.</h1>
          <p>
            Manage the core parts of your business from one connected ERP
            application, from stock and sales to purchasing, finance and
            reporting.
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
            <Link href="/inventory-management" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Inventory</h3>
              <p>
                Products, warehouses, stock levels, movements and transfers.
              </p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/sales-management" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Sales</h3>
              <p>Customers, sales activity, invoices and balances.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/purchasing" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Purchasing</h3>
              <p>Supplier purchasing and incoming stock.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/finance" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Finance</h3>
              <p>Financial and transaction records easier to follow.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/reports" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Reports</h3>
              <p>Key metrics and scheduled business reports.</p>
              <span>
                Explore <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/features" className="detailCard">
              <div className="iconBox">
                <span>•</span>
              </div>
              <h3>Contacts</h3>
              <p>Customer and supplier information in one place.</p>
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
