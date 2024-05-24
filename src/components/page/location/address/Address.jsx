import styles from "./address.module.css";
import StoreAddress from "./storeAddress/StoreAddress";
import Parking from "./parking/Parking";

function Address() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Find Us Easily</h2>
      </div>
      <div className={styles.content}>
        <StoreAddress />
        <Parking />
      </div>
    </section>
  );
}

export default Address;
