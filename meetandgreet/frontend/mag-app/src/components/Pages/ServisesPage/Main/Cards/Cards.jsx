import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card/Card";
const title_1 = "MEET + ASSIST";
const subtitle_1 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";
const src_1 = "../../../../../assets/meet_assist_services_icon.png";
const title_2 = "FAST TRACK";
const subtitle_2 =
  "Priority completion of all key stages of airport procedures, significantly reducing waiting time and ensuring maximum comfort during travel";
const src_2 = "../../../../../assets/fast_track_services_icon.png";
const title_3 = "AIRPORT SERVICES";
const subtitle_3 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";
const src_3 = "../../../../../assets/airport_services_icon.png";
const title_4 = "AIRPORT DELIVERY";
const subtitle_4 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";
const src_4 = "../../../../../assets/airport_delivery_icon.png";
const title_5 = "AIRPORT DELIVERY";
const subtitle_5 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";
const src_5 = "../../../../../assets/airport_delivery_icon.png";
const title_6 = "AIRPORT DELIVERY";
const subtitle_6 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";
const src_6 = "../../../../../assets/airport_delivery_icon.png";
const price = "200 €";

export default function Cards() {
  return (
    <div className={styles.cards}>
      <div className={styles.cards__wrapper}>
        <Card
          title={title_1}
          subtitle={subtitle_1}
          src={src_1}
          price={price}
        ></Card>
        <Card
          title={title_2}
          subtitle={subtitle_2}
          src={src_2}
          price={price}
        ></Card>
        <Card
          title={title_3}
          subtitle={subtitle_3}
          src={src_3}
          price={price}
        ></Card>
        <Card
          title={title_4}
          subtitle={subtitle_4}
          src={src_4}
          price={price}
        ></Card>
        <Card
          title={title_5}
          subtitle={subtitle_5}
          src={src_5}
          price={price}
        ></Card>
        <Card
          title={title_6}
          subtitle={subtitle_6}
          src={src_6}
          price={price}
        ></Card>
      </div>
    </div>
  );
}
