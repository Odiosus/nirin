import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import Navigation from "./Navigation/NavigationServices";
import Title from "./Title/Title";
import { Container, Row } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Container className={styles.header__container}>
          <Row>
            <Navigation />
          </Row>
        </Container>
        <Container className={styles.header__title_container}>
          <Row className={styles.header__title}>
            <Title>
              we will make sure that your trip will be{" "}
              <span className={styles.header__span}> comfortable</span> and{" "}
              <span className={styles.header__span}>enjoyable </span>
              for <span className={styles.header__span}>YOU</span>
            </Title>
          </Row>
        </Container>
      </div>
    </>
  );
}
