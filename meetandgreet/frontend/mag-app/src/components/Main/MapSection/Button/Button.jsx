import React from "react";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <button className={styles.btn}>
      <span>SEARCH</span>
    </button>
  );
}
