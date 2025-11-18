import "./projects.scss";
import projectData from "../../data/static/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";
import WebComponentsIcon from "../web-components-icon/web-components-icon";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const { translation } = useTranslations();

  return (
    <div className="projects">
      <h1 className="section__title">{translation("projects.title")}</h1>

      <div className="projects__cards">
        {projectData.map((project) => (
          <a
            href={project.href}
            rel="noopener noreferrer"
            target="_blank"
            className="projects__card"
            key={project.name}
          >
            <div className="projects__card-preview">
              <img src={project.screenshot} alt="" />
            </div>
            <h3 className="projects__card-title">{project.name}</h3>

            <p className="projects__card-description">{translation(`projects.cards.${project.id}.description`)}</p>
            <div className="projects__card-tech" title={project.tech.replace(/\b\w/g, (char) => char.toUpperCase())}>
              {project.tech === "react" && <FontAwesomeIcon icon={faReact} />}
              {project.tech === "web components" && <WebComponentsIcon />}
              <div className="projects__card-tech__label">{translation("projects.tech-used")}</div>
            </div>
            <a
              href={project.gitHubHref}
              rel="noopener noreferrer"
              target="_blank"
              className="projects__card-github-link"
            >
              <FontAwesomeIcon icon={faGithub} />
              <div className="projects__card-github-link__label">{translation("projects.view-repo")}</div>
            </a>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
