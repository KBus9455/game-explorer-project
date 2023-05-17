import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { Navbar, Container } from "react-bootstrap";
interface Props {
  genre: Genre | null;
  platform: Platform | null;
}

const GameHeading = ({ genre, platform }: Props) => {
  return (
    <h1>
      {platform ? platform.name : ""} <span> </span>
      {genre ? genre.name : ""} <span> </span>
      Games
    </h1>
  );
};

export default GameHeading;
