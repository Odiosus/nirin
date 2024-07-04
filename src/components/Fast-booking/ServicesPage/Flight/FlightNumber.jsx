import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Flight.module.css";

export default function FlightNumber({ setNumber, disabled }) {
  return (
    <input
      className={styles.flightNumber}
      type="text"
      placeholder="Flight Number"
      onChange={(e) => setNumber(e.target.value)}
      disabled={disabled}
    />
  );
}
