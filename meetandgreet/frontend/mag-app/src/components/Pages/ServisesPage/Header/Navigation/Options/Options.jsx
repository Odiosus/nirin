import React from "react";
import styles from "./Options.module.css";
import login_icon from "../../../../../../assets/login__header_services.png";
import call_icon from "../../../../../../assets/phone__header_services.png";
import { Link } from "react-router-dom";

export default function Options() {
  return (
    <div className={styles.options}>
      <div className={styles.options__wrapper}>
        <p className={styles.options__text}>RU</p>
        <p className={styles.options__text}>EN</p>
      </div>

      <div className={styles.options__wrapper_items}>
        <div className={styles.options__item}>
          <Link to="tel:+7 978 585 70 56" className={styles.options__link}>
            <img src={call_icon} alt="call_icon" />
          </Link>
        </div>
        <div className={styles.options__item}>
          <Link to="/login" className={styles.options__link}>
            <img src={login_icon} alt="login_icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
