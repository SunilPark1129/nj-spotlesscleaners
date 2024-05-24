import styles from "./page.module.css";
import Image from "next/image";
import Contact from "@/components/page/location/contact/Contact";
import Address from "@/components/page/location/address/Address";

export const metadata = {
  title: "Location",
  description:
    "Find the location of Spotless Cleaners, including our business hours, contact information, and convenient parking and drive-thru services.",
  keywords:
    "Spotless Cleaners, location, business hours, contact information, parking, drive-thru, Sewell NJ",
};

function page() {
  return (
    <main>
      <div className={styles.title}>
        <Image
          src={"/scl3.jpg"}
          fill
          sizes="100vw"
          alt="spotless cleaners parking lot"
          priority
        />
        <div className={styles.textContainer}>
          <h1>Location</h1>
          <p>
            Find all the information you need about Spotless Cleaners' location,
            business hours, and contact details. Whether you need directions to
            our store, want to know our operating hours, or need to get in touch
            with us, you'll find it all here.
          </p>
        </div>
        <div className={styles.triangle}></div>
      </div>
      <div className={styles.content}>
        <Address />
        <Contact />
      </div>
    </main>
  );
}

export default page;
