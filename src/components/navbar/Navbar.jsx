"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { hambergerSVG } from "@/lib/svgData";
import Menu from "./menu/Menu";
import { layout } from "./layout";

function Navbar() {
  const [hasOpened, setHasOpened] = useState(false);
  const pathname = usePathname();

  function menuClickHandler() {
    setHasOpened((prev) => !prev);
  }

  useEffect(() => {
    if (hasOpened) {
      document.querySelector("body").style.overflow = "hidden";
    }
    return () => {
      document.querySelector("body").style.overflow = "auto";
    };
  }, [hasOpened]);

  function handleResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 600 && !hasOpened) {
      setHasOpened(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src={"/logo.png"}
            width={200}
            height={50}
            alt="logo"
            priority
          />
        </Link>
        <ul className={styles.links}>
          {layout.map(({ to, label }) => (
            <li className={`${styles.link}`} key={label}>
              <Link href={to} className={`${pathname === to && styles.active}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.menu} onClick={menuClickHandler}>
          {hambergerSVG}
        </div>
      </div>
      {hasOpened && <Menu setHasOpened={setHasOpened} pathname={pathname} />}
    </nav>
  );
}

export default Navbar;
