import styles from "./loading.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingBar}></div>
        <div className={styles.loadingBar}></div>
        <div className={styles.loadingBar}></div>
      </div>
    </div>
  );
}

export default Loading;
