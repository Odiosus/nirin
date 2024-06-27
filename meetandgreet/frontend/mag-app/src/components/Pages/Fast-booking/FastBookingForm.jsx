import { useState } from "react";
import styles from "./fast-booking.module.css";
import FastBookingNav from "./Nav/FastBookingNav";
import Cities from "./Cities/Cities";
import ServicesPage from "./ServicesPage/ServicesPage";
import Confirmation from "./Confirmation/Confirmation";

export default function FastBookingForm() {
  const [servicesPage, setServicesPage] = useState(false);
  const [confirmationPage, setConfirmationPage] = useState(false);
  const [flight, setFlight] = useState({});
  const [flightDetails, setFlightDetails] = useState({});

  return (
    <>
      <FastBookingNav />
      <main className={styles.services}>
        {!servicesPage && (
          <Cities setFlight={setFlight} setServicesPage={setServicesPage} />
        )}

        {servicesPage && !confirmationPage && (
          <ServicesPage
            flight={flight}
            setFlightDetails={setFlightDetails}
            setServicesPage={setServicesPage}
            setConfirmationPage={setConfirmationPage}
          />
        )}

        {confirmationPage && <Confirmation />}
      </main>
    </>
  );
}
