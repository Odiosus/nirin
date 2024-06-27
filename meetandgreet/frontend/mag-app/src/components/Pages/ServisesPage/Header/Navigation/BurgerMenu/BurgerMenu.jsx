import React from "react";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu({ onClick }) {
  return (
    <div onClick={onClick} className={styles.burgerMenu__wrapper}>
      <div className={styles.burgerMenu__container}>
        <div className={styles.burgerMenu}></div>
      </div>
    </div>
  );
}
