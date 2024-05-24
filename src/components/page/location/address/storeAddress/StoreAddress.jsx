import Link from "next/link";
import styles from "./storeAddress.module.css";
import Copy from "./copy/Copy";
import { gpsRoundedSVG } from "@/lib/svgData";

function StoreAddress() {
  return (
    <article className={styles.container} id="address">
      <h3>ADDRESS</h3>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p>
            Spotless Cleaners -{" "}
            <span>1898 Hurffville Rd, Sewell, NJ 08080</span>
          </p>
          <Copy />
        </div>
        <div className={styles.textContainer}>
          <Link
            className={styles.link}
            title="link"
            href="https://maps.app.goo.gl/RoVZjLAPD8mM21ug8"
          >
            Google Map
            {gpsRoundedSVG}
          </Link>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.022140794014!2d-75.1020023!3d39.78405850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6d103f59eaaeb%3A0xd2bfc63a986fe73d!2sSpotless%20Cleaners!5e0!3m2!1sen!2sus!4v1716454979468!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </article>
  );
}

export default StoreAddress;
