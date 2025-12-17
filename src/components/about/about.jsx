import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";
import {
  faBaby,
  faBellConcierge,
  faBoltLightning,
  faChalkboardTeacher,
  faChampagneGlasses,
  faCode,
  faComputerMouse,
  faDisplay,
  faDumbbell,
  faFolderTree,
  faFutbol,
  faGlobe,
  faLaptopCode,
  faMartiniGlassCitrus,
  faMugHot,
  faUmbrellaBeach,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faGitAlt, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

import CustomIcon from "../custom-icon/custom-icon";
import { useEffect, useState } from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  const { translation } = useTranslations();

  const timeline = translation("about.timeline");
  const half = Math.ceil(timeline.length / 2);
  const [items, setItems] = useState({
    itemsA: [],
    itemsB: [],
  });

  const icons = {
    utensils: faUtensils,
    teacher: faChalkboardTeacher,
    bell: faBellConcierge,
    cocktail: faMartiniGlassCitrus,
    beach: faUmbrellaBeach,
    tie: faUserTie,
    code: faCode,
    laptop: faLaptopCode,
    folder: faFolderTree,
    cheers: faChampagneGlasses,
    baby: faBaby,
    coffee: faMugHot,
    training: faDumbbell,
    football: faFutbol,
    js: faJs,
    react: faReact,
    sass: faSass,
    editor: faLaptopCode,
    git: faGitAlt,
    vite: faBoltLightning,
    browser: faGlobe,
    screen: faDisplay,
    mouse: faComputerMouse,
    clock: faClock,
  };

  useEffect(() => {
    const sortItems = (windowWidth) => {
      let itemsA;
      let itemsB;

      if (windowWidth < 600) {
        itemsA = timeline.slice(0, half);
        itemsB = timeline.slice(half);
      } else {
        itemsA = timeline.filter((_, i) => i % 2 === 0);
        itemsB = timeline.filter((_, i) => i % 2 === 1);
      }

      setItems({
        itemsA: itemsA,
        itemsB: itemsB,
      });
    };

    sortItems(window.innerWidth);

    const handleResize = () => sortItems(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about">
      <div className="about__cards">
        {translation("about.cards").map((card, index) => (
          <div className="about__card" key={index}>
            <h4 className="about__card__title">
              {card.title.split(",").map((part, i) => (
                <span key={part}>
                  {part.trim()}
                  {i === 0 && <br />}
                </span>
              ))}
            </h4>
            {card.content.map((content) => (
              <div className="about__card__content" key={content.id}>
                <div className="about__card__icon">
                  {content.id === "webcomponents" ? (
                    <CustomIcon size={23} icon={"webcomponents"} />
                  ) : content.id === "bjj" ? (
                    <CustomIcon size={25} icon={"bjj"} />
                  ) : (
                    <FontAwesomeIcon icon={icons[content.icon]} />
                  )}
                </div>
                <div className="about__card__label__value__wrapper">
                  <div className="about__card__label">{content.label}</div>
                  {content.value && <div className="about__card__value">{content.value}</div>}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <h4 className="about__timeline__title">From then to now</h4>

      <div className="about__timeline">
        <div className="about__timeline__line">
          <div className="about__timeline__line__start"></div>
          <div className="about__timeline__line__end"></div>
        </div>

        <div className="about__timeline__items part1">
          {items.itemsA.map((item, index) => (
            <div className="about__timeline__item" key={index}>
              <div className="about__timeline__item__text">
                <h4 className="about__timeline__item__title">{item.year}</h4>
                <h5 className="about__timeline__item__subtitle">{item.title}</h5>
                <p className="about__timeline__item__description">{item.description}</p>
              </div>

              <div className="about__timeline__item__icon">
                <FontAwesomeIcon icon={icons[item.icon]} />
                <div className="about__timeline__item__icon__line"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="about__timeline__items part2">
          {items.itemsB.map((item, index) => (
            <div className="about__timeline__item" key={index}>
              <div className="about__timeline__item__text">
                <h4 className="about__timeline__item__title">{item.year}</h4>
                <h5 className="about__timeline__item__subtitle">{item.title}</h5>
                <p className="about__timeline__item__description">{item.description}</p>
              </div>

              <div className="about__timeline__item__icon">
                <FontAwesomeIcon icon={icons[item.icon]} />
                <div className="about__timeline__item__icon__line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
