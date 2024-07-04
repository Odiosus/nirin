import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Card.module.css";

export default function Card({ children, src }) {
  return (
    <div className={styles.card}>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={styles.card__bgr}
      ></div>
      <div className={styles.card__title_box}>
        <h3 className={styles.card__title}>{children}</h3>
      </div>
    </div>
  );
}
