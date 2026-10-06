import type { MetadataRoute } from "next";
import content from "@/data/content.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: content.site.url, changeFrequency: "monthly", priority: 1 }];
}
