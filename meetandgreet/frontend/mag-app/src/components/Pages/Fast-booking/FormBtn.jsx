import styles from "./fast-booking.module.css";

export default function FormBtn({ children, navigate }) {
  return (
    <button className={styles.mainBtn} onClick={navigate}>
      {children}
    </button>
  );
}
