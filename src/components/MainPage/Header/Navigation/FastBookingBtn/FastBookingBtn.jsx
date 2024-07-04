import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FastBookingBtn.module.css";

export default function FastBookingBtn() {
  return (
    <div
      className={
        "d-flex align-items-center justify-content-center " +
        styles.fastbooking__btn
      }
      to="/fastbooking"
    >
      <div className={styles.plane} alt="fastbooking_icon" />
    </div>
  );
}
