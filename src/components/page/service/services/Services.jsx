import styles from "./services.module.css";
import { data } from "./data";
import Card from "./Card/Card";

function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>What We Offer</h2>
      </div>
      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Services;
