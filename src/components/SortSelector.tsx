import { Dropdown, DropdownButton } from "react-bootstrap";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}
const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average Rating" },
];
const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrder = sortOrders.find((order) => order.value === selectedOrder);
  const label = sortOrder
    ? "Order by " + sortOrder.label
    : "Order by Relevence";
  return (
    <DropdownButton className="p-2" size="lg" variant="dark" title={label}>
      {sortOrders.map((sortOrder) => (
        <Dropdown.Item
          onClick={() => onSelectSortOrder(sortOrder.value)}
          key={sortOrder.value}
          value={sortOrder.value}
        >
          {sortOrder.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SortSelector;
