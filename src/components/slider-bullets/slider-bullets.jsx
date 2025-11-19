import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./slider-bullets.scss";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";

const SliderBullets = ({ sliderBulletCount, currentPage }) => {
  return (
    <div className="slider-bullets">
      {Array.from({ length: sliderBulletCount }).map((_, i) => (
        <FontAwesomeIcon
          icon={faDiamond}
          key={i}
          className={`slider-bullets__circle ${currentPage === i ? "active" : ""} ${
            i === currentPage - 1 || i === currentPage + 1 ? "neighbor" : ""
          } `}
        ></FontAwesomeIcon>
      ))}
    </div>
  );
};

export default SliderBullets;
