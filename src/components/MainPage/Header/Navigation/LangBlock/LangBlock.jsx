import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LangBlock.module.css";
import { Link } from "react-router-dom";

export default function LangBlock() {
  return (
    <div className={"d-flex align-items-center " + styles.lang__block}>
      <Link to="/ru" className={"mb-0 " + styles.lang__text}>
        ru
      </Link>
      <Link to="/en" className={"mb-0 active " + styles.lang__text}>
        en
      </Link>
    </div>
  );
}
