import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "../components/SiteChrome";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.erpke.co.ke"),
  title: {
    default: "ERP Software for Kenyan Businesses | ERPKE",
    template: "%s | ERPKE",
  },
  description:
    "ERP and business management software for Kenyan businesses. Manage inventory, sales, purchasing, finance, contacts and business reports from one place.",
  keywords: [
    "ERP software Kenya",
    "business management software Kenya",
    "inventory management software Kenya",
    "stock management software Kenya",
    "sales management software Kenya",
    "bookkeeping software Kenya",
    "business reporting software Kenya",
  ],
  alternates: { canonical: "https://www.erpke.co.ke/" },
  openGraph: {
    type: "website",
    url: "https://www.erpke.co.ke/",
    title: "ERP Software for Kenyan Businesses | ERPKE",
    description:
      "Manage inventory, sales, purchasing, finance and reporting from one place.",
    siteName: "ERPKE",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
