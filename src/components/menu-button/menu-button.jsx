import { useState } from "react";
import "./menu-button.scss";

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("open");
  };

  return (
    <button className="menu-button" onClick={handleMenuButtonClick}>
      AS
    </button>
  );
}

export default MenuButton;
