import Link from "next/link";
import styles from "./not-found.module.css";

function notFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1>
            <span>404</span> PAGE
          </h1>
          <p>We couldn't find the page...</p>
        </div>
        <Link className={styles.link} href={"/"}>
          Go to homepage
        </Link>
      </div>
    </div>
  );
}

export default notFound;
