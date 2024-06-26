import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__inner}>
          <div className={styles.main__top}>
            <div className={styles.top__block1}>
              <div className={styles.block__title_price}>200 &#8364;</div>
              <div className={styles.block__title_text}>first travelers</div>
              <ul className={styles.block__title_list}>
                <li className={styles.block__title_item}>
                  Infants 0-2 yo - free-of-charge
                </li>
                <li className={styles.block__title_item}>
                  Children 2 - 12 yo - 50% discount
                </li>
                <li className={styles.block__title_item}>
                  Urgent orders less than 2 business days + 15% of the cost of
                  the service
                </li>
              </ul>
            </div>
            <div className={styles.top__block2}>
              <p className={styles.top__block_descr}>
                Drinks and snacks will be offered in the VIP Lounge, luggage
                will be carried, pre-flight control will be helped and you will
                be delivered separately to the plane ramp.
              </p>
              <button className={styles.top__block_button}>Send</button>
            </div>
          </div>
          <div className={styles.main__bottom}>
            <div className={styles.main__bottom_left}>
              <h2 className={styles.bottom__title}>VIP Lounge</h2>
              <ul className={styles.bottom__list}>
                <li>Comfortable waiting room</li>
                <li>
                  Personal passage of pre-flight and post-flight formalities
                </li>
                <li>
                  Check-in and baggage check-out directly in the VIP lounge
                </li>
                <li>Bar service for an additional fee</li>
                <li>Delivery to/from the aircraft by separate transport</li>
                <li>The opportunity to attend the mourners in the hall</li>
                <li>TV, Wi-Fi</li>
                <li>VIP parking for up to 1.5 hours</li>
              </ul>
            </div>
            <div className={styles.bottom__contacts}>
              <div className={styles.bottom__contacts_item}>
                <label className={styles.item__label}>Work time</label>
                <a href="#" title="24/7" className={styles.item__link}>
                  Arround the clock
                </a>
              </div>
              <div className={styles.bottom__contacts_item}>
                <a href="tel:+74959810909" className={styles.item__label}>
                  Phone number
                </a>
                <a
                  href="tel:+74959810909"
                  id="phone"
                  className={styles.item__link}
                >
                  +7(495)9810909
                </a>
              </div>
              <div className={styles.bottom__contacts_item}>
                <a
                  href="https://svovip.ru/"
                  target="_blank"
                  className={styles.item__label}
                >
                  Web-site
                </a>
                <a
                  href="https://svovip.ru/"
                  id="site"
                  className={styles.item__link}
                  target="_blank"
                >
                  https://svovip.ru/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.add__container}>
        <section className={styles.add}>
          <h2 className={styles.add__title}>Additional services</h2>
          <div className={styles.add__list}>
            <div className={styles.add__item}>
              <div className={styles.item__name}>VIP Lounge of departure</div>
              <div className={styles.item__price}>90 €/pax</div>
            </div>
            <div className={styles.add__item}>
              <div className={styles.item__name}>Porter</div>
              <div className={styles.item__price}>190 €/service</div>
            </div>
            <div className={styles.add__item}>
              <div className={styles.item__name}>Porter</div>
              <div className={styles.item__price}>190 €/service</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
