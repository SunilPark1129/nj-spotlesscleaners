import styles from "./steps.module.css";

function Steps() {
  return (
    <section className={styles.container} id="steps">
      <div className={styles.title}>
        <h2>First-Time Visitors</h2>
        <p>
          Planning your first visit to Spotless Cleaners? Here's a step-by-step
          guide to using our services:
        </p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.textContainer}>
        <ol>
          <li>Step into our store.</li>
          <li>Hand over the clothes you wish to entrust to us.</li>
          <li>Let us know if you need alterations or laundry services.</li>
          <li>Receive a ticket with the pickup date.</li>
          <li>
            Return to our store at your convenience after the pickup date.
          </li>
          <li>
            If you've lost your ticket, provide us with your phone number.
          </li>
          <li>Pay for the services and pick up your clothes.</li>
        </ol>
      </div>
    </section>
  );
}

export default Steps;
