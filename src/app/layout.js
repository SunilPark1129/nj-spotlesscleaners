import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata = {
  title: { default: "Spotless Cleaners", template: "%s | Spotless Cleaners" },
  description:
    "Welcome to Spotless Cleaners, your estination for top-quality dry cleaners in Sewell, NJ. Experience our exceptional cleaning and alteration services.",
  keywords:
    "Spotless Cleaners, Deptford, Sewell, NJ, dry cleaners, dry cleaning, laundry, alteration, repair, services",
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/sq-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-4CE2H85VN6" />
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
