import styles from "./linkSupport.module.css";
import Link from "next/link";
import { list } from "./data";

function LinkSupport() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>
          Explore Spotless Cleaners in <br />
          Sewell, NJ
        </h1>
        <p>
          Experience premium dry cleaning and expert alterations in Sewell.
          Simple drop-offs, fast turnaround, and a 100% dedication to quality
          fabric care for the Deptford and Washington Township areas.
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
