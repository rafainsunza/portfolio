import "./projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";

const Projects = () => {
  const { translation } = useTranslations();
  const projects = ["onderde10", "eredivisie", "ecommercepage", "eitalexander", "infobycountry"];

  return (
    <div className="projects">
      <h1 className="section__title">{translation("projects.title")}</h1>

      <div className="projects__cards">
        {projects.map((project) => (
          <div className="projects__card">
            <div className="projects__card-title">{project}</div>
            <div className="projects__card-preview"></div>
            <div className="projects__card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus adipisci facilis eaque tempore sed!
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
