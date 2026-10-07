import type { MetadataRoute } from "next";
import content from "@/data/content.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: content.site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${content.site.url}/kvkk`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${content.site.url}/gizlilik`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
