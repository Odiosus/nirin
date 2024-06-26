import styles from "./ServiceName.module.css";

export default function ServiceAdditional({ children }) {
  return <button className={styles.serviceAdditional}>{children}</button>;
}
