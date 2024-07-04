import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Link to="/login" className={styles.login__container}>
      <div className={styles.login}></div>
    </Link>
  );
}
