import "./branding.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Branding = ({ hideOnDesktop }) => {
  return (
    <div className={`branding ${hideOnDesktop ? "display-none__desktop" : ""}`}>
      <FontAwesomeIcon icon={faLaptopCode} aria-hidden="true" className="branding__icon" />
      <div className="branding__text-container">
        <p className="branding__name">R.H. Insunza Castro</p>
        <p className="branding__role">Frontend Developer</p>
      </div>
    </div>
  );
};

export default Branding;
