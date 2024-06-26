import React from "react";
import styles from "./Logo.module.css";
import logo from "../../../../../../../assets/header__logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <div className={styles.logo__container}>
        <Link to="/" className={styles.logo__container}>
          <img className={styles.logo} src={logo} alt="logo_icon" />
        </Link>
      </div>
    </>
  );
}
