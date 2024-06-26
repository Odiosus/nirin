import { useState } from "react";
import styles from "./Travelers.module.css";

export default function TravelersBtn({ setValue, disabled }) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.travelers__input}>
      <button
        className={styles.travelersBtn}
        disabled={disabled}
        onClick={() => {
          setCount(count > 0 ? (count) => count - 1 : 0);
          setValue(count - 1);
        }}
      >
        -
      </button>
      <span className={styles.travelersValue}>{count > 0 ? count : 0}</span>
      <button
        className={styles.travelersBtn}
        disabled={disabled}
        onClick={() => {
          setCount((count) => count + 1);
          setValue(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
