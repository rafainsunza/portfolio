import React from "react";
import "./menu-button.scss";

const MenuButton = React.forwardRef(({ isToggled, setIsToggled }, ref) => {
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      className={`menu-button ${isToggled ? "toggled" : ""}`}
      onClick={handleClick}
      ref={ref}
      aria-haspopup="true"
      aria-controls="page-navigation"
      aria-expanded={isToggled}
    >
      <span className="menu-button__bar"></span>
      <span className="menu-button__bar"></span>
      <span className="menu-button__bar"></span>
    </button>
  );
});

export default MenuButton;
