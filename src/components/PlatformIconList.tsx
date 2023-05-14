import {
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaWindows,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md"; //materialdesign
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"; //bootstrap
import { Platform } from "../hooks/useGames";
import { Row } from "react-bootstrap";
import { IconType } from "react-icons";
import { Tooltip } from "react-bootstrap";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // name: Playstation, slug: playstation
    xbox: FaXbox,
    playstation: FaPlaystation,
    mac: FaApple,
    linux: FaLinux,
    pc: FaWindows,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <Row margin={"10px"}>
      {platforms.map((platform) => (
        <p key={platform.id}>{platform.name}</p>
      ))}
    </Row>
  );
};

export default PlatformIconList;
