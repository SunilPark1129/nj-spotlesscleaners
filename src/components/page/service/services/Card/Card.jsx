"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./card.module.css";
import { useSearchParams } from "next/navigation";
import { arrowDown } from "@/lib/svgData";

function Card({ title, desc, name }) {
  const [hasOpened, setHasOpened] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hasClickedLink, setHasClickedLink] = useState(false);
  const searchParams = useSearchParams();
  const targetRef = useRef(null);

  function clickHandler() {
    setHasOpened((prev) => !prev);
  }

  useEffect(() => {
    if (isMounted) {
      const query = searchParams.get("q");
      if (query === name) {
        setHasOpened(true);
        setHasClickedLink(true);
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    } else {
      setIsMounted(true);
    }
  }, [isMounted]);

  return (
    <article className={styles.card} id={name} ref={targetRef}>
      <button className={styles.cardTitle} onClick={clickHandler}>
        <h3>{title}</h3>
        <div className={`${styles.arrow} ${hasOpened && styles.arrowActive}`}>
          {arrowDown}
        </div>
      </button>
      {hasOpened && (
        <div
          className={`${styles.cardDesc} ${hasOpened && styles.cardDescActive}`}
        >
          <p className={`${hasClickedLink && styles.highlighted}`}>
            <span>{desc}</span>
          </p>
        </div>
      )}
    </article>
  );
}

export default Card;
