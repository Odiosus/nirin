import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className={styles.logo__container}>
      <Link to="/">
        <div className={styles.logo}></div>
      </Link>
    </div>
  );
}
