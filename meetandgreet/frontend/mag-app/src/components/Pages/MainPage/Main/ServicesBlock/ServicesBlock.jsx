import React from "react";
import styles from "./ServicesBlock.module.css";
import Card from "./Card/Card";

import src_2 from "../../../../../assets/hotels_new_image_2.jpeg";
import src_1 from "../../../../../assets/mediacal_esort_new_image_1.jpeg";
import src_3 from "../../../../../assets/airport_transportation_new_3.jpeg";

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
