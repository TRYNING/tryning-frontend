import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="Header-container">
      <header>
        <div className="container-logo">
          <img src={logo} alt="logo de tryning" />
        </div>
        <div className="menu">
          <div className="link">
            <Link to="/login" className="button-login">
              Iniciar sesion
            </Link>
          </div>
          <div className="link"></div>
          <div className="link"></div>
          <div className="link"></div>
        </div>
      </header>
    </div>
  );
}
