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
      <section className="container-logo">
        <img src={logo} alt="logo de tryning" onClick={handleLogoClick} />
      </section>
      <section className={`menu ${open ? "active" : ""}`} id="menu">
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
      </section>
    </header>
  );
}
