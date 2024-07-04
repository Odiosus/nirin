import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ServiceName.module.css";

export default function ServiceBtn({ image, children, onClick }) {
  return (
    <button className={styles.serviceBtn} onClick={onClick}>
      <img src={image} alt="Plane logo" />
      {children}
    </button>
  );
}
