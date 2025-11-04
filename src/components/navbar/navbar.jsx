import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "navbar open" : "navbar"}>
      <div className="navbar__grabber"></div>
      <nav>
        <a href="#hero" className="navbar__nav-link">
          home
        </a>
        <a href="#projects" className="navbar__nav-link">
          See what I've built
        </a>
        <a href="#cv" className="navbar__nav-link">
          Peek at my CV
        </a>
        <a href="#about" className="navbar__nav-link">
          About me
        </a>
        <a href="#contact" className="navbar__nav-link">
          Get in touch
        </a>
      </nav>

      <div className="navbar__toggle-container">
        <button className="navbar__toggle-button"></button>
        <button className="navbar__toggle-button"></button>
      </div>
    </div>
  );
}

export default Navbar;
