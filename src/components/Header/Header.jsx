import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/tryning.webp";
import { useAuthContext } from "@hooks/useAuthContext";

export function Header() {
  const [open, setOpen] = useState(false);

  function handleLogoClick() {
    setOpen(!open);
  }
  const { SignOut } = useAuthContext();

  return (
    <header className="Header-container">
      <div className="menu-icono" onClick={handleLogoClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <g id="_118_menu-04" data-name="118 menu-04">
            <rect x="4" y="24" width="16" height="2" />
            <rect x="4" y="6" width="24" height="2" />
            <rect x="4" y="15" width="24" height="2" />
          </g>
        </svg>
      </div>
      <section className="container-logo">
        <Link to="/">
          <img src={logo} alt="logo de tryning" />
        </Link>
      </section>
      <section className={`menu ${open ? "active" : ""}`} id="menu">
        <ul className="container-link">
          <Link to="/account" className="link">
            <li>MI CUENTA</li>
          </Link>
          <Link to="/about-us" className="link">
            <li>NOSOTROS</li>
          </Link>

          <Link to="/contact" className="link">
            <li>CONTACTO</li>
          </Link>

          <Link to="/become-trainer" className="link trainer">
            <li>VOLVERSE ENTRENADOR</li>
          </Link>

          <li className="link logout" onClick={() => SignOut()}>
            CERRAR SESION
          </li>
        </ul>
      </section>
    </header>
  );
}
