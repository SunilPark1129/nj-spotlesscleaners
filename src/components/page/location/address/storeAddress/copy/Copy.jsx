"use client";

import React, { useState } from "react";
import styles from "./copy.module.css";
import { copySVG } from "@/lib/svgData";

function Copy() {
  const [hasClicked, setHasClicked] = useState(false);
  function clickHandler() {
    navigator.clipboard.writeText("1898 Hurffville Rd, Sewell, NJ 08080");
    if (!hasClicked) {
      setHasClicked(true);
      setTimeout(() => {
        setHasClicked(false);
      }, 1000);
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={clickHandler} className={styles.btn} title="copy">
        {copySVG}
      </button>
      {hasClicked && <div className={styles.states}>COPIED</div>}
    </div>
  );
}

export default Copy;
