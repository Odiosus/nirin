import React from "react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo__container}>
      <div className={styles.logo}></div>
    </div>
  );
}
