import {
  faAngleLeft,
  faAngleRight,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./navigation-button.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationButton = ({ left, right, currentPage, setCurrentPage, disabled }) => {
  const handleClick = () => {
    if (left) setCurrentPage((prev) => prev - 1);
    if (right) setCurrentPage((prev) => prev + 1);
  };

  return (
    <button className={`navigation-button ${disabled ? "disabled" : ""}`} onClick={handleClick} disabled={disabled}>
      {left && <FontAwesomeIcon icon={faAngleLeft} />}
      {right && <FontAwesomeIcon icon={faAngleRight} />}
    </button>
  );
};

export default NavigationButton;
