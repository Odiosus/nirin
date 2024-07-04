import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MoreServices.module.css";
import Card from "./Card/Card";
import { Col, Container, Row } from "react-bootstrap";

export default function MoreServices() {
  return (
    <div className={styles.moreServices}>
      <Container className={styles.moreServices__wrapper}>
        <div className={styles.moreServices__title}>
          <h1 className={styles.moreServices__title_text}>
            Why are our{" "}
            <span className={styles.moreServices__title_span}>services</span>{" "}
            convenient?
          </h1>
        </div>
        <Row className={styles.moreServices__cards_wrapper}>
          <Col
            sm={12}
            md={6}
            lg={2}
            xl={2}
            className={styles.moreServices__cards_col}
          >
            <Card>Exclusive comfort and privacy</Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            xl={2}
            className={styles.moreServices__cards_col}
          >
            <Card>Personal service</Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            xl={2}
            className={styles.moreServices__cards_col}
          >
            <Card>experienced team</Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            xl={2}
            className={styles.moreServices__cards_col}
          >
            <Card>Quick and convenient registration</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
