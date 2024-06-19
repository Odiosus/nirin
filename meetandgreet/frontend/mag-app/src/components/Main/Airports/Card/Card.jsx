import React from "react";
import styles from "./Card.module.css";
import fly from "../../../../assets/fly.png";
import stars from "../../../../assets/bed.png";
import vip from "../../../../assets/brilliant.png";
import duty from "../../../../assets/bag.png";

export default function Card({ src, children }) {
  return (
    <div
      className={styles.airports__card}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={styles.airports__container}>
        <div className={styles.img_wrapper}>
          <div className={styles.fly__wrapper}>
            <div
              className={styles.fly}
              style={{ backgroundImage: `url(${fly})` }}
            ></div>
          </div>
        </div>
        <div className={styles.airports__card_container}>
          <div className={styles.airports__card_title}>
            <h3>{children}</h3>
          </div>
          <div className={styles.param}>
            <div className={styles.stars}>
              <div
                className={styles.stars__img}
                style={{ backgroundImage: `url(${stars})` }}
              ></div>
              <p>5* Hotel</p>
            </div>
            <div className={styles.vip}>
              <div
                className={styles.vip__img}
                style={{ backgroundImage: `url(${vip})` }}
              ></div>
              <p>vip services</p>
            </div>
            <div className={styles.duty}>
              <div
                className={styles.duty__img}
                style={{ backgroundImage: `url(${duty})` }}
              ></div>
              <p>Duty free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
