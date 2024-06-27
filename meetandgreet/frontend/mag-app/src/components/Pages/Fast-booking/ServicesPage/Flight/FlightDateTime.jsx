import { useState } from "react";
import styles from "./Flight.module.css";

export default function FlightDateTime({
  flightType,
  inputType,
  setData,
  disabled,
}) {
  const [value, setValue] = useState("");

  const handleFocus = (e) => {
    if (inputType === "date") e.target.type = "date";
    if (inputType === "time") e.target.type = "time";
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
      placeholder={flightType}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      disabled={disabled}
      onChange={(e) => {
        setValue(e.target.value);
        setData(e.target.value);
      }}
    />
  );
}
