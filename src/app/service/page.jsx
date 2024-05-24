import Direction from "@/components/direction/Direction";
import styles from "./page.module.css";
import Services from "@/components/page/service/services/Services";
import Steps from "@/components/page/service/steps/Steps";
import Image from "next/image";

export const metadata = {
  title: "Service",
  description:
    "Explore the wide range of services offered by Spotless Cleaners, including alterations, stain removal, laundry, and more. We provide top-notch garment care to meet all your needs.",
  keywords:
    "Spotless Cleaners, services, alterations, stain removal, laundry, garment care, Sewell NJ",
};

function page() {
  return (
    <main>
      <div className={styles.title}>
        <Image
          src={"/cloth.jpg"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="cloth material"
          priority={true}
        />
        <div className={styles.textContainer}>
          <h1>Service</h1>
          <p>
            Explore the range of services at Spotless Cleaners. From expert
            alterations to stain removal and convenient drive-thru options, we
            meet all your clothes care needs. Our dedicated team ensures
            exceptional quality and service with every visit.
          </p>
        </div>
        <div className={styles.triangle}></div>
      </div>
      <div className={styles.content}>
        <Steps />
        <Direction />
        <Services />
      </div>
    </main>
  );
}

export default page;
