import React from "react";
import styles from "./Header.module.css";
import src_banner from "../../../../assets/vip_lounge_header__bgr.jpg";
import Navigation from "./Navigation/Navigation";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__top}>
          <Navigation />
          <div className={styles.header__slide}>
            <a href="#" className={styles.slide__link_left}></a>
            <h1 className={styles.slide__title}>Vip Lounge</h1>
            <a href="#" className={styles.slide__link_right}></a>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.header__bunner}>
        <img src={src_banner} alt="vip hotel" />
      </div>
    </div>
  );
}

export default Header;
