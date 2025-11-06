import "./App.scss";
import Navbar from "./components/navbar/navbar";
import MenuButton from "./components/menu-button/menu-button";
import Branding from "./components/branding/branding";
import { useState } from "react";

function App() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.hasAttribute("data-theme");

    isDarkMode ? htmlElement.removeAttribute("data-theme", "dark") : htmlElement.setAttribute("data-theme", "dark");
  };

  return (
    <>
      <header>
        <a href="#hero">
          <Branding hideOnDesktop />
        </a>

        <Navbar isOpen={mobileNavIsOpen} />

        <MenuButton isToggled={mobileNavIsOpen} setIsToggled={setMobileNavIsOpen} />
      </header>

      <main>
        <section id="hero">HI IM RAFA</section>

        <section id="projects">PROJECTS</section>

        <section id="cv">CV</section>

        <section id="about">ABOUT</section>

        <section id="contact">CONTACT</section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
