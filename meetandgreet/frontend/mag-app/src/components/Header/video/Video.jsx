import React from "react";
import styles from "./Video.module.css";
import videoSrc from "../../../assets/Pre_comp_2.webm";

export default function Video() {
  return (
    <>
      <video
        className={styles.video}
        src={videoSrc}
        autoPlay
        loop
        muted
      ></video>
    </>
  );
}
