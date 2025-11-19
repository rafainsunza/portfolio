import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./slider-bullets.scss";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";

const SliderBullets = ({ sliderBulletCount, currentPage, setCurrentPage }) => {
  const handleClick = (e) => {
    const buttons = Array.from(document.querySelectorAll(".slider-bullets__button"));
    const clickedButton = e.currentTarget;
    const index = buttons.indexOf(clickedButton);

    setCurrentPage(index);
  };

  return (
    <div className="slider-bullets">
      {Array.from({ length: sliderBulletCount }).map((_, i) => (
        <button key={i} className="slider-bullets__button" onClick={handleClick}>
          <FontAwesomeIcon
            icon={faDiamond}
            className={`slider-bullets__bullet ${currentPage === i ? "active" : ""} ${
              i === currentPage - 1 || i === currentPage + 1 ? "neighbor" : ""
            } `}
          />
        </button>
      ))}
    </div>
  );
};

export default SliderBullets;
