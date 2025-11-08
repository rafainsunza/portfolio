import { useState } from "react";
import "./theme-toggle.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.removeAttribute("data-theme", "dark");
      setIsDarkMode(false);
    } else {
      htmlElement.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="theme-toggle">
      <button className="theme-toggle__button" onClick={toggleTheme}>
        <div className={`theme-toggle__dot ${isDarkMode ? "" : "light"}`}></div>
        <span className="theme-toggle__icon dark">
          <FontAwesomeIcon icon={faMoon} />
        </span>
        <span className="theme-toggle__icon light">
          <FontAwesomeIcon icon={faSun} />
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
