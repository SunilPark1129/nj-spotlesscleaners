import styles from "./hours.module.css";

function Hours() {
  return (
    <article className={styles.container}>
      <div className={styles.title}>
        <h3>Business Hours</h3>
      </div>
      <div className={styles.textContainer}>
        <ul>
          <li>
            <div className={styles.week}>Monday-Friday</div>
            <div className={styles.hour}>7AM-6PM</div>
          </li>
          <li>
            <div className={styles.week}>Saturday</div>
            <div className={styles.hour}>9AM-4PM</div>
          </li>
          <li>
            <div className={styles.week}>Sunday</div>
            <div className={styles.hour}>Closed</div>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Hours;
