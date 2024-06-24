import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../../../../../assets/header__logo_services.png";

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
