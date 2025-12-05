import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";

const About = () => {
  const { translation } = useTranslations();
  const paragraphs = translation("about.paragraphs");

  return (
    <div className="about">
      {paragraphs.map((par, index) => (
        <p key={index}>{par}</p>
      ))}
    </div>
  );
};

export default About;
