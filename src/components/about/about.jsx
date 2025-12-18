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
  faHeadphones,
  faHeart,
  faLaptopCode,
  faMartiniGlassCitrus,
  faMugHot,
  faRoute,
  faUmbrellaBeach,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faGitAlt, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

import CustomIcon from "../custom-icon/custom-icon";
import { useEffect, useRef, useState } from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const About = ({ mostVisitedSection }) => {
  const { translation } = useTranslations();

  const timelineItems = translation("about.timeline.items");
  const half = Math.ceil(timelineItems.length / 2);
  const [items, setItems] = useState({
    itemsA: [],
    itemsB: [],
  });

  const [screenSize, setScreenSize] = useState("");
  const [totalClicks, setTotalClicks] = useState(0);
  const [sessionTime, setSessionTime] = useState(0);
  const sessionStartRef = useRef(Date.now());

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
    music: faHeadphones,
    js: faJs,
    react: faReact,
    sass: faSass,
    editor: faLaptopCode,
    git: faGitAlt,
    vite: faBoltLightning,
    screen: faDisplay,
    mouse: faComputerMouse,
    clock: faClock,
    heart: faHeart,
  };

  const getBabyAge = () => {
    const birth = new Date("2024-03-25");
    const current = new Date();

    let months = (current.getFullYear() - birth.getFullYear()) * 12;
    months += current.getMonth() - birth.getMonth();

    if (current.getDate() < birth.getDate()) {
      months -= 1;
    }

    return months;
  };

  const formatSessionTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    const sortItems = (windowWidth) => {
      let itemsA;
      let itemsB;

      if (windowWidth < 600) {
        itemsA = timelineItems.slice(0, half);
        itemsB = timelineItems.slice(half);
      } else {
        itemsA = timelineItems.filter((_, i) => i % 2 === 0);
        itemsB = timelineItems.filter((_, i) => i % 2 === 1);
      }

      setItems({
        itemsA: itemsA,
        itemsB: itemsB,
      });
    };
    const updateSize = () => {
      setScreenSize(`${window.innerWidth} x ${window.innerHeight}`);
    };

    sortItems(window.innerWidth);
    updateSize();

    const handleResize = () => {
      sortItems(window.innerWidth);
      updateSize();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleDocumentClick = () => {
      setTotalClicks((prev) => prev + 1);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedMilliseconds = Date.now() - sessionStartRef.current;
      setSessionTime(elapsedMilliseconds);
    }, 1000);

    return () => clearInterval(interval);
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
                  {
                    <div className="about__card__value">
                      {content.id === "baby"
                        ? `${getBabyAge()} ${content.value}`
                        : content.id === "screen"
                        ? screenSize
                        : content.id === "mouse"
                        ? totalClicks
                        : content.id === "clock"
                        ? formatSessionTime(sessionTime)
                        : content.id === "heart"
                        ? !mostVisitedSection
                          ? ""
                          : mostVisitedSection === "hero"
                          ? "Home"
                          : translation(`${mostVisitedSection}.title`)
                        : content.value}
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <h4 className="about__timeline__title">{translation("about.timeline.title")}</h4>

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
