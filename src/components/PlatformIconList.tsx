import {
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaWindows,
  FaAndroid,
  FaSearch,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md"; //materialdesign
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"; //bootstrap
import { Platform } from "../hooks/useGames";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Container, Row } from "react-bootstrap";
import { ReactElement } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactElement } = {
    // name: Playstation, slug: playstation
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
    mac: <FaApple />,
    linux: <FaLinux />,
    pc: <FaWindows />,
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    nintendo: <SiNintendo />,
    web: <BsGlobe />,
  };

  return (
    <Container>
      <Row>
        <ul className="iconList d-flex flex-row">
          {platforms.map((platform) => {
            const Icon = iconMap[platform.slug];
            return (
              <li key={platform.id} className="pe-1">
                {Icon}
              </li>
            );
          })}
        </ul>
      </Row>
    </Container>
  );
};

export default PlatformIconList;
