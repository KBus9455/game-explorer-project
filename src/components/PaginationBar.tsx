import { useState } from "react";
import Pagination from "react-bootstrap/esm/Pagination";
interface Props {
  onSelectPage: (page: number) => void;
}

const PaginationBar = ({ onSelectPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = currentPage + 1;
  return (
    <Pagination size="lg">
      <Pagination.Prev />
      <Pagination.Item>{currentPage}</Pagination.Item>
      <Pagination.Next
        onClick={() => {
          onSelectPage(nextPage), setCurrentPage(nextPage);
        }}
      />
    </Pagination>
  );
};

export default PaginationBar;
