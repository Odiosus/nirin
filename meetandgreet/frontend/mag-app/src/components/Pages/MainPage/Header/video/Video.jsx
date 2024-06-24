import React from "react";
import styles from "./Video.module.css";
import videoSrc_1920px from "../../../../../assets/1920px_header_bgr.mp4";

export default function Video() {
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
