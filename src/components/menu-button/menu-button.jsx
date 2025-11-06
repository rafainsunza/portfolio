import { useState } from "react";
import "./menu-button.scss";

function MenuButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleMenuButtonClick = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open");

    isToggled ? setIsToggled(false) : setIsToggled(true);
  };

  return (
    <button className={!isToggled ? "menu-button" : "menu-button toggled"} onClick={handleMenuButtonClick}>
      <span className="menu-button__bar"></span>
      <span className="menu-button__bar"></span>
      <span className="menu-button__bar"></span>
    </button>
  );
}

export default MenuButton;
