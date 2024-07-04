import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function Card({ title, subtitle, src, price, link }) {
  return (
    <Col md={3} lg={4} xl={4} sm={6} className={styles.card}>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={styles.card__image}
        alt="card__image"
      ></div>
      <div className={styles.card__text}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__subtitle}>{subtitle}</div>
      </div>
      <div className={styles.card__button_wrapper}>
        <Link to={price} className={styles.card__button_price}>
          {price}
        </Link>
        <Link to={link} className={styles.card__button_more}>
          See more
        </Link>
      </div>
    </Col>
  );
}
