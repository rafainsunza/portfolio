import "./cv.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";
import cvPortrait from "../../assets/images/cv-photo.jpg";
import { faPhone, faEnvelope, faLocationDot, faGlobe, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import DownloadPdf from "../download-pdf/download-pdf";

const Cv = () => {
  const { translation } = useTranslations();
  return (
    <div className="cv">
      <div className="cv__wrapper">
        <div className="cv__side-content">
          <h3 className="cv__side-content__name">
            RAFAEL HENRIQUE <br /> INSUNZA CASTRO
          </h3>
          <div className="cv__side-content__item">
            <h4 className="cv__side-content__title">CONTACT</h4>
            <ul className="cv__side-content__list">
              <li className="cv__side-content__list-item spaced">
                <a className="cv__side-content__list-item" href="tel:+31649119618">
                  <FontAwesomeIcon icon={faPhone} />
                  06 - 49 11 96 18
                </a>
              </li>
              <li className="cv__side-content__list-item spaced">
                <a className="cv__side-content__list-item" href="mailto:rafainsunza@outlook.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  rafainsunza@outlook.com
                </a>
              </li>
              <li className="cv__side-content__list-item spaced">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="cv__side-content__list-item">{translation("cv.side-content.location")}</p>
              </li>
              <li className="cv__side-content__list-item spaced">
                <a
                  className="cv__side-content__list-item"
                  href="https://github.com/rafainsunza"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  github.com/rafainsunza
                </a>
              </li>
              <li className="cv__side-content__list-item spaced">
                <a
                  className="cv__side-content__list-item"
                  href="www.linkedin.com/in/rafainsunza"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  linkedin.com/in/rafainsunza
                </a>
              </li>
              <li className="cv__side-content__list-item spaced">
                <a
                  className="cv__side-content__list-item"
                  href="http://localhost:5173"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                  http://localhost:5173
                </a>
              </li>
            </ul>
          </div>

          <div className="cv__side-content__item">
            <img src={cvPortrait} alt="" />
          </div>

          <div className="cv__side-content__item">
            <h4 className="cv__side-content__title">{translation("cv.side-content.skills.title")}</h4>
            <ul className="cv__side-content__list">
              {translation("cv.side-content.skills.items").map((item, index) => (
                <li className="cv__side-content__list-item" key={index}>
                  <FontAwesomeIcon icon={faCircle} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="cv__side-content__item">
            <h4 className="cv__side-content__title">{translation("cv.side-content.education.title")}</h4>
            <p className="cv__side-content__education__content">{translation("cv.side-content.education.content")}</p>
          </div>
          <div className="cv__side-content__item">
            <h4 className="cv__side-content__title">{translation("cv.side-content.languages.title")}</h4>
            <ul className="cv__side-content__list">
              {translation("cv.side-content.languages.items").map((item, index) => (
                <li className="cv__side-content__list-item space-between" key={index}>
                  <div className="cv__side-content__list-item__language">{item.name}</div>
                  <div className="cv__side-content__list-item__language-level">{item.level}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cv__main-content">
          <h4 className="cv__main-content__title">{translation("cv.main-content.dev-experience.title")}</h4>

          {translation("cv.main-content.dev-experience.items").map((item, index) => (
            <div className="cv__main-content__item" key={index}>
              <h5 className="cv__main-content__item__title">
                <div className="line"></div> {item.title}
              </h5>
              <div className="cv__main-content__item__subtitle__wrapper">
                <h6 className="cv__main-content__item__subtitle">{item.subtitle}</h6>
                <div className="cv__main-content__item__years">{item.year}</div>
              </div>

              <ul className="cv__main-content__item__list">
                {item.details.map((item, index) => (
                  <li className="cv__main-content__item__list-item" key={item + index}>
                    <FontAwesomeIcon icon={faCircle} /> <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cv;
