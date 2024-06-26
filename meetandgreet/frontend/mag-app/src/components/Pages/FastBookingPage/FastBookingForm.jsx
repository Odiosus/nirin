import styles from "./Cities/fast-booking.module.css";
import FastBookingNav from "./Nav/FastBookingNav";
import Cities from "./Cities/Cities";
import ServicesPage from "./ServicesPage/ServicesPage";
import Confirmation from "./Confirmation/Confirmation";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FastBookingForm() {
  const [flight, setFlight] = useState({});
  const [flightDetails, setFlightDetails] = useState({});

  return (
    <>
      <FastBookingNav />
      <main className={styles.services}>
        <Link to="/cities">
          <Cities setFlight={setFlight} />
        </Link>
        <Link to={"/services"}>
          <ServicesPage flight={flight} setFlightDetails={setFlightDetails} />
        </Link>
        <Link to="/confirmation">
          <Confirmation flightDetails={flightDetails} />
        </Link>
      </main>
    </>
  );
}

// back button to undo flight information
// services
// input layout
