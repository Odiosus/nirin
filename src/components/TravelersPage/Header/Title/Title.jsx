import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Title.module.css";
import { Col } from "react-bootstrap";

export default function Title({ children, fontSezeSmall }) {
  return (
    <Col className={styles.titleBox}>
      <h1 className={styles.title}>{children}</h1>
    </Col>
  );
}
