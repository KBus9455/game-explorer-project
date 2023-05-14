import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return <div className="gameCardContainer m-1 p1">{children}</div>;
};

export default GameCardContainer;
