import { Dropdown, DropdownButton } from "react-bootstrap";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average Rating" },
];
const SortSelector = () => {
  return (
    <DropdownButton
      className="p-2"
      size="lg"
      variant="dark"
      title="Order by Relevance"
    >
      {sortOrders.map((sortOrder) => (
        <Dropdown.Item key={sortOrder.value}>{sortOrder.label}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SortSelector;
