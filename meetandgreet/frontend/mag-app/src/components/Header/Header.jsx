import React from "react";
import styles from "./Header.module.css";
import Video from "./video/Video";
import Navigation from "./Navigation/Navigation";
import Title from "./Title/Title";
import Button from "./Button/Button";
import departure_icon from "../../assets/airplane-came.png";
import transit_icon from "../../assets/plane_away_and_came.png";
import arrival_icon from "../../assets/plane_arrived.png";
import arrow_btn_right from "../../assets/arrow_btn_services.png";

export default function Header() {
  const width_main = `clamp(14.375rem, 13.25rem + 4.63vw, 20rem)`;
  const height_main = `clamp(4.813rem, 2.75rem + 1.88vw, 5rem)`;
  const height_right = `clamp(4.813rem, 2.563rem + 1.25vw, 4.063rem)`;
  const width_right = `clamp(3.125rem, 2.75rem + 0.88vw, 5rem)`;
  return (
    <>
      <div className={styles.header}>
        <Video />
        <div className={styles.header__container}>
          <Navigation />
          <div>
            <Title>VIP services</Title>
            <Title>
              {" "}
              at all airports{" "}
              <span className={styles.header__span}>around</span> the world
            </Title>
          </div>

          <div className={styles.btn_wrapper}>
            <Button width={width_main} height={height_main}>
              <img src={departure_icon} alt="departure_text" />
              <p className={styles.departure_text}>Departure</p>
            </Button>
            <Button width={width_main} height={height_main}>
              <img src={transit_icon} alt="arrival_text" />
              <p className={styles.departure_text}>Transit</p>
            </Button>
            <Button width={width_main} height={height_main}>
              <img src={arrival_icon} alt="arrival_text" />
              <p className={styles.departure_text}>Arrival</p>
            </Button>
            <Button width={width_right} height={height_right}>
              <img src={arrow_btn_right} alt="arrow_icon" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
