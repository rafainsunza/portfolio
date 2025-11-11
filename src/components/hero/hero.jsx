import "./hero.scss";
import SocialMediaBox from "../social-media-box/social-media-box";
import { useTranslations } from "../../context/language-context";

const Hero = () => {
  const { translation } = useTranslations();

  return (
    <div className="hero">
      <h1 className="hero__title">
        {translation("hero.title.pt1")} <br /> {translation("hero.title.pt2")}
      </h1>

      <h2 className="hero__subtitle">{translation("hero.subtitle")}</h2>

      <SocialMediaBox />
    </div>
  );
};

export default Hero;
