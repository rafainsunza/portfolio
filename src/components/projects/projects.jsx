import "./projects.scss";
import projectData from "../../data/static/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import WebComponentsIcon from "../web-components-icon/web-components-icon";
import SliderBullets from "../slider-bullets/slider-bullets";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const { translation } = useTranslations();
  const [pageCount, setPageCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".projects__card"));
    cardsRef.current = cards;

    const getPageCount = () => {
      const windowWidth = window.innerWidth;
      let cardsPerPage;

      if (windowWidth < 600) cardsPerPage = 1;
      else if (windowWidth >= 600 && windowWidth < 1024) cardsPerPage = 2;
      else cardsPerPage = 3;

      return cards.length - cardsPerPage + 1;
    };

    const getFirstVisibleCardIndex = (container, cards) => {
      const containerRect = container.getBoundingClientRect();

      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();

        if (rect.right > containerRect.left && rect.left < containerRect.right) {
          return i;
        }
      }

      return 0;
    };

    setPageCount(getPageCount());
    setCurrentPage(getFirstVisibleCardIndex(containerRef.current, cardsRef.current));

    const handleScroll = () => setCurrentPage(getFirstVisibleCardIndex(containerRef.current, cardsRef.current));
    const handleResize = () => setPageCount(getPageCount());

    window.addEventListener("resize", handleResize);
    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="projects">
      <h1 className="section__title">{translation("projects.title")}</h1>

      <div className="projects__cards" ref={containerRef}>
        {projectData.map((project) => (
          <div className="projects__card" key={project.name}>
            <a href={project.href} rel="noopener noreferrer" target="_blank" className="projects__card-link">
              <div className="projects__card-preview">
                <img src={project.screenshot} alt="" />
              </div>
              <h3 className="projects__card-title">{project.name}</h3>

              <p className="projects__card-description">{translation(`projects.cards.${project.id}.description`)}</p>
            </a>

            <div
              className="projects__card-tech"
              title={`${translation("projects.tech-used")}  ${project.tech.replace(/\b\w/g, (char) =>
                char.toUpperCase()
              )}`}
            >
              {project.tech === "react" && <FontAwesomeIcon icon={faReact} />}
              {project.tech === "web components" && <WebComponentsIcon />}
            </div>
            <a
              href={project.gitHubHref}
              rel="noopener noreferrer"
              target="_blank"
              className="projects__card-github-link"
              title={translation("projects.view-repo")}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        ))}
      </div>

      <SliderBullets sliderBulletCount={pageCount} currentPage={currentPage} />
    </div>
  );
};

export default Projects;
