import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FastBookingNav.module.css";
import Navigation from "../../MainPage/Header/Navigation/Navigation";
import { Container, Row } from "react-bootstrap";

export default function FastBookingNav() {
  return (
    <Container fluid className={styles.fast__booking__nav}>
      <Container className={styles.fast__nav}>
        <Row className={styles.fast__nav__row}>
          <Navigation />
        </Row>
      </Container>
    </Container>
  );
}
