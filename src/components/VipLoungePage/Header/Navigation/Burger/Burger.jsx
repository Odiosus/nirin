import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Burger.module.css";
import { MenuContext } from "../../../../MenuContext/MenuContext";

export default function Burger() {
  const { isBurgerBodyVisible, toggleMenu } = useContext(MenuContext);

  if (isBurgerBodyVisible === false) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <div onClick={toggleMenu} className={styles.burger__container}>
      <div className={styles.burger}></div>
    </div>
  );
}
