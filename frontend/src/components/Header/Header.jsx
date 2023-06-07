import "./Header.scss";
import { LinkButton } from "../buttons/Buttons";
import { Search } from "../Search/Search";

export function Header() {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <div className="buttons-container">
          <LinkButton to="/" label="Landing" />
          <LinkButton to="/home" label="Home" />
        </div>
        <div className="search-container">
          <Search placeholder="texto " />
        </div>
        <div className="reg-log-container">
          <LinkButton to="/login" label="Login" />
          <LinkButton to="/register" label="Register" />
        </div>
      </nav>
    </header>
  );
}
