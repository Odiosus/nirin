import React, { useState } from "react";
import styles from "./Video.module.css";
import videoSrc_1920px from "../../../../../assets/";
import videoSrc_1280px from "../../../../assets/1280px_header_bgr.webm";
import videoSrc_840px from "../../../../assets/840px_header_bgr.webm";
import videoSrc_640px from "../../../../assets/640px_header_bgr.webm";
import videoSrc_320px from "../../../../assets/320px_header_bgr.webm";

export default function Video() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  if (windowWidth > 1920) {
    return (
      <>
        <video
          className={styles.video}
          src={videoSrc_1920px}
          autoPlay
          loop
          muted
        ></video>
      </>
    );
  }

  if (windowWidth > 1280) {
    return (
      <>
        <video
          className={styles.video}
          src={videoSrc_1280px}
          autoPlay
          loop
          muted
        ></video>
      </>
    );
  }

  if (windowWidth > 840) {
    return (
      <>
        <video
          className={styles.video}
          src={videoSrc_840px}
          autoPlay
          loop
          muted
        ></video>
      </>
    );
  }

  if (windowWidth > 640) {
    return (
      <>
        <video
          className={styles.video}
          src={videoSrc_640px}
          autoPlay
          loop
          muted
        ></video>
      </>
    );
  }

  if (windowWidth > 320) {
    return (
      <>
        <video
          className={styles.video}
          src={videoSrc_320px}
          autoPlay
          loop
          muted
        ></video>
      </>
    );
  }
  window.addEventListener("resize", handleResize);

  return (
    <>
      <video
        className={styles.video}
        src={videoSrc_1920px}
        autoPlay
        loop
        muted
      ></video>
    </>
  );
}
