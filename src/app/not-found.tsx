import type { Metadata } from "next";
import Link from "next/link";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: `${content.notFound.title} | ${content.site.name}`,
};

export default function NotFound() {
  return (
    <main className="wrap legal">
      <h1>{content.notFound.title}</h1>
      <p>{content.notFound.text}</p>
      <Link href="/">← {content.kvkk.back}</Link>
    </main>
  );
}
