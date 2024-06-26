import React, { useState } from "react";
import styles from "./BurgerBody.module.css";
import { Link } from "react-router-dom";
import logo from "../../../../../../assets/header__logo.png";
import login from "../../../../../../assets/login_icon.png";

export default function BurgerBody() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
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
          </div>
        </div>
      </div>
    </>
  );
}
