import React from "react";
import styles from "./MoreServices.module.css";
import Card from "./Card/Card";

export default function MoreServices() {
  return (
    <div className={styles.moreServices}>
      <div className={styles.moreServices__wrapper}>
        <div className={styles.moreServices__title}>
          <h1 className={styles.moreServices__title_text}>
            Why are our{" "}
            <span className={styles.moreServices__title_span}>services</span>{" "}
            convenient?
          </h1>
        </div>
        <div className={styles.moreServices__cards_wrapper}>
          <Card>Exclusive comfort and privacy</Card>
          <Card>Personal service</Card>
          <Card>experienced team</Card>
          <Card>Quick and convenient registration</Card>
        </div>
      </div>
    </div>
  );
}
