import { useState, useEffect } from "react";
import src_plane from "../../../../../../assets/plane_arrived.png";
import src_plane_came from "../../../../../../assets/plane_away_and_came.png";
import src_plane_arrival from "../../../../../../assets/airplane-came.png";
import src_search from "../../../../../../assets/arrow_btn_services.png";
import styles from "./Test.module.css";
import { Link } from "react-router-dom";

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/airport/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default function FastBookingForm() {
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchDataAndSetCities = async () => {
      const data = await fetchData();
      setCities(data);
    };

    fetchDataAndSetCities();
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const filteredCities = cities.filter(
    (city) => city.country === selectedCountry
  );

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.label__wrapper}>
          <label className={styles.label} htmlFor="countrySelect">
            <img src={src_plane} alt="country arrived" />
          </label>
          <input
            className={styles.input}
            type="text"
            id="countryInput"
            list="countryList"
            onChange={handleCountryChange}
            placeholder="Departure"
          />
          <datalist className={styles.datalist} id="countryList">
            {[...new Set(cities.map((city) => city.country))].map(
              (country, i) => (
                <option className={styles.option} key={i} value={country} />
              )
            )}
          </datalist>
        </div>

        <div className={styles.label__wrapper}>
          <label className={styles.label} htmlFor="citySelect">
            <img src={src_plane_came} alt="city arrived" />
          </label>
          <select className={styles.input} id="citySelect">
            <option className={styles.option} value="">
              Transit
            </option>
            {filteredCities.map((city, i) => (
              <option className={styles.option} key={i} value={city.city}>
                {city.city}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.label__wrapper}>
          <label className={styles.label} htmlFor="citySelect">
            <img src={src_plane_arrival} alt="city arrived" />
          </label>
          <select className={styles.input} id="citySelect">
            <option className={styles.option} value="">
              arrival
            </option>
            {filteredCities.map((city, i) => (
              <option className={styles.option} key={i} value={city.city}>
                {city.city}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.button__link}>
          <Link to="/fast_booking" className={styles.button}>
            <img src={src_search} alt="search" />
          </Link>
        </div>
      </div>
    </div>
  );
}
