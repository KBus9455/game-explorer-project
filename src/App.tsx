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
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          ></PlatformSelector>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          ></GameGrid>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
