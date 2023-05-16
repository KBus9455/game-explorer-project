import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import CardGroup from "react-bootstrap/CardGroup";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

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
