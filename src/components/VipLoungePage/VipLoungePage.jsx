import React from "react";
import styles from "./VipLoungePage.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";

function Vip() {
  return (
    <div className={styles.vip}>
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default Vip;
