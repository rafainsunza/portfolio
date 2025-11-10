import "./App.scss";
import Navbar from "./components/navbar/navbar";
import MenuButton from "./components/menu-button/menu-button";
import Branding from "./components/branding/branding";
import Hero from "./components/hero/hero";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero");

  const sectionRefs = {
    hero: useRef(null),
    projects: useRef(null),
    cv: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    if (!mobileNavIsOpen) return;

    const handleOutsideClick = (e) => {
      if (!navbarRef.current.contains(e.target) && !menuButtonRef.current.contains(e.target)) setMobileNavIsOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick, true);
    return () => document.removeEventListener("mousedown", handleOutsideClick, true);
  }, [mobileNavIsOpen]);

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

        <Navbar isOpen={mobileNavIsOpen} activeSection={activeSection} setIsOpen={setMobileNavIsOpen} ref={navbarRef} />

        <MenuButton isToggled={mobileNavIsOpen} setIsToggled={setMobileNavIsOpen} ref={menuButtonRef} />
      </header>

      <main>
        <section id="hero" ref={sectionRefs.hero}>
          <Hero />
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
};

export default App;
