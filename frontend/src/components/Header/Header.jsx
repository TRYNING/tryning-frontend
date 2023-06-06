// import { Link } from "react-router-dom";
import "./Header.scss";

export function Header() {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <ul>
          <li>
            <a href="/">home</a>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
          <a href="/login">login</a>
            {/* <Link to="/login">Login</Link> */}
          </li>
          <li>
          <a href="/landing">landing</a>
            {/* <Link to="/lading">Landing</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

