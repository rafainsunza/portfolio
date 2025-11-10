import "./hero.scss";
import portrait from "../../assets/images/cv-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__title-wrapper">
        <h1 className="hero__title">
          Hi,
          <br /> I'm Rafael
        </h1>
        <h2 className="hero__subtitle">I love turning designs into smooth, responsive websites.</h2>
      </div>

      <div className="hero__image">
        <img src={portrait} alt="" />
      </div>
    </div>
  );
};

export default Hero;
