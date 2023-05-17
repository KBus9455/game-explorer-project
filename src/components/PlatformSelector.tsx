import { Dropdown, DropdownButton } from "react-bootstrap";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";
interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <DropdownButton
      size="lg"
      variant="dark"
      title={selectedPlatform ? selectedPlatform.name : "Platforms"}
    >
      {data.map((platform) => (
        <Dropdown.Item
          key={platform.id}
          onClick={() => onSelectedPlatform(platform)}
        >
          {platform.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default PlatformSelector;
