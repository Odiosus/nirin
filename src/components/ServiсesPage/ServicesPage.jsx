import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ServicesPage.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { Container } from "react-bootstrap";

export default function ServisecPage() {
  return (
    <Container fluid className={styles.container}>
      <div className={styles.servicesPage}>
        <Header />
        <Main />
        <Footer />
      </div>
    </Container>
  );
}
