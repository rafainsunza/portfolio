import "./navbar.scss";
import Branding from "../branding/branding";
import Settings from "../settings/settings";
import React from "react";
import { useTranslations } from "../../context/language-context";

const Navbar = React.forwardRef(({ isOpen, activeSection, setIsOpen }, ref) => {
  const { translation } = useTranslations();

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`} ref={ref}>
      <nav>
        <a
          href="#hero"
          className={`navbar__nav-link ${activeSection === "hero" ? "active" : ""}`}
          onClick={handleClick}
        >
          <Branding />
        </a>
        <div className="navbar__center-container">
          <a
            href="#projects"
            className={`navbar__nav-link ${activeSection === "projects" ? "active" : ""}`}
            onClick={handleClick}
          >
            {translation("navbar.projects")}
          </a>
          <a href="#cv" className={`navbar__nav-link ${activeSection === "cv" ? "active" : ""}`} onClick={handleClick}>
            {translation("navbar.cv")}
          </a>
          <a
            href="#about"
            className={`navbar__nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={handleClick}
          >
            {translation("navbar.about")}
          </a>
          <a
            href="#contact"
            className={`navbar__nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={handleClick}
          >
            {translation("navbar.contact")}
          </a>
        </div>
      </nav>

      <Settings />
    </div>
  );
});

export default Navbar;
