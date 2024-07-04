import React from "react";
import CorporateSection from "./CorporateSection/CorporateSection";
import WishesBlock from "./WishesBlock/WishesBlock";
import { Container } from "react-bootstrap";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <Container fluid className={styles.main__container}>
      <CorporateSection />
      <Container className={styles.main__container}>
        <WishesBlock />
      </Container>
    </Container>
  );
}
