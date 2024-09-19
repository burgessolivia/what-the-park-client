import { NavLink, Link } from "react-router-dom";
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
        <Link className="header__top-logo">WTP</Link>
      </div>
      <div className="header__bottom">
        <Link className="header__bottom-left">Home</Link>
        <Link className="header__bottom-right">About</Link>
      </div>
    </header>
  );
}
