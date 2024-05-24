import styles from "./page.module.css";
import Commitment from "@/components/page/about/commitment/Commitment";
import Story from "@/components/page/about/story/Story";
import Direction from "@/components/direction/Direction";
import Image from "next/image";

export const metadata = {
  title: "About",
  description:
    "Learn about Spotless Cleaners' dedication to quality garment care, our experienced team, and our commitment to customer satisfaction since 2010.",
  keywords:
    "Spotless Cleaners, about us, garment care, Sewell NJ, cleaning services, alteration services, customer satisfaction",
};

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <Image
          src={"/quality.jpg"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="zoom in quality"
          priority={true}
        />
        <div className={styles.textContainer}>
          <h1>About Us</h1>
          <p>
            Thank you for your interest in Spotless Cleaners. We are committed
            to providing top-quality clothing care with exceptional service.
            Discover our dedication to excellence and how we can meet your needs
            with precision and care.
          </p>
        </div>
        <div className={styles.triangle}></div>
      </div>
      <div className={styles.content}>
        <Story />
        <Direction />
        <Commitment />
      </div>
    </main>
  );
}

export default page;
