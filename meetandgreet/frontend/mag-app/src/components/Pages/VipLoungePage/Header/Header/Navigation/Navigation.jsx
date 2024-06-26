import React from "react";
import styles from "./Navigation.module.css";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Options from "./Options/Options";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__container}>
        <Logo />
        <Menu />
      </div>
      <Options />
    </div>
  );
}
