import Link from "next/link";
import content from "@/data/content.json";

type LegalDoc = {
  title: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; items: string[] }[];
};

// Every legal page, linked to each other like tabs. Add a page: text in content.json + an entry here + a route file.
const docs = [
  { href: "/kvkk", title: content.kvkk.title },
  { href: "/gizlilik", title: content.privacy.title },
];

export default function LegalPage({ doc, href }: { doc: LegalDoc; href: string }) {
  return (
    <main className="wrap legal">
      <Link href="/">← {content.kvkk.back}</Link>
      <nav className="legal-nav">
        {docs.map((d) => (
          <Link key={d.href} href={d.href} aria-current={d.href === href ? "page" : undefined}>{d.title}</Link>
        ))}
      </nav>
      <h1>{doc.title}</h1>
      <p>{doc.intro}</p>
      {doc.sections.map((section, index) => (
        <section key={index}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          {section.items.length > 0 && (
            <ul>
              {section.items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
