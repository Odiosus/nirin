import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cards.module.css";
import Card from "./Card/Card";
import src_1 from "../../../../assets/meet_assist_services_icon.png";
import src_2 from "../../../../assets/fast_track_services_icon.png";
import src_3 from "../../../../assets/vip_lounge_services_icon.png";
import src_4 from "../../../../assets/vip_transfer_services_icon.png";
import src_5 from "../../../../assets/officials_lounge_services_icon.png";
import src_6 from "../../../../assets/cip_service_services_icon.png";
import { Row } from "react-bootstrap";

const title_1 = "MEET + ASSIST";
const title_2 = "FAST TRACK";
const title_3 = "VIP LOUNGE";
const title_4 = "Vip Transfer";
const title_5 = "Officials Lounge";
const title_6 = "CIP service";

const subtitle_1 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";

const subtitle_2 =
  "Priority completion of all key stages of airport procedures, significantly reducing waiting time and ensuring maximum comfort during travel";
const subtitle_3 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";
const subtitle_4 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";
const subtitle_5 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";
const subtitle_6 =
  "High-quality passenger escort service at the airport, providing maximum comfort, convenience during your trip";
const price = "from 200 €";

// const link_1 = "/meet_and_assist";
// const link_2 = "/fast_track";
const link_3 = "/vip_lounge";
// const link_4 = "/vip_transfer";
// const link_5 = "/officials_lounge";
// const link_6 = "/cip_service";

export default function Cards() {
  return (
    <Row className={styles.cards}>
      <Card
        link={link_3}
        title={title_1}
        subtitle={subtitle_1}
        src={src_1}
        price={price}
      ></Card>
      <Card
        link={link_3}
        title={title_2}
        subtitle={subtitle_2}
        src={src_2}
        price={price}
      ></Card>
      <Card
        link={link_3}
        title={title_3}
        subtitle={subtitle_3}
        src={src_3}
        price={price}
      ></Card>
      <Card
        link={link_3}
        title={title_4}
        subtitle={subtitle_4}
        src={src_4}
        price={price}
      ></Card>
      <Card
        link={link_3}
        title={title_5}
        subtitle={subtitle_5}
        src={src_5}
        price={price}
      ></Card>
      <Card
        link={link_3}
        title={title_6}
        subtitle={subtitle_6}
        src={src_6}
        price={price}
      ></Card>
    </Row>
  );
}
