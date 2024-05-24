import Image from "next/image";
import styles from "./direction.module.css";
import Link from "next/link";
import { gpsSVG } from "@/lib/svgData";

function Direction() {
  return (
    <section className={styles.bgCover}>
      <div className={styles.bg}></div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3>Find Us Easily</h3>
          <p>
            Click the button below to open Google Maps and get directions to
            Spotless Cleaners.
          </p>
          <Link href={"https://maps.app.goo.gl/RoVZjLAPD8mM21ug8"}>
            <div className={styles.svgContainer}>{gpsSVG}</div>
            Get Directions
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={"/scl1.jpg"}
            fill
            alt="spotless cleaners building"
            sizes="500px"
          />
        </div>
      </div>
    </section>
  );
}

export default Direction;
