import "./branding.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Branding = ({ hideOnDesktop }) => {
  const classNames = ["branding"];
  if (hideOnDesktop) classNames.push("display-none__desktop");

  return (
    <div className={classNames.join(" ")}>
      <FontAwesomeIcon icon={faLaptopCode} className="branding__icon" />
      <div className="branding__text-container">
        <p className="branding__name">R.H. Insunza Castro</p>
        <p className="branding__role">Frontend Developer</p>
      </div>
    </div>
  );
};

export default Branding;
