import React from "react";
import styles from "./Menu.module.css";
import plane_icon from "../../../../assets/airplane.png";

export default function Menu() {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.menu__list}>
          <div className={styles.menu__item_plane}>
            <div className={styles.menu__icon_box}>
              <img
                className={styles.menu__icon}
                src={plane_icon}
                alt="plane_icon"
              />
            </div>
            <p className={styles.menu__text}>Fast Booking</p>
          </div>
        </li>
        <div className={styles.menu__list_wrapper}>
          <li className={styles.menu__list}>
            <div className={styles.menu__item}>
              <p className={styles.menu__text}>Services +</p>
            </div>
          </li>
          <li className={styles.menu__list}>
            <div className={styles.menu__item}>
              <p className={styles.menu__text}>Travalers +</p>
            </div>
          </li>
        </div>
      </ul>
    </>
  );
}
