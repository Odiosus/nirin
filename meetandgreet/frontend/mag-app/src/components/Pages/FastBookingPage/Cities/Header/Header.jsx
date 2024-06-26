import React from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation/Navigation";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__container}>
          <Navigation />
        </div>
      </div>
    </>
  );
}
