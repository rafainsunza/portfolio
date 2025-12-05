import "./projects.scss";
import projectData from "../../data/static/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import WebComponentsIcon from "../web-components-icon/web-components-icon";
import SliderBullets from "../slider-bullets/slider-bullets";
import NavigationButton from "../navigation-button/navigation-button";
import { useEffect, useRef, useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";

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

      if (windowWidth < 880) cardsPerPage = 1;
      else if (windowWidth >= 880) cardsPerPage = 2;

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
      <div className="projects__cards" ref={containerRef}>
        {projectData.map((project) => (
          <div className="projects__card" key={project.name}>
            <button className="projects__card-button">
              <div className="projects__card__preview">
                <div className="projects__card__preview__layover">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <img src={project.screenshot} alt="" />
              </div>
              <h3 className="projects__card__title">{project.name}</h3>

              <p className="projects__card__description">{translation(`projects.cards.${project.id}.description`)}</p>
            </button>
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
