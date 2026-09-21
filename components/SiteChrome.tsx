import Link from "next/link";
import { ArrowRight } from "lucide-react";
const app = "https://app.erpke.co.ke/";
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <Link href="/" className="brand">
            <span className="brandMark">E</span>ERPKE
          </Link>
          <nav>
            <Link href="/features">Features</Link>
            <Link href="/inventory-management">Inventory</Link>
            <Link href="/sales-management">Sales</Link>
            <Link href="/purchasing">Purchasing</Link>
            <Link href="/reports">Reports</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="navActions">
            <a className="textButton" href={app}>
              Log in
            </a>
            <a className="button small" href={app}>
              Get started <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <Link href="/" className="brand">
              <span className="brandMark">E</span>ERPKE
            </Link>
            <p>Business management software for Kenyan businesses.</p>
          </div>
          <div>
            <h4>Product</h4>
            <Link href="/features">Features</Link>
            <Link href="/inventory-management">Inventory</Link>
            <Link href="/sales-management">Sales</Link>
            <Link href="/purchasing">Purchasing</Link>
            <Link href="/finance">Finance</Link>
            <Link href="/reports">Reports</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/erp-software-kenya">ERP Software Kenya</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Get ERPKE</h4>
            <p>Ready to explore the system?</p>
            <a href={app}>
              Open ERPKE <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="container footerBottom">
          © {new Date().getFullYear()} ERPKE ·{" "}
          <a href="mailto:brians@erpke.co.ke">brians@erpke.co.ke</a>
        </div>
      </footer>
    </div>
  );
}
