import { Game } from "../hooks/useGames";
import { Card } from "react-bootstrap";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import cropImgUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card className="border-0">
      <Card.Img src={cropImgUrl(game.background_image)} />
      <Card.Title>{game.name}</Card.Title>
      <PlatformIconList
        platforms={game.parent_platforms.map((p) => p.platform)}
      />

      <CriticScore score={game.metacritic} />
    </Card>
  );
};

export default GameCard;
