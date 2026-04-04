import type { Metadata, Viewport } from "next";
import { Oswald, Raleway } from "next/font/google";

import { brand } from "@/config/brand";
import { business } from "@/config/business";
import { getLocalBusinessSchema } from "@/lib/business";

import "./globals.css";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

function getMetadataBase() {
  try {
    return new URL(brand.website);
  } catch {
    return new URL("https://example.com");
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: business.seo.title,
  description: business.seo.description,
  keywords: business.seo.keywords,
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    type: "website",
    siteName: brand.name,
    url: brand.website,
    images: [
      {
        url: brand.heroImage,
        width: 1200,
        height: 630,
        alt: `${brand.name} hero image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: business.seo.title,
    description: business.seo.description,
    images: [brand.heroImage],
  },
  alternates: {
    canonical: brand.website,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${raleway.variable}`}>
      <body className="min-h-screen bg-white pb-20 font-sans text-gray-900 antialiased md:pb-0">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
      </body>
    </html>
  );
}
