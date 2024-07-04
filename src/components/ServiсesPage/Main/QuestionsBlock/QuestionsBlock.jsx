import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./QuestionsBlock.module.css";
import Card from "./Card/Card";
import { Container, Row } from "react-bootstrap";

export default function QuestionsBlock() {
  return (
    <Container className={styles.questionsBlock__container}>
      <Row>
        <Card />
      </Row>
    </Container>
  );
}
