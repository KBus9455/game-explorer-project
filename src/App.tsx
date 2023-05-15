import "./App.css";
import NavBar from "./components/NavBar";
import HeaderBar from "./components/HeaderBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
          <GenresList
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </Col>
        <Col>
          <PlatformSelector></PlatformSelector>
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
