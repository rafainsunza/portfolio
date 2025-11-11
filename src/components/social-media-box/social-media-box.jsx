import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./social-media-box.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "../../context/language-context";

const SocialMediaBox = () => {
  const { translation } = useTranslations();

  return (
    <div className="social-media-box">
      <a
        href="https://www.linkedin.com/in/rafael-henrique-insunza-castro-201510286/"
        className="social-media-box__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/rafainsunza"
        className="social-media-box__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={translation("social-media-box.mailto-href")}
        className="social-media-box__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

      <a
        href={translation("social-media-box.wa-href")}
        className="social-media-box__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default SocialMediaBox;
