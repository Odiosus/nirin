import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MapSection.module.css";
import Video from "./Video/Video";
import src from "../../../../assets/search_icon.png";
import Button from "./Button/Button";
import TitleSection from "./TitleSection/TitleSection";

export default function MapSection() {
  return (
    <div className={styles.section}>
      <h1 className={styles.section__title}>search VIP services </h1>
      <div className={styles.section__container}>
        <Video />
        <div className={styles.section__search_wrapper}>
          <div className={styles.section__search}>
            <img
              src={src}
              alt="search_icon"
              className={styles.section__search_icon}
            />
            <input
              className={styles.section__input}
              type="text"
              placeholder="Enter your airport"
            />
          </div>
          <Button>Search</Button>
        </div>
        <div className={styles.section__title_bottom}>
          <TitleSection />
          <button className={styles.section__button}>get in touch</button>
        </div>
      </div>
    </div>
  );
}
