import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Footer/Footer.module.css";
import logo from "../../../assets/footer__logo.png";
import insta from "../../../assets/instagram.png";
import telega from "../../../assets/telegram.png";
import watsapp from "../../../assets/watsapp.png";
import ChatWidget from "../../Chat/ChatWidget";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.footer__container}>
        <Row className={styles.footer__top}>
          <Col
            lg={4}
            md={4}
            sm={12}
            className={styles.footer__block + " " + styles.footer__block_left}
          >
            <div className={styles.title}>
              <h1 className={styles.title__text}>CONTACTS</h1>
            </div>
            <div className={styles.footer__logo_wrapper}>
              <Link to="/" className={styles.footer__link}>
                <div
                  style={{ backgroundImage: `url(${logo})` }}
                  className={styles.footer__logo}
                ></div>
              </Link>

              <div>
                <h2 className={styles.footer__subtitle}>MEET PLUS GREET</h2>
              </div>
            </div>
            <div className={styles.contacts}>
              <ul className={styles.contacts__list}>
                <li className={styles.contacts__item}>
                  <p className={styles.contacts__text}>
                    JSC «Первоклассные решения»
                  </p>
                </li>
                <li className={styles.contacts__item}>
                  <p className={styles.contacts__text}>
                    Moscow, 1st Tikhvinsky tulip, no. 5-7, premises. 1p
                  </p>
                </li>
                <li className={styles.contacts__item}>
                  <Link
                    to="tel:+7 978 585 70 56"
                    className={styles.contacts__link}
                  >
                    <p className={styles.contacts__text}>
                      Tel: +66 99 160 97 11
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={12}
            className={styles.footer__block + " " + styles.footer__block_center}
          >
            <ul className={styles.footer__list_center}>
              <li className={styles.footer__item_center}>
                <p className={styles.footer__text_center}>TIN: 9707025574</p>
              </li>
              <li className={styles.footer__item_center}>
                <p className={styles.footer__text_center}>RRC: 770701001</p>
              </li>
            </ul>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={12}
            className={styles.footer__block + " " + styles.footer__block_right}
          >
            <ul className={styles.footer__list_right}>
              <li
                style={{ backgroundImage: `url(${insta})` }}
                className={styles.footer__item_right}
              ></li>
              <li
                style={{ backgroundImage: `url(${telega})` }}
                className={styles.footer__item_right}
              ></li>
              <li
                style={{ backgroundImage: `url(${watsapp})` }}
                className={styles.footer__item_right}
              ></li>
            </ul>
          </Col>
        </Row>
        <hr className={styles.footer__hr} />
        <Row className={styles.footer__bottom}>
          <Col sm={6} md={5} lg={8} className={styles.footer__bottom_left}>
            <ul className={styles.footer__bottom_list}>
              <li className={styles.footer__bottom_item}>
                <p className={styles.footer__bottom_text}>Privacy Policy</p>
              </li>
              <li className={styles.footer__bottom_item}>
                <p className={styles.footer__bottom_text}>Cookies policy</p>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={4} lg={4} className={styles.footer__bottom_right}>
            <p className={styles.footer__bottom_text}>
              2024 © All Rights reserved
            </p>
          </Col>
        </Row>
        <ChatWidget /> {/* Вставка компонента виджета чата */}
      </Container>
    </div>
  );
}
