import { Link } from "react-router-dom";
import "./Header.scss";

export function Header() {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/">landing</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
