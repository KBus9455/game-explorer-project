import { Col, Row } from "react-bootstrap";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import CardGroup from "react-bootstrap/CardGroup";
import GameCardSkeleton from "./GameCardSkeleton";

const skeleton = [1, 2, 3, 4, 5, 6];
const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <CardGroup>
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </CardGroup>
      <>
        <CardGroup>
          {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </CardGroup>
      </>
    </>
  );
};

export default GameGrid;
