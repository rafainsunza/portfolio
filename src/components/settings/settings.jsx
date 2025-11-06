import "./settings.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Settings() {
  return (
    <div className="settings">
      <button className="settings__button">
        <FontAwesomeIcon icon={faGear} />
      </button>
    </div>
  );
}

export default Settings;
