import React, { useState } from "react";
import styles from "./Card.module.css";
import src_1920 from "../../../../assets/1920px_bgr_map.webm";
import src_1280 from "../../../../assets/1280px_header_bgr.webm";
import src_840 from "../../../../assets/840px_header_bgr.webm";
import src_640 from "../../../../assets/640px_header_bgr.webm";
import src_320 from "../../../../assets/320px_header_bgr.webm";

export default function Card({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  if (windowWidth > 1920) {
    return (
      <div className={styles.card}>
        <video
          src={src_1920}
          className={styles.card__bgr}
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.card__title_box}>
          <h3 className={styles.card__title}>{children}</h3>
        </div>
      </div>
    );
  }

  if (windowWidth > 1280) {
    return (
      <div className={styles.card}>
        <video
          src={src_1280}
          className={styles.card__bgr}
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.card__title_box}>
          <h3 className={styles.card__title}>{children}</h3>
        </div>
      </div>
    );
  }

  if (windowWidth > 840) {
    return (
      <div className={styles.card}>
        <video
          src={src_840}
          className={styles.card__bgr}
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.card__title_box}>
          <h3 className={styles.card__title}>{children}</h3>
        </div>
      </div>
    );
  }

  if (windowWidth > 640) {
    return (
      <div className={styles.card}>
        <video
          src={src_640}
          className={styles.card__bgr}
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.card__title_box}>
          <h3 className={styles.card__title}>{children}</h3>
        </div>
      </div>
    );
  }

  if (windowWidth > 320) {
    return (
      <div className={styles.card}>
        <video
          src={src_320}
          className={styles.card__bgr}
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.card__title_box}>
          <h3 className={styles.card__title}>{children}</h3>
        </div>
      </div>
    );
  }

  window.addEventListener("resize", handleResize);

  return (
    <div className={styles.card}>
      <video
        src={src_1920}
        className={styles.card__bgr}
        autoPlay
        loop
        muted
      ></video>
      <div className={styles.card__title_box}>
        <h3 className={styles.card__title}>{children}</h3>
      </div>
    </div>
  );
}
