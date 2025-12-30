import "./navbar.scss";
import Branding from "../branding/branding";
import Settings from "../settings/settings";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "../../context/language-context";

const Navbar = React.forwardRef(({ isOpen, activeSection, setIsOpen }, ref) => {
  const { translation } = useTranslations();
  const firstLinkRef = useRef(null);

  const handleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      firstLinkRef?.current?.focus();
    }
  }, [isOpen]);

  return (
    <div
      className={`navbar ${isOpen ? "open" : ""}`}
      ref={ref}
      inert={window.innerWidth < 880 && !isOpen ? true : undefined}
    >
      <nav id="page-navigation">
        <a
          href="#hero"
          aria-current={activeSection === "hero" ? "true" : undefined}
          aria-label="Home"
          className={`navbar__nav-link ${activeSection === "hero" ? "active" : ""}`}
          onClick={handleClick}
          ref={firstLinkRef}
        >
          <Branding />
        </a>
        <div className="navbar__center-container">
          <a
            href="#projects"
            aria-current={activeSection === "projects" ? "true" : undefined}
            className={`navbar__nav-link ${activeSection === "projects" ? "active" : ""}`}
            onClick={handleClick}
          >
            {translation("navbar.projects")}
          </a>
          <a
            href="#cv"
            aria-current={activeSection === "cv" ? "true" : undefined}
            className={`navbar__nav-link ${activeSection === "cv" ? "active" : ""}`}
            onClick={handleClick}
          >
            {translation("navbar.cv")}
          </a>
          <a
            href="#about"
            aria-current={activeSection === "about" ? "true" : undefined}
            className={`navbar__nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={handleClick}
          >
            {translation("navbar.about")}
          </a>
          <a
            href="#contact"
            aria-current={activeSection === "contact" ? "true" : undefined}
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
