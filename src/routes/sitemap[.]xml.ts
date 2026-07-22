import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://www.zevyn.tech";
const today = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          {
            path: "/",
            changefreq: "weekly",
            priority: "1.0",
          },
          {
            path: "/services",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/projects",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/about",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/contact",
            changefreq: "monthly",
            priority: "0.8",
          },
        ];

        const urls = entries
          .map(
            (entry) => `
  <url>
    <loc>${BASE_URL}${entry.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
          )
          .join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
