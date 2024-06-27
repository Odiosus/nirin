import React, { useState } from "react";
import styles from "./BurgerBody.module.css";
import { Link } from "react-router-dom";
import logo from "../../../../../../assets/header__logo.png";
import login from "../../../../../../assets/login_icon.png";
import phone from "../../../../../../assets/phone_icon.png";

export default function BurgerBody() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    document.body.style.overflow = "auto";
    return null;
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <div className={styles.burgerBody}>
        <div className={styles.burgerBody__wrapper}>
          <div className={styles.burgerBody__container}>
            <div className={styles.burger__menu_header}>
              <Link to="/" className={styles.burger__menu_logo}>
                <img src={logo} alt="logo" />
              </Link>
              <Link
                to="/tel:+7 978 585 70 56"
                className={styles.burger__menu_phone}
              >
                <img src={phone} alt="phone" />
              </Link>
              <Link to="/login" className={styles.burger__menu_login}>
                <img src={login} alt="login" />
              </Link>
              <Link to="/" className={styles.burger__menu_close}>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className={styles.burger__menu_close_img}
                ></div>
              </Link>
            </div>
            <div className={styles.buurger__navigation}>
              <Link
                to="/fast_booking"
                className={styles.burger__navigation_link}
              >
                Fast Booking
              </Link>
              <Link to="/servises" className={styles.burger__navigation_link}>
                Services +
              </Link>
              <Link to="/travels" className={styles.burger__navigation_link}>
                Travalers +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
