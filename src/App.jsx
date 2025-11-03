import "./App.scss";

function App() {
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.hasAttribute("data-theme");

    isDarkMode ? htmlElement.removeAttribute("data-theme", "dark") : htmlElement.setAttribute("data-theme", "dark");
  };

  return (
    <>
      <header>
        <nav>
          <a href="#hero">home</a>
          <a href="#projects" className="nav-link">
            See what I've built
          </a>
          <a href="#cv" className="nav-link">
            Peek at my CV
          </a>
          <a href="#about" className="nav-link">
            About me
          </a>
          <a href="#contact" className="nav-link">
            Get in touch
          </a>
        </nav>

        <div className="toggle-container">
          <button className="toggle-button" onClick={() => toggleTheme()}>
            lig dar
          </button>
          <button className="toggle-button">LAN</button>
        </div>
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
