import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);

  function handleLogoClick() {
    setOpen(!open);
  }
  const { SignOut } = useAuthContext();

  return (
    <div className="Header-container">
      <header>
        <div className="container-logo">
          <img src={logo} alt="logo de tryning" onClick={handleLogoClick} />
        </div>
      </header>
      <div className={`menu ${open ? "active" : ""}`} id="menu">
        <ul className="container-link">
          <li className="link">
            <Link to="/account">MI CUENTA</Link>
          </li>
          <li className="link">
            <Link to="/about-us">NOSOTROS</Link>
          </li>
          <li className="link">
            <Link to="/contact">CONTACTO</Link>
          </li>

          <li className="link trainer">
            <Link to="/become-trainer">VOLVERSE ENTRENADOR</Link>
          </li>
          <li className="link logout" onClick={() => SignOut()}>
            CERRAR SESION
          </li>
        </ul>
      </div>
    </div>
  );
}
