import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

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
    canonical: "./",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-4CE2H85VN6" />
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        />
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
