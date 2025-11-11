import "./custom-toggle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "../../context/language-context";
import { useEffect, useState } from "react";

const CustomToggle = ({ languageToggle, ThemeToggle }) => {
  const { language, setLanguage } = useTranslations();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));

    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.removeAttribute("data-theme");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleLanguage = () => {
    language === "en" ? setLanguage("nl") : setLanguage("en");
  };

  const handleClick = () => {
    if (ThemeToggle) toggleTheme();
    if (languageToggle) toggleLanguage();
  };

  return (
    <div className="custom-toggle" onClick={handleClick}>
      <button className="custom-toggle__button">
        <div
          className={`custom-toggle__dot 
                    ${languageToggle && language === "nl" ? "toggled" : ""}
                    ${ThemeToggle && !isDarkMode ? "toggled" : ""}
                `}
        ></div>
        <div className="custom-toggle__option default">
          {languageToggle && "EN"}
          {ThemeToggle && <FontAwesomeIcon icon={faMoon} />}
        </div>
        <div className={`custom-toggle__option toggled`}>
          {languageToggle && "NL"}
          {ThemeToggle && <FontAwesomeIcon icon={faSun} />}
        </div>
      </button>
    </div>
  );
};

export default CustomToggle;
