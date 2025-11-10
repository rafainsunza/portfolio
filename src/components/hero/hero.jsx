import "./hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaBox from "../social-media-box/social-media-box";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">
        Hi,
        <br /> I'm Rafael
      </h1>
      <h2 className="hero__subtitle">I love turning designs into smooth, responsive websites.</h2>

      <SocialMediaBox />
    </div>
  );
};

export default Hero;
