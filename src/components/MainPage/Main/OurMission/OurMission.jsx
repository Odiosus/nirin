import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./OurMission.module.css";

export default function OurMission() {
  return (
    <div className={styles.ourMission}>
      <div className={styles.OurMission__container}>
        <div className={styles.title__block}>
          <h1 className={styles.title}>
            <span className={styles.span}>OUR</span> MISSION is to solve you the
            <span className={styles.span}>best travel</span> <br /> experience,
            regardless from where <br /> you are flying{" "}
          </h1>
        </div>
        <div className={styles.button__wrapper}>
          <button className={styles.button}>See more</button>
        </div>
      </div>
    </div>
  );
}
