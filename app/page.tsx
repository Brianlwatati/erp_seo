import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  FileText,
  Package,
  ReceiptText,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
const app = "https://app.erpke.co.ke/";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="eyebrow">
              BUSINESS MANAGEMENT SOFTWARE FOR KENYA
            </div>
            <h1>
              Run your business from <span>one place.</span>
            </h1>
            <p className="heroText">
              ERPKE brings inventory, sales, purchasing, contacts, finance and
              reporting together so you can spend less time chasing records and
              more time running your business.
            </p>
            <div className="heroActions">
              <a className="button" href={app}>
                Open ERPKE <ArrowRight />
              </a>
              <Link className="button secondary" href="/features">
                Explore features
              </Link>
            </div>
            <div className="trust">
              <CheckCircle2 size={16} /> Built for growing Kenyan businesses
            </div>
          </div>
          <div className="dashboardCard">
            <div className="dashTop">
              <strong>Business overview</strong>
              <span>Today</span>
            </div>
            <div className="metrics">
              <div>
                <small>Sales value</small>
                <b>KES 284,500</b>
                <em>+12.4%</em>
              </div>
              <div>
                <small>Orders</small>
                <b>148</b>
                <em>+8.2%</em>
              </div>
              <div>
                <small>Stock value</small>
                <b>KES 1.82M</b>
                <em>Tracked</em>
              </div>
              <div>
                <small>Outstanding</small>
                <b>KES 96,400</b>
                <em>Monitor</em>
              </div>
            </div>
            <div className="chart">
              {[42, 55, 48, 70, 62, 82, 74, 92].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <div>
              <div className="eyebrow">ONE SYSTEM</div>
              <h2>Everything your business needs to stay organised.</h2>
            </div>
            <p>
              Keep your operational records connected instead of managing
              separate spreadsheets, notebooks and disconnected tools.
            </p>
          </div>
          <div className="featureGrid">
            <Card
              icon={<Boxes />}
              title="Inventory"
              text="Track products, warehouses, stock movements, transfers and stock levels."
              href="/inventory-management"
            />
            <Card
              icon={<ShoppingCart />}
              title="Sales"
              text="Manage customers, sales activity, invoices and balances."
              href="/sales-management"
            />
            <Card
              icon={<Truck />}
              title="Purchasing"
              text="Keep supplier purchasing and incoming stock organised."
              href="/purchasing"
            />
            <Card
              icon={<Users />}
              title="Contacts"
              text="Keep customer and supplier information in one searchable place."
              href="/features"
            />
            <Card
              icon={<ReceiptText />}
              title="Finance"
              text="Follow business transactions, receivables and financial records."
              href="/finance"
            />
            <Card
              icon={<BarChart3 />}
              title="Reports"
              text="See practical business metrics and deliver reports by email or WhatsApp."
              href="/reports"
            />
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container split">
          <div>
            <div className="eyebrow">SEE WHAT MATTERS</div>
            <h2>Turn business records into useful information.</h2>
            <p className="lead">
              Review sales, orders, outstanding invoices, stock value and
              low-stock items without manually combining reports.
            </p>
            <Link className="inlineLink" href="/reports">
              Explore reporting <ArrowRight size={16} />
            </Link>
          </div>
          <div className="reportPanel">
            <strong>Daily business report</strong>
            {[
              "Sales value|KES 284,500",
              "Orders|148",
              "Outstanding invoices|KES 96,400",
              "Stock value|KES 1,820,000",
              "Low-stock items|7",
            ].map((x) => {
              const [a, b] = x.split("|");
              return (
                <div className="reportRow" key={a}>
                  <span>{a}</span>
                  <b>{b}</b>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container ctaInner">
          <div>
            <div className="eyebrow">READY TO EXPLORE?</div>
            <h2>See ERPKE in action.</h2>
            <p>
              Open the ERP application and explore how the system fits your
              business workflow.
            </p>
          </div>
          <a className="button light" href={app}>
            Open ERPKE <ArrowRight />
          </a>
        </div>
      </section>
    </>
  );
}
function Card({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className="featureCard">
      <div className="iconBox">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span>
        Learn more <ArrowRight size={14} />
      </span>
    </Link>
  );
}
