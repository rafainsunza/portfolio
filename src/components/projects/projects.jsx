import "./projects.scss";
import projectData from "../../data/static/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import WebComponentsIcon from "../web-components-icon/web-components-icon";
import SliderBullets from "../slider-bullets/slider-bullets";
import NavigationButton from "../navigation-button/navigation-button";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const { translation } = useTranslations();
  const [pageCount, setPageCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const scrollToPage = (index) => {
    const container = containerRef.current;
    const cards = cardsRef.current[index];

    if (container && cards) {
      container.scrollTo({ left: cards.offsetLeft });
    }
  };

  useEffect(() => {
    scrollToPage(currentPage);
  }, [currentPage]);

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

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setCurrentPage(getFirstVisibleCardIndex(containerRef.current, cardsRef.current));
      }, 50);
    };
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
              <div className="projects__card__preview">
                <img src={project.screenshot} alt="" />
              </div>
              <h3 className="projects__card__title">{project.name}</h3>

              <p className="projects__card__description">{translation(`projects.cards.${project.id}.description`)}</p>
            </a>

            <div
              className="projects__card__tech"
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
              className="projects__card__github-link"
              title={translation("projects.view-repo")}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        ))}
      </div>

      <div className="projects__card-navigation">
        <NavigationButton left setCurrentPage={setCurrentPage} disabled={currentPage === 0} />

        <SliderBullets sliderBulletCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <NavigationButton right setCurrentPage={setCurrentPage} disabled={currentPage === pageCount - 1} />
      </div>
    </div>
  );
};

export default Projects;
