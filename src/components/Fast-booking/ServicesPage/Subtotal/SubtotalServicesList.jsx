import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Subtotal.module.css";

export default function ServicSubtotalServicesListesList() {
  return (
    <div className={styles.servicesList}>
      <span className={styles.info__heading}>Services</span>
      <div className={styles.servicesList__price}>Price</div>

      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
    </div>
  );
}

function ServicesItem() {
  return (
    <div className={styles.servicesItem}>
      <span className={styles.servicesItem__name}>Service</span>
      <span>200 +</span>
    </div>
  );
}
