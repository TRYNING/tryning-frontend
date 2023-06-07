import { Link } from "react-router-dom";
import "./Header.scss";
import { ButtonLink } from "../buttons/Buttons";

export function Header() {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <div className="buttons-container">
          <ButtonLink to="/" label="Landing" />
          <ButtonLink to="/home" label="Home" />
          </div>
          <div className="reg-log-container">
          <ButtonLink to="/login" label="Login" />
          <ButtonLink to="/register" label="Register"/>
        </div>
      </nav>
    </header>
  );
}
