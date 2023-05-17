import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const HeaderBar = () => {
  return (
    <Container className="d-flex py-4">
      <img alt="logo" src={logo} width="80" height="80" />
      <h1 className="headerBarName px-3">Game Explorer</h1>
    </Container>
  );
};

export default HeaderBar;
