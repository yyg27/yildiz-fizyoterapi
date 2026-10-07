import type { Metadata } from "next";
import content from "@/data/content.json";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: `${content.privacy.title} | ${content.site.name}`,
};

export default function Gizlilik() {
  return <LegalPage doc={content.privacy} href="/gizlilik" />;
}
