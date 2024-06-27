import styles from "./fast-booking.module.css";

export default function Progress({ progress__header, step }) {
  let stepLeft, marginLeft, fontWeight;

  if (step === 1) {
    stepLeft = "0px";
    marginLeft = "47px";
  }
  if (step === 2) {
    stepLeft = "320px";
    marginLeft = "340px";
    fontWeight = "bold";
  }
  if (step === 3) {
    stepLeft = "640px";
    marginLeft = "700px";
    fontWeight = "bold";
  }
  if (step === 4) {
    stepLeft = "960px";
    marginLeft = "960px";
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
