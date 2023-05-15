import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import CardGroup from "react-bootstrap/CardGroup";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

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
