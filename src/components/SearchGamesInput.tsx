import { InputGroup, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchGamesInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup className="mb-3 " size="lg">
        <InputGroup.Text>
          <BsSearch />
        </InputGroup.Text>
        <Form.Control ref={ref} placeholder={"Search Games..."} />
      </InputGroup>
    </form>
  );
};

export default SearchGamesInput;
