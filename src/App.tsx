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
import GameHeading from "./components/GameHeading";
import PaginationBar from "./components/PaginationBar";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  page: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Container fluid="md">
      <Row>
        <HeaderBar></HeaderBar>{" "}
      </Row>
      <Row>
        <SearchGamesInput
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText, page: 1 })
          }
        ></SearchGamesInput>
      </Row>
      <Row>
        <Col md={3}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre, page: 1 })
            }
          />
        </Col>
        <Col>
          <GameHeading
            genre={gameQuery.genre}
            platform={gameQuery.platform}
          ></GameHeading>
          <div className="d-flex pt-3 pb-3">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform, page: 1 })
              }
            ></PlatformSelector>
            <SortSelector
              selectedOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>{" "}
          </div>
          <GameGrid gameQuery={gameQuery} />
          <PaginationBar
            gameQuery={gameQuery}
            onSelectPage={(page) => setGameQuery({ ...gameQuery, page })}
          ></PaginationBar>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
