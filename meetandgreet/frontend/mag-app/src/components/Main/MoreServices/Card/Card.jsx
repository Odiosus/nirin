import React from "react";
import styles from "./Card.module.css";
import src from "../../../../assets/Pre_comp_2.webm";

export default function Card({ children }) {
  return (
    <div className={styles.card}>
      <video src={src} className={styles.card__bgr} autoPlay loop muted></video>
      <div className={styles.card__title_box}>
        <h3 className={styles.card__title}>{children}</h3>
      </div>
    </div>
  );
}
