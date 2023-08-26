import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/tryning-pink.png";
import { useAuthContext } from "@hooks/useAuthContext";
import { SvgMenu } from "@assets/icons/svgIcons";
import { SvgLupa } from "../../assets/icons/svgIcons";

export function Header() {
  const [open, setOpen] = useState(false);

  function handleLogoClick() {
    setOpen(!open);
  }
  const { SignOut } = useAuthContext();

  return (
    <header className="Header-container">
      <div className="icono-menu" onClick={handleLogoClick}>
        <SvgMenu size={30} />
      </div>
      <section className="container-logo">
        <Link to="/">
          <img src={logo} alt="logo de tryning" />
        </Link>
      </section>
      <div className="icono-lupa" onClick={handleLogoClick}>
        <SvgLupa size={25} />
      </div>

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
