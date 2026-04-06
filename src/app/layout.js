import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

const poppins = Poppins({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Spotless Cleaners Sewell NJ",
    template: "%s | Spotless Cleaners Sewell NJ",
  },
  description:
    "Top-rated dry cleaners in Sewell, NJ. Serving Sewell, Deptford, and Washington Township. We offer professional dry cleaning, laundry, and expert alteration services at Spotless Cleaners.",
  keywords:
    "Top-quality dry cleaners in Sewell, NJ. Proudly serving Sewell, Deptford, and Washington Township. Spotless Cleaners offers professional dry cleaning, laundry, and expert alteration services.",
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/sq-logo.png",
  },
  alternates: {
    canonical: "https://spotlesscleaners-nj.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-4CE2H85VN6" />
        <Script
          id="spotless-cleaners-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DryCleaningOrLaundry",
            name: "Spotless Cleaners",
            hasMap: "https://www.google.com/maps?cid=15186074423484475197",
            image: "https://spotlesscleaners-nj.com/sq-logo.png",
            "@id": "https://spotlesscleaners-nj.com/#drycleaner",
            areaServed: [
              { "@type": "City", name: "Sewell" },
              { "@type": "City", name: "Deptford" },
              { "@type": "City", name: "Washington Township" },
              { "@type": "City", name: "Hurffville" },
            ],
            publicAccess: true,
            url: "https://spotlesscleaners-nj.com",
            telephone: "+1-856-227-1112",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1898 Hurffville Rd",
              addressLocality: "Sewell",
              addressRegion: "NJ",
              postalCode: "08080",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 39.78423073723427,
              longitude: -75.10197347252534,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "07:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "16:00",
              },
            ],
            priceRange: "$$",
          })}
        </Script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
