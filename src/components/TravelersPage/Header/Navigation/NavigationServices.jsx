import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FastBookingBtn from "./FastBookingBtn/FastBookingBtn";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavigationServices.module.css";
import LangBlock from "./LangBlock/LangBlock";
import Login from "./Login/Login";
import Burger from "./Burger/Burger";

export default function Navigation() {
  return (
    <>
      <Col
        className={
          "d-flex align-items-center justify-content-between " +
          styles.col__navigation
        }
      >
        <Link className={styles.navigation__logo_link} to="/">
          <div className={styles.navigation__logo}></div>
        </Link>
        <Link
          className={styles.navigation__fastbooking__link}
          to="/fastbooking"
        >
          <FastBookingBtn />
          <p className={"mb-0 " + styles.navigation__text}>fast booking</p>
        </Link>
      </Col>
      <Col
        className={
          "d-flex align-items-center justify-content-between " +
          styles.col__navigation
        }
      >
        <Link className={styles.navigation__nav_link} to="/fastbooking">
          <FastBookingBtn />
        </Link>
        <div className={styles.buttons_wrapper}>
          <Link className={styles.navigation__services_btn} to="/services">
            <p className={"mb-0 " + styles.navigation__text}>services +</p>
          </Link>
          <Link className={styles.navigation__travelers_btn} to="/travelers">
            <p className={"mb-0 " + styles.navigation__text}>travelers +</p>
          </Link>
        </div>
        <div className={styles.options__wrapper}>
          <LangBlock />
          <Link to={"tel:+7 (495) 999-99-99"}>
            <div className={styles.navigation__call_wrapper}>
              <div className={styles.navigation__call_icon}></div>
            </div>
          </Link>

          <Login />

          <Burger />
        </div>
      </Col>
    </>
  );
}
