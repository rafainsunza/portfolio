import "./language-toggle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";

const LanguageToggle = () => {
  const { language, setLanguage } = useTranslations();

  const handleClick = () => {
    language === "en" ? setLanguage("nl") : setLanguage("en");
  };

  return (
    <div className="language-toggle">
      <button className="language-toggle__button" onClick={handleClick}>
        <div className={`language-toggle__dot ${language === "nl" ? "nl" : ""}`}></div>
        <div className="language-toggle__language">EN</div>
        <div className="language-toggle__language">NL</div>
      </button>
    </div>
  );
};

export default LanguageToggle;
