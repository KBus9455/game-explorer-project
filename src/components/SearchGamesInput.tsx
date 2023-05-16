import { InputGroup, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const SearchGamesInput = () => {
  return (
    <InputGroup className="mb-3 " size="lg">
      <InputGroup.Text>
        <BsSearch />
      </InputGroup.Text>
      <Form.Control placeholder={"Search Games..."} />
    </InputGroup>
  );
};

export default SearchGamesInput;
