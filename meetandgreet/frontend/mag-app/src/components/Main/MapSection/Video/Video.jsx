import React from "react";
import styles from "./Video.module.css";
import src from "../../../../assets/map_scene_1.webm";

export default function Video() {
  return <video src={src} className={styles.video} autoPlay loop muted></video>;
}
