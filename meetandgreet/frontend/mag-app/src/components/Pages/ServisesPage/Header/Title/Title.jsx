import React from "react";
import styles from "./Title.module.css";

export default function Title({ children, fontSezeSmall }) {
  return (
    <div className={styles.titleBox}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}
