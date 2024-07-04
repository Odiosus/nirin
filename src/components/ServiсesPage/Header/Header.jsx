import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import Navigation from "./Navigation/NavigationServices";
import Title from "./Title/Title";
import SubTitle from "./SubTitle/SubTitle";
import { Container, Row } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Container className={styles.header__container}>
          <Row>
            <Navigation />
          </Row>

          <Row className={styles.header__title}>
            <Title>Services</Title>

            <SubTitle>
              Experience the true pleasure of traveling <br /> with our
              exclusive VIP airport services, providing <br /> unparalleled
              comfort, personalized service <br /> and maximum efficiency at
              every stage of your journey.
            </SubTitle>
          </Row>
        </Container>
      </div>
    </>
  );
}
