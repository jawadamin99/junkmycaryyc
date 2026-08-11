import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Manrope, Rajdhani, Geist_Mono } from "next/font/google";
import Script from "next/script";
import JsonLd from "./components/json-ld";
import { siteConfig } from "./lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const rajdhani = Rajdhani({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "AutoDealer"],
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: siteConfig.socialImage,
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.streetAddress,
        addressLocality: siteConfig.addressLocality,
        addressRegion: siteConfig.addressRegion,
        addressCountry: siteConfig.addressCountry,
      },
      areaServed: ["Calgary", "Airdrie", "Chestermere", "Okotoks", "Cochrane"],
      openingHours: "Mo-Su 00:00-23:59",
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: "en-CA",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Cash For Cars Calgary`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Cash for cars Calgary with quick vehicle quotes, fast pickup scheduling, and a clean, modern contact experience.",
  openGraph: {
    title: `${siteConfig.name} | Cash For Cars Calgary`,
    description:
      "Cash for cars Calgary with quick vehicle quotes, fast pickup scheduling, and a clean, modern contact experience.",
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1600,
        height: 900,
        alt: `${siteConfig.name} roadside vehicle pickup`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Cash For Cars Calgary`,
    description:
      "Cash for cars Calgary with quick vehicle quotes, fast pickup scheduling, and a clean, modern contact experience.",
    images: [siteConfig.socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <JsonLd data={businessSchema} />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-inline" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className={`${manrope.variable} ${rajdhani.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
