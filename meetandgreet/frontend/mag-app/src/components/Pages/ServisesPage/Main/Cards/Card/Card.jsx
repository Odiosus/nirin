import React from "react";
import styles from "./Card.module.css";

export default function Card({ title, subtitle, src, price }) {
  return (
    <div className={styles.card}>
      <img
        src={`${src}`}
        className={styles.card__image}
        alt="card__image"
      ></img>
      <div className={styles.card__text}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__subtitle}>{subtitle}</div>
      </div>
      <div className={styles.card__button_wrapper}>
        <div className={styles.card__button_price}>{price}</div>
        <div className={styles.card__button_more}>See more</div>
      </div>
    </div>
  );
}
