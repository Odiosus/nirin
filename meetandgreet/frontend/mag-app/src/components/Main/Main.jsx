import React from "react";
import styles from "./Main.module.css";
import Title from "./Title/Title";
import Cards from "./Cards/Cards";
import MapSection from "./MapSection/MapSection";
import ServicesBlock from "./ServicesBlock/ServicesBlock";
import MoreServices from "./MoreServices/MoreServices";
import OurMission from "./OurMission/OurMission";
import Airports from "./Airports/Airports";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={styles.section__container}>
          <Title>
            Our {""}
            <span className={styles.main__span}>services</span> {""} presented
            in more
          </Title>
          <Title>
            <span className={styles.main__span}>than</span>
            {""} 1000 airports {""}
            <span className={styles.main__span}>around</span>
            {""}
            the world
          </Title>
          <Cards />
        </div>
        <MapSection />
        <ServicesBlock />
        <MoreServices />
        <OurMission />
        <Airports />
      </div>
    </div>
  );
}
