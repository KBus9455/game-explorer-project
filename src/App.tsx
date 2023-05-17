import "./App.css";
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
import SortSelector from "./components/SortSelector";
import SearchGamesInput from "./components/SearchGamesInput";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Container fluid="md">
      <Row>
        <HeaderBar></HeaderBar>
      </Row>
      <Row>
        <SearchGamesInput
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></SearchGamesInput>
      </Row>
      <Row>
        <Col md={3}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Col>
        <Col>
          <div className="d-flex ">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformSelector>
            <SortSelector
              selectedOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </div>
          <GameGrid gameQuery={gameQuery} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
