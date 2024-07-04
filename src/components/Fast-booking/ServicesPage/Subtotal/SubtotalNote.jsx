import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Subtotal.module.css";

export default function SubtotalNote() {
  return (
    <div className={styles.servicesList}>
      <input
        className={styles.servicesNote}
        type="textarea"
        placeholder="Note"
      />
    </div>
  );
}
