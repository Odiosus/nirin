import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <button className={styles.btn}>
      <span>SEARCH</span>
    </button>
  );
}
