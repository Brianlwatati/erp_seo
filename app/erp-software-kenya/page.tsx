import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
export const metadata = {
  title: "ERP Software Kenya",
  description: "ERP and business management software for Kenyan businesses.",
};
export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <div className="eyebrow">ERP SOFTWARE KENYA</div>
          <h1>
            Business management software built around everyday operations.
          </h1>
          <p>
            ERPKE is a business management and ERP platform for Kenyan
            businesses that want inventory, sales, purchasing, finance and
            reporting in one place.
          </p>
          <div className="heroActions">
            <a className="button" href="https://app.erpke.co.ke/">
              Open ERPKE <ArrowRight />
            </a>
            <Link className="button secondary" href="/features">
              View features
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <div className="eyebrow">WHY A CONNECTED SYSTEM</div>
          <h2>Move beyond scattered business records.</h2>
          <p className="lead">
            Growing businesses often use a mixture of notebooks, spreadsheets,
            messaging apps and separate tools. ERPKE is designed to bring core
            operational records together so teams can work from a shared source
            of business information.
          </p>
          <div className="checkList">
            <div>
              <CheckCircle2 /> Inventory and stock records
            </div>
            <div>
              <CheckCircle2 /> Sales and customer records
            </div>
            <div>
              <CheckCircle2 /> Purchasing and supplier records
            </div>
            <div>
              <CheckCircle2 /> Finance and receivables information
            </div>
            <div>
              <CheckCircle2 /> Business reporting and scheduled reports
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
