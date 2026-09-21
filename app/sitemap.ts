import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/features",
    "/inventory-management",
    "/sales-management",
    "/purchasing",
    "/finance",
    "/reports",
    "/erp-software-kenya",
    "/pricing",
    "/contact",
  ];
  return routes.map((r) => ({
    url: `https://www.erpke.co.ke${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
