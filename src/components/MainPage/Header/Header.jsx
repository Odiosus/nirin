import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import Video from "../Video/Video.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "./Navigation/Navigation.jsx";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Video />
        <Container className={styles.container}>
          <Row className={" " + styles.row__header}>
            <Navigation />
          </Row>
          <Row className={styles.title__row}>
            <Col>
              <h1 className={styles.title}>VIP services</h1>
              <h2 className={styles.subtitle}>
                {" "}
                at all airports{" "}
                <span className={styles.subtitle__span}>around</span> the world
              </h2>
            </Col>
          </Row>
          <Row className={styles.form__row}>
            <Col className={styles.form__col}>
              <form
                action="https://echo.htmlacademy.ru"
                method="post"
                className={styles.form}
              >
                <div className={styles.input_btn}>
                  <div className={styles.btn_icon_departure}></div>
                  <input
                    className={styles.form__input}
                    type="text"
                    placeholder="Departure"
                    name="departure "
                  />
                </div>
                <div className={styles.input_btn}>
                  <div className={styles.btn_icon_transit}></div>
                  <input
                    className={styles.form__input}
                    type="text"
                    placeholder="Transit"
                    name="to"
                  />
                </div>
                <div className={styles.input_btn}>
                  <div className={styles.btn_icon_arrival}></div>
                  <input
                    className={styles.form__input}
                    type="text"
                    placeholder="Arrival"
                    name="date"
                  />
                </div>

                <button className={styles.form__btn}>
                  <div className={styles.btn_icon_search}></div>
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
