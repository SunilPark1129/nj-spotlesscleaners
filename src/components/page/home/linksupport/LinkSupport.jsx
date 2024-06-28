import styles from "./linkSupport.module.css";
import Link from "next/link";
import { list } from "./data";

function LinkSupport() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>
          Explore Spotless Cleaners <br />
          Sewell, NJ
        </h1>
        <p>
          Discover everything you need to know about our services, the easy
          steps for dropping off your clothes and our dedication to quality
        </p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cardContainer}>
        {list.map(({ title, desc, link, svg }) => (
          <article className={styles.card} key={title}>
            <div className={styles.header}>
              <div className={styles.svgContainer}>{svg}</div>
              <h2>{title}</h2>
            </div>
            <div className={styles.textContainer}>
              <p>{desc}</p>
              <Link href={link}>Learn more in {title.toLowerCase()}</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LinkSupport;
