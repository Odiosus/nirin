import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cities.module.css";
import { useNavigate } from "react-router-dom";
import takeoff from "../../../assets/fast-booking_flight_takeoff.svg";
import transit from "../../../assets/fast-booking_flight_transit.svg";
import land from "../../../assets/fast-booking_flight_land.svg";
import Progress from "../Progress";
import FormBtn from "../FormBtn";
import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

const database = [
  {
    airport_name: "International Airport Nёnё Tereza",
    iata: "TIA",
    country: "Albania",
    city: "Tirana",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Mawlana Jalal ad- Din Muhammad Balkhi International Airport",
    iata: "MZR",
    country: "Afghanistan",
    city: "Mazar-e Sharif",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Kandahar International Airport",
    iata: "KDH",
    country: "Afghanistan",
    city: "Kandahar",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Hamid Karzai International Airport",
    iata: "KBL",
    country: "Afghanistan",
    city: "Kabul",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Herat International Airport",
    iata: "HEA",
    country: "Afghanistan",
    city: "Herat",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Astana International Airport",
    iata: "TSE",
    country: "Kazakhstan",
    city: "Astana",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Almaty International Airport",
    iata: "ALA",
    country: "Kazakhstan",
    city: "Almaty",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Atyrau Airport",
    iata: "GUW",
    country: "Kazakhstan",
    city: "Atyrau",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Sheremetevo Airport",
    iata: "SVO",
    country: "Russia",
    city: "Moscow",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Sochi Int Airport",
    iata: "SHI",
    country: "Russia",
    city: "Sochi",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Istanbul New Airport",
    iata: "INA",
    country: "Turkey",
    city: "Istanbul",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Istanbul Domestic Airport",
    iata: "IST",
    country: "Turkey",
    city: "Istanbul",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
  {
    airport_name: "Istanbul Additional Airport",
    iata: "Additional Airport",
    country: "Turkey",
    city: "Istanbul",
    service: [
      {
        name: "meet and greet",
        desc: "fack you",
        price: "340.00",
      },
    ],
  },
];

const cities = [];

for (let i = 0; i < database.length; i++) {
  cities.push({
    city: database[i].city,
    iata: database[i].iata,
    airport: database[i].airport_name,
    fullName: `${database[i].airport_name} (${database[i].iata}), ${database[i].city}`,
  });
}

export default function Cities({ setFlight, setServicesPage }) {
  const navigate = useNavigate();
  const [departureCity, setDepartureCity] = useState("");
  const [transitCity, setTransitCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const inputDeparture = useRef(null);
  const inputArrival = useRef(null);
  const inputTransit = useRef(null);

  const selectedDepartureCity = departureCity
    ? cities.filter((city) => city.fullName.includes(departureCity))
    : null;

  const selectedTransitCity = transitCity
    ? cities.filter((city) => city.fullName.includes(transitCity))
    : null;

  const selectedArrivalCity = arrivalCity
    ? cities.filter((city) => city.fullName.includes(arrivalCity))
    : null;

  function handleSubmit() {
    setFlight({
      departureCity: selectedDepartureCity && selectedDepartureCity[0].city,
      departureIata: selectedDepartureCity && selectedDepartureCity[0].iata,
      departureService:
        selectedDepartureCity && selectedDepartureCity[0].service,
      transitCity: selectedTransitCity && selectedTransitCity[0].city,
      transitIata: selectedTransitCity && selectedTransitCity[0].iata,
      transitService: selectedTransitCity && selectedTransitCity[0].service,
      arrivalCity: selectedArrivalCity && selectedArrivalCity[0].city,
      arrivalIata: selectedArrivalCity && selectedArrivalCity[0].iata,
      arrivalService: selectedArrivalCity && selectedArrivalCity[0].service,
    });
    setServicesPage(true);
  }

  return (
    <Container className={styles.cities}>
      <Row className={styles.cities__row}>
        <Col className={styles.cities__col}>
          <Progress progress__header="Step 1 / Citites" />
        </Col>
      </Row>
      <Row className={styles.title__row}>
        <Col>
          <span className={styles.city__title}>City & airport</span>
        </Col>
      </Row>

      <Row className={styles.city__input__wrapper}>
        <Col md={3} className={styles.city__input}>
          <img src={takeoff} alt="place icon" />
          <input
            placeholder="Departure"
            type="text"
            ref={inputDeparture}
            list="airports"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          />
          {departureCity.length > 2 && (
            <datalist id="airports">
              {cities.map((city, i) => (
                <option key={i} value={city.fullName} />
              ))}
            </datalist>
          )}
        </Col>

        <Col md={3} className={styles.city__input}>
          <img src={transit} alt="place icon" />
          <input
            placeholder="Transit"
            type="text"
            ref={inputTransit}
            list="airports"
            value={transitCity}
            onChange={(e) => setTransitCity(e.target.value)}
          />
          {transitCity.length > 2 && (
            <datalist id="airports">
              {cities.map((city, i) => (
                <option key={i} value={city.fullName} />
              ))}
            </datalist>
          )}
        </Col>

        <Col md={3} className={styles.city__input}>
          <img src={land} alt="place icon" />
          <input
            placeholder="Arrival"
            type="text"
            ref={inputArrival}
            list="airports"
            value={arrivalCity}
            onChange={(e) => setArrivalCity(e.target.value)}
          />
          {arrivalCity.length > 2 && (
            <datalist id="airports">
              {cities.map((city, i) => (
                <option key={i} value={city.fullName} />
              ))}
            </datalist>
          )}
        </Col>
      </Row>

      <FormBtn
        navigate={() => {
          handleSubmit();
        }}
      >
        Continue
      </FormBtn>
    </Container>
  );
}
