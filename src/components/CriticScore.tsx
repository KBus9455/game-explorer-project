import { Badge } from "react-bootstrap";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = "gray";

  const mapColor = (score: number) => {
    if (score < 30) {
      return (color = "danger");
    } else if (score < 85) {
      return (color = "secondary");
    } else {
      return (color = "dark");
    }
  };

  return (
    <h5>
      <Badge bg={mapColor(score)}>{score}</Badge>
    </h5>
  );
};

export default CriticScore;
