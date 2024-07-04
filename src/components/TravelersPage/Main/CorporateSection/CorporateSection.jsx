import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CorporateSection.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function CorporateSection() {
  return (
    <div className={styles.corporate__page}>
      <Container className={styles.corporate__container}>
        <Row className={styles.corporate__first_row}>
          <Col className={styles.corporate__title_box}>
            <h1 className={styles.corporate__title}>(Who we work with?)</h1>
          </Col>
          <Col className={styles.corporate__first_block}>
            <div className={styles.corporate_image}></div>
            <p className={styles.corporate__text}>
              Our services are perfectly suited to a diverse variety of clients.
              We regularly work with: Corporate clients, such as
              businessmen/businesswomen, entrepreneurs, executives and corporate
              delegations. Private individuals and small groups – including
              VVIPs and family groups. Travellers requiring dedicated support –
              including elderly travellers, unaccompanied minors, the disabled
              and travellers facing a language barrier.
            </p>
          </Col>
        </Row>

        <Row className={styles.corporate__VIP_row}>
          <Col md={12} className={styles.corporate__VIP}>
            <p>01</p>
            <h3>VIP</h3>
          </Col>
          <Col md={12} className={styles.corporate__VIP_text_box}>
            <p className={styles.corporate__text}>
              Exclusive service for exclusive travelers
            </p>
          </Col>
          <Row className={styles.corporate__Senior_row}>
            <Col md={12} className={styles.corporate__Senior}>
              <p>02</p>
              <h3>Senior</h3>
            </Col>
            <Col md={12} className={styles.corporate__Senior_text_box}>
              <p className={styles.corporate__text}>
                Exceptional service for executives
              </p>
            </Col>
          </Row>
          <Row className={styles.corporate__Families_row}>
            <Col md={12} className={styles.corporate__Families}>
              <p>03</p>
              <h3>Families</h3>
            </Col>
            <Col md={12} className={styles.corporate__Families_text_box}>
              <p className={styles.corporate__text}>
                For families with children or pregnant women who especially need
                care
              </p>
            </Col>
          </Row>
        </Row>
        <Row className={styles.corporate__Students_row}>
          <Col md={12} className={styles.corporate__Students_children}>
            <p>04</p>
            <h3>Students/children</h3>
          </Col>
          <Col md={12} className={styles.corporate__Students_text_box}>
            <p className={styles.corporate__text}>
              Minors unaccompanied by parents or guardians
            </p>
          </Col>
        </Row>
        <Row className={styles.corporate__Business_row}>
          <Col md={12} className={styles.corporate__Business}>
            <p>05</p>
            <h3>Business</h3>
          </Col>
          <Col md={12} className={styles.corporate__Business_text_box}>
            <p className={styles.corporate__text}>For busy people</p>
          </Col>
        </Row>
        <Row className={styles.corporate__With_special_needs_row}>
          <Col md={12} className={styles.corporate__With_special_needs}>
            <p>06</p>
            <h3>With special needs</h3>
          </Col>
          <Col
            md={12}
            className={styles.corporate__With_special_needs_text_box}
          >
            <p className={styles.corporate__text}>
              For those who need special care
            </p>
          </Col>
        </Row>
        <Row className={styles.corporate__Non_speaking_English_row}>
          <Col md={12} className={styles.corporate__Non_speaking_English}>
            <p>05</p>
            <h3>Non-speaking English</h3>
          </Col>
          <Col
            md={12}
            className={styles.corporate__Non_speaking_English_text_box}
          >
            <p className={styles.corporate__text}>
              Peace of mind and comfort for travelers with language barriers
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
