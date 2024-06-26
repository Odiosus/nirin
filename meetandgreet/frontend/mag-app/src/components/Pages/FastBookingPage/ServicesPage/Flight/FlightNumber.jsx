import styles from "./Flight.module.css";

export default function FlightNumber({ setFlightNumber, disabled }) {
  return (
    <input
      className={styles.flightNumber}
      type="text"
      placeholder="Flight Number"
      onChange={(e) => setFlightNumber(e.target.value)}
      disabled={disabled}
    />
  );
}
