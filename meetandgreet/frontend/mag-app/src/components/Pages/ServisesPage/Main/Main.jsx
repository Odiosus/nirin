import React from "react";
import styles from "./Main.module.css";
import Section from "./Section/Section";
import Cards from "./Cards/Cards";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Section />
        <Cards />
      </div>
    </div>
  );
}
