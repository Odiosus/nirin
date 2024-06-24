import React from "react";
import styles from "./SubTitle.module.css";

export default function SubTitle({ children }) {
  return (
    <>
      <h1 className={styles.subTitle}>{children}</h1>
    </>
  );
}
