import styles from "./phone.module.css";

function Phone() {
  return (
    <article className={styles.container}>
      <div className={styles.title}>
        <h3>Telephone</h3>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.name}>Spotless Cleaners</p>
        <p>+1 (856) 227-1112</p>
      </div>
    </article>
  );
}

export default Phone;
