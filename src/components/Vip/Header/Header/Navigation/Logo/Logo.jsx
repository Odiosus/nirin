import React from "react";
import styles from "./Logo.module.css";
import logo from "../../../../assets/logo.svg";

export default function Logo() {
  return (
    <div className={styles.logo__container}>
      <img className={styles.logo} src={logo} alt="logo_icon" />
    </div>
  );
}
