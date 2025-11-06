import "./navbar.scss";
import Branding from "../branding/branding";

function Navbar({ isOpen, activeSection }) {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <nav>
        <a href="#hero" className={`navbar__nav-link ${activeSection === "hero" ? "active" : ""}`}>
          <Branding />
        </a>
        <div className="navbar__center-container">
          <a href="#projects" className={`navbar__nav-link ${activeSection === "projects" ? "active" : ""}`}>
            SEE WHAT I'VE BUILT
          </a>
          <a href="#cv" className={`navbar__nav-link ${activeSection === "cv" ? "active" : ""}`}>
            PEEK AT MY CV
          </a>
          <a href="#about" className={`navbar__nav-link ${activeSection === "about" ? "active" : ""}`}>
            ABOUT ME
          </a>
          <a href="#contact" className={`navbar__nav-link ${activeSection === "contact" ? "active" : ""}`}>
            GET IN TOUCH
          </a>
        </div>
      </nav>

      <div className="navbar__toggle-container">SE</div>
    </div>
  );
}

export default Navbar;
