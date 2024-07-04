import React from "react";
import styles from "./Main.module.css";
import { Col, Container, Row } from "react-bootstrap";
import MapSection from "./MapSection/MapSection.jsx";
import MoreServices from "./MoreServices/MoreServices.jsx";
import ServicesBlock from "./ServicesBlock/ServicesBlock.jsx";
import OurMission from "./OurMission/OurMission.jsx";
import Airports from "./Airports/Airports.jsx";

export default function Main() {
  return (
    <div className={styles.main}>
      <Container className={styles.main__container}>
        <Row className={styles.row__main_title}>
          <Col className={styles.col__main}>
            <div className={styles.main__text}>
              <h1 className={styles.main__title}>
                Our <span className={styles.title__span}>services</span>{" "}
                presented in more{" "}
                <span className={styles.subtitle__span}> than </span> 1000
                airports
                <span className={styles.subtitle__span}> around</span> the world
              </h1>
            </div>
          </Col>
        </Row>
        <Row className={styles.cards__main}>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={2}
            className={styles.col__main_card + " col " + styles.meet_assist}
          >
            {/* <Row className={"row " + styles.main__text}>
              <Col className={styles.card__title}>
                <p>Meet+Assist</p>
              </Col>
              <Col className={styles.card__text}>
                <Link to="/meet_assist">
                  <div className={styles.card__img_wrapper}>
                    <div className={styles.card__img}></div>
                  </div>
                </Link>
                <p>
                  High-quality passenger escort service at the airport,
                  providing maximum comfort, convenience during your trip
                </p>
              </Col>
            </Row> */}
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={2}
            className={styles.col__main_card + " " + styles.fast_track}
          >
            {/* <Row className={"row " + styles.main__text}>
              <Col className={styles.card__title}>
                <p>fast track</p>
              </Col>
              <Col className={styles.card__text}>
                <Link to="/fast_track">
                  <div className={styles.card__img_wrapper}>
                    <div className={styles.card__img}></div>
                  </div>
                </Link>
                <p>
                  High-quality passenger escort service at the airport,
                  providing maximum comfort, convenience during your trip
                </p>
              </Col>
            </Row> */}
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={2}
            className={styles.col__main_card + " " + styles.vip_lounge}
          >
            {/* <Row className={"row " + styles.main__text}>
              <Col className={styles.card__title}>
                <p>vip lounge</p>
              </Col>
              <Col className={styles.card__text}>
                <Link to="/vip_lounge">
                  <div className={styles.card__img_wrapper}>
                    <div className={styles.card__img}></div>
                  </div>
                </Link>
                <p>
                  High-quality passenger escort service at the airport,
                  providing maximum comfort, convenience during your trip
                </p>
              </Col>
            </Row> */}
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={2}
            className={styles.col__main_card + " " + styles.airport_transfer}
          >
            {/* <Row className={"row " + styles.main__text}>
              <Col className={styles.card__title}>
                <p>vip transfer</p>
              </Col>
              <Col className={styles.card__text}>
                <Link to="/airport_transfer">
                  <div className={styles.card__img_wrapper}>
                    <div className={styles.card__img}></div>
                  </div>
                </Link>
                <p>
                  High-quality passenger escort service at the airport,
                  providing maximum comfort, convenience during your trip
                </p>
              </Col>
            </Row> */}
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={2}
            className={styles.col__main_card + " " + styles.officials_lounge}
          >
            {/* <Row className={"row " + styles.main__text}>
              <Col className={styles.card__title}>
                <p>Officials Lounge</p>
              </Col>
              <Col className={styles.card__text}>
                <Link to="/officials_lounge">
                  <div className={styles.card__img_wrapper}>
                    <div className={styles.card__img}></div>
                  </div>
                </Link>
                <p>
                  High-quality passenger escort service at the airport,
                  providing maximum comfort, convenience during your trip
                </p>
              </Col>
            </Row> */}
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={2}
            className={styles.col__main_card + " " + styles.cip_service}
          >
            {/* <Row className={"row " + styles.main__text}>
              <Col className={styles.card__title}>
                <p>Officials Lounge</p>
              </Col>
              <Col className={styles.card__text}>
                <Link to="/cip_service">
                  <div className={styles.card__img_wrapper}>
                    <div className={styles.card__img}></div>
                  </div>
                </Link>
                <p>
                  High-quality passenger escort service at the airport,
                  providing maximum comfort, convenience during your trip
                </p>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.services__row}>
        <Row className={styles.searchmap__row}>
          <MapSection />
        </Row>
        <Row className={styles.services__row}>
          <ServicesBlock />
        </Row>
        <Row className={styles.moreServices__row}>
          <MoreServices />
        </Row>
      </Container>
      <Container fluid className={styles.ourmission__container}>
        <Row className={styles.ourmission__row}>
          <OurMission />
        </Row>
      </Container>
      <Container fluid className={styles.airports__container}>
        <Row className={styles.airports__row}>
          <Airports />
        </Row>
      </Container>
    </div>
  );
}
