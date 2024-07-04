import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Card.module.css";
import src_1920 from "../../../../../assets/1920px_header_bgr.mp4";

export default function Card({ children }) {
  return (
    <div className={styles.card}>
      <video
        src={src_1920}
        className={styles.card__bgr}
        autoPlay
        loop
        muted
      ></video>
      <div className={styles.card__title_box}>
        <h3 className={styles.card__title}>{children}</h3>
      </div>
    </div>
  );
}
