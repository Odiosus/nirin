import React from "react";
import styles from "./MainPage.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
