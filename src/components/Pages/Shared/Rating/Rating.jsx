import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as filledStar,
  faStarHalfAlt as halfStar,
  faStar as emptyStar,
} from "@fortawesome/free-solid-svg-icons";

const Rating = ({ value }) => {
  const maxRating = 5;
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;

  const renderStar = (starType, color) => (
    <FontAwesomeIcon
      className=" text-4xl"
      icon={starType}
      style={{ color }}
    />
  );

  return (
    <div>
      {[...Array(fullStars)].map((_, index) => (
        <span key={index}>{renderStar(filledStar, "#CD9003")}</span>
      ))}
      {hasHalfStar && <span>{renderStar(halfStar, "#FFD700")}</span>}
      {[...Array(maxRating - Math.ceil(value))].map((_, index) => (
        <span key={index}>{renderStar(emptyStar, "#A1A1A1")}</span>
      ))}
    </div>
  );
};

export default Rating;
