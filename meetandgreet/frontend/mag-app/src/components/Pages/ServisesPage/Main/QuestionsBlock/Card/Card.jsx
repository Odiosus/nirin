import React from "react";
import styles from "./Card.module.css";
import Form from "./Form/Form";

export default function Card() {
  return (
    <div className={styles.card}>
      <Form />
    </div>
  );
}
