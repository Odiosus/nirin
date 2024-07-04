import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MainPage.module.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { Container } from "react-bootstrap";

export default function MainPage() {
  return (
    <>
      <Container fluid className={styles.container}>
        <div className={styles.main__page}>
          <Header />
          <Main />
          <Footer />
        </div>
      </Container>
    </>
  );
}
