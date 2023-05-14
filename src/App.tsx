import "./App.css";
import NavBar from "./components/NavBar";
import HeaderBar from "./components/HeaderBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container fluid="md">
      <Row>
        <HeaderBar></HeaderBar>
      </Row>
      <Row>
        <NavBar></NavBar>
      </Row>
      <Row>
        <Col md={3}>
          <GenresList />
        </Col>
        <Col>
          <GameGrid></GameGrid>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
