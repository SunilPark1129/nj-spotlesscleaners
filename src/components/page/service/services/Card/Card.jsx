"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./card.module.css";
import { useSearchParams } from "next/navigation";

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
    <details
      className={styles.card}
      id={name}
      ref={targetRef}
      onClick={clickHandler}
      open={hasClickedLink}
    >
      <summary>{title}</summary>
      <p
        className={`${hasClickedLink && styles.highlighted}`}
        aria-hidden={!hasOpened}
      >
        <span>{desc}</span>
      </p>
    </details>
  );
}

export default Card;
