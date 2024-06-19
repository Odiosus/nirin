import React from "react";
import styles from "./Card.module.css";

export default function Card({ bgr }) {
  return (
    <div
      style={{ backgroundImage: `url(${bgr})` }}
      className={styles.card}
    ></div>
  );
}
