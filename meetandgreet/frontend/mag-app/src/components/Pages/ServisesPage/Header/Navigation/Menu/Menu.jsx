import React, { useState } from "react";
import styles from "./Menu.module.css";
import plane_icon from "../../../../../../assets/plane__header_services.png";
import { Link } from "react-router-dom";
import BurgerBody from "../BurgerBody/BurgerBody";

export default function Menu({ visibleElem }) {
  const [visible, setVisible] = useState(visibleElem || false);

  const toggleVisible = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return (
    <>
      <ul className={styles.menu}>
        {visible && <BurgerBody onClose={toggleVisible} />}
        <li className={styles.menu__list}>
          <div className={styles.menu__item_plane}>
            <div className={styles.menu__icon_box}>
              <img
                className={styles.menu__icon}
                src={plane_icon}
                alt="plane_icon"
              />
            </div>
            <Link to="/fastBooking" className={styles.menu__text}>
              <p className={styles.menu__text}>Fast Booking</p>
            </Link>
          </div>
        </li>
        <div className={styles.menu__list_wrapper}>
          <li className={styles.menu__list}>
            <div className={styles.menu__item}>
              <Link to="/servises" className={styles.menu__text}>
                <p className={styles.menu__text}>Services +</p>
              </Link>
            </div>
          </li>
          <li className={styles.menu__list}>
            <div className={styles.menu__item}>
              <Link to="/travels" className={styles.menu__text}>
                <p className={styles.menu__text}>Travalers +</p>
              </Link>
            </div>
          </li>
        </div>
      </ul>
    </>
  );
}
