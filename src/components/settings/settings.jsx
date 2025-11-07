import "./settings.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "../theme-toggle/theme-toggle";

function Settings() {
  return (
    <div className="settings">
      <button className="settings__button">
        <FontAwesomeIcon icon={faGear} />
      </button>

      <div className="settings__button-container">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Settings;
