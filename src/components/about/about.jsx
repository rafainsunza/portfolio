import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";
import {
  faBellConcierge,
  faChalkboardTeacher,
  faChampagneGlasses,
  faCode,
  faFolderTree,
  faLaptopCode,
  faMartiniGlassCitrus,
  faUmbrellaBeach,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const { translation } = useTranslations();
  const timeline = translation("about.timeline");
  const half = Math.ceil(timeline.length / 2);
  const itemsA = timeline.slice(0, half);
  const itemsB = timeline.slice(half);

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
  };

  return (
    <div className="about">
      <div className="about__timeline">
        <div className="about__timeline__line">
          <div className="about__timeline__line__start"></div>
          <div className="about__timeline__line__end"></div>
        </div>

        <div className="about__timeline__items part1">
          {itemsA.map((item, index) => (
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
          {itemsB.map((item, index) => (
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
