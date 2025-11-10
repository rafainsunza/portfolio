import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./social-media-box.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialMediaBox = () => {
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
        href="mailto:yourname@example.com?subject=Hello%20Rafael,%20we%20saw%20your%20portfolio%20and%20want%20to%20chat%20about%20opportunities.&body=Hello%20Rafael,"
        className="social-media-box__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

      <a
        href="https://wa.me/31649119618?text=Hello%20Rafael,%20I%20saw%20your%20portfolio%20and%20want%20to%20chat%20about%20opportunities."
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
