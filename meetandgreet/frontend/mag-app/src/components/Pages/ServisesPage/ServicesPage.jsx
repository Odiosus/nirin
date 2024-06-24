import React from "react";
import styles from "./ServicesPage.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

export default function ServisecPage() {
  return (
    <div className={styles.servicesPage}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
