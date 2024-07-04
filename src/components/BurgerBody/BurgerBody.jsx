import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./BurgerBody.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MenuContext } from "../MenuContext/MenuContext";

export default function BurgerBody() {
  const { isBurgerBodyVisible, toggleMenu } = useContext(MenuContext);

  if (isBurgerBodyVisible === false) {
    return null;
  }

  return (
    <Container className={styles.burger__body + styles.burger__body}>
      <div onClick={toggleMenu} className={styles.burger__bg}></div>
      <Row className={styles.burger__row}>
        <Col className={styles.burger__col}>
          <ul className={styles.burger__list}>
            <li className={styles.burger__item}>
              <Link onClick={toggleMenu} to="/" className={styles.burger__link}>
                main
              </Link>
            </li>
            <li className={styles.burger__item}>
              <Link
                onClick={toggleMenu}
                to="/fastbooking"
                className={styles.burger__link}
              >
                fast booking
              </Link>
            </li>
            <li className={styles.burger__item}>
              <Link
                onClick={toggleMenu}
                to="/services"
                className={styles.burger__link}
              >
                services +
              </Link>
            </li>
            <li className={styles.burger__item}>
              <Link
                onClick={toggleMenu}
                to="/travelers"
                className={styles.burger__link}
              >
                travelers +
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
