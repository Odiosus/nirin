import React from "react";
import styles from "./Airports.module.css";
import src_1 from "../../../assets/Dubai.png";
import src_2 from "../../../assets/Frankfurt.png";
import src_3 from "../../../assets/Istambul.png";
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
    </div>
  );
}
