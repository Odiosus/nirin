import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Main.module.css";
import Section from "./Section/Section";
import Cards from "./Cards/Cards";
import QuestionsBlock from "./QuestionsBlock/QuestionsBlock";
import { Container } from "react-bootstrap";

export default function Main() {
  return (
    <div className={styles.main}>
      <Container fluid className={styles.main__container}>
        <Section />
        <Container className={styles.main__cards}>
          <Cards />
        </Container>
        <QuestionsBlock />
      </Container>
    </div>
  );
}
