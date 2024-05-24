"use client";

import { useState } from "react";
import { list } from "./data";
import styles from "./review.module.css";
import Image from "next/image";
import { quoteSVG, starSVG } from "@/lib/svgData";

function Review() {
  const [hasOpened, setHasOpened] = useState(false);
  return (
    <section className={styles.container} id="reviews">
      <div className={styles.head}>
        <div className={styles.title}>
          <h1>What Our Customers Say</h1>
          <p>
            Read the wonderful feedback our customers have shared about us on
            Google Reviews.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/google.png"} alt="google logo" width={80} height={80} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cardContainer}>
        {list.map(({ id, user, desc }, idx) => {
          if (!hasOpened && idx >= 2) return null;
          return (
            <div className={styles.card} key={id}>
              <div className={styles.top}>
                <p className={styles.user}>{user}</p>
                <div className={styles.rating}>
                  <div className={styles.star}>{starSVG}</div>
                  <div className={styles.star}>{starSVG}</div>
                  <div className={styles.star}>{starSVG}</div>
                  <div className={styles.star}>{starSVG}</div>
                  <div className={styles.star}>{starSVG}</div>
                </div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.quote} key={id}>
                  {quoteSVG}
                </div>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={styles.btn}
        onClick={() => setHasOpened((prev) => !prev)}
      >
        {hasOpened ? "Close" : "Read More"}
      </button>
    </section>
  );
}

export default Review;
