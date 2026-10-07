import type { Metadata } from "next";
import content from "@/data/content.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(content.site.url),
  title: content.site.title,
  description: content.site.description,
  // Link preview when the site is shared (WhatsApp, social media)
  openGraph: {
    title: content.site.title,
    description: content.site.description,
    url: "/",
    siteName: content.site.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.site.title,
    description: content.site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
