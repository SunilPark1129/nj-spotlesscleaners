import styles from "./contact.module.css";
import Hours from "./hours/Hours";
import Phone from "./phone/Phone";

function Contact() {
  return (
    <section id="contact">
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Contact</h2>
          <p>
            If you have any questions or need assistance, please don't hesitate
            to reach out to us. You can contact us during our business hours,
            give us a call, or visit our store in person. We're here to help
            with all your cleaning needs.
          </p>
        </div>
        <div className={styles.content}>
          <Hours />
          <Phone />
        </div>
      </div>
    </section>
  );
}

export default Contact;
