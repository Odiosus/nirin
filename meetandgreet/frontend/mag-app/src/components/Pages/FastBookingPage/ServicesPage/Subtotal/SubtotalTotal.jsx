import styles from "./Subtotal.module.css";

export default function SubtotalTotal() {
  return (
    <div className={styles.subtotalTotal}>
      <span className={styles.subtotalName}>Subtotal</span>
      <span className={styles.subtotalAmount}> 600 +</span>
    </div>
  );
}
