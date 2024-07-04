import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./SubTitle.module.css";
import { Col } from "react-bootstrap";

export default function SubTitle({ children }) {
  return (
    <Col className={styles.subTitleBox}>
      <h1 className={styles.subTitle}>{children}</h1>
    </Col>
  );
}
