import "./slider-bullets.scss";

const SliderBullets = ({ sliderBulletCount, currentPage }) => {
  return (
    <div className="slider-bullets">
      {Array.from({ length: sliderBulletCount }).map((_, i) => (
        <div
          key={i}
          className={`slider-bullets__circle ${currentPage === i ? "active" : ""} ${
            i === currentPage - 1 || i === currentPage + 1 ? "neighbor" : ""
          } `}
        ></div>
      ))}
    </div>
  );
};

export default SliderBullets;
