import { useState } from "react";
import styles from "./Flight.module.css";

export default function FlightTime({ type }) {
  const [value, setValue] = useState("");

  const handleFocus = (e) => {
    e.target.type = "date";
  };

  const handleBlur = (e) => {
    if (!value) {
      e.target.type = "text";
    }
  };

  return (
    <input
      className={styles.flightDate}
      type="text"
      placeholder={type}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
