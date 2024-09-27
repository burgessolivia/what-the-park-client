import { Link } from "react-router-dom";
import "./Header.scss";
import displayIcon from "../../assets/icons/dark-mode.svg";
import logo from "../../assets/logos/logo-full.png";
import { useState } from "react";

export default function Header() {
  const [clickedLink, setClickedLink] = useState();

  const handleClick = (navClick) => {
    setClickedLink(navClick);
  };

  return (
    <header className="header">
      <div className="header__top">
        <span className="header__top-display">
          <img
            src={displayIcon}
            alt="dark mode button"
            className="header__top-display-icon"
          />
        </span>
        <Link to={`/home`} className="header__top-logo">
          <img src={logo} alt="logo image" className="header__top-logo-img" />
        </Link>
      </div>
      <div className="header__bottom">
        <Link
          to="/home"
          className={`header__bottom-left ${
            clickedLink === "home" ? "header__button-mobile--clicked" : ""
          }`}
          onClick={() => handleClick("home")}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`header__bottom-right ${
            clickedLink === "about" ? "header__button-mobile--clicked" : ""
          }`}
          onClick={() => handleClick("about")}
        >
          About
        </Link>
      </div>
      <div className="header__tablet">
        <span className="header__tablet-display">
          <img
            src={displayIcon}
            alt="dark mode button"
            className="header__tablet-display-icon"
          />
        </span>
        <Link to={`/home`} className="header__tablet-logo">
          <img
            src={logo}
            alt="logo image"
            className="header__tablet-logo-img"
          />
        </Link>
        <div className="header__tablet-display-about">
          <Link
            to="/home"
            className={`header__tablet-home ${
              clickedLink === "home" ? "header__tablet--clicked" : ""
            }`}
            onClick={() => handleClick("home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`header__tablet-about ${
              clickedLink === "about" ? "header__tablet--clicked" : ""
            }`}
            onClick={() => handleClick("about")}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
