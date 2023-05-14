import useGenres from "../hooks/useGenres";
import { Spinner } from "react-bootstrap";
import cropImgUrl from "../services/image-url";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading == true) return <Spinner />;

  return (
    <>
      {error && null}
      <ul className="genresList">
        {data.map((g) => (
          <li key={g.id} className="d-flex p-1 ">
            <img src={cropImgUrl(g.image_background)} className="genreImg" />
            <h5 className="genreParagraph"> {g.name}</h5>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
