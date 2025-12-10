import "./lightbox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";
import { useEffect, useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Lightbox = ({ isOpen, onClose, project }) => {
  const { translation } = useTranslations();
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme"));

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="lightbox">
      <div className="lightbox__card">
        <button className="lightbox__card__close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </button>

        <div className="lightbox__card__preview">
          <a href="" rel="noopener noreferrer" target="_blank" className="lightbox__card__preview__link">
            <img
              src={
                project.id !== "portfolio"
                  ? project.screenshot
                  : theme === "dark"
                  ? project.screenshot
                  : project.screenshot__light
              }
              alt=""
            />
          </a>
        </div>
        <h3 className="lightbox__card__title"> {project.name}</h3>
        <p className="lightbox__card__description">
          {translation(`projects.cards.${project.id}.lightbox-description`)}
        </p>
        <div className="lightbox__card__link__wrapper">
          <a href={project.href} rel="noopener noreferrer" target="_blank" className="lightbox__card__link">
            {translation("lightbox.goto-website")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
