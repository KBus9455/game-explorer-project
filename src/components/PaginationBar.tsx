import { useState } from "react";
import Pagination from "react-bootstrap/esm/Pagination";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";
interface Props {
  onSelectPage: (page: number) => void;
  gameQuery: GameQuery;
}

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const PaginationBar = ({ onSelectPage, gameQuery }: Props) => {
  const { next, previous } = useGames(gameQuery);

  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = currentPage + 1;
  const previousPage = currentPage - 1;
  return (
    <Pagination size="lg">
      {previous && (
        <Pagination.Prev
          onClick={() => {
            onSelectPage(previousPage), setCurrentPage(previousPage);
          }}
        />
      )}
      {next && (
        <Pagination.Next
          onClick={() => {
            onSelectPage(nextPage), setCurrentPage(nextPage);
          }}
        />
      )}
    </Pagination>
  );
};

export default PaginationBar;
