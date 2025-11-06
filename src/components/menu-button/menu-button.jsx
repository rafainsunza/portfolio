import "./menu-button.scss";

function MenuButton({ isToggled, setIsToggled }) {
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button className={`menu-button ${isToggled ? "toggled" : ""}`} onClick={handleClick}>
      <span className="menu-button__bar"></span>
      <span className="menu-button__bar"></span>
      <span className="menu-button__bar"></span>
    </button>
  );
}

export default MenuButton;
