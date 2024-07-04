import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Confirmation.module.css";
import Progress from "../Progress";

export default function Confirmation() {
  return (
    <div className={styles.confirmation}>
      <div className={styles.confirmation__bg}></div>
      <Progress progress__header="Step 4 / Booking confirmation" step={4} />
      <div className={styles.confirmation__text}>
        <div className={styles.confirmation__text__name}>
          <h1>
            DEAR, <span>Name</span>
          </h1>
          <h1>
            THANK YOU <span>FOR YOUR</span> RESERVATION
          </h1>
        </div>

        <div className={styles.confirmation__text__clarification}>
          <h1>
            We will contact you in the next 30 minutes <br /> to clarify all the
            details
          </h1>
        </div>

        <div className={styles.confirmation__text__account}>
          <h1>
            You can track the status of your order <br /> in your{" "}
            <span>personal account</span>
          </h1>
        </div>

        <h1 className={styles.confirmation__text__email}>CHECK YOUR EMAIL</h1>
      </div>
    </div>
  );
}
