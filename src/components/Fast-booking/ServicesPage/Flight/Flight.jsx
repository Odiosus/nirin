import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Flight.module.css";
import takeoff from "../../../../assets/fast-booking_flight_takeoff.svg";
import land from "../../../../assets/fast-booking_flight_land.svg";
import FlightNumber from "./FlightNumber";
import FlightDateTime from "./FlightDateTime";
import { Col, Container, Row } from "react-bootstrap";

export default function Flight({
  flight,
  setFlightNumber,
  setFlightNumberTransit,
  setDepartureDate,
  setDepartureDateTransit,
  setArrivalDate,
  setArrivalDateTransit,
  setDepartureTime,
  setDepartureTimeTransit,
  setArrivalTime,
  setArrivalTimeTransit,
  disabled,
}) {
  return (
    <div className={styles.services__info}>
      <Container className={styles.services__info__wrapper}>
        <Row className={styles.services__info__row}>
          <Col>
            <span className={styles.info__heading}>Flight information</span>
          </Col>
        </Row>
        <Row className={styles.services__info__inputs}>
          <Col className={styles.services__info__input}>
            <div className={styles.city__wrapper}>
              <div className={styles.codeCity__wrapper}>
                <div className={styles.code}>
                  <span className={styles.code__heading}>
                    {flight.departureIata ? flight.departureIata : "CODE"}
                  </span>
                  <img
                    className={styles.code__img}
                    src={takeoff}
                    alt="Plane logo"
                  />
                </div>
                <span className={styles.city}>
                  {flight.departureCity ? flight.departureCity : "City"}
                </span>
              </div>
              <div className={styles.codeCity__wrapper}>
                <div className={styles.code}>
                  <span className={styles.code__heading}>
                    {flight.transitIata
                      ? flight.transitIata
                      : flight.arrivalIata
                      ? flight.arrivalIata
                      : "CODE"}
                  </span>
                  <img
                    className={styles.code__img}
                    src={land}
                    alt="Plane logo"
                  />
                </div>
                <span className={styles.city}>
                  {flight.transitCity
                    ? flight.transitCity
                    : flight.arrivalCity
                    ? flight.arrivalCity
                    : "City"}
                </span>
              </div>
            </div>
            <div className={styles.flight__info}>
              <FlightNumber setNumber={setFlightNumber} disabled={disabled} />
              <div className={styles.flight__date__wrapper}>
                <FlightDateTime
                  flightType={"Departure Date"}
                  inputType="date"
                  setData={setDepartureDate}
                  disabled={disabled}
                />
                <FlightDateTime
                  flightType="Arrival Date"
                  inputType="date"
                  setData={setArrivalDate}
                  disabled={disabled}
                />
              </div>
              <div className={styles.flight__date__wrapper}>
                <FlightDateTime
                  flightType="Departure Time"
                  inputType="time"
                  setData={setDepartureTime}
                  disabled={disabled}
                />
                <FlightDateTime
                  flightType="Arrival Time"
                  inputType="time"
                  setData={setArrivalTime}
                  disabled={disabled}
                />
              </div>
            </div>
          </Col>

          <Col className={styles.services__info__input}>
            <div className={styles.city__wrapper}>
              <div className={styles.codeCity__wrapper}>
                <div className={styles.code}>
                  <span className={styles.code__heading}>
                    {flight.transitIata ? flight.transitIata : "CODE"}
                  </span>
                  <img
                    className={styles.code__img}
                    src={takeoff}
                    alt="Plane logo"
                  />
                </div>
                <span className={styles.city}>
                  {flight.transitCity ? flight.transitCity : "City"}
                </span>
              </div>

              <div className={styles.codeCity__wrapper}>
                <div className={styles.code}>
                  <span className={styles.code__heading}>
                    {flight.transitIata ? flight.arrivalIata : "CODE"}
                  </span>
                  <img
                    className={styles.code__img}
                    src={land}
                    alt="Plane logo"
                  />
                </div>
                <span className={styles.city}>
                  {flight.transitCity ? flight.arrivalCity : "City"}
                </span>
              </div>
            </div>
            <div className={styles.flight__info}>
              <FlightNumber
                setNumber={setFlightNumberTransit}
                disabled={disabled}
              />
              <div className={styles.flight__date__wrapper}>
                <FlightDateTime
                  flightType="Departure Date"
                  inputType="date"
                  setData={setDepartureDateTransit}
                  disabled={disabled}
                />
                <FlightDateTime
                  flightType="Arrival Date"
                  inputType="date"
                  setData={setArrivalDateTransit}
                  disabled={disabled}
                />
              </div>
              <div className={styles.flight__date__wrapper}>
                <FlightDateTime
                  flightType="Departure Time"
                  inputType="time"
                  setData={setDepartureTimeTransit}
                  disabled={disabled}
                />
                <FlightDateTime
                  flightType="Arrival Time"
                  inputType="time"
                  setData={setArrivalTimeTransit}
                  disabled={disabled}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
