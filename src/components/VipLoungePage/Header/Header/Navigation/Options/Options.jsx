import React from "react";
import styles from "./Options.module.css";
import login_icon from "../../../../assets/login_icon.png";
import call_icon from "../../../../assets/phone_icon.png";

export default function Options() {
  return (
    <div className={styles.options}>
      <div className={styles.options__wrapper}>
        <p className={styles.options__text}>RU</p>
        <p className={styles.options__text}>EN</p>
      </div>

      <div className={styles.options__wrapper_items}>
        <div className={styles.options__item}>
          <img src={call_icon} alt="call_icon" />
        </div>
        <div className={styles.options__item}>
          <img src={login_icon} alt="login_icon" />
        </div>
      </div>
    </div>
  );
}
