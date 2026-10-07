import type { Metadata } from "next";
import content from "@/data/content.json";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: `${content.kvkk.title} | ${content.site.name}`,
};

export default function Kvkk() {
  return <LegalPage doc={content.kvkk} href="/kvkk" />;
}
