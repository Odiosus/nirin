import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TravelersPage.module.css";
import Header from "../TravelersPage/Header/Header";
import Footer from "../ServiсesPage/Footer/Footer";
import Main from "../TravelersPage/Main/Main";

export default function TravelersPage() {
  return (
    <div className={styles.travelers__page}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
