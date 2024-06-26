import React from "react";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  return (
    <div className={styles.burgerMenu__wrapper}>
      <div>
        <div className={styles.burgerMenu}></div>
      </div>
    </div>
  );
}
