import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata = {
  title: { default: "Spotless Cleaners", template: "%s | Spotless Cleaners" },
  description:
    "Welcome to Spotless Cleaners, your destination for top-quality garment care services in Sewell, NJ. Experience our exceptional cleaning and alteration services.",
  keywords:
    "Spotless Cleaners, garment care, Sewell NJ, cleaning services, alteration services",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
