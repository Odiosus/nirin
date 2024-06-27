import styles from "./ServiceName.module.css";
import takeoff from "../../../../../assets/fast-booking_flight_takeoff.svg";
import transit from "../../../../../assets/fast-booking_flight_transit.svg";
import land from "../../../../../assets/fast-booking_flight_land.svg";
import ServiceBtn from "./ServiceBtn";
import ServiceAdditional from "./ServiceAdditional";
import { useState } from "react";

export default function ServiceName({ flight }) {
  const [services, setServices] = useState(false);

  return (
    <div className={styles.serviceName}>
      <span className={styles.info__heading}>Choose services</span>
      <div className={styles.serviceBtn__wrapper}>
        <ServiceBtn image={takeoff} onClick={() => setServices(!services)}>
          Departure
        </ServiceBtn>
        <ServiceBtn image={transit} onClick={() => setServices(!services)}>
          Transit
        </ServiceBtn>
        <ServiceBtn image={land} onClick={() => setServices(!services)}>
          Arrival
        </ServiceBtn>
      </div>
      <ServiceAdditional>Additional Services</ServiceAdditional>
    </div>
  );
}
