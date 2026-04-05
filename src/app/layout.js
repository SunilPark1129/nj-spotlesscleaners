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
    "Welcome to Spotless Cleaners, your destination for top-quality dry cleaners in Sewell, NJ. Experience our exceptional cleaning and alteration services.",
  keywords:
    "Spotless Cleaners, Deptford, Sewell, NJ, Hurffville, dry cleaners, dry cleaning, laundry, alteration, repair, services",
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
            image: "https://spotlesscleaners-nj.com/sq-logo.png",
            "@id": "https://spotlesscleaners-nj.com",
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
