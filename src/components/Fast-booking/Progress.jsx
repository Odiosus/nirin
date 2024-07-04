import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./fast-booking.module.css";

export default function Progress({ progress__header, step }) {
  let stepLeft, marginLeft, fontWeight;

  if (step === 1) {
    stepLeft = "0px";
    marginLeft = "47%";
  }
  if (step === 2) {
    stepLeft = "30%";
    marginLeft = "34%";
    fontWeight = "bold";
  }
  if (step === 3) {
    stepLeft = "60%";
    marginLeft = "70%";
    fontWeight = "bold";
  }
  if (step === 4) {
    stepLeft = "90%";
    marginLeft = "96%";
    fontWeight = "bold";
  }

  return (
    <div className={styles.progress__wrapper}>
      <span
        className={styles.progress__header}
        style={{ marginLeft: marginLeft, fontWeight: fontWeight }}
      >
        {progress__header}
      </span>
      <div className={styles.progress}>
        <div className={styles.step} style={{ left: stepLeft }}></div>
      </div>
    </div>
  );
}
