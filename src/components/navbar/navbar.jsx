import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <a href="#hero" className="navbar__nav-link">
          HOME
        </a>
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
      </nav>

      <div className="navbar__toggle-container">
        <button className="navbar__toggle-button"></button>
        <button className="navbar__toggle-button"></button>
      </div>
    </div>
  );
}

export default Navbar;
