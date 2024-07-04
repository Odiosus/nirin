import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FastBookingBtn from "./FastBookingBtn/FastBookingBtn";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navigation.module.css";
import LangBlock from "./LangBlock/LangBlock";
import Login from "./Login/Login";
import Burger from "./Burger/Burger";

export default function Navigation() {
  return (
    <>
      <Col className={styles.col__header}>
        <Link className={styles.header__logo_link} to="/">
          <div className={styles.header__logo}></div>
        </Link>
        <Link className={styles.header__fastbooking__link} to="/fastbooking">
          <FastBookingBtn />
          <p className={"mb-0 " + styles.header__text}>fast booking</p>
        </Link>
      </Col>
      <Col className={"d-flex align-items-center " + styles.col__header}>
        <Link className={styles.header__nav_link} to="/fastbooking">
          <FastBookingBtn />
        </Link>
        <div className={styles.buttons_wrapper}>
          <Link className={styles.header__services_btn} to="/services">
            <p className={"mb-0 " + styles.header__text}>services +</p>
          </Link>
          <Link className={styles.header__travelers_btn} to="/travelers">
            <p className={"mb-0 " + styles.header__text}>travelers +</p>
          </Link>
        </div>
        <div className={styles.options__wrapper}>
          <LangBlock />
          <Link to={"tel:+7 (495) 999-99-99"}>
            <div className={styles.header__call_wrapper}>
              <div className={styles.header__call_icon}></div>
            </div>
          </Link>

          <Login />

          <Burger />
        </div>
      </Col>
    </>
  );
}
