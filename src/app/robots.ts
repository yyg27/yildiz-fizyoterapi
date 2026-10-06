import type { MetadataRoute } from "next";
import content from "@/data/content.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", content.site.url).href,
  };
}
