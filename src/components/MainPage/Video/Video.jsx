import React from "react";
import styles from "./Video.module.css";
import video from "../../../assets/1920px_header_bgr.mp4";

export default function Video() {
  return (
    <>
      <video src={video} autoPlay loop muted className={styles.video}></video>
    </>
  );
}
