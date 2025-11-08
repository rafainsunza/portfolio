import "./navbar.scss";
import Branding from "../branding/branding";
import Settings from "../settings/settings";
import { useEffect, useRef } from "react";

function Navbar({ isOpen, activeSection, setIsOpen }) {
  const navbarRef = useRef(null);

  const handleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e) => {
      if (!navbarRef.current.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick, true);
    return () => document.removeEventListener("mousedown", handleOutsideClick, true);
  }, [isOpen]);

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`} ref={navbarRef}>
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
            SEE WHAT I'VE BUILT
          </a>
          <a href="#cv" className={`navbar__nav-link ${activeSection === "cv" ? "active" : ""}`} onClick={handleClick}>
            PEEK AT MY CV
          </a>
          <a
            href="#about"
            className={`navbar__nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={handleClick}
          >
            ABOUT ME
          </a>
          <a
            href="#contact"
            className={`navbar__nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={handleClick}
          >
            GET IN TOUCH
          </a>
        </div>
      </nav>

      <Settings />
    </div>
  );
}

export default Navbar;
