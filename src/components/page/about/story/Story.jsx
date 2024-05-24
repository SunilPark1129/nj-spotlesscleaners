import Image from "next/image";
import styles from "./story.module.css";

function Story() {
  return (
    <section className={styles.container}>
      <h2>
        Spotless Cleaners <span>Sewell, NJ</span>
      </h2>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={"/scl4.jpg"}
            fill
            alt="spotless cleaners building"
            sizes="600px"
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            Welcome to Spotless Cleaners! Established in 2010 in Sewell, NJ,
            Spotless Cleaners has been dedicated to providing top-notch service
            and quality to our customers. With a decade of experience, we pride
            ourselves on our commitment to excellence and customer satisfaction.
            From delicate fabrics to tough stains, we handle each item with care
            and precision to ensure your clothes receive the best treatment
            possible. We are grateful for the continued support and love from
            our customers throughout the years.
          </p>
          <p>
            At Spotless Cleaners, we believe in going above and beyond to meet
            our customers' needs. Our team of experienced professionals is
            passionate about delivering impeccable results, whether it's dry
            cleaning, laundry, alterations, or specialty cleaning services. We
            understand the importance of convenience and reliability, which is
            why we strive to exceed expectations with every visit. Trust
            Spotless Cleaners for all your cloth care needs, and experience the
            difference that dedication and expertise can make. Thank you for
            choosing Spotless Cleaners, where quality meets excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
