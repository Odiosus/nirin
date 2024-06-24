import React from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation/Navigation";
import Title from "./Title/Title";
import SubTitle from "./SubTitle/SubTitle";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__container}>
          <Navigation />
          <div className={styles.header__title}>
            <Title>Services</Title>

            <SubTitle>
              Experience the true pleasure of traveling <br /> with our
              exclusive VIP airport services, providing <br /> unparalleled
              comfort, personalized service <br /> and maximum efficiency at
              every stage of your journey.
            </SubTitle>
          </div>
        </div>
      </div>
    </>
  );
}
