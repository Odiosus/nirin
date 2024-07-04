import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./fast-booking.module.css";
import FastBookingNav from "./Nav/FastBookingNav";
import Cities from "./Cities/Cities";
import ServicesPage from "./ServicesPage/ServicesPage";
import Confirmation from "./Confirmation/Confirmation";
import { Col, Container, Row } from "react-bootstrap";

export default function FastBookingForm() {
  const [servicesPage, setServicesPage] = useState(false);
  const [confirmationPage, setConfirmationPage] = useState(false);
  const [flight, setFlight] = useState({});
  const [flightDetails, setFlightDetails] = useState({});

  return (
    <>
      <FastBookingNav />
      <main className={styles.services}>
        <div className={styles.cities__bg}></div>
        <Container className={" " + styles.form}>
          <Row>
            <Col>
              {!servicesPage && (
                <Cities
                  setFlight={setFlight}
                  setServicesPage={setServicesPage}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {servicesPage && !confirmationPage && (
                <ServicesPage
                  flight={flight}
                  setFlightDetails={setFlightDetails}
                  setServicesPage={setServicesPage}
                  setConfirmationPage={setConfirmationPage}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col>{confirmationPage && <Confirmation />}</Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
