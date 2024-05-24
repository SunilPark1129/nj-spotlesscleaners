import Image from "next/image";
import styles from "./commitment.module.css";

export default function Commitment() {
  return (
    <section className={styles.container}>
      <h2>Our Commitment</h2>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={"/alteration.jpg"} fill alt="alteration" sizes="600px" />
        </div>
        <div className={styles.textContainer}>
          <p>
            At Spotless Cleaners, our goal is to provide unparalleled clothes
            care that leaves our customers delighted with every visit. We aim to
            set the standard for excellence in the dry cleaning industry by
            using the latest technology and eco-friendly practices. Our
            commitment is to deliver the highest quality services with a
            personal touch, ensuring that every piece of clothing is treated
            with the utmost care and attention.
          </p>

          <p>
            We strive to create a convenient and reliable experience for our
            customers, offering services that fit their busy lifestyles. From
            timely pick-up and delivery options to meticulous attention to
            detail in every service we provide, we work hard to make sure that
            Spotless Cleaners is your trusted partner for all your dry cleaning
            and clothes care needs. Our ultimate goal is to maintain and enhance
            the trust our customers have placed in us by consistently delivering
            exceptional results and unparalleled customer service.
          </p>
        </div>
      </div>
    </section>
  );
}
