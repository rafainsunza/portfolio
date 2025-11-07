import "./App.scss";
import Navbar from "./components/navbar/navbar";
import MenuButton from "./components/menu-button/menu-button";
import Branding from "./components/branding/branding";
import { useEffect, useRef, useState } from "react";

function App() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sectionRefs = {
    hero: useRef(null),
    projects: useRef(null),
    cv: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 880) setMobileNavIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header>
        <a href="#hero">
          <Branding hideOnDesktop />
        </a>

        <Navbar isOpen={mobileNavIsOpen} activeSection={activeSection} setIsOpen={setMobileNavIsOpen} />

        <MenuButton isToggled={mobileNavIsOpen} setIsToggled={setMobileNavIsOpen} />
      </header>

      <main>
        <section id="hero" ref={sectionRefs.hero}>
          HI IM RAFA
        </section>

        <section id="projects" ref={sectionRefs.projects}>
          PROJECTS
        </section>

        <section id="cv" ref={sectionRefs.cv}>
          CV
        </section>

        <section id="about" ref={sectionRefs.about}>
          ABOUT
        </section>

        <section id="contact" ref={sectionRefs.contact}>
          CONTACT
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
