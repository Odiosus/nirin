import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WishesBlock.module.css";
import { Col, Row } from "react-bootstrap";

export default function WishesBlock() {
  return (
    <Row className={styles.wishes__row}>
      <Col>
        <div className={styles.wishes__block}>
          <div className={styles.wishes__image}></div>
          <div className={styles.wishes__text_box}>
            <p className={styles.wishes__text}>
              Let us know your{" "}
              <span className={styles.wishes__span}>wishes </span> and we will
              do <span className={styles.wishes__span}>everything</span>{" "}
              necessary.
            </p>
            <div className={styles.wishes__button_box}>
              <button className={styles.wishes__button}>See more</button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
