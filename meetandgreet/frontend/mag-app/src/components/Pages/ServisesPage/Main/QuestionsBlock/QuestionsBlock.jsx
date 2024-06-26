import React from "react";
import styles from "./QuestionsBlock.module.css";
import Card from "./Card/Card";

export default function QuestionsBlock() {
  return (
    <div className={styles.questionsBlock}>
      <div className={styles.questionsBlock__container}>
        <Card />
      </div>
    </div>
  );
}
