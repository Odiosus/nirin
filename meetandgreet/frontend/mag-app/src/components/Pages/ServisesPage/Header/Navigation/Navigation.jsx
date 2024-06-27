import React, { useState } from "react";
import styles from "./Navigation.module.css";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Options from "./Options/Options";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import BurgerBody from "./BurgerBody/BurgerBody";

export default function Navigation({ visibleElem }) {
  const [visible, setVisible] = useState(visibleElem || false);

  const toggleVisible = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={styles.navigation}>
      {visible && <BurgerBody onClose={toggleVisible} />}
      <div className={styles.navigation__container}>
        <Logo />
        <Menu />
      </div>
      <Options />
      <BurgerMenu onClick={toggleVisible} />
    </div>
  );
}
