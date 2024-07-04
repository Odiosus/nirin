import React from "react";
import styles from "./Options.module.css";
import login_icon from "../../../../../assets/vip_lounge_login_icon.png";
import call_icon from "../../../../../assets/vip_lounge_phone_icon.png";

export default function Options() {
  return (
    <div className={styles.options}>
      <div className={styles.options__wrapper}>
        <p className={styles.options__text}>Ru</p>
        <p className={styles.options__text}>En</p>
      </div>

      <div className={styles.options__wrapper_items}>
        <div className={styles.options__item}>
          <img src={call_icon} alt="call_icon" width="20" height="20" />
        </div>
        <div className={styles.options__item}>
          <img src={login_icon} alt="login_icon" />
        </div>
      </div>
    </div>
  );
}
