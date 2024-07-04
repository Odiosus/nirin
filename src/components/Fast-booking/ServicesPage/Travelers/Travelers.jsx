import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Travelers.module.css";
import TravelersType from "./TravelersType";
import adult from "../../../../assets/fast-booking_travelers_img1.svg";
import child from "../../../../assets/fast-booking_travelers_img2.svg";
import disabledImg from "../../../../assets/fast-booking_travelers_img3.svg";
import pet from "../../../../assets/fast-booking_travelers_img4.svg";

export default function Travelers({
  setAdultQty,
  setChildQty,
  setDisabledQty,
  setPetQty,
  disabled,
}) {
  return (
    <div className={styles.travelers}>
      <span className={styles.info__heading}>Travelers</span>
      <div className={styles.travelers__type__wrapper}>
        <TravelersType
          image={adult}
          type="Adult"
          setValue={setAdultQty}
          disabled={disabled}
        />
        <TravelersType
          image={child}
          type="Child"
          setValue={setChildQty}
          disabled={disabled}
        />
        <TravelersType
          image={disabledImg}
          type="Disabled person"
          setValue={setDisabledQty}
          disabled={disabled}
        />
        <TravelersType
          image={pet}
          type="Pet"
          setValue={setPetQty}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
