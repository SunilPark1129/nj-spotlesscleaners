import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import { closeSVG } from "@/lib/svgData";
import { layout } from "../layout";
import { useEffect } from "react";

function Menu({ setHasOpened, pathname }) {
  function closeClickHandler() {
    setHasOpened(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={closeClickHandler}>
        {closeSVG}
      </div>
      <ul className={styles.links}>
        {layout.map(({ to, label }) => (
          <li key={label}>
            <Link
              href={to}
              className={`${styles.link} ${pathname === to && styles.active}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Link className={styles.logo} href={"/"}>
        <Image src={"/logo.png"} width={200} height={50} alt="logo" priority />
      </Link>
    </div>
  );
}

export default Menu;
