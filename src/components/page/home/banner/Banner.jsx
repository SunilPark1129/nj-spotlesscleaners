import Image from "next/image";
import styles from "./banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={"/scl4.jpg"}
          sizes="(max-width: 2400px) 100vw, 2400px"
          fill
          alt="spotless cleaners building"
          priority
        />
      </div>
    </div>
  );
}

export default Banner;
