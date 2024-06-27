import React, { useState } from "react";
import styles from "./Header.module.css";
import Video from "./video/Video";
import Navigation from "./Navigation/Navigation";
import Title from "./Title/Title";
import Test from "./SubTitle/Test/Test";
import SubTitle from "./SubTitle/SubTitle";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Video />
        <div className={styles.header__container}>
          <Navigation visibleElem={false} />
          <div>
            <Title>VIP services</Title>

            <SubTitle>
              {" "}
              at all airports{" "}
              <span className={styles.header__span}>around</span> the world
            </SubTitle>
          </div>
          <div className={styles.header__custom_select_countries}>
            <Test />
          </div>
        </div>
      </div>
    </>
  );
}
