import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Card.module.css";
import Form from "./Form/Form";
import { Col } from "react-bootstrap";

export default function Card() {
  return (
    <Col className={styles.card}>
      <Form />
    </Col>
  );
}
