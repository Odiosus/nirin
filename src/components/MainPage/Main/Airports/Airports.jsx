import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Airports.module.css";
import src_1 from "../../../../assets/dubai.jpeg";
import src_2 from "../../../../assets/frankfurt.jpeg";
import src_3 from "../../../../assets/istambul.jpeg";
import Card from "./Card/Card";

export default function Airports() {
  return (
    <div className={styles.airports}>
      <div className={styles.airports__wrapper}>
        <Card src={src_1}> Dubai Airport (DXB)</Card>
        <Card src={src_2}>
           Frankfurt Airport <br /> (FRA)
        </Card>
        <Card src={src_3}>
           Istanbul Airport <br /> (IST )
        </Card>
      </div>
      <div className={styles.airports__btn}>
        <button className={styles.airports__btn_btn}>Other airports</button>
      </div>
    </div>
  );
}
