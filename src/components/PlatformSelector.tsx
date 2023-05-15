import { Dropdown, DropdownButton } from "react-bootstrap";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <DropdownButton size="lg" variant="dark" title="Platforms">
      {data.map((platform) => (
        <Dropdown.Item href="#/action-1">{platform.name}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default PlatformSelector;
