import React from "react";
import styles from "./Video.module.css";
import src from "../../../../../assets/1920px_bgr_map.webm";

export default function Video() {
  return <video src={src} className={styles.video} autoPlay loop muted></video>;
}
