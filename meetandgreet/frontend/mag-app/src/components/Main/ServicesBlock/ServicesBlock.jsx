import React from "react";
import styles from "./ServicesBlock.module.css";
import Card from "./Card/Card";

import src_2 from "../../../../src/assets/Hotels.png";
import src_1 from "../../../../src/assets/MedicalEscortService.png";
import src_3 from "../../../../src/assets/AirportTransportation.png";

export default function ServicesBlock() {
  return (
    <div className={styles.servicesBlock}>
      <div className={styles.servicesBlock__container}>
        <Card src={src_1}>Medical Escort Service</Card>
        <Card src={src_2}>Hotels</Card>
        <Card src={src_3}>Airport transportation</Card>
      </div>
    </div>
  );
}
