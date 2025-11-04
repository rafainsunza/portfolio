import "./App.scss";
import Navbar from "./components/navbar/navbar";
import MenuButton from "./components/menu-button/menu-button";

function App() {
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.hasAttribute("data-theme");

    isDarkMode ? htmlElement.removeAttribute("data-theme", "dark") : htmlElement.setAttribute("data-theme", "dark");
  };

  return (
    <>
      <header>
        <Navbar />

        <MenuButton />
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
