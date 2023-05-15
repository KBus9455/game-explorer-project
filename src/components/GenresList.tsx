import useGenres, { Genre } from "../hooks/useGenres";
import { Button, Spinner } from "react-bootstrap";
import cropImgUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const btnClass = "text-decoration-none text-lg-start text-dark  fw-bolder ";
const GenresList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading == true) return <Spinner />;

  return (
    <>
      {error && null}
      <ul className="genresList">
        {data.map((g) => (
          <li key={g.id} className="d-flex p-1 ">
            <img src={cropImgUrl(g.image_background)} className="genreImg" />
            <Button
              className={
                g.id === selectedGenre?.id ? btnClass + "text-muted" : btnClass
              }
              size="lg"
              variant="link"
              onClick={() => onSelectedGenre(g)}
            >
              {g.name}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
