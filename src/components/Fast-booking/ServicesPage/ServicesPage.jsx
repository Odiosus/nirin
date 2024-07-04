import { useState } from "react";
import Contacts from "./Contacts/Contacts";
import SubtotalServicesList from "./Subtotal/SubtotalServicesList";
import SubtotalNote from "./Subtotal/SubtotalNote";
import SubtotalTotal from "./Subtotal/SubtotalTotal";
import Flight from "./Flight/Flight";
import ServiceName from "./ServiceName/ServiceName";
import FormBtn from "../FormBtn";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ServicesPage.module.css";
import Travelers from "./Travelers/Travelers";
import Progress from "../Progress";
import { Col, Container, Row } from "react-bootstrap";

export default function ServicesPage({
  flight,
  setFlightDetails,
  setServicesPage,
  setConfirmationPage,
}) {
  const [flightNumber, setFlightNumber] = useState("");
  const [flightNumberTransit, setFlightNumberTransit] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureDateTransit, setDepartureDateTransit] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalDateTransit, setArrivalDateTransit] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [departureTimeTransit, setDepartureTimeTransit] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [arrivalTimeTransit, setArrivalTimeTransit] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [adultQty, setAdultQty] = useState(0);
  const [childQty, setChildQty] = useState(0);
  const [disabledQty, setDisabledQty] = useState(0);
  const [petQty, setPetQty] = useState(0);
  const [subtotal, setSubtotal] = useState(false);

  function handleSubmit() {
    const flightDetails = {
      departureCity: flight.departureCity,
      arrivalCity: flight.arrivalCity,
      flightNumber: flightNumber,
      flightNumberTransit: flightNumberTransit,
      departureDate: departureDate,
      departureDateTransit: departureDateTransit,
      arrivalDate: arrivalDate,
      arrivalDateTransit: arrivalDateTransit,
      departureTime: departureTime,
      departureTimeTransit: departureTimeTransit,
      arrivalTime: arrivalTime,
      arrivalTimeTransit: arrivalTimeTransit,
      fullName: fullName,
      phone: phone,
      emai: email,
      services: "N/a",
      additionalServices: "N/a",
      adultQty: adultQty,
      childQty: childQty,
      disabledQty: disabledQty,
      petQty: petQty,
    };

    console.log(flightDetails);
    setFlightDetails(flightDetails);
    setSubtotal(true);
  }

  return (
    <Container className={styles.services}>
      <Row className={styles.services__row}>
        <Col>
          <Progress
            progress__header={
              subtotal ? "Step 3 / Subtotal" : "Step 2 / Choose services"
            }
            step={subtotal ? 3 : 2}
          />
          {subtotal ? (
            <span className={styles.services__heading}>Subtotal</span>
          ) : (
            <span className={styles.services__heading}>Choose services</span>
          )}
        </Col>
      </Row>
      <Row className={styles.flight__row}>
        <Col>
          <Flight
            flight={flight}
            setFlightNumber={setFlightNumber}
            setFlightNumberTransit={setFlightNumberTransit}
            setDepartureDate={setDepartureDate}
            setDepartureDateTransit={setDepartureDateTransit}
            setArrivalDate={setArrivalDate}
            setArrivalDateTransit={setArrivalDateTransit}
            setDepartureTime={setDepartureTime}
            setDepartureTimeTransit={setDepartureTimeTransit}
            setArrivalTime={setArrivalTime}
            setArrivalTimeTransit={setArrivalTimeTransit}
            disabled={subtotal}
          />
        </Col>
      </Row>
      <Row className={styles.contacts__row}>
        <Col>
          <Contacts
            setFullName={setFullName}
            setPhone={setPhone}
            setEmail={setEmail}
            disabled={subtotal}
          />
        </Col>
      </Row>
      <Row className={styles.travelers__row}>
        <Col>
          <Travelers
            setAdultQty={setAdultQty}
            setChildQty={setChildQty}
            setDisabledQty={setDisabledQty}
            setPetQty={setPetQty}
            disabled={subtotal}
          />
        </Col>
      </Row>
      <Row className={styles.subtotal__row}>
        <Col>
          {subtotal ? (
            <>
              <SubtotalServicesList />
              <SubtotalNote />
              <SubtotalTotal />
            </>
          ) : (
            <ServiceName flight={flight} />
          )}
        </Col>
      </Row>
      <Row className={styles.service__buttons__row}>
        <Col>
          <div className={styles.service__buttons}>
            {subtotal ? (
              <FormBtn navigate={() => setSubtotal(false)}>Back</FormBtn>
            ) : (
              <FormBtn navigate={() => setServicesPage(false)}>Back</FormBtn>
            )}
            <FormBtn>Save</FormBtn>
            {subtotal ? (
              <FormBtn navigate={() => setConfirmationPage(true)}>
                Complete
              </FormBtn>
            ) : (
              <FormBtn navigate={() => handleSubmit()}>Continue</FormBtn>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
