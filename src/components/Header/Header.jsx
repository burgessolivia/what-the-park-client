import { Link } from "react-router-dom";
import "./Header.scss";
import displayIcon from "../../assets/icons/dark-mode.svg";

export default function Header() {
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
          WTP
        </Link>
      </div>
      <div className="header__bottom">
        <Link to={`/home`} className="header__bottom-left">
          Home
        </Link>
        <Link to={`/about`} className="header__bottom-right">
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
          WTP
        </Link>
        <div className="header__tablet-display-about">
          <Link to={`/home`} className="header__tablet-home">
            Home
          </Link>
          <Link to={`/about`} className="header__tablet-about">
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
