import "./navbar.scss";
import Branding from "../branding/branding";

function Navbar({ isOpen }) {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <nav>
        <a href="#hero" className="navbar__nav-link">
          <Branding />
        </a>
        <div className="navbar__center-container">
          <a href="#projects" className="navbar__nav-link">
            SEE WHAT I'VE BUILT
          </a>
          <a href="#cv" className="navbar__nav-link">
            PEEK AT MY CV
          </a>
          <a href="#about" className="navbar__nav-link">
            ABOUT ME
          </a>
          <a href="#contact" className="navbar__nav-link">
            GET IN TOUCH
          </a>
        </div>
      </nav>

      <div className="navbar__toggle-container">SE</div>
    </div>
  );
}

export default Navbar;
