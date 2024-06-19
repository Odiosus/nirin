import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card/Card.jsx";
import bgr_1 from "../../../assets/meet_assist.jpg";
import bgr_2 from "../../../assets/PORTRAIT_Martazmata.jpeg";
import bgr_3 from "../../../assets/sam-tan-9elwol96Ik8-unsplash.jpg";
import bgr_4 from "../../../assets/pexels-tima-miroshnichenko-5717043.jpg";
import bgr_5 from "../../../assets/pexels-tima-miroshnichenko-5717073.jpg";
import bgr_6 from "../../../assets/j-brouwer-OmS57LZcCEM-unsplash.jpg";

export default function Cards() {
  return (
    <div className={styles.cards}>
      <Card bgr={bgr_1} />
      <Card bgr={bgr_2} />
      <Card bgr={bgr_3} />
      <Card bgr={bgr_4} />
      <Card bgr={bgr_5} />
      <Card bgr={bgr_6} />
    </div>
  );
}
