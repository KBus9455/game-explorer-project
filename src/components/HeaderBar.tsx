import { Col, Container, Navbar, Row } from "react-bootstrap";
import logo from "../assets/logo.png";

const HeaderBar = () => {
  return (
    <Container className="pt-4 pb-4">
      <Row className="justify - content - start  align-middle">
        <Col md={1}>
          <img alt="logo" src={logo} width="80" height="80" />
        </Col>
        <Col>
          <h1 className="headerBarName">Game Explorer</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderBar;
