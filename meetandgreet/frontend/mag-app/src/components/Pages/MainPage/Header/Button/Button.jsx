import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, width, height }) {
  return (
    <div style={{ width, height }} className={styles.button}>
      {children}
    </div>
  );
}
