import Link from "next/link";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h3>Contact Us</h3>
          <div>
            <p>Spotless Cleaners</p>
            <p>1898 Hurffville Rd, Sewell, NJ 08080</p>
            <p>Phone: (856) 227-1112</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h3>Business Hours</h3>
          <div>
            <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
            <p>Sat: 9:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/service">Services</Link>
            </li>
            <li>
              <Link href="/#reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/location#contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/location#address">Location</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 Spotless Cleaners. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
