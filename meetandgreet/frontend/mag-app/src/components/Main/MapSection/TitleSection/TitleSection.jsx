import React from "react";
import styles from "./TitleSection.module.css";

export default function TitleSection() {
  return (
    <h1 className={styles.section__h1}>
      If <span className={styles.section__span}>you</span> do not see{" "}
      <span className={styles.section__span}>the airport needed</span>
    </h1>
  );
}
