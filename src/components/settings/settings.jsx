import "./settings.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../theme-toggle/theme-toggle";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settingsRef = useRef(null);

  const handleClick = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e) => {
      if (!settingsRef.current.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick, true);
    return () => document.removeEventListener("mousedown", handleOutsideClick, true);
  }, [isOpen]);

  return (
    <div className="settings" ref={settingsRef}>
      <button className={`settings__button ${isOpen ? "open" : ""}`} onClick={handleClick}>
        <FontAwesomeIcon icon={faGear} />
      </button>

      <div className={`settings__button-container ${isOpen ? "open" : ""}`}>
        <ThemeToggle />
        <button></button>
      </div>
    </div>
  );
};

export default Settings;
