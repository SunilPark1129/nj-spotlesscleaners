import Image from "next/image";
import styles from "./parking.module.css";

function Parking() {
  return (
    <article className={styles.container} id="parking">
      <h3>PARKING & DRIVE THRU</h3>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <ul>
            <li>
              Our parking lot is conveniently located right in front of the
              store, and it's free for our customers to use.
            </li>
            <li>
              We offer a convenient drive-thru service, allowing you to drop off
              and pick up your clothes without leaving your car.
            </li>
          </ul>
        </div>
        <div className={styles.imgContent}>
          <figure>
            <div className={styles.imgContainer}>
              <Image
                src={"/scl3.jpg"}
                fill
                alt="spotless cleaners parking lot"
                sizes="600px"
              />
            </div>
            <figcaption>Free parking available at Spotless Cleaners</figcaption>
          </figure>
          <figure>
            <div className={styles.imgContainer}>
              <Image
                src={"/scl2.jpg"}
                fill
                alt="spotless cleaners drive-thru"
                sizes="600px"
              />
            </div>
            <figcaption>
              Convenient drive-thru service at Spotless Cleaners
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}

export default Parking;
