import styles from "./Travelers.module.css";
import TravelersBtn from "./TravelersBtn";

export default function TravelersType({ type, image, setValue, disabled }) {
  return (
    <div className={styles.travelers__type}>
      <img
        className={styles.travelers__img}
        src={image}
        alt="traveler type icon"
      />
      <span className={styles.travelers__name}>{type}</span>
      <TravelersBtn setValue={setValue} disabled={disabled} />
    </div>
  );
}
