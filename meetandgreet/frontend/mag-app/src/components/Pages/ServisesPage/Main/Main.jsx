import React from "react";
import styles from "./Main.module.css";
import Section from "./Section/Section";
import Cards from "./Cards/Cards";
import QuestionsBlock from "./QuestionsBlock/QuestionsBlock";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Section />
        <Cards />
        <QuestionsBlock />
      </div>
    </div>
  );
}
